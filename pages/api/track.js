import redis from '../../lib/redis';

// Initialize default tracking data
const defaultTracking = {
  version1: { visits: 0, clicks: 0 },
  version2: { visits: 0, clicks: 0 },
  version3: { visits: 0, clicks: 0 }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { action, version } = req.body;

    if (!action || !version) {
      return res.status(400).json({ message: 'Missing required parameters' });
    }

    // Validate action type
    if (!['visit', 'click'].includes(action)) {
      return res.status(400).json({ message: 'Invalid action type' });
    }

    // Get current tracking data
    let tracking = await redis.get('tracking') || defaultTracking;

    // Ensure version exists in tracking data
    if (!tracking[version]) {
      tracking[version] = { visits: 0, clicks: 0 };
    }

    // Update tracking data
    if (action === 'visit') {
      tracking[version].visits = (tracking[version].visits || 0) + 1;
    } else if (action === 'click') {
      tracking[version].clicks = (tracking[version].clicks || 0) + 1;
    }

    // Save updated tracking data
    await redis.set('tracking', tracking);

    res.status(200).json({ 
      success: true,
      data: tracking[version]
    });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 