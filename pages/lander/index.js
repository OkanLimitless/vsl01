import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [viewerCount, setViewerCount] = useState(387);
  const [bottlesLeft, setStockLeft] = useState(37);
  const [showNotification, setShowNotification] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(null);

  // Viewer count effect
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewerCount(prev => {
        if (Math.random() < 0.3) {
          const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
          return Math.max(350, Math.min(450, prev + change));
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(viewerInterval);
  }, []);

  // Stock counter effect
  useEffect(() => {
    const stockInterval = setInterval(() => {
      setStockLeft(prev => {
        if (prev > 15 && Math.random() < 0.2) return prev - 1;
        return prev;
      });
    }, 15000);

    return () => clearInterval(stockInterval);
  }, []);

  // Purchase notifications effect
  useEffect(() => {
    const buyers = [
      { name: 'Michael R.', location: 'California', product: 'Premium Package', time: 'Just now' },
      { name: 'James S.', location: 'New York', product: 'Standard Package', time: '2 minutes ago' },
      { name: 'Robert K.', location: 'Texas', product: 'Basic Package', time: '4 minutes ago' }
    ];

    const showRandomPurchase = () => {
      const buyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentBuyer(buyer);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    };

    const interval = setInterval(showRandomPurchase, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Brazilian Wood™ 2.0 | Next-Generation Male Enhancement Formula</title>
        <meta name="description" content="Introducing Brazilian Wood™ 2.0 - The revolutionary upgrade to our best-selling formula. 3x more powerful than traditional solutions with breakthrough natural technology." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>

      <div className="landing-page">
        {/* New Version Banner */}
        <div className="announcement-bar">
          <div className="urgent-message">
            <span className="alert-icon"><i className="fas fa-exclamation-circle"></i></span>
            <span className="message">URGENT: Original Formula Being Discontinued</span>
            <span className="divider">|</span>
            <span className="date">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            <span className="divider">|</span>
            <span className="stock-status">
              <span className="pulse-dot"></span>
              <span className="live-label">LIVE:</span>
              <strong>{bottlesLeft}</strong> Brazilian Wood™ 2.0 bottles remaining
              <span className="divider">|</span>
              <span className="visitors">
                <i className="fas fa-users"></i>
                <strong>{viewerCount}</strong> people viewing
              </span>
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Experience the New <span className="highlight">Brazilian Wood™ 2.0</span></h1>
            <p className="hero-subtitle">3x More Powerful | Faster Acting | Longer Lasting</p>
            
            <div className="product-comparison">
              <div className="product old">
                <img src="https://www.braziliansecretwood.com/images/BrazlilianWood_1Bottle.png" alt="Original Formula" className="bottle-image" />
                <div className="product-label">Original Formula</div>
              </div>
              <div className="transition-arrow">
                <i className="fas fa-arrow-right"></i>
                <span>UPGRADED</span>
              </div>
              <div className="product new">
                <img src="https://www.braziliansecretwood.com/images/BrazlilianWood_1Bottle.png" alt="Brazilian Wood 2.0" className="bottle-image" />
                <div className="product-label">NEW 2.0 Formula</div>
              </div>
            </div>
            
            <div className="hero-cta">
              <button 
                className="cta-button pulse"
                onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
              >
                Get Brazilian Wood™ 2.0 Now
                <span className="guarantee-text">Special Launch Price + 180-Day Guarantee</span>
              </button>
            </div>
          </div>
        </section>

        {/* Quick Comparison Section */}
        <section className="quick-comparison">
          <h2>Why Upgrade to Brazilian Wood™ 2.0?</h2>
          <div className="comparison-cards">
            <div className="comparison-card old">
              <div className="product-label">Original Formula</div>
              <ul>
                <li><i className="fas fa-check"></i> Natural Ingredients</li>
                <li><i className="fas fa-check"></i> 24hr Duration</li>
                <li><i className="fas fa-check"></i> 60min Activation</li>
                <li><i className="fas fa-times"></i> Standard Absorption</li>
                <li><i className="fas fa-times"></i> Basic Potency</li>
              </ul>
            </div>
            <div className="comparison-card new">
              <div className="product-label">NEW 2.0 Formula</div>
              <ul>
                <li><i className="fas fa-check"></i> Enhanced Natural Formula</li>
                <li><i className="fas fa-check"></i> 72hr Duration</li>
                <li><i className="fas fa-check"></i> 30min Activation</li>
                <li><i className="fas fa-check"></i> Advanced Absorption</li>
                <li><i className="fas fa-check"></i> 3x More Potent</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Comparison Section */}
        <section className="benefits-section">
          <div className="benefits-header">
            <h2>Experience the Difference</h2>
          </div>
          
          <div className="benefits-comparison">
            <div className="comparison-row">
              <div className="metric">
                <i className="fas fa-bolt"></i>
                <span>Activation Time</span>
              </div>
              <div className="values">
                <div className="old-value">
                  <span className="product">Original</span>
                  <span className="time">60 min</span>
                </div>
                <div className="separator">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="new-value">
                  <span className="product">2.0</span>
                  <span className="time">30 min</span>
                </div>
              </div>
            </div>

            <div className="comparison-row">
              <div className="metric">
                <i className="fas fa-hourglass-half"></i>
                <span>Duration</span>
              </div>
              <div className="values">
                <div className="old-value">
                  <span className="product">Original</span>
                  <span className="time">24 hrs</span>
                </div>
                <div className="separator">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="new-value">
                  <span className="product">2.0</span>
                  <span className="time">72 hrs</span>
                </div>
              </div>
            </div>

            <div className="comparison-row">
              <div className="metric">
                <i className="fas fa-chart-line"></i>
                <span>Potency</span>
              </div>
              <div className="values">
                <div className="old-value">
                  <span className="product">Original</span>
                  <span className="time">100%</span>
                </div>
                <div className="separator">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="new-value">
                  <span className="product">2.0</span>
                  <span className="time">300%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>Real Users Share Their Experience</h2>
          
          <div className="testimonial-slider">
            <div className="testimonial-track">
              <div className="testimonial-card">
                <div className="testimonial-badge">Verified User</div>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John D." className="testimonial-avatar" />
                <div className="stars">★★★★★</div>
                <blockquote>
                  "I was skeptical about switching from the original formula, but wow! The difference was noticeable from day one. Never going back!"
                </blockquote>
                <div className="user-info">
                  <cite>John D., 42</cite>
                  <span className="location">New York, USA</span>
                </div>
                <div className="verification-tags">
                  <span className="tag"><i className="fas fa-check"></i> Verified Purchase</span>
                  <span className="tag"><i className="fas fa-star"></i> Top Reviewer</span>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-badge">Recent Switch</div>
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Mike R." className="testimonial-avatar" />
                <div className="stars">★★★★★</div>
                <blockquote>
                  "Used the original for years, but 2.0 is on another level. Faster acting and lasts way longer!"
                </blockquote>
                <div className="user-info">
                  <cite>Mike R., 38</cite>
                  <span className="location">Texas, USA</span>
                </div>
                <div className="verification-tags">
                  <span className="tag"><i className="fas fa-check"></i> Verified Purchase</span>
                  <span className="tag"><i className="fas fa-star"></i> Top Reviewer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="guarantee-section">
          <div className="guarantee-content">
            <div className="guarantee-seal">
              <img src="/images/180-day-guarantee.png" alt="180 Day Money Back Guarantee" />
            </div>
            <div className="guarantee-text">
              <h2>180-Day Money Back Guarantee</h2>
              <div className="guarantee-points">
                <li><i className="fas fa-check"></i> Try Brazilian Wood™ 2.0 Risk-Free</li>
                <li><i className="fas fa-check"></i> Full Refund if Not Satisfied</li>
                <li><i className="fas fa-check"></i> No Questions Asked</li>
              </div>
            </div>
          </div>
          <div className="trust-seals">
            <div className="seals-grid">
              <img src="/images/fda-registered.png" alt="FDA Registered Facility" />
              <img src="/images/gmp-certified.png" alt="GMP Certified" />
              <img src="/images/secure-payment.png" alt="Secure Payment" />
              <img src="/images/satisfaction-guaranteed.png" alt="Satisfaction Guaranteed" />
            </div>
          </div>
        </section>

        {/* Purchase Notification Popup */}
        {showNotification && currentBuyer && (
          <div className="social-proof-popup show">
            <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 50)}.jpg`} alt="Buyer" className="buyer-avatar" />
            <div className="popup-content">
              <p><strong>{currentBuyer.name}</strong> from {currentBuyer.location}</p>
              <p>Just upgraded to Brazilian Wood™ 2.0</p>
              <span className="time-ago">Just now</span>
            </div>
          </div>
        )}

        <style jsx>{`
          /* Base Styles */
          .landing-page {
            font-family: 'Montserrat', sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
            width: 100%;
            position: relative;
            padding-top: 36px;
          }

          /* Announcement Bar */
          .announcement-bar {
            background: #ff3a3a;
            color: white;
            padding: 8px 0;
            font-weight: 600;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
          }

          .urgent-message {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 8px;
            font-size: 13px;
          }

          .stock-status {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 3px 8px;
            background: rgba(0,0,0,0.2);
            border-radius: 4px;
          }

          /* Hero Section */
          .hero {
            background: linear-gradient(135deg, #2C3E50, #1a1a1a);
            color: #fff;
            padding: 60px 20px;
            text-align: center;
          }

          .hero-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .hero h1 {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .highlight {
            color: #ff4e03;
          }

          /* Product Comparison */
          .product-comparison {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin: 40px auto;
            padding: 20px;
            background: rgba(255,255,255,0.05);
            border-radius: 20px;
          }

          .bottle-image {
            height: 250px;
            width: auto;
            object-fit: contain;
            transition: transform 0.3s ease;
          }

          .product.old .bottle-image {
            opacity: 0.7;
            transform: scale(0.85);
          }

          /* Benefits Comparison */
          .benefits-section {
            padding: 40px 20px;
            background: #f8f9fa;
          }

          .comparison-row {
            background: white;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }

          /* Testimonials */
          .testimonial-card {
            background: white;
            padding: 20px;
            border-radius: 15px;
            margin: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          .testimonial-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-bottom: 15px;
          }

          /* Social Proof Popup */
          .social-proof-popup {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 1000;
            transform: translateY(100%);
            transition: transform 0.3s ease;
          }

          .social-proof-popup.show {
            transform: translateY(0);
          }

          .buyer-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

          /* Mobile Optimizations */
          @media (max-width: 768px) {
            .hero h1 {
              font-size: 28px;
            }

            .product-comparison {
              flex-direction: column;
            }

            .bottle-image {
              height: 200px;
            }

            .comparison-row {
              flex-direction: column;
              text-align: center;
            }

            .values {
              margin-top: 15px;
            }

            .testimonial-card {
              margin: 10px;
              padding: 15px;
            }

            .social-proof-popup {
              left: 10px;
              right: 10px;
              bottom: 10px;
            }
          }

          @media (max-width: 480px) {
            .hero h1 {
              font-size: 24px;
            }

            .bottle-image {
              height: 180px;
            }

            .urgent-message {
              font-size: 11px;
            }

            .stock-status {
              padding: 2px 6px;
            }
          }
        `}</style>
      </div>
    </>
  );
} 