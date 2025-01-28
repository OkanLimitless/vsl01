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

        {/* New Formula Announcement */}
        <section className="new-formula">
          <div className="announcement-badge">🔥 NEW 2024 FORMULA</div>
          <h2>Breakthrough Formula Finally Available to the Public</h2>
          <p>After years of research and testing, this powerful Brazilian formula is now available in limited quantities</p>
          
          <div className="comparison-grid">
            <div className="old-formula">
              <h3>Regular Male Enhancement</h3>
              <ul>
                <li>❌ Synthetic Ingredients</li>
                <li>❌ Slow Acting Formula</li>
                <li>❌ Temporary Results</li>
                <li>❌ Side Effects</li>
                <li>❌ Low Success Rate</li>
              </ul>
            </div>
            <div className="vs">VS</div>
            <div className="new-formula">
              <h3>Brazilian Wood™</h3>
              <ul>
                <li>✅ 100% Natural Formula</li>
                <li>✅ Fast Acting Results</li>
                <li>✅ Long-Lasting Effects</li>
                <li>✅ No Side Effects</li>
                <li>✅ 98.7% Success Rate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="guarantee">
          <div className="guarantee-badge">
            <span className="guarantee-icon">🛡️</span>
            <span className="guarantee-days">180</span>
            <span className="guarantee-text">DAY</span>
          </div>
          <div className="guarantee-content">
            <h2>100% Money Back Guarantee</h2>
            <p>If you're not completely satisfied with Brazilian Wood™, simply return the bottles (even if empty) within 180 days for a full refund. No questions asked.</p>
            <div className="guarantee-features">
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>No Questions Asked</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Easy Returns</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>100% Refund</span>
              </div>
            </div>
          </div>
        </section>

        {/* Replace the packages section with this */}
        <section className="cta-sections">
          <div className="cta-block">
            <div className="power-badge">🔥 UNLEASH YOUR POWER</div>
            <h2>Experience The Brazilian Secret That's Making Headlines</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">297%</span>
                <span className="stat-label">Performance Boost</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98.7%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30min</span>
                <span className="stat-label">Fast Acting</span>
              </div>
            </div>
            <button 
              className="mega-cta-button" 
              onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
            >
              CLAIM YOUR BRAZILIAN WOOD™ NOW
              <span className="cta-sub">While Stock Lasts</span>
            </button>
          </div>

          <div className="benefits-block">
            <div className="benefit-grid">
              <div className="mega-benefit">
                <h3>🚀 INSTANT POWER</h3>
                <p>Experience up to 297% boost in performance within 30 minutes</p>
              </div>
              <div className="mega-benefit">
                <h3>💪 LASTING STAMINA</h3>
                <p>Maintain peak performance for up to 12 hours straight</p>
              </div>
              <div className="mega-benefit">
                <h3>📏 MAXIMUM GROWTH</h3>
                <p>Users report significant size improvements within weeks</p>
              </div>
              <div className="mega-benefit">
                <h3>🧬 PERMANENT RESULTS</h3>
                <p>Unlike other solutions, effects compound over time</p>
              </div>
            </div>
            <button 
              className="mega-cta-button pulse" 
              onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
            >
              GET YOUR BRAZILIAN WOOD™ TODAY
              <span className="cta-sub">Limited Time Offer</span>
            </button>
          </div>

          <div className="urgency-block">
            <div className="countdown-wrapper">
              <div className="fire-badge">🔥 EXPLOSIVE DEAL</div>
              <h3>Special Offer Ends In:</h3>
              <div className="countdown">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
            <button 
              className="mega-cta-button shake" 
              onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
            >
              SECURE YOUR BRAZILIAN WOOD™ NOW
              <span className="cta-sub">Only {bottlesLeft} Bottles Left!</span>
            </button>
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

        /* New Formula Section */
        .new-formula {
          padding: 60px 20px;
          text-align: center;
          background: linear-gradient(to bottom, #000, #111);
          position: relative;
        }

        .announcement-badge {
          background: #ff3b3b;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          display: inline-block;
          margin-bottom: 20px;
          font-weight: bold;
          animation: pulse 2s infinite;
        }

        .new-formula h2 {
          font-size: 2rem;
          margin-bottom: 15px;
          color: #fff;
        }

        .new-formula p {
          color: #888;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .comparison-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .old-formula, .new-formula {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 15px;
          flex: 1;
          min-width: 280px;
        }

        .old-formula {
          border: 1px solid rgba(255, 0, 0, 0.2);
        }

        .new-formula {
          border: 1px solid rgba(46, 204, 113, 0.2);
          transform: scale(1.05);
        }

        .vs {
          font-size: 2rem;
          font-weight: bold;
          color: #ff3b3b;
        }

        .old-formula h3, .new-formula h3 {
          margin-bottom: 20px;
          font-size: 1.5rem;
        }

        .old-formula ul, .new-formula ul {
          list-style: none;
          padding: 0;
          text-align: left;
        }

        .old-formula li, .new-formula li {
          margin: 15px 0;
          font-size: 1.1rem;
        }

        /* Guarantee Section */
        .guarantee {
          padding: 60px 20px;
          background: linear-gradient(to bottom, #111, #000);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .guarantee-badge {
          background: #2ecc71;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-shadow: 0 0 30px rgba(46, 204, 113, 0.3);
        }

        .guarantee-icon {
          font-size: 2rem;
          margin-bottom: 5px;
        }

        .guarantee-days {
          font-size: 2.5rem;
          font-weight: bold;
          line-height: 1;
        }

        .guarantee-text {
          font-size: 1.2rem;
        }

        .guarantee-content {
          flex: 1;
          max-width: 600px;
        }

        .guarantee-content h2 {
          font-size: 2rem;
          margin-bottom: 15px;
          color: #2ecc71;
        }

        .guarantee-content p {
          color: #888;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }

        .guarantee-features {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
        }

        .feature i {
          color: #2ecc71;
        }

        /* cta-sections */
        .cta-sections {
          padding: 40px 20px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .cta-block {
          margin-bottom: 60px;
          text-align: center;
        }

        .power-badge, .fire-badge {
          background: #ff3b3b;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          display: inline-block;
          margin-bottom: 20px;
          font-weight: bold;
          animation: pulse 2s infinite;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 30px 0;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 10px;
        }

        .stat-number {
          font-size: 2.5rem;
          color: #ff3b3b;
          font-weight: bold;
          display: block;
        }

        .mega-cta-button {
          background: linear-gradient(45deg, #2ecc71, #27ae60);
          color: white;
          border: none;
          padding: 25px 50px;
          border-radius: 50px;
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 30px auto;
          width: 100%;
          max-width: 500px;
        }

        .mega-cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(46, 204, 113, 0.3);
        }

        .cta-sub {
          font-size: 1rem;
          opacity: 0.9;
          margin-top: 5px;
        }

        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 30px 0;
        }

        .mega-benefit {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }

        .mega-benefit h3 {
          color: #2ecc71;
          margin-bottom: 10px;
        }

        .mega-benefit p {
          color: #888;
          font-size: 0.9rem;
        }

        .countdown-wrapper {
          text-align: center;
          margin-bottom: 30px;
        }

        .countdown {
          font-size: 3rem;
          font-weight: bold;
          color: #ff3b3b;
          font-family: monospace;
          animation: blink 1s infinite;
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        .shake {
          animation: shake 5s infinite;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .benefit-grid {
            grid-template-columns: 1fr;
          }

          .mega-cta-button {
            padding: 20px 30px;
            font-size: 1.2rem;
          }
        }

        /* Purchase Notification */
        .purchase-notification {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.95);
          border: 1px solid #2ecc71;
          padding: 15px 20px;
          border-radius: 8px;
          animation: slideInUp 0.5s ease-out;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
          max-width: 300px;
        }

        .notification-content {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .notification-icon {
          background: #2ecc71;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }

        .notification-text {
          font-size: 14px;
          line-height: 1.4;
        }

        .buyer-name {
          color: #2ecc71;
          font-weight: 600;
        }

        .purchase-time {
          color: #666;
          font-size: 12px;
          display: block;
          margin-top: 4px;
        }

        @keyframes slideInUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
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

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
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

          .comparison-grid {
            flex-direction: column;
          }

          .vs {
            transform: rotate(90deg);
          }

          .new-formula {
            transform: none;
          }

          .guarantee {
            text-align: center;
          }

          .guarantee-features {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
} 