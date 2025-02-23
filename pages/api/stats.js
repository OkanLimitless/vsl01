import redis from '../../lib/redis';
import Cors from 'cors';

// Initialize CORS middleware with dynamic origin handling
const cors = Cors({
  methods: ['GET', 'HEAD'],
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

// Initialize default stats
const defaultStats = {
  version1: { visits: 0, clicks: 0, ctr: 0 },
  version2: { visits: 0, clicks: 0, ctr: 0 },
  version3: { visits: 0, clicks: 0, ctr: 0 }
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

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get page ID from query parameters
    const { pageId } = req.query;

    // Get tracking data from Redis
    const tracking = await redis.get('tracking') || defaultStats;

    // Calculate stats for each version
    const stats = Object.entries(tracking).reduce((acc, [key, data]) => {
      // If pageId is provided, only include stats for that page
      if (pageId && !key.includes(pageId)) {
        return acc;
      }

      // Extract version from the key (remove pageId if present)
      const version = key.split('_')[0];

      // Initialize version if not exists
      if (!acc[version]) {
        acc[version] = { visits: 0, clicks: 0 };
      }

      // Aggregate stats
      acc[version].visits += data.visits || 0;
      acc[version].clicks += data.clicks || 0;

      return acc;
    }, {});

    // Calculate CTR for each version
    const finalStats = Object.entries(stats).reduce((acc, [version, data]) => {
      const visits = data.visits || 0;
      const clicks = data.clicks || 0;
      const ctr = visits > 0 ? ((clicks / visits) * 100).toFixed(2) : '0.00';

      acc[version] = {
        visits,
        clicks,
        ctr: parseFloat(ctr)
      };
      return acc;
    }, {});

    // Merge with default stats to ensure all versions are present
    const response = { ...defaultStats, ...finalStats };

    res.status(200).json(response);
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 