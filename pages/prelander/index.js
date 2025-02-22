import Head from 'next/head';
import { useState, useEffect } from 'react';
import Version1 from '../../components/prelander/Version1';
import Version2 from '../../components/prelander/Version2';
import Version3 from '../../components/prelander/Version3';
import '../../styles/prelander.css';

export default function PreLander() {
  const [timeLeft, setTimeLeft] = useState(420); // 7 minutes in seconds
  const [viewerCount, setViewerCount] = useState(387);
  const [version, setVersion] = useState(null);

  // Select random version on load
  useEffect(() => {
    const versions = ['version1', 'version2', 'version3'];
    const randomVersion = versions[Math.floor(Math.random() * versions.length)];
    setVersion(randomVersion);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Viewer count effect
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(350, Math.min(450, prev + change));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Track events
  const handleTrack = async (action) => {
    if (!version) return;
    
    try {
      const response = await fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action, version }),
      });

      if (!response.ok) {
        throw new Error('Tracking failed');
      }
    } catch (error) {
      console.error('Tracking error:', error);
    }
  };

  // Format time left
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Render selected version
  const renderVersion = () => {
    switch (version) {
      case 'version1':
        return <Version1 onTrack={handleTrack} />;
      case 'version2':
        return <Version2 onTrack={handleTrack} />;
      case 'version3':
        return <Version3 onTrack={handleTrack} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Breaking News: Brazilian Discovery Shocks Medical Community</title>
        <meta name="description" content="Discover the controversial Brazilian secret that's changing relationships across America." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <div className="prelander">
        <div className="top-bar">
          <div className="container">
            <div className="viewer-count">
              <i className="fas fa-users"></i>
              <strong>{viewerCount}</strong> people are reading this
            </div>
            <div className="timer">
              <i className="fas fa-clock"></i>
              Content available for: <strong>{formatTime(timeLeft)}</strong>
            </div>
          </div>
        </div>

        <main className="main-content">
          <div className="container">
            {renderVersion()}
          </div>
        </main>
      </div>

      <style jsx>{`
        .prelander {
          font-family: 'Montserrat', sans-serif;
          background: #1a1a1a;
          color: #fff;
          min-height: 100vh;
          position: relative;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .top-bar {
          background: rgba(255, 78, 3, 0.95);
          padding: 12px 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .top-bar .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .viewer-count, .timer {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .viewer-count i, .timer i {
          font-size: 16px;
        }

        .main-content {
          padding: 100px 0 60px;
        }

        .content-wrapper {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          padding: 40px;
          margin-top: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .headline {
          text-align: center;
          margin-bottom: 40px;
        }

        h1 {
          font-size: clamp(24px, 4vw, 36px);
          line-height: 1.3;
          margin-bottom: 20px;
          color: #ff4e03;
        }

        .subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .lead-text {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.9);
          font-style: italic;
        }

        .key-points {
          margin: 30px 0;
          display: grid;
          gap: 20px;
        }

        .point {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
        }

        .point i {
          color: #ff4e03;
          font-size: 20px;
        }

        .cta-section {
          text-align: center;
          margin-top: 40px;
        }

        .urgency-text {
          color: #ff4e03;
          font-size: 16px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .cta-button {
          background: linear-gradient(45deg, #ff4e03, #ff6a2b);
          color: white;
          text-decoration: none;
          padding: 20px 40px;
          border-radius: 30px;
          font-size: 18px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 78, 3, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 78, 3, 0.4);
        }

        .guarantee {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 30px 20px;
            margin-top: 20px;
          }

          .top-bar {
            font-size: 12px;
            padding: 8px 0;
          }

          .lead-text {
            font-size: 16px;
          }

          .point {
            font-size: 14px;
          }

          .cta-button {
            padding: 15px 30px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
} 