import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const VideoPlayer = dynamic(
  () => import('../components/VideoPlayer'),
  { ssr: false }
);

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
        <link rel="preload" href="https://scripts.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/thumbnail.jpg" as="image" />
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
      <div className="product-options-section hidden-initially" style={{ display: 'none' }}>
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
      <div className="guarantee-section hidden-initially" style={{ display: 'none' }}>
        <div className="guarantee-content">
          <div className="guarantee-image">
            <img src="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/mXREBX9929515.webp" alt="Money Back Guarantee" />
          </div>
          <div className="guarantee-text">
            <p>
              Still not sure? Remember, Alpha Bites comes with a 100% Money-Back Guarantee for a full 180 days! That means if you don't get the results we promise or you change your mind for any reason at all, just call or email our support team within the next 6 months and quickly get every penny back. What do you have to lose? Your success is virtually guaranteed!
            </p>
          </div>
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

      <style jsx global>{`
        /* Global Styles */
        html {
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
        
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #000000;
          color: #ffffff;
          line-height: 1;
          overflow-x: hidden;
        }

        /* Hidden Initially Class */
        .hidden-initially {
          display: none !important;
        }

        /* Headline Section */
        .headline-section {
          text-align: center;
          padding: 20px 10px;
          background-color: #000000;
        }

        .headline-section h1 {
          font-size: 28px;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
          font-family: 'Ubuntu', sans-serif;
        }

        .blue-highlight {
          color: #ffffff;
          background-color: #0000ff;
          padding: 0 4px;
          font-weight: bold;
        }

        /* Video Container */
        .video-container {
          max-width: 800px;
          margin: 0 auto 30px;
          padding: 0 10px;
        }

        /* Product Options Section */
        .product-options-section {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(198, 137, 12, 0.95);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .instruction-text {
          width: 100%;
          text-align: center;
          margin-bottom: 20px;
          padding: 15px 0;
          border-radius: 8px;
        }

        .instruction-text h3 {
          font-size: 22px;
          text-align: center;
          color: #ffffff;
          line-height: 1.3;
          font-weight: 600;
          font-family: 'Ubuntu', sans-serif;
          margin: 0;
          padding: 0 20px;
        }

        .product-options {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
          max-width: 500px;
          margin: 0 auto 30px;
        }

        .product-option {
          width: 100%;
        }

        .product-container {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .product-title {
          font-size: 18px;
          color: #c6890c;
          font-weight: 700;
          margin: 0 0 15px 0;
        }

        .product-image {
          margin: 15px 0;
        }

        .product-image img {
          max-width: 200px;
          height: auto;
          margin: 0 auto;
          display: block;
        }

        .product-price {
          font-size: 24px;
          color: #000000;
          font-weight: 700;
          margin: 15px 0 0 0;
        }

        /* CTA Button */
        .cta-button-container {
          text-align: center;
          margin-top: 30px;
        }

        .cta-button {
          background: #00b800;
          border-radius: 8px;
          border: none;
          color: #ffffff;
          padding: 16px 32px;
          font-weight: 700;
          display: inline-block;
          text-align: center;
          font-size: 24px;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease-in-out;
          text-transform: uppercase;
        }

        .cta-button:hover {
          transform: scale(1.05);
        }

        .zooming {
          animation: zoom 1.5s infinite alternate;
        }

        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        /* Guarantee Section */
        .guarantee-section {
          background-color: #000000;
          padding: 30px 20px;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .guarantee-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .guarantee-image {
          margin-bottom: 20px;
        }

        .guarantee-image img {
          max-width: 300px;
          height: auto;
        }

        .guarantee-text {
          max-width: 600px;
        }

        .guarantee-text p {
          font-size: 16px;
          line-height: 1.5;
          color: #ffffff;
          text-align: center;
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

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .instruction-text h3 {
            font-size: 22px;
          }
          
          .product-options {
            width: 300px;
          }
          
          .instruction-text h3 {
            font-size: 18px;
            max-width: 90%;
          }
        }

        @media (max-width: 640px) {
          .product-options {
            width: 300px;
          }
          
          .instruction-text h3 {
            font-size: 18px;
            max-width: 90%;
          }
          
          .cta-button {
            font-size: 16px;
            padding: 12px 24px;
          }
        }
      `}</style>

      {/* Script to show product options after video plays */}
      <ClientSideOnly>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Force hide the product options section and guarantee section on page load
              const hiddenElements = document.querySelectorAll('.hidden-initially');
              hiddenElements.forEach(function(el) {
                el.style.display = 'none';
              });
              
              // Function to check if smartplayer is loaded
              function checkSmartPlayer() {
                if (window.smartplayer && window.smartplayer.instances && window.smartplayer.instances.length > 0) {
                  const player = window.smartplayer.instances[0];
                  
                  // Listen for video end event
                  player.on('ended', function() {
                    console.log('Video ended, showing product options');
                    // Show the product options section
                    const productSection = document.querySelector('.product-options-section');
                    if (productSection) {
                      productSection.style.display = 'flex';
                      productSection.classList.remove('hidden-initially');
                    }
                    
                    // Show the guarantee section
                    const guaranteeSection = document.querySelector('.guarantee-section');
                    if (guaranteeSection) {
                      guaranteeSection.style.display = 'block';
                      guaranteeSection.classList.remove('hidden-initially');
                    }
                  });

                  // Also show after a certain time (fallback)
                  setTimeout(function() {
                    console.log('Timeout reached, showing product options');
                    // Show the product options section
                    const productSection = document.querySelector('.product-options-section');
                    if (productSection) {
                      productSection.style.display = 'flex';
                      productSection.classList.remove('hidden-initially');
                    }
                    
                    // Show the guarantee section
                    const guaranteeSection = document.querySelector('.guarantee-section');
                    if (guaranteeSection) {
                      guaranteeSection.style.display = 'block';
                      guaranteeSection.classList.remove('hidden-initially');
                    }
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

        {/* Additional script to prevent right-click and other interactions */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
            });
            
            document.onkeydown = function(e) {
              if (e.keyCode == 123) return false;
            };
            
            document.addEventListener('selectstart', e => e.preventDefault());
          `
        }} />
      </ClientSideOnly>
    </>
  );
}
