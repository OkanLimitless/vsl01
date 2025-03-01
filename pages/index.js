import Head from 'next/head';
import dynamic from 'next/dynamic';
import VideoPlayer from '../components/VideoPlayer';
import { useState, useEffect } from 'react';

const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(null);

  useEffect(() => {
    // Buy notifications logic
    const buyers = [
      { name: 'Michael R.', location: 'Los Angeles, CA' },
      { name: 'James S.', location: 'Houston, TX' },
      { name: 'William D.', location: 'Chicago, IL' },
      { name: 'Robert K.', location: 'Miami, FL' },
      { name: 'Thomas B.', location: 'Phoenix, AZ' }
    ];

    const showRandomPurchase = () => {
      const buyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentBuyer(buyer);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    };

    // Show first notification after 15-30 seconds
    const initialNotification = setTimeout(() => {
      showRandomPurchase();
      // Then show subsequent notifications every 40-90 seconds
      setInterval(showRandomPurchase, 40000 + Math.random() * 50000);
    }, 15000 + Math.random() * 15000);

    return () => {
      clearTimeout(initialNotification);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Discovery</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://getalphabites.fun/video-fb" />
        <meta property="og:title" content="Discovery" />
        <meta property="og:description" content="Watch Now" />
        <meta property="og:image" content="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/pWoEyG4191889.png" />
        <link rel="preload" href="https://scripts.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c33f335c0ec5383526aee6/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c33f335c0ec5383526aee6/thumbnail.jpg" as="image" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Buy Notification Popup */}
      {showNotification && currentBuyer && (
        <div className="social-proof-popup show">
          <div className="popup-content">
            <p><strong>{currentBuyer.name}</strong> from <span>{currentBuyer.location}</span></p>
            <p>Just purchased</p>
            <small>a moment ago</small>
          </div>
        </div>
      )}

      {/* Main Headline */}
      <div className="headline-section">
        <h1>
          DO THIS <span className="blue-highlight">"BLUE SALT HACK"</span> TO GET UP WHENEVER YOU WANT
        </h1>
      </div>

      {/* Video Section */}
      <div className="video-container">
        <VideoPlayer />
      </div>

      {/* Product Options Section - Hidden on initial load, shown after video */}
      <div className="product-options-section hidden-initially">
        <div className="instruction-text">
          <h3>
            Click on the green button to be directed to choose the bottle quantity
          </h3>
        </div>

        <div className="product-options">
          <div className="product-option">
            <div className="product-container">
              <p className="product-title">BEST VALUE - 6 BOTTLES</p>
              <div className="product-image">
                <img src="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/oHyrlA2811229.png" alt="6 bottles" />
              </div>
              <h3 className="product-price">$49/ Bottle</h3>
            </div>
          </div>

          <div className="product-option">
            <div className="product-container">
              <p className="product-title">GOOD VALUE - 3 BOTTLES</p>
              <div className="product-image">
                <img src="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/kCErml4113188.png" alt="3 bottles" />
              </div>
              <h3 className="product-price">$69/ Bottle</h3>
            </div>
          </div>

          <div className="product-option">
            <div className="product-container">
              <p className="product-title">BASIC - 2 BOTTLES</p>
              <div className="product-image">
                <img src="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/HBzclW1579379.png" alt="2 bottles" />
              </div>
              <h3 className="product-price">$79/ Bottle</h3>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-button-container">
          <a 
            href="https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571" 
            target="_blank" 
            className="cta-button zooming"
            rel="noopener noreferrer"
          >
            CLICK HERE TO BUY
          </a>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="guarantee-section hidden-initially">
        <div className="guarantee-image">
          <img src="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/mXREBX9929515.webp" alt="Money Back Guarantee" />
        </div>
        <div className="guarantee-text">
          <p>
            Still not sure? Remember, Alpha Bites comes with a 100% Money-Back Guarantee for a full 180 days! That means if you don't get the results we promise or you change your mind for any reason at all, just call or email our support team within the next 6 months and quickly get every penny back. What do you have to lose? Your success is virtually guaranteed!
          </p>
        </div>
      </div>

      <ClientSideOnly>
        <footer className="site-footer">
          <div className="footer-content">
            <p className="copyright">&copy; 2025 Alpha Bites ® - All Rights Reserved</p>
            <div className="footer-links">
              <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a>
              <span className="divider">|</span>
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </ClientSideOnly>

      <style jsx>{`
        /* Global Styles */
        :global(html) {
          scroll-behavior: smooth;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          overflow-x: hidden;
        }

        :global(body) {
          background-color: #000000;
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
          line-height: 1;
          overflow-x: hidden;
        }

        /* Headline Section */
        .headline-section {
          border: none;
          margin: 0;
          position: relative;
          padding: 1vh 12vw 0.01vh 12vw;
          background-color: #000000;
        }

        .headline-section h1 {
          font-size: 3.30vw;
          text-align: center;
          padding-top: 2vh;
          padding-bottom: 2vh;
          color: #ffffff;
          line-height: 1.2;
          font-weight: 500;
          font-family: 'Ubuntu', sans-serif;
        }

        .blue-highlight {
          background-color: #0000ff;
          padding: 0 4px;
        }

        /* Video Container */
        .video-container {
          border: none;
          margin: 0 0 4vh 0;
          position: relative;
          padding: 0.01vh 5vw 5vh 5vw;
          background-color: #000000;
        }

        /* Product Options Section */
        .product-options-section {
          border: none;
          border-radius: 32px;
          margin: 0 10vw 0 10vw;
          position: relative;
          padding: 3vh 20vw 3vh 20vw;
          background-color: #c6890c;
        }

        .instruction-text h3 {
          font-size: 1.98vw;
          text-align: center;
          padding-top: 0vh;
          padding-bottom: 0vh;
          color: #ffffff;
          line-height: 1.1;
          font-weight: 600;
          font-family: 'Ubuntu', sans-serif;
        }

        .product-options {
          border: none;
          margin: 2vh 10vw 0 10vw;
          position: relative;
          padding: 2vh 15vw 1vh 15vw;
          background-color: #231F20;
        }

        .product-container {
          border: 4px solid #000000;
          box-shadow: none;
          background-color: #ffffff;
          border-radius: 32px;
          padding: 16px 5px 16px 5px;
          text-align: center;
          margin: 0 auto 20px auto;
          box-sizing: border-box;
          max-width: 100%;
        }

        .product-title {
          font-size: 1.65vw;
          text-align: center;
          padding-top: 2vh;
          padding-bottom: 2vh;
          color: #9c7600;
          line-height: 1.1;
          font-weight: 700;
        }

        .product-image img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 0.25vh;
          margin-top: 0.25vh;
          max-width: 40%;
          border-radius: 0;
          border: none;
        }

        .product-price {
          font-size: 1.98vw;
          text-align: center;
          padding-top: 2vh;
          padding-bottom: 2vh;
          color: #000000;
          line-height: 1.1;
          font-weight: 600;
          font-family: 'Ubuntu', sans-serif;
        }

        /* CTA Button */
        .cta-button-container {
          text-align: center;
        }

        .cta-button {
          background: #00b800;
          border-radius: 8px;
          border: none;
          color: #ffffff;
          padding: 16px 32px 16px 32px;
          font-weight: 600;
          display: inline-block;
          width: fit-content;
          text-align: center;
          margin: 7vh auto 3vh auto;
          font-size: 1.82vw;
          box-sizing: border-box;
          max-width: 100%;
          transition: all 0.5s ease-in-out;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
        }

        .cta-button:hover {
          filter: brightness(1.2);
        }

        .zooming {
          animation: zooming 1.25s ease infinite;
        }

        @keyframes zooming {
          0% { transform: scale(1, 1); }
          50% { transform: scale(1.1, 1.1); }
          100% { transform: scale(1, 1); }
        }

        /* Guarantee Section */
        .guarantee-section {
          border: none;
          border-radius: 4px;
          margin: 2vh 0 0 0;
          position: relative;
          padding: 8vh 20vw 8vh 20vw;
          background-color: #f1f1f1;
        }

        .guarantee-image img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1.25vh;
          margin-top: 1.25vh;
          max-width: 60%;
          border-radius: 0;
          border: none;
        }

        .guarantee-text p {
          font-size: 1.65vw;
          text-align: center;
          padding-top: 2vh;
          padding-bottom: 2vh;
          color: #000000;
          line-height: 1.2;
          font-weight: 400;
        }

        /* Social Proof Popup */
        .social-proof-popup {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 1rem;
          border-radius: 8px;
          z-index: 1000;
          transform: translateY(100%);
          transition: transform 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .social-proof-popup.show {
          transform: translateY(0);
        }

        .popup-content {
          font-size: 0.9rem;
        }

        .popup-content p {
          margin: 0;
        }

        .popup-content small {
          color: rgba(255, 255, 255, 0.6);
        }

        /* Footer */
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
          color: #00b800;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .divider {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Initially hidden elements */
        .hidden-initially {
          display: none;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .headline-section {
            padding: 0.75vh 9vw 0.001vh 9vw;
          }

          .headline-section h1 {
            font-size: 3.50vw;
            padding-top: 1.5vh;
            padding-bottom: 1.5vh;
          }

          .video-container {
            padding: 0.001vh 3.75vw 3.75vh 3.75vw;
          }

          .product-options-section {
            padding: 2.25vh 15vw 2.25vh 15vw;
            margin: 0 5vw 0 5vw;
          }

          .instruction-text h3 {
            font-size: 3.00vw;
          }

          .product-options {
            padding: 1.5vh 11.25vw 0.75vh 11.25vw;
            margin: 2vh 5vw 0 5vw;
          }

          .product-container {
            padding: 0.8vh 0.8vw 0.8vh 0.8vw;
          }

          .product-title {
            font-size: 2.50vw;
            padding-top: 1.5vh;
            padding-bottom: 1.5vh;
          }

          .product-image img {
            max-width: 36%;
          }

          .product-price {
            font-size: 3.00vw;
            padding-top: 1.5vh;
            padding-bottom: 1.5vh;
          }

          .cta-button {
            font-size: 1.92vw;
            margin: 4.62vh auto 2.25vh auto;
            padding: 8px 16px 8px 16px;
          }

          .guarantee-section {
            padding: 6vh 15vw 6vh 15vw;
          }

          .guarantee-image img {
            max-width: 54%;
          }

          .guarantee-text p {
            font-size: 2.50vw;
            padding-top: 1.5vh;
            padding-bottom: 1.5vh;
          }
        }

        @media (max-width: 640px) {
          .headline-section {
            margin: 0 0 0.75vh 0;
            padding: 0.75vh 1.5vw 0.001vh 1.5vw;
          }

          .headline-section h1 {
            font-size: 7.50vw;
            padding-top: 3.75vh;
            padding-bottom: 0.75vh;
          }

          .video-container {
            margin: 0 0 1.5vh 0;
            padding: 1.5vh 0.75vw 1.5vh 0.75vw;
          }

          .product-options-section {
            margin: 0 0 3.75vh 0;
            padding: 1.5vh 1.5vw 1.5vh 1.5vw;
          }

          .instruction-text h3 {
            font-size: 4.50vw;
            padding-top: 1.5vh;
            padding-bottom: 1.5vh;
          }

          .product-options {
            margin: 0;
            padding: 0.001vh 0vw 3.75vh 0vw;
          }

          .product-container {
            padding: 0.001vh 3vw 0.001vh 3vw;
          }

          .product-title {
            font-size: 4.00vw;
            padding-top: 1.5vh;
            padding-bottom: 1.5vh;
          }

          .product-image img {
            max-width: 40%;
          }

          .product-price {
            font-size: 4.00vw;
            padding-top: 1.5vh;
            padding-bottom: 1.5vh;
          }

          .cta-button {
            font-size: 4.13vw;
            padding: 12px 24px 12px 24px;
            margin: 3.5vh auto 1.5vh auto;
          }

          .guarantee-section {
            margin: 0 0 3vh 0;
            padding: 3.75vh 0vw 3.75vh 0vw;
          }

          .guarantee-image img {
            max-width: 100%;
          }

          .guarantee-text p {
            font-size: 4.00vw;
            padding-top: 3.75vh;
            padding-bottom: 2.25vh;
          }
        }
      `}</style>

      {/* Script to show product options after video plays */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Function to check if smartplayer is loaded
            function checkSmartPlayer() {
              if (window.smartplayer && window.smartplayer.instances && window.smartplayer.instances.length > 0) {
                const player = window.smartplayer.instances[0];
                
                // Listen for video end event
                player.on('ended', function() {
                  // Show the product options and guarantee sections
                  document.querySelectorAll('.hidden-initially').forEach(function(el) {
                    el.style.display = 'block';
                  });
                });

                // Also show after a certain time (fallback)
                setTimeout(function() {
                  document.querySelectorAll('.hidden-initially').forEach(function(el) {
                    el.style.display = 'block';
                  });
                }, 180000); // 3 minutes
              } else {
                setTimeout(checkSmartPlayer, 1000);
              }
            }
            
            // Start checking for smartplayer
            setTimeout(checkSmartPlayer, 2000);
          });
        `
      }} />
    </>
  );
}
