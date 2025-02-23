import redis from '../../lib/redis';
import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
  origin: '*', // Be more restrictive in production
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

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get tracking data from Redis
    const tracking = await redis.get('tracking') || defaultStats;

    // Calculate stats for each version
    const stats = Object.entries(tracking).reduce((acc, [version, data]) => {
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
    const finalStats = { ...defaultStats, ...stats };

    res.status(200).json(finalStats);
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 