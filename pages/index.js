import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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

      <main className="main-container">
        <div className="headline">
          <h1>BLUE SALT HACK</h1>
        </div>
        
        <div className="video-container">
          <VideoPlayer />
        </div>
        
        <div className="product-reveal-container" style={{ display: 'none' }}>
          <div className="instruction-text">
            <p>👇 TAP THE BUTTON BELOW TO GET YOUR BOTTLES 👇</p>
          </div>
          
          <div className="product-options">
            <div className="product-option">
              <h3>BEST VALUE</h3>
              <div className="product-image">
                <Image src="/images/BrazlilianWood_1Bottle.png" alt="6 Bottles" width={150} height={150} />
              </div>
              <div className="product-price">
                <p>6 Bottles</p>
                <p>$39 Each</p>
                <p>$234 Total</p>
              </div>
            </div>
            
            <div className="product-option">
              <h3>MOST POPULAR</h3>
              <div className="product-image">
                <Image src="/images/BrazlilianWood_1Bottle.png" alt="3 Bottles" width={150} height={150} />
              </div>
              <div className="product-price">
                <p>3 Bottles</p>
                <p>$49 Each</p>
                <p>$147 Total</p>
              </div>
            </div>
            
            <div className="product-option">
              <h3>BASIC</h3>
              <div className="product-image">
                <Image src="/images/BrazlilianWood_1Bottle.png" alt="1 Bottle" width={150} height={150} />
              </div>
              <div className="product-price">
                <p>1 Bottle</p>
                <p>$69 Each</p>
                <p>$69 Total</p>
              </div>
            </div>
          </div>
          
          <div className="cta-button-container">
            <a href="https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571" className="cta-button">
              <span>YES, I WANT MY BOTTLES!</span>
            </a>
          </div>
          
          <div className="guarantee-section">
            <div className="guarantee-image">
              <Image src="/images/180days.png" alt="Money Back Guarantee" width={100} height={100} />
            </div>
            <div className="guarantee-text">
              <p>60-DAY MONEY BACK GUARANTEE</p>
            </div>
          </div>
        </div>
        
        <div className="footer">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </main>
      
      <ClientSideOnly>
        <script src="/reveal.js"></script>
      </ClientSideOnly>
      
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #000;
          color: #fff;
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        
        .main-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }
        
        .headline {
          text-align: center;
          margin: 20px 0;
          width: 100%;
        }
        
        .headline h1 {
          font-size: 2.5rem;
          margin: 0;
          color: #fff;
          text-shadow: 0 0 10px rgba(0, 0, 255, 0.7);
        }
        
        .video-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }
        
        .product-reveal-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(198, 137, 12, 0.95);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }
        
        .instruction-text {
          text-align: center;
          margin: 20px 0;
          font-size: 1.2rem;
          font-weight: bold;
          color: #fff;
        }
        
        .product-options {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin: 20px 0;
          width: 100%;
          max-width: 1000px;
        }
        
        .product-option {
          background-color: #fff;
          border-radius: 10px;
          padding: 15px;
          width: 250px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }
        
        .product-option:hover {
          transform: scale(1.05);
        }
        
        .product-option h3 {
          color: #c6890c;
          margin-top: 0;
        }
        
        .product-image {
          margin: 10px 0;
        }
        
        .product-price {
          color: #000;
          font-weight: bold;
        }
        
        .product-price p {
          margin: 5px 0;
        }
        
        .cta-button-container {
          margin: 20px 0;
          text-align: center;
        }
        
        .cta-button {
          display: inline-block;
          background-color: #ff0000;
          color: #fff;
          font-size: 1.2rem;
          font-weight: bold;
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          animation: pulse 2s infinite;
        }
        
        .cta-button:hover {
          transform: scale(1.05);
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .guarantee-section {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0;
          gap: 15px;
        }
        
        .guarantee-text {
          color: #fff;
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        .footer {
          margin-top: 30px;
          text-align: center;
          color: #888;
          font-size: 0.8rem;
          padding: 10px;
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .headline h1 {
            font-size: 2rem;
          }
          
          .product-options {
            flex-direction: column;
            align-items: center;
          }
          
          .product-option {
            width: 80%;
            max-width: 300px;
          }
          
          .cta-button {
            font-size: 1rem;
            padding: 12px 24px;
          }
        }
        
        @media (max-width: 480px) {
          .headline h1 {
            font-size: 1.8rem;
          }
          
          .instruction-text {
            font-size: 1rem;
          }
          
          .guarantee-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
