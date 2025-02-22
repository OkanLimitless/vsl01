import fs from 'fs';
import path from 'path';

const TRACKING_FILE = path.join(process.cwd(), 'tracking.json');

// Initialize tracking file if it doesn't exist
if (!fs.existsSync(TRACKING_FILE)) {
  fs.writeFileSync(TRACKING_FILE, JSON.stringify({
    version1: { visits: 0, clicks: 0 },
    version2: { visits: 0, clicks: 0 },
    version3: { visits: 0, clicks: 0 },
  }));
}

export default function handler(req, res) {
  const { method, body } = req;

  if (method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { action, version } = body;

  if (!action || !version) {
    return res.status(400).json({ message: 'Missing required parameters' });
  }

  try {
    const tracking = JSON.parse(fs.readFileSync(TRACKING_FILE, 'utf8'));
    
    if (!tracking[version]) {
      tracking[version] = { visits: 0, clicks: 0 };
    }

    if (action === 'visit') {
      tracking[version].visits++;
    } else if (action === 'click') {
      tracking[version].clicks++;
    }

    fs.writeFileSync(TRACKING_FILE, JSON.stringify(tracking, null, 2));

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 