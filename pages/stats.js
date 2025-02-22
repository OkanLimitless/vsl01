import { useState, useEffect } from 'react';

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="stats-page">
        <div className="container">
          <h1>Loading stats...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="stats-page">
      <div className="container">
        <h1>A/B Testing Dashboard</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleString()}</p>

        <div className="stats-grid">
          {stats && Object.entries(stats).map(([version, data]) => (
            <div key={version} className="stats-card">
              <h2>{version.charAt(0).toUpperCase() + version.slice(1)}</h2>
              <div className="metrics">
                <div className="metric">
                  <span className="label">Visits</span>
                  <span className="value">{data.visits}</span>
                </div>
                <div className="metric">
                  <span className="label">Clicks</span>
                  <span className="value">{data.clicks}</span>
                </div>
                <div className="metric highlight">
                  <span className="label">CTR</span>
                  <span className="value">{data.ctr}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="best-performer">
          {stats && Object.entries(stats).length > 0 && (
            <div className="winner">
              <h3>Best Performing Version</h3>
              {(() => {
                const sorted = Object.entries(stats).sort((a, b) => b[1].ctr - a[1].ctr);
                const [bestVersion, bestData] = sorted[0];
                return (
                  <p>
                    <strong>{bestVersion}</strong> with {bestData.ctr}% CTR
                    ({bestData.clicks} clicks / {bestData.visits} visits)
                  </p>
                );
              })()}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .stats-page {
          min-height: 100vh;
          background: #1a1a1a;
          color: #fff;
          padding: 40px 0;
          font-family: 'Montserrat', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        h1 {
          font-size: 32px;
          margin-bottom: 10px;
          color: #ff4e03;
        }

        .last-updated {
          color: rgba(255,255,255,0.6);
          margin-bottom: 30px;
          font-size: 14px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stats-card {
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .stats-card h2 {
          color: #ff4e03;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .metrics {
          display: grid;
          gap: 15px;
        }

        .metric {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
        }

        .metric.highlight {
          background: rgba(255,78,3,0.1);
          border: 1px solid rgba(255,78,3,0.2);
        }

        .label {
          color: rgba(255,255,255,0.8);
          font-size: 14px;
        }

        .value {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
        }

        .highlight .value {
          color: #ff4e03;
        }

        .best-performer {
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          padding: 25px;
          margin-top: 40px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .winner h3 {
          color: #ff4e03;
          margin-bottom: 15px;
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .stats-page {
            padding: 20px 0;
          }

          h1 {
            font-size: 24px;
          }

          .stats-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
} 