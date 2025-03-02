import Head from 'next/head';
import dynamic from 'next/dynamic';
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
        <title>DO THIS "BLUE SALT HACK" TO GET UP WHENEVER YOU WANT</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://getalphabites.fun/video-fb" />
        <meta property="og:title" content="DO THIS &quot;BLUE SALT HACK&quot; TO GET UP WHENEVER YOU WANT" />
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
        <div id="vid_67c42af2aedb9697b81c45ce" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
          <img 
            id="thumb_67c42af2aedb9697b81c45ce" 
            src="https://images.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/thumbnail.jpg" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            alt="thumbnail"
          />
          <div 
            id="backdrop_67c42af2aedb9697b81c45ce" 
            style={{ WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
          ></div>
        </div>
        <script type="text/javascript" id="scr_67c42af2aedb9697b81c45ce">
          {`var s=document.createElement("script"); s.src="https://scripts.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/player.js", s.async=!0,document.head.appendChild(s);`}
        </script>
      </div>
      
      {/* Product Options Section - Hidden on initial load, shown after video ends or after 3 minutes */}
      <div className="product-reveal-container hidden-product">
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
            href="https://hop.clickbank.net/?affiliate=die97&vendor=alphabites&pg=dtc" 
            target="_blank" 
            className="cta-button zooming"
            rel="noopener noreferrer"
          >
            CLICK HERE TO BUY
          </a>
        </div>
        
        {/* Guarantee Section */}
        <div className="guarantee-section">
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
      </div>
      
      {/* Footer */}
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
        
        /* Hidden Product Class */
        .hidden-product {
          display: none;
        }
        
        /* Product Reveal Container */
        .product-reveal-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 20px auto 0;
          background-color: #c6890c;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 0 0 30px 0;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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
          margin: 0 auto;
          padding: 0 10px;
        }

        /* Instruction Text */
        .instruction-text {
          width: 100%;
          text-align: center;
          margin: 0 0 30px 0;
          padding: 20px 0;
          background-color: #c6890c;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          border-bottom: 2px solid #ffffff;
        }

        .instruction-text h3 {
          font-size: 24px;
          text-align: center;
          color: #ffffff;
          line-height: 1.3;
          font-weight: 700;
          font-family: 'Ubuntu', sans-serif;
          margin: 0;
          padding: 0 20px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        /* Product Options */
        .product-options {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          width: 100%;
          max-width: 760px;
          margin: 20px auto;
          padding: 0 20px;
        }
        
        .product-option {
          width: calc(33.33% - 20px);
          min-width: 250px;
          margin-bottom: 20px;
        }
        
        .product-container {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          height: 100%;
          transition: transform 0.3s ease;
        }
        
        .product-container:hover {
          transform: translateY(-5px);
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
          margin: 30px auto;
          width: 100%;
          max-width: 760px;
        }
        
        .cta-button {
          background: #00b800;
          border-radius: 8px;
          border: none;
          color: #ffffff;
          padding: 20px 40px;
          font-weight: 700;
          display: inline-block;
          text-align: center;
          font-size: 28px;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background: #00a000;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
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
          background-color: transparent;
          padding: 20px;
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .guarantee-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          padding: 20px;
        }

        .guarantee-image {
          margin-right: 20px;
          flex: 0 0 auto;
        }

        .guarantee-image img {
          max-width: 150px;
          height: auto;
        }
        
        .guarantee-text {
          max-width: 600px;
          text-align: left;
          flex: 1 1 auto;
        }

        .guarantee-text p {
          font-size: 16px;
          line-height: 1.5;
          color: #ffffff;
          text-align: left;
        }
        
        @media (max-width: 768px) {
          .guarantee-content {
            flex-direction: column;
          }
          
          .guarantee-image {
            margin-right: 0;
            margin-bottom: 20px;
          }
          
          .guarantee-text p {
            text-align: center;
          }
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
          padding: 2rem 1rem;
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
          margin-bottom: 0;
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
            width: 90%;
          }
          
          .product-option {
            width: calc(50% - 20px);
          }
        }

        @media (max-width: 640px) {
          .product-options {
            width: 90%;
            flex-direction: column;
          }
          
          .product-option {
            width: 100%;
          }
          
          .instruction-text h3 {
            font-size: 18px;
          }
          
          .cta-button {
            font-size: 16px;
            padding: 12px 24px;
          }
        }
      `}</style>

      {/* Script to show product options after video plays */}
      <ClientSideOnly>
        <script src="/reveal.js"></script>

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
