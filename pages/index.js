import Head from 'next/head';
import dynamic from 'next/dynamic';
import VideoPlayer from '../components/VideoPlayer';

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
      
      <div className="notification-bar">
        <p>⚠️ Last Day To Watch This Presentation: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      <div className="container">
        {/* Research Group Header */}
        <div className="research-header">
          <img 
            src="https://media.atomicatpages.net/u/xvMWv9TeqRbfe0S75EQu53KtBf33/Pictures/ywLrJX6407750.webp" 
            alt="Research Group"
            className="doctor-image"
          />
          <span>The Male Performance Research Group</span>
        </div>

        {/* Main Title */}
        <div className="main-title">
          <h1>
            Is a Hidden <span className="highlight">"Performance Blocker"</span> Holding You Back?
          </h1>
        </div>

        {/* Video Section */}
        <VideoPlayer />
        
        {/* Alert Banner under video */}
        <div className="video-alert">
          <span className="alert-text">MEN'S HEALTH ALERT!</span> In the next 3 minutes, <span className="alert-emphasis">discover what could change your life forever!</span>
        </div>

        {/* Featured In Section */}
        <div className="featured-section">
          <div className="featured-header">
            <p><span>AS FEATURED IN</span></p>
          </div>
          <div className="logo-grid">
            <img 
              src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2Fce40fa89617d681dd22e8afa71dffe72826a181d%2Fft3.png?auto=compress,format&fit=scale&w=101&h=80" 
              alt="Featured Logo 1"
              loading="lazy"
            />
            <img 
              src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2F34ab16f31881281575ffdce9fe9d104b05d00c4a%2Fft4.png?auto=compress,format&fit=scale&w=84&h=84" 
              alt="Featured Logo 2"
              loading="lazy"
            />
            <img 
              src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2F0f761c6519a78db8280d626afad111d6a0c595c8%2Fft2.png?auto=compress,format&fit=scale&w=89&h=85" 
              alt="Featured Logo 3"
              loading="lazy"
            />
            <img 
              src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2Fc03d3b4b3c5bfc6ca2e350f9e465fb8842d94462%2Fft1.png?auto=compress,format&fit=scale&w=115&h=90" 
              alt="Featured Logo 4"
              loading="lazy"
            />
          </div>
        </div>

        {/* Scientific References Section */}
        <div className="references-section">
          <div className="references-header">
            <p><span>Scientific References</span></p>
          </div>
          <div className="references-grid">
            <img 
              src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2F439bb6267e5605b4e68886f835f0abb3ac073514%2Fref_2.png?auto=compress,format&fit=scale&w=308&h=52" 
              alt="Scientific Reference 1"
              loading="lazy"
            />
            <img 
              src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2Fce9ee87f492e279f28512c69c92705d30cebf37b%2FJournal-sexual-logo-removebg-preview.png?auto=compress,format&fit=scale&w=379&h=76" 
              alt="Scientific Reference 2"
              loading="lazy"
            />
            <img 
              src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2F617e8eb8d2ab9fbd29f51df8e43eb1b04761392f%2Fpasted%20image%200%20%282%29.png?auto=compress,format&fit=scale&w=243&h=81" 
              alt="Scientific Reference 3"
              loading="lazy"
            />
            <img 
              src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2F42e00510186f96a3f459bd6e498e64d349ecd53b%2FMIT-Logo.png?auto=compress,format&fit=scale&w=222&h=125" 
              alt="Scientific Reference 4"
              loading="lazy"
            />
            <img 
              src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2Fdb446f6354d97436079a6a9233aff4ebbe35ef0d%2Fref_1.png?auto=compress,format&fit=scale&w=187&h=64" 
              alt="Scientific Reference 5"
              loading="lazy"
            />
            <img 
              src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2Fd53981d166bcb27485e51a589ddf60006c1f8a89%2Fref_3.png?auto=compress,format&fit=scale&w=264&h=73" 
              alt="Scientific Reference 6"
              loading="lazy"
            />
          </div>
        </div>

        <ClientSideOnly>
          <footer className="site-footer">
            <div className="footer-content">
              <p className="copyright">&copy; 2025 EP ® - All Rights Reserved</p>
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
        .notification-bar {
          width: 100%;
          background-color: #ff4444;
          color: white;
          padding: 12px;
          text-align: center;
          font-size: 0.9rem;
          font-weight: bold;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .notification-bar p {
          margin: 0;
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .title span {
          padding: 0 4px;
        }


        /* Video Container Styles */
        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 2rem auto;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          background: rgba(255,0,0,0.1); /* Debug background */
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

        /* Featured Section Styles */
        .featured-section {
          margin: 4rem auto;
          max-width: 1200px;
          padding: 0 1rem;
        }

        .featured-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .featured-header span {
          font-size: 1.5rem;
          font-weight: bold;
          color: #ffffff;
          text-transform: uppercase;
        }

        .logo-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          align-items: center;
          justify-content: center;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .logo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .logo-grid {
            grid-template-columns: 1fr;
          }
        }

        .logo-grid img {
          width: 100%;
          height: auto;
          max-width: 200px;
          margin: 0 auto;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .logo-grid img:hover {
          filter: grayscale(0%);
        }

        /* References Section Styles */
        .references-section {
          margin: 4rem auto;
          max-width: 1200px;
          padding: 2rem;
          background: white;
          border-radius: var(--border-radius);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .references-header {
          text-align: center;
          margin-bottom: 2rem;
          padding: 1rem;
          background: black;
          display: inline-block;
          border-radius: var(--border-radius);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .references-header span {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0.5rem 1rem;
        }

        .references-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: center;
          justify-content: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .references-grid img {
          width: 100%;
          height: auto;
          max-width: 300px;
          margin: 0 auto;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .references-grid img:hover {
          filter: grayscale(0%);
        }

        @media (max-width: 768px) {
          .references-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .references-grid {
            grid-template-columns: 1fr;
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

        .research-header {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
        }

        .doctor-image {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .research-header span {
          color: #333;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .main-title {
          background: white;
          padding: 2rem;
          text-align: center;
          width: 100%;
        }

        .main-title h1 {
          font-size: 2.5rem;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.3;
        }

        .highlight {
          color: #ff6b00;
        }

        .video-alert {
          background: #000;
          color: white;
          padding: 1rem;
          margin: 1rem auto;
          max-width: 800px;
          border-radius: 8px;
          text-align: center;
          font-size: 1.1rem;
        }

        .alert-text {
          color: #ff6b00;
          font-weight: bold;
        }

        .alert-emphasis {
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .main-title h1 {
            font-size: 1.8rem;
          }

          .research-header {
            padding: 0.8rem 1rem;
          }

          .doctor-image {
            width: 32px;
            height: 32px;
          }

          .research-header span {
            font-size: 0.9rem;
          }

          .video-alert {
            font-size: 0.9rem;
            padding: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
