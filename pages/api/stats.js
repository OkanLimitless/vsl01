import fs from 'fs';
import path from 'path';

const TRACKING_FILE = path.join(process.cwd(), 'tracking.json');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Initialize default stats
    const defaultStats = {
      version1: { visits: 0, clicks: 0, ctr: 0 },
      version2: { visits: 0, clicks: 0, ctr: 0 },
      version3: { visits: 0, clicks: 0, ctr: 0 }
    };

    // Check if tracking file exists
    if (!fs.existsSync(TRACKING_FILE)) {
      // Create tracking file with default data if it doesn't exist
      fs.writeFileSync(TRACKING_FILE, JSON.stringify(defaultStats, null, 2));
      return res.status(200).json(defaultStats);
    }

    // Read and parse tracking data
    const fileContent = fs.readFileSync(TRACKING_FILE, 'utf8');
    const tracking = JSON.parse(fileContent);

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