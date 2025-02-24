import redis from '../../lib/redis';
import Cors from 'cors';

// Initialize CORS middleware
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

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Reset tracking data to default values
    await redis.set('tracking', defaultTracking);

    res.status(200).json({ 
      success: true,
      message: 'Stats reset successfully',
      data: defaultTracking
    });
  } catch (error) {
    console.error('Reset error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 