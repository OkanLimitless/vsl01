import fs from 'fs';
import path from 'path';

const TRACKING_FILE = path.join(process.cwd(), 'tracking.json');

export default function handler(req, res) {
  const { method } = req;

  if (method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    if (!fs.existsSync(TRACKING_FILE)) {
      return res.status(200).json({
        version1: { visits: 0, clicks: 0, ctr: 0 },
        version2: { visits: 0, clicks: 0, ctr: 0 },
        version3: { visits: 0, clicks: 0, ctr: 0 },
      });
    }

    const tracking = JSON.parse(fs.readFileSync(TRACKING_FILE, 'utf8'));
    
    // Calculate CTR for each version
    const stats = Object.entries(tracking).reduce((acc, [version, data]) => {
      const ctr = data.visits > 0 ? ((data.clicks / data.visits) * 100).toFixed(2) : 0;
      acc[version] = { ...data, ctr: parseFloat(ctr) };
      return acc;
    }, {});

    res.status(200).json(stats);
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 