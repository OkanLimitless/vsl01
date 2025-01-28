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
          <div className="warning-banner">
            <span className="warning-icon">⚠️</span>
            WARNING: This page may be taken down at any moment due to pressure from Big Pharma
          </div>
          <div className="live-counter">
            <div className="pulse-dot"></div>
            <span>{viewerCount} people viewing this forbidden solution</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="alert-banner">
            <span className="alert-icon">��</span>
            EXPOSED: The Billion-Dollar Secret Big Pharma Doesn't Want You to Know About
          </div>
          <h1>The Underground Brazilian Formula That's Making ED Pills Obsolete</h1>
          <h2>WARNING: This Natural Performance Enhancer Is So Powerful, They're Trying To Ban It</h2>
          
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

        {/* Add Controversial Claims Section */}
        <section className="exposed-truth">
          <div className="secret-badge">🤫 LEAKED INFORMATION</div>
          <h2>Why Big Pharma Wants This Page Shut Down</h2>
          <div className="truth-grid">
            <div className="truth-item">
              <span className="truth-icon">💊</span>
              <h3>Their Worst Nightmare</h3>
              <p>This ancient Brazilian formula costs pennies to produce but outperforms $80/pill medications</p>
            </div>
            <div className="truth-item">
              <span className="truth-icon">🔬</span>
              <h3>Suppressed Research</h3>
              <p>Clinical studies showing 312% better results were hidden from the public</p>
            </div>
            <div className="truth-item">
              <span className="truth-icon">📈</span>
              <h3>Natural Alternative</h3>
              <p>Users permanently cancel their prescriptions after trying this solution</p>
            </div>
          </div>
        </section>

        {/* Add Celebrity Testimonials */}
        <section className="testimonials">
          <div className="testimonial-badge">👑 ELITE TESTIMONIALS</div>
          <h2>Why Professional Athletes & Celebrities Trust Brazilian Wood™</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img src="/images/athlete-silhouette-1.png" alt="Professional Athlete" />
                <div className="testimonial-meta">
                  <h3>Professional MMA Fighter</h3>
                  <span className="verified">✓ Verified Purchase</span>
                </div>
              </div>
              <p>"I've tried everything for performance enhancement, but nothing comes close to this. It's like nature's secret weapon."</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img src="/images/athlete-silhouette-2.png" alt="Olympic Athlete" />
                <div className="testimonial-meta">
                  <h3>Olympic Gold Medalist</h3>
                  <span className="verified">✓ Verified Purchase</span>
                </div>
              </div>
              <p>"My trainer recommended this to me. The results were so dramatic, I couldn't believe it was legal."</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img src="/images/celebrity-silhouette.png" alt="Hollywood Actor" />
                <div className="testimonial-meta">
                  <h3>A-List Hollywood Actor</h3>
                  <span className="verified">✓ Verified Purchase</span>
                </div>
              </div>
              <p>"At 55, I feel better than I did at 25. This is the industry's best-kept secret."</p>
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

        {/* Update the CTA sections */}
        <section className="cta-sections">
          <div className="cta-block">
            <div className="power-badge">🤫 CLASSIFIED INFORMATION</div>
            <h2>The Underground Formula They Don't Want You to Have</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">3.1x</span>
                <span className="stat-label">More Powerful Than ED Pills</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">$547</span>
                <span className="stat-label">Big Pharma Alternative Cost</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30min</span>
                <span className="stat-label">Until They Notice</span>
              </div>
            </div>
            <button 
              className="mega-cta-button pulse" 
              onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
            >
              GET ACCESS NOW BEFORE IT'S BANNED
              <span className="cta-sub">Limited Supply Available</span>
            </button>
          </div>

          <div className="benefits-block">
            <div className="secret-alert">
              <span className="alert-icon">🔥</span>
              LEAKED CLINICAL RESULTS
            </div>
            <div className="benefit-grid">
              <div className="mega-benefit">
                <h3>⚡️ INSTANT DOMINANCE</h3>
                <p>Outperforms prescription pills by 312% in blind tests</p>
              </div>
              <div className="mega-benefit">
                <h3>⏰ MARATHON POWER</h3>
                <p>Subjects reported 12+ hours of peak performance</p>
              </div>
              <div className="mega-benefit">
                <h3>📊 PROVEN GROWTH</h3>
                <p>Clinical data shows 3.2x better results than alternatives</p>
              </div>
              <div className="mega-benefit">
                <h3>🧪 BANNED FORMULA</h3>
                <p>Uses restricted compounds from the Amazon rainforest</p>
              </div>
            </div>
            <button 
              className="mega-cta-button danger-pulse" 
              onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
            >
              BYPASS THE BAN - ORDER NOW
              <span className="cta-sub">While We Can Still Ship It</span>
            </button>
          </div>

          <div className="urgency-block">
            <div className="warning-wrapper">
              <div className="danger-badge">⚠️ FINAL WARNING</div>
              <h3>Government Agencies Are Trying to Stop Us</h3>
              <p>Once our current stock is gone, we may never be able to sell this again</p>
              <div className="stock-alert">
                Only <span className="highlight">{bottlesLeft}</span> Bottles Left Before Permanent Ban
              </div>
            </div>
            <button 
              className="mega-cta-button shake" 
              onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
            >
              SECURE YOUR SUPPLY NOW
              <span className="cta-sub">Before They Shut Us Down</span>
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

        {/* Add Leaked Document Section */}
        <section className="leaked-document">
          <div className="document-header">
            <span className="confidential-stamp">CONFIDENTIAL</span>
            <h2>LEAKED: Internal Memo from Leading ED Pill Manufacturer</h2>
          </div>
          <div className="document-content">
            <div className="memo-text">
              <p>"...the emergence of this Brazilian formula poses a significant threat to our market share. Initial tests show it outperforms our product by 312%. Immediate action required to prevent market distribution..."</p>
              <div className="memo-date">Date: [REDACTED]</div>
              <div className="memo-signature">Chief of Research, [REDACTED]</div>
            </div>
            <div className="action-required">
              <h3>🚨 URGENT: Limited Time Access</h3>
              <p>This page will be forced to shut down. Get your supply while you still can.</p>
              <button 
                className="mega-cta-button pulse" 
                onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
              >
                SECURE YOUR SUPPLY NOW
                <span className="cta-sub">Before It's Banned Forever</span>
              </button>
            </div>
          </div>
        </section>

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
          max-width: 100%;
          overflow: hidden;
        }

        .warning-banner {
          background: #ff3b3b;
          color: white;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          animation: pulse 2s infinite;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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

        .alert-banner {
          background: rgba(255, 59, 59, 0.1);
          border: 2px solid #ff3b3b;
          color: #ff3b3b;
          padding: 15px 30px;
          border-radius: 8px;
          margin-bottom: 30px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: shake 5s infinite;
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
          background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%);
          border: 1px solid #ff3b3b;
          margin: 40px 0;
        }

        .cta-block {
          margin-bottom: 60px;
          text-align: center;
        }

        .power-badge, .danger-badge {
          background: #ff3b3b;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          display: inline-block;
          margin-bottom: 20px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          animation: pulse 2s infinite;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 30px 0;
        }

        .stat-item {
          background: rgba(255, 59, 59, 0.1);
          border: 1px solid #ff3b3b;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
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
          background: rgba(255, 59, 59, 0.05);
          border: 1px solid rgba(255, 59, 59, 0.2);
          padding: 25px;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .mega-benefit:hover {
          transform: translateY(-5px);
          background: rgba(255, 59, 59, 0.1);
        }

        .mega-benefit h3 {
          color: #ff3b3b;
          margin-bottom: 15px;
          font-size: 1.2rem;
        }

        .mega-benefit p {
          color: #888;
          font-size: 0.9rem;
        }

        .warning-wrapper {
          text-align: center;
          background: rgba(255, 59, 59, 0.1);
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 30px;
        }

        .stock-alert {
          font-size: 1.2rem;
          color: #ff3b3b;
          margin-top: 20px;
          font-weight: bold;
        }

        .highlight {
          background: #ff3b3b;
          color: white;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .danger-pulse {
          animation: dangerPulse 2s infinite;
        }

        @keyframes dangerPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 59, 59, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(255, 59, 59, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 59, 59, 0);
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

        .exposed-truth {
          padding: 60px 20px;
          background: rgba(0, 0, 0, 0.8);
          margin: 40px 0;
        }

        .truth-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .truth-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
        }

        .truth-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
          display: block;
        }

        .testimonials {
          padding: 60px 20px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 15px;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .testimonial-header img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .verified {
          color: #2ecc71;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .truth-grid,
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
        }

        .leaked-document {
          padding: 60px 20px;
          background: #111;
          position: relative;
          margin: 40px 0;
          border: 2px solid #ff3b3b;
        }

        .document-header {
          text-align: center;
          margin-bottom: 40px;
          position: relative;
        }

        .confidential-stamp {
          background: #ff3b3b;
          color: white;
          padding: 5px 15px;
          transform: rotate(-5deg);
          position: absolute;
          top: -30px;
          right: 50px;
          font-weight: bold;
          font-family: monospace;
          border: 2px solid white;
        }

        .memo-text {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 15px;
          font-family: monospace;
          position: relative;
          margin-bottom: 40px;
        }

        .memo-date, .memo-signature {
          color: #666;
          margin-top: 20px;
          font-style: italic;
        }

        .action-required {
          text-align: center;
          background: rgba(255, 59, 59, 0.1);
          padding: 30px;
          border-radius: 15px;
          margin-top: 40px;
        }

        .action-required h3 {
          color: #ff3b3b;
          margin-bottom: 20px;
          animation: pulse 2s infinite;
        }
      `}</style>
    </>
  );
} 