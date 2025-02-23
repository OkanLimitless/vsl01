import redis from '../../lib/redis';
import Cors from 'cors';

// Initialize CORS middleware with dynamic origin handling
const cors = Cors({
  methods: ['POST', 'HEAD'],
  origin: (origin, callback) => {
    // Allow requests from Cloudflare Pages domains
    if (!origin || origin.endsWith('.pages.dev') || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
});

// Helper method to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Initialize default tracking data
const defaultTracking = {
  version1: { visits: 0, clicks: 0 },
  version2: { visits: 0, clicks: 0 },
  version3: { visits: 0, clicks: 0 }
};

export default async function handler(req, res) {
  // Run the CORS middleware
  await runMiddleware(req, res, cors);

  // Set additional headers for better CORS handling
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { action, version, pageId } = req.body; // Add pageId to track different deployments

    if (!action || !version) {
      return res.status(400).json({ message: 'Missing required parameters' });
    }

    // Validate action type
    if (!['visit', 'click'].includes(action)) {
      return res.status(400).json({ message: 'Invalid action type' });
    }

    // Get current tracking data
    let tracking = await redis.get('tracking') || defaultTracking;

    // Create a unique key for this version and page
    const trackingKey = pageId ? `${version}_${pageId}` : version;

    // Ensure version exists in tracking data
    if (!tracking[trackingKey]) {
      tracking[trackingKey] = { visits: 0, clicks: 0 };
    }

    // Update tracking data
    if (action === 'visit') {
      tracking[trackingKey].visits = (tracking[trackingKey].visits || 0) + 1;
    } else if (action === 'click') {
      tracking[trackingKey].clicks = (tracking[trackingKey].clicks || 0) + 1;
    }

    // Save updated tracking data
    await redis.set('tracking', tracking);

    res.status(200).json({ 
      success: true,
      data: tracking[trackingKey]
    });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 