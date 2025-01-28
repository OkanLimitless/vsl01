import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function PreLander() {
  const handleContinue = () => {
    window.location.href = '/lander';
  };

  return (
    <>
      <Head>
        <title>The "Evening Routine" Hack for Men's Vitality</title>
        <meta name="description" content="Discover a simple evening routine that naturally boosts male vitality and performance. Watch this free video guide to learn more." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="prelander">
        <main className="main-content">
          <h1>The "Evening Routine" Hack for Men's Vitality:</h1>
          
          <div className="video-container">
            <div className="video-placeholder">
              <img src="/images/sound-icon.png" alt="Click to turn on sound" className="sound-icon" />
              <div className="play-button">▶</div>
            </div>
          </div>

          <button onClick={handleContinue} className="cta-button pulse">
            Watch FREE Video Guide Now
          </button>

          <div className="benefits">
            <p>See how just one small adjustment to your nightly routine can reignite confidence, energy, and performance within days...</p>
            
            <p>Men of all ages following this simple, natural "evening ritual" are amazing their partners and boosting their self-assurance like never before.</p>
            
            <p>Scientists suggest this works so effectively because it targets what's now believed to be the underlying "root cause" of diminished male vitality— something no supplement or workout regimen alone can fix.</p>
          </div>

          <p className="action-text">
            Tap the button below to learn more about this breakthrough and discover how you can start using this method tonight, with ease.
          </p>

          <button onClick={handleContinue} className="cta-button pulse">
            Watch FREE Video Guide Now
          </button>
        </main>

        <footer>
          <div className="disclaimer">
            <p>This site is not a part of Google, Inc. or Google.com, nor is it sponsored or endorsed by Google.</p>
            <p>YouTube is a trademark of Google Inc.</p>
          </div>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
          <p className="copyright">© 2024 All rights reserved</p>
        </footer>
      </div>

      <style jsx>{`
        .prelander {
          font-family: 'Poppins', sans-serif;
          background: #1a1a1a;
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .main-content {
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
          padding: 40px 20px;
        }

        h1 {
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 30px;
          line-height: 1.3;
        }

        .video-container {
          width: 100%;
          max-width: 640px;
          margin: 0 auto 30px;
          aspect-ratio: 16/9;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .video-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111;
          position: relative;
          cursor: pointer;
        }

        .sound-icon {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 120px;
          height: auto;
        }

        .play-button {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: white;
          transition: all 0.3s ease;
        }

        .video-placeholder:hover .play-button {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .cta-button {
          background: #00a651;
          color: white;
          border: none;
          padding: 20px 40px;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 20px 0;
          width: 100%;
          max-width: 400px;
        }

        .cta-button:hover {
          background: #008c44;
          transform: translateY(-2px);
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 166, 81, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(0, 166, 81, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 166, 81, 0);
          }
        }

        .benefits {
          text-align: left;
          margin: 40px auto;
          max-width: 600px;
        }

        .benefits p {
          margin-bottom: 20px;
          line-height: 1.6;
          color: #e0e0e0;
        }

        .action-text {
          color: #e0e0e0;
          margin: 30px 0;
          line-height: 1.6;
        }

        footer {
          margin-top: auto;
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 0.9rem;
        }

        .disclaimer {
          margin-bottom: 20px;
          font-size: 0.8rem;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #666;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: #999;
        }

        .copyright {
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem;
          }

          .main-content {
            padding: 20px 15px;
          }

          .cta-button {
            padding: 15px 30px;
            font-size: 1.1rem;
          }

          .sound-icon {
            width: 80px;
          }

          .play-button {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
} 