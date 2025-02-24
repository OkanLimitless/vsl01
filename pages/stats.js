import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Stats.module.css';

// Use the same API URL as in prelander
const DEFAULT_API_URL = 'https://vsl01.vercel.app';

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [resetting, setResetting] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const fetchStats = async () => {
    try {
      const pageId = new URLSearchParams(window.location.search).get('pageId');
      const url = pageId 
        ? `/api/stats?pageId=${pageId}`
        : `/api/stats`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }
      const data = await response.json();
      setStats(data);
      setLastUpdated(new Date());
      setError(null);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleReset = async () => {
    if (!showResetConfirm) {
      setShowResetConfirm(true);
      return;
    }

    try {
      setResetting(true);
      const response = await fetch('/api/reset-stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to reset stats');
      }

      await fetchStats();
      setShowResetConfirm(false);
    } catch (error) {
      console.error('Error resetting stats:', error);
      setError(error.message);
    } finally {
      setResetting(false);
    }
  };

  const getBestVersion = () => {
    if (!stats) return null;
    return Object.entries(stats).reduce((best, [version, data]) => {
      if (!best || data.ctr > best.data.ctr) {
        return { version, data };
      }
      return best;
    }, null);
  };

  const getVersionStyle = (version) => {
    const best = getBestVersion();
    return best?.version === version ? styles.best : '';
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <>
      <Head>
        <title>A/B Testing Stats Dashboard</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <div className={styles['stats-page']}>
        <div className={styles.container}>
          <header className={styles['dashboard-header']}>
            <div className={styles['title-section']}>
              <h1>A/B Testing Dashboard</h1>
              <p className={styles.subtitle}>Track and analyze prelander performance</p>
            </div>
            <div className={styles['refresh-section']}>
              {lastUpdated && (
                <p className={styles['last-updated']}>
                  <i className="fas fa-sync-alt"></i>
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </p>
              )}
              <p className={styles['auto-refresh']}>Auto-refreshes every 30 seconds</p>
              <button 
                onClick={handleReset}
                className={`${styles['reset-button']} ${showResetConfirm ? styles.confirm : ''} ${resetting ? styles.resetting : ''}`}
                disabled={resetting}
              >
                {resetting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Resetting...
                  </>
                ) : showResetConfirm ? (
                  <>
                    <i className="fas fa-exclamation-triangle"></i>
                    Click again to confirm
                  </>
                ) : (
                  <>
                    <i className="fas fa-redo-alt"></i>
                    Reset All Stats
                  </>
                )}
              </button>
            </div>
          </header>

          {loading && (
            <div className={styles['loading-state']}>
              <i className="fas fa-spinner fa-spin"></i>
              <p>Loading stats...</p>
            </div>
          )}

          {error && (
            <div className={styles['error-state']}>
              <i className="fas fa-exclamation-circle"></i>
              <p>Error: {error}</p>
            </div>
          )}

          {stats && (
            <>
              <div className={styles['stats-grid']}>
                {Object.entries(stats).map(([version, data]) => (
                  <div key={version} className={`${styles['stats-card']} ${getVersionStyle(version)}`}>
                    <div className={styles['card-header']}>
                      <h2>{version.replace(/([A-Z])/g, ' $1').trim()}</h2>
                      {getVersionStyle(version) === styles.best && (
                        <span className={styles['best-badge']}>
                          <i className="fas fa-crown"></i> Best Performer
                        </span>
                      )}
                    </div>
                    
                    <div className={styles.metrics}>
                      <div className={styles.metric}>
                        <div className={styles['metric-icon']}>
                          <i className="fas fa-eye"></i>
                        </div>
                        <div className={styles['metric-content']}>
                          <span className={styles.label}>Total Visits</span>
                          <span className={styles.value}>{formatNumber(data.visits)}</span>
                        </div>
                      </div>

                      <div className={styles.metric}>
                        <div className={styles['metric-icon']}>
                          <i className="fas fa-mouse-pointer"></i>
                        </div>
                        <div className={styles['metric-content']}>
                          <span className={styles.label}>Total Clicks</span>
                          <span className={styles.value}>{formatNumber(data.clicks)}</span>
                        </div>
                      </div>

                      <div className={`${styles.metric} ${styles.highlight}`}>
                        <div className={styles['metric-icon']}>
                          <i className="fas fa-percentage"></i>
                        </div>
                        <div className={styles['metric-content']}>
                          <span className={styles.label}>Click-Through Rate</span>
                          <span className={styles.value}>{data.ctr}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles['insights-section']}>
                <h2>Performance Insights</h2>
                {getBestVersion() && (
                  <div className={styles['insight-card']}>
                    <div className={styles['insight-icon']}>
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div className={styles['insight-content']}>
                      <h3>Best Performing Version</h3>
                      <p>
                        <strong>{getBestVersion().version}</strong> is leading with a{' '}
                        <strong>{getBestVersion().data.ctr}% CTR</strong>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .stats-page {
          min-height: 100vh;
          background: #1a1a1a;
          color: #fff;
          padding: 40px 0;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        h1 {
          font-size: 32px;
          margin: 0;
          color: #ff4e03;
        }

        .subtitle {
          color: rgba(255,255,255,0.6);
          margin: 8px 0 0;
        }

        .refresh-section {
          text-align: right;
        }

        .last-updated {
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          margin: 0;
        }

        .last-updated i {
          margin-right: 8px;
        }

        .auto-refresh {
          color: rgba(255,255,255,0.4);
          font-size: 12px;
          margin: 4px 0 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stats-card {
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .stats-card.best {
          background: rgba(255,78,3,0.1);
          border-color: rgba(255,78,3,0.3);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-header h2 {
          font-size: 20px;
          margin: 0;
          color: #fff;
        }

        .best-badge {
          background: #ff4e03;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .metrics {
          display: grid;
          gap: 15px;
        }

        .metric {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: rgba(255,255,255,0.03);
          border-radius: 10px;
        }

        .metric-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #ff4e03;
        }

        .metric-content {
          flex: 1;
        }

        .label {
          display: block;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          margin-bottom: 4px;
        }

        .value {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
        }

        .metric.highlight {
          background: rgba(255,78,3,0.1);
        }

        .metric.highlight .value {
          color: #ff4e03;
        }

        .insights-section {
          margin-top: 40px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .insights-section h2 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #ff4e03;
        }

        .insight-card {
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .insight-icon {
          width: 50px;
          height: 50px;
          background: rgba(255,78,3,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #ff4e03;
        }

        .insight-content h3 {
          margin: 0 0 8px;
          font-size: 18px;
          color: #fff;
        }

        .insight-content p {
          margin: 0;
          color: rgba(255,255,255,0.8);
        }

        .loading-state,
        .error-state {
          text-align: center;
          padding: 40px;
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          margin: 20px 0;
        }

        .loading-state i,
        .error-state i {
          font-size: 24px;
          margin-bottom: 10px;
          color: #ff4e03;
        }

        .error-state {
          background: rgba(255,59,59,0.1);
        }

        @media (max-width: 768px) {
          .stats-page {
            padding: 20px 0;
          }

          .dashboard-header {
            flex-direction: column;
            gap: 20px;
          }

          .refresh-section {
            text-align: left;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .insight-card {
            flex-direction: column;
            text-align: center;
          }

          .card-header {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
} 