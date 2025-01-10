import Head from 'next/head';
import dynamic from 'next/dynamic';

const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Erection Button</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
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
        `}</style>
      </Head>
      
      <div className="container">
        <h1 className="title">PRESS THIS <span style={{backgroundColor: '#ff0000'}}>"ERECTION BUTTON"</span> TO START ACTING LIKE A PORN ACTOR</h1>
        <p className="sound-reminder">Please make sure your sound is enabled for the best experience</p>

        {/* Video Section */}
        <div id="video-section" className="video-section">
          <div className="video-container">
            <div id="vid_player" className="video-player">
              <img
                id="thumb_player"
                src="https://images.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/656a1302a316f8000993422b/thumbnail.jpg"
                alt="Video Thumbnail"
                className="video-thumbnail"
              />
              <div className="backdrop"></div>
            </div>
          </div>
          
          <a href="https://lp.zobal.site/click" target="_blank" rel="noopener noreferrer" className="cta-button esconder">
            VIEW PACKAGES
          </a>
        </div>

        <ClientSideOnly>
          <footer className="site-footer">
            <div className="footer-content">
              <p className="copyright">&copy; 2024 EP ® - All Rights Reserved</p>
              <div className="footer-links">
                <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a>
                <span className="divider">|</span>
                <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              </div>
              <p className="disclaimer">
                This site is not affiliated with any advertising platform. This product is marketed with the support of Hotmart. 
                The platform does not perform prior editorial control of the products marketed, nor does it evaluate the 
                technicality and experience of those who produce them. The existence of a product and its acquisition through 
                the platform cannot be considered, under any circumstances, as a guarantee of the quality of the content and 
                the result. By acquiring it, the buyer declares to be aware of this information. Hotmart's terms and policies 
                can be consulted here, even before finalizing the purchase.
              </p>
            </div>
          </footer>
        </ClientSideOnly>
      </div>

      <style jsx>{`
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
          background-color: transparent;
        }

        .title {
          font-family: var(--font-secondary);
          font-size: 3.3vw;
          color: #ffffff;
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

        .sound-reminder {
          color: #ffffff;
          margin: 1rem 0;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* Video Container Styles */
        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 2rem auto;
          padding-top: 56.25%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        /* Video Player Elements */
        .video-player {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(5px);
          z-index: 1;
        }

        /* CTA Button Styles */
        .cta-button {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: #00dd00;
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          text-decoration: none;
          font-family: var(--font-tertiary);
          font-weight: bold;
          transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
          z-index: 3;
        }

        .cta-button.active {
          opacity: 1;
          visibility: visible;
          animation: button-pulse 2s infinite ease-in-out;
        }

        .cta-button:hover {
          background: #ff0000;
          transform: translateX(-50%) scale(1.05);
        }

        @keyframes button-pulse {
          0% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 4px 20px rgba(255, 0, 0, 0.5);
          }
          50% {
            transform: translateX(-50%) scale(1.1);
            box-shadow: 0 8px 30px rgba(255, 0, 0, 0.8);
          }
          100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 4px 20px rgba(255, 0, 0, 0.5);
          }
        }

        .site-footer {
          margin-top: 4rem;
          padding: 2rem 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
        }

        .footer-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .footer-links a {
          color: var(--primary-color);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color var(--transition-speed) ease;
        }

        .footer-links a:hover {
          color: var(--accent-color);
        }

        .divider {
          color: rgba(255, 255, 255, 0.3);
        }

        .disclaimer {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
          line-height: 1.5;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .container {
            padding: var(--spacing-md);
          }

          .title {
            font-size: 1.8rem;
            margin-bottom: var(--spacing-md);
          }

          .site-footer {
            padding: 1.5rem;
          }

          .disclaimer {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
