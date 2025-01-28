import Head from 'next/head';

export default function PreLander() {
  const handleContinue = () => {
    window.location.href = '/lander';
  };

  return (
    <>
      <Head>
        <title>Breakthrough Discovery: Ancient Brazilian Secret Revealed</title>
        <meta name="description" content="Discover the ancient Brazilian secret that's helping thousands of men naturally boost their performance and confidence." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="prelander">
        <div className="content">
          <div className="alert-bar">
            ⚠️ Warning: This page will be removed at midnight tonight
          </div>

          <h1>
            <span className="highlight">EXPOSED:</span> Ancient Brazilian Tribe's Secret Formula Making ED Pills Obsolete
          </h1>

          <div className="discovery-box">
            <div className="badge">LEAKED RESEARCH</div>
            <p>Recent studies show this natural compound is <span className="highlight">312% more effective</span> than traditional solutions</p>
            <div className="arrow-down">↓</div>
          </div>

          <button onClick={handleContinue} className="cta-button">
            See The Breakthrough →
          </button>

          <div className="stats">
            <div className="stat-item">
              <span className="number">13,847</span>
              <span className="label">Men Already Using This</span>
            </div>
            <div className="stat-item">
              <span className="number">98.7%</span>
              <span className="label">Success Rate</span>
            </div>
          </div>
        </div>

        <footer>
          <p>Copyright © 2024 All Rights Reserved</p>
          <div className="links">
            <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .prelander {
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
          background: #1a1a1a;
          color: white;
          display: flex;
          flex-direction: column;
        }

        .content {
          flex: 1;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }

        .alert-bar {
          background: #ff3b3b;
          color: white;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 30px;
          font-weight: 600;
          animation: pulse 2s infinite;
        }

        h1 {
          font-size: 2.2rem;
          line-height: 1.3;
          margin-bottom: 30px;
        }

        .highlight {
          color: #ff3b3b;
        }

        .discovery-box {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid #ff3b3b;
          border-radius: 12px;
          padding: 25px;
          margin: 30px 0;
          position: relative;
        }

        .badge {
          background: #ff3b3b;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .arrow-down {
          font-size: 2rem;
          margin: 20px 0 0;
          animation: bounce 2s infinite;
        }

        .cta-button {
          background: #2ecc71;
          color: white;
          border: none;
          padding: 20px 40px;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          max-width: 400px;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          background: #27ae60;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 30px;
        }

        .stat-item {
          text-align: center;
        }

        .number {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: #2ecc71;
        }

        .label {
          font-size: 0.9rem;
          color: #999;
        }

        footer {
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 0.9rem;
        }

        .links a {
          color: #666;
          text-decoration: none;
        }

        .links a:hover {
          color: #999;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem;
          }

          .content {
            padding: 15px;
          }

          .stats {
            gap: 20px;
          }

          .number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
} 