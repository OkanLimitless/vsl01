import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function TestPage() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Erection Button</title>
      </Head>
      
      <h1 className="title">PRESS THIS "ERECTION BUTTON" TO START ACTING LIKE A PORN ACTOR</h1>
      
      <div className="video-container">
        <div id="vid_677444f834e21f48aa3179b8">
          <div id="vid_677444f834e21f48aa3179b8">
            <img 
              id="thumb_677444f834e21f48aa3179b8" 
              src="https://images.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/677444f834e21f48aa3179b8/thumbnail.jpg" 
              alt="Video Thumbnail" 
            />
            <div id="backdrop_677444f834e21f48aa3179b8" className="backdrop"></div>
            <div 
              className="play-button"
              onClick={() => {
                const script = document.createElement('script');
                script.src = "https://scripts.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/677444f834e21f48aa3179b8/player.js";
                script.async = true;
                document.head.appendChild(script);
              }}
            >
              ▶
            </div>
          </div>
          <a 
            href="https://www.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`cta-button ${showCTA ? 'active' : ''}`}
          >
            VIEW PACKAGES
          </a>
        </div>
      </div>

      <style jsx>{`
        :root {
          --primary-color: #ff4757;
          --secondary-color: #2ed573;
          --accent-color: #ffa502;
          --bg-color: #1e1e1e;
          --text-color: #ffffff;
          --font-primary: 'Roboto', sans-serif;
          --font-secondary: 'Oswald', sans-serif;
          --font-tertiary: 'Montserrat', sans-serif;
          --spacing-sm: 1rem;
          --spacing-md: 2rem;
          --spacing-lg: 3rem;
          --border-radius: 12px;
          --transition-speed: 0.3s;
        }

        html, body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
          font-family: var(--font-primary);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--spacing-lg);
          text-align: center;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-family: var(--font-secondary);
          font-size: clamp(1.8rem, 6vw, 3rem);
          color: var(--primary-color);
          margin-bottom: var(--spacing-lg);
          text-transform: uppercase;
          padding: 0 1rem;
          line-height: 1.3;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          animation: text-glow 2s ease-in-out infinite alternate;
        }

        @keyframes text-glow {
          0% {
            text-shadow: 0 0 5px var(--primary-color);
          }
          100% {
            text-shadow: 0 0 20px var(--primary-color);
          }
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: var(--spacing-md) auto;
          padding: 56.25% 0 0 0;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: 0 0 20px rgba(255, 71, 87, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: box-shadow var(--transition-speed) ease;
        }

        .video-container:hover {
          box-shadow: 0 0 30px rgba(255, 71, 87, 0.6);
        }

        .video-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-speed) ease;
        }

        .video-container:hover img {
          transform: scale(1.02);
        }

        .backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(5px);
          background: rgba(0, 0, 0, 0.3);
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2.5rem;
          color: white;
          cursor: pointer;
          background: var(--primary-color);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-speed) ease;
          opacity: 0.9;
          box-shadow: 0 0 20px rgba(255, 71, 87, 0.6);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 1;
          background: var(--accent-color);
          box-shadow: 0 0 30px rgba(255, 165, 2, 0.8);
        }

        .cta-button {
          display: none;
          position: absolute;
          bottom: var(--spacing-md);
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
          color: white;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--border-radius);
          text-decoration: none;
          font-family: var(--font-tertiary);
          font-weight: bold;
          transition: all var(--transition-speed) ease;
          opacity: 0;
          box-shadow: 0 4px 15px rgba(255, 71, 87, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cta-button.active {
          display: block;
          opacity: 1;
          animation: button-pulse 1.5s infinite;
        }

        .cta-button:hover {
          background: linear-gradient(45deg, var(--accent-color), var(--secondary-color));
          transform: translateX(-50%) scale(1.05);
          box-shadow: 0 6px 20px rgba(46, 213, 115, 0.6);
        }

        @keyframes button-pulse {
          0% {
            transform: translateX(-50%) scale(1);
          }
          50% {
            transform: translateX(-50%) scale(1.05);
          }
          100% {
            transform: translateX(-50%) scale(1);
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: var(--spacing-md);
          }

          .title {
            font-size: 1.8rem;
            margin-bottom: var(--spacing-md);
          }

          .video-container {
            margin: var(--spacing-sm) auto;
          }

          .play-button {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }

          .cta-button {
            font-size: 0.9rem;
            padding: 0.75rem 1.5rem;
            bottom: var(--spacing-sm);
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.5rem;
          }

          .play-button {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .cta-button {
            font-size: 0.8rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
