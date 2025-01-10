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
        <img 
          src="https://images.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/677444f834e21f48aa3179b8/thumbnail.jpg" 
          alt="Video Thumbnail" 
          className="video-thumbnail"
        />
        <div className="backdrop"></div>
        <div className="play-button">▶</div>
        
        {showCTA && (
          <a 
            href="https://www.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            VIEW PACKAGES
          </a>
        )}
      </div>

      <style jsx>{`
        :root {
          --primary-color: #00dd00;
          --secondary-color: #ff0000;
          --font-primary: 'Roboto', sans-serif;
          --font-secondary: 'Oswald', sans-serif;
          --font-tertiary: 'Montserrat', sans-serif;
          --spacing-sm: 1rem;
          --spacing-md: 2rem;
          --spacing-lg: 3rem;
          --border-radius: 12px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--spacing-lg);
          text-align: center;
        }

        .title {
          font-family: var(--font-secondary);
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          color: var(--primary-color);
          margin-bottom: var(--spacing-lg);
          text-transform: uppercase;
          padding: 0 1rem;
          line-height: 1.2;
        }

        .video-container {
          position: relative;
          width: 95%;
          max-width: 800px;
          margin: 0 auto;
          padding-top: 56.25%;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .video-thumbnail {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(5px);
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(1.5rem, 5vw, 2rem);
          color: white;
          cursor: pointer;
          background: var(--primary-color);
          width: clamp(60px, 15vw, 80px);
          height: clamp(60px, 15vw, 80px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0.9;
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 1;
        }

        .cta-button {
          position: absolute;
          bottom: var(--spacing-md);
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-color);
          color: white;
          padding: clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
          border-radius: var(--border-radius);
          text-decoration: none;
          font-family: var(--font-tertiary);
          font-weight: bold;
          font-size: clamp(0.9rem, 3vw, 1rem);
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .cta-button:hover {
          background: var(--secondary-color);
          transform: translateX(-50%) scale(1.05);
        }

        @media (max-width: 768px) {
          .title {
            font-size: 1.5rem;
          }

          .video-container {
            margin: var(--spacing-sm) auto;
          }

          .cta-button {
            font-size: 0.9rem;
            padding: 0.75rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
