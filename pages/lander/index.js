import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [viewerCount, setViewerCount] = useState(387);
  const [bottlesLeft, setBottlesLeft] = useState(15);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [showNotification, setShowNotification] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(null);

  // Viewer count effect
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 7) - 2; // -2 to +4
        return Math.min(450, Math.max(350, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Bottles countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBottlesLeft(prev => {
        if (prev <= 1) return 1;
        if (Math.random() < 0.3) return prev - 1; // 30% chance to decrease
        return prev;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Timer countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Purchase notifications effect
  useEffect(() => {
    const buyers = [
      { name: 'Michael R.', location: 'New York, US', product: '6 Bottle Pack', time: 'Just now' },
      { name: 'James S.', location: 'Texas, US', product: '3 Bottle Pack', time: '2 minutes ago' },
      { name: 'Robert K.', location: 'Florida, US', product: '1 Bottle', time: '4 minutes ago' },
      { name: 'William D.', location: 'California, US', product: '6 Bottle Pack', time: '5 minutes ago' }
    ];

    let index = 0;
    const interval = setInterval(() => {
      setCurrentBuyer(buyers[index]);
      setShowNotification(true);
      
      setTimeout(() => setShowNotification(false), 4000);
      
      index = (index + 1) % buyers.length;
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Brazilian Wood™ | Natural Male Enhancement Solution</title>
        <meta name="description" content="Discover Brazilian Wood™ - The natural solution for enhanced male vitality and performance. Limited time offer with exclusive discounts." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <div className="landing-page">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="live-counter">
            <div className="pulse-dot"></div>
            <span>{viewerCount} people viewing this page</span>
          </div>
          <div className="timer">
            Special Offer Ends In: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <h1>Unlock Your Natural Potential With <span className="highlight">Brazilian Wood™</span></h1>
          <h2>The Ancient Brazilian Secret for Enhanced Male Vitality</h2>
          
          <div className="hero-content">
            <div className="product-image">
              <img src="https://www.braziliansecretwood.com/images/BrazlilianWood_1Bottle.png" alt="Brazilian Wood Bottle" />
            </div>
            <div className="hero-benefits">
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>Enhances Natural Performance</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>100% Natural Ingredients</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>Clinically Proven Formula</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>No Side Effects</span>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="packages">
          <div className="stock-warning">
            ⚠️ Warning: Only {bottlesLeft} Bottles Left at This Price
          </div>

          <div className="package-grid">
            <div className="package-card">
              <div className="package-label">STARTER</div>
              <img src="https://www.braziliansecretwood.com/images/BrazlilianWood_1Bottle.png" alt="1 Bottle Package" />
              <div className="package-details">
                <h3>1 Bottle</h3>
                <div className="price">
                  <span className="original">$99</span>
                  <span className="current">$79</span>
                </div>
                <div className="savings">Save 20%</div>
                <button className="buy-button" onClick={() => window.location.href = 'https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571'}>
                  Buy Now
                </button>
                <div className="shipping">+ Free Shipping</div>
              </div>
            </div>

            <div className="package-card popular">
              <div className="package-label">MOST POPULAR</div>
              <img src="https://www.braziliansecretwood.com/images/BrazlilianWood_3Bottles.png" alt="3 Bottle Package" />
              <div className="package-details">
                <h3>3 Bottles</h3>
                <div className="price">
                  <span className="original">$297</span>
                  <span className="current">$177</span>
                </div>
                <div className="savings">Save 40%</div>
                <button className="buy-button" onClick={() => window.location.href = 'https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571'}>
                  Buy Now
                </button>
                <div className="shipping">+ Free Shipping</div>
              </div>
            </div>

            <div className="package-card best-value">
              <div className="package-label">BEST VALUE</div>
              <img src="https://www.braziliansecretwood.com/images/BrazlilianWood_6Bottles.png" alt="6 Bottle Package" />
              <div className="package-details">
                <h3>6 Bottles</h3>
                <div className="price">
                  <span className="original">$594</span>
                  <span className="current">$294</span>
                </div>
                <div className="savings">Save 50%</div>
                <button className="buy-button" onClick={() => window.location.href = 'https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571'}>
                  Buy Now
                </button>
                <div className="shipping">+ Free Shipping</div>
              </div>
            </div>
          </div>
        </section>

        {/* Purchase Notification */}
        {showNotification && currentBuyer && (
          <div className="purchase-notification">
            <div className="notification-content">
              <div className="notification-icon">✓</div>
              <div className="notification-text">
                <span className="buyer-name">{currentBuyer.name}</span> from {currentBuyer.location}
                <br />
                just purchased {currentBuyer.product}
                <span className="purchase-time">{currentBuyer.time}</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <p className="copyright">© 2025 Brazilian Wood™ - All Rights Reserved</p>
            <div className="footer-links">
              <a href="/terms">Terms of Use</a>
              <span className="divider">|</span>
              <a href="/privacy">Privacy Policy</a>
            </div>
            <p className="disclaimer">
              These statements have not been evaluated by the Food and Drug Administration. 
              This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        /* Base Styles */
        .landing-page {
          background: #000;
          color: white;
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
        }

        /* Top Bar */
        .top-bar {
          background: #ff3b3b;
          padding: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .live-counter {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        /* Hero Section */
        .hero {
          padding: 40px 20px;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .hero h2 {
          font-size: 1.5rem;
          color: #888;
          margin-bottom: 40px;
        }

        .highlight {
          color: #ff3b3b;
        }

        .hero-content {
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .product-image img {
          max-width: 300px;
          height: auto;
        }

        .hero-benefits {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.2rem;
        }

        .benefit-item i {
          color: #2ecc71;
        }

        /* Packages Section */
        .packages {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stock-warning {
          background: #ff3b3b;
          color: white;
          padding: 15px;
          text-align: center;
          font-size: 1.2rem;
          margin-bottom: 30px;
          border-radius: 8px;
          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite;
        }

        .package-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .package-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .package-card:hover {
          transform: translateY(-5px);
        }

        .package-card.popular {
          border: 2px solid #ff3b3b;
        }

        .package-label {
          background: #ff3b3b;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 20px;
        }

        .package-card img {
          max-width: 200px;
          height: auto;
          margin: 20px 0;
        }

        .price {
          margin: 20px 0;
        }

        .original {
          text-decoration: line-through;
          color: #888;
          margin-right: 10px;
        }

        .current {
          color: #2ecc71;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .buy-button {
          background: #2ecc71;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          margin: 20px 0;
        }

        .buy-button:hover {
          background: #27ae60;
          transform: scale(1.05);
        }

        /* Purchase Notification */
        .purchase-notification {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: rgba(46, 204, 113, 0.1);
          border-left: 4px solid #2ecc71;
          padding: 15px;
          border-radius: 4px;
          animation: slideIn 0.5s ease-out;
          z-index: 1000;
        }

        .notification-content {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .notification-icon {
          background: #2ecc71;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Footer */
        .site-footer {
          background: #111;
          padding: 40px 20px;
          margin-top: 60px;
        }

        .footer-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-links {
          margin: 20px 0;
        }

        .footer-links a {
          color: #888;
          text-decoration: none;
        }

        .disclaimer {
          color: #666;
          font-size: 0.8rem;
          max-width: 600px;
          margin: 20px auto;
        }

        /* Animations */
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .hero h2 {
            font-size: 1.2rem;
          }

          .top-bar {
            flex-direction: column;
            gap: 10px;
          }

          .package-grid {
            grid-template-columns: 1fr;
          }

          .hero-content {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
} 