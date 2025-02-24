import redis from '../../lib/redis';
import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['POST', 'OPTIONS'],
  origin: '*', // Allow all origins for now
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
  try {
    // Run the CORS middleware
    await runMiddleware(req, res, cors);

    // Handle preflight request
    if (req.method === 'OPTIONS') {
      return res.status(200).json({ success: true });
    }

    // Only allow POST method
    if (req.method !== 'POST') {
      return res.status(405).json({ 
        success: false,
        message: 'Method not allowed. Use POST instead.'
      });
    }

    // Reset tracking data to default values
    await redis.set('tracking', defaultTracking);

    // Return success response
    return res.status(200).json({ 
      success: true,
      message: 'Stats reset successfully',
      data: defaultTracking
    });
  } catch (error) {
    console.error('Reset error:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Internal server error',
      error: error.message 
    });
  }
} 