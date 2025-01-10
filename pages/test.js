import { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const ClientSideOnly = dynamic(() => Promise.resolve(({ children }) => children), {
  ssr: false,
});

export default function TestPage() {
  const [showCTA, setShowCTA] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      // Load video player script
      const script = document.createElement('script');
      script.src = 'https://scripts.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/677444f834e21f48aa3179b8/player.js';
      script.async = true;
      document.head.appendChild(script);

      // Load tracking script
      const trackScript = document.createElement('script');
      trackScript.src = 'https://lp.zobal.site/track.js?rtkcmpid=6708023913744d9bc2e1cd15';
      trackScript.async = true;
      document.head.appendChild(trackScript);

      // CTA timer
      const timer = setTimeout(() => {
        setShowCTA(true);
      }, 30000); // 30 seconds

      return () => {
        clearTimeout(timer);
        document.head.removeChild(script);
        document.head.removeChild(trackScript);
      };
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Erection Button</title>
      </Head>
      
      <h1 className="title">PRESS THIS <span style={{backgroundColor: '#ff0000'}}>"ERECTION BUTTON"</span> TO START ACTING LIKE A PORN ACTOR</h1>
      <p className="sound-reminder">Please make sure your sound is enabled for the best experience</p>
      
      <ClientSideOnly>
        <div className="video-container">
          <div id="vid_677444f834e21f48aa3179b8"></div>
        </div>
        
        {isClient && showCTA && (
          <a href="#" className="cta-button active">
            VIEW PACKAGES
          </a>
        )}
      </ClientSideOnly>

      <style jsx>{`
        :root {
          --primary-color: #ff0000;
          --secondary-color: #2ed573;
          --accent-color: #ffa502;
          --bg-color: #000000;
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
          width: 100%;
          background-color: var(--bg-color);
          color: var(--text-color);
          font-family: var(--font-primary);
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255,0,0,0.1) 0%, rgba(0,0,0,1) 70%);
          z-index: 1;
          pointer-events: none;
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
          background-color: var(--bg-color);
        }

        .title {
          font-family: var(--font-secondary);
          font-size: 3.3vw;
          color: var(--text-color);
          margin-bottom: var(--spacing-lg);
          text-transform: uppercase;
          padding: 2vh 1rem;
          line-height: 1.3;
          font-weight: 800;
          position: relative;
          z-index: 2;
        }

        .title span {
          padding: 0 4px;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: var(--spacing-md) auto 0;
        }


        .cta-button {
          display: none;
          position: relative;
          margin: var(--spacing-md) auto 0;
          left: auto;
          transform: none;
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
          font-size: 1.2rem;
        }

        .sound-reminder {
          color: #ffffff;
          margin: 1rem 0;
          font-size: 0.9rem;
          opacity: 0.8;
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
        footer {
          text-align: center;
          font-size: 14px;
          color: #414141;
          padding: 20px;
        }

        footer a {
          padding: 0;
          color: #414141;
          text-decoration: underline;
        }

        footer a:hover {
          color: #000000;
        }

        @media (max-width:1200px) {
          footer {
            font-size: 13px;
          }
        }

        @media (max-width:640px) {
          footer {
            font-size: 12px;
            padding: 15px;
          }
        }
      `}</style>
      
      <div id="division-1657814825221" className="hDLYWH5953135">
        <div className="footer-1657814831958Q4sQ3C">

          <footer>
            <p><strong>Copyright 2024 – EP ®</strong></p>
            <p style="margin-top:4px;">All rights reserved</p>
            <div style="display:flex;align-items:center;justify-content:center;margin-top:24px;">
              <a id="t" style="margin-right:12px" href="https://zobal.site/vsls01/vbth3191/index.html?subid=v2_ee23f5b0-45e7-4e27-a038-209fb03d31cc_e58ce7ce-0722-45dc-91a3-9434adff0f95_677444f834e21f48aa3179b8_38f043cb-1c20-4611-8243-b532566619a8_3085_t-12#" target="_blank">
                Terms of use
              </a> <span style="margin-right:12px">·</span>
              <a id="p" href="https://zobal.site/vsls01/vbth3191/index.html?subid=v2_ee23f5b0-45e7-4e27-a038-209fb03d31cc_e58ce7ce-0722-45dc-91a3-9434adff0f95_677444f834e21f48aa3179b8_38f043cb-1c20-4611-8243-b532566619a8_3085_t-12#" target="_blank">
                Privacy
              </a>
            </div>
            <p style="margin-top:24px;">
              This site is not affiliated with any advertising platform. This product is marketed with the support of
              Hotmart. The platform does not perform prior editorial control of the products marketed, nor does it
              evaluate the technicality and experience of those who produce them. The existence of a product and its
              acquisition through the platform cannot be considered, under any circumstances, as a guarantee of the
              quality of the content and the result. By acquiring it, the buyer declares to be aware of this information.
              Hotmart's terms and policies can be consulted here, even before finalizing the purchase.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
