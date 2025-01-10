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
