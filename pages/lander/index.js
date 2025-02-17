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
      { name: 'Michael R.', location: 'California', time: 'Just now', quantity: 3 },
      { name: 'James S.', location: 'New York', time: '2 minutes ago', quantity: 1 },
      { name: 'Robert K.', location: 'Texas', time: '4 minutes ago', quantity: 6 },
      { name: 'David M.', location: 'Florida', time: '3 minutes ago', quantity: 3 },
      { name: 'William P.', location: 'Arizona', time: '1 minute ago', quantity: 1 }
    ];

    const showRandomPurchase = () => {
      const buyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentBuyer(buyer);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    };

    const interval = setInterval(showRandomPurchase, 45000);
    showRandomPurchase(); // Show first notification immediately
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Brazilian Wood™ 2.0 | The Evolution of Male Enhancement</title>
        <meta name="description" content="Experience the next evolution of Brazilian Wood™. Now 3x more powerful with faster activation and longer duration." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>

      <div className="landing-page">
        {/* Announcement Bar */}
        <div className="announcement-bar">
          <div className="container">
            <div className="urgent-message">
              <span className="alert-icon pulse-icon"><i className="fas fa-exclamation-triangle"></i></span>
              <span className="message">Limited Time: Original Formula Being Discontinued</span>
              <span className="divider">•</span>
              <span className="stock-status">
                <span className="pulse-dot"></span>
                Only <strong>{bottlesLeft}</strong> Brazilian Wood™ 2.0 Available
              </span>
              <span className="divider">•</span>
              <span className="visitors">
                <i className="fas fa-users"></i>
                <strong>{viewerCount}</strong> people viewing this offer
              </span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <header className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Experience the New <span className="highlight">Brazilian Wood™ 2.0</span></h1>
              <p className="hero-subtitle">The Evolution of Male Enhancement</p>
              
              <div className="product-comparison">
                <div className="product new">
                  <img src="/images/BrazlilianWood_1Bottle.png" alt="Brazilian Wood 2.0" className="bottle-image" />
                  <div className="product-label">NEW 2.0 Formula</div>
                </div>
              </div>
              
              <div className="hero-cta">
                <a href="https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307" className="cta-button pulse">
                  Get Brazilian Wood™ 2.0 Now
                  <span className="guarantee-text">Special Launch Price + 180-Day Guarantee</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Evolution Section */}
        <section className="upgrade-section">
          <div className="container">
            <div className="section-header">
              <span className="overline">THE EVOLUTION</span>
              <h2>Why We're Upgrading to <span className="highlight">Brazilian Wood™ 2.0</span></h2>
              <p className="subtitle">After extensive research and customer feedback, we've created our most powerful formula ever</p>
            </div>
            
            <div className="evolution-grid">
              <div className="evolution-card">
                <div className="icon-wrapper">
                  <i className="fas fa-flask"></i>
                </div>
                <h3>Advanced Formula</h3>
                <p>Enhanced bioavailability for faster absorption and longer-lasting results</p>
              </div>
              <div className="evolution-card">
                <div className="icon-wrapper">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>3x More Powerful</h3>
                <p>Improved potency with our new proprietary blend of ingredients</p>
              </div>
              <div className="evolution-card">
                <div className="icon-wrapper">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Faster Acting</h3>
                <p>Reduced activation time with our new delivery system</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Comparison */}
        <section className="benefits-section">
          <div className="container">
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
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="quick-comparison">
          <div className="container">
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
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="container">
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
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="guarantee-section">
          <div className="container">
            <div className="guarantee-content">
              <div className="guarantee-seal">
                <img src="/images/180days.png" alt="180 Day Money Back Guarantee" />
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
                <img src="/images/money-back.png" alt="Money Back Guarantee" />
              </div>
            </div>
          </div>
        </section>

        {/* Purchase Notification Popup */}
        {showNotification && currentBuyer && (
          <div className="social-proof-popup show">
            <div className="popup-inner">
              <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 50)}.jpg`} alt="Buyer" className="buyer-avatar" />
              <div className="popup-content">
                <p className="buyer-name">
                  <strong>{currentBuyer.name}</strong> from {currentBuyer.location}
                </p>
                <p className="purchase-info">
                  Just purchased {currentBuyer.quantity} {currentBuyer.quantity === 1 ? 'bottle' : 'bottles'} of Brazilian Wood™ 2.0
                </p>
                <span className="time-ago">{currentBuyer.time}</span>
              </div>
            </div>
          </div>
        )}

        {/* Mid-page CTA */}
        <div className="mid-page-cta">
          <div className="container">
            <div className="cta-wrapper">
              <h3>Ready to Experience the Power of 2.0?</h3>
              <p className="urgency-text">Limited Stock Available at Special Launch Price</p>
              <a href="https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307" className="cta-button pulse">
                Get Brazilian Wood™ 2.0 Now
                <span className="guarantee-text">Risk-Free with 180-Day Guarantee</span>
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

          :root {
            --primary-gradient: linear-gradient(135deg, #2C3E50, #3498db);
            --accent-gradient: linear-gradient(45deg, #00ff88, #00cc6a);
            --warning-gradient: linear-gradient(135deg, #ff416c, #ff4b2b);
            --dark-blue: #2C3E50;
            --light-blue: #3498db;
            --success-green: #00ff88;
            --warning-red: #ff416c;
            --bg-light: #f8fafc;
            --text-dark: #2C3E50;
            --text-light: #ffffff;
          }

          /* Base Styles */
          .landing-page {
            font-family: 'Montserrat', sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
            width: 100%;
            position: relative;
            background: #1a1a1a;
            color: #fff;
          }

          .container {
            width: 100%;
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          /* Announcement Bar */
          .announcement-bar {
            background: linear-gradient(90deg, #ff3a3a, #ff4e03);
            color: white;
            padding: 12px 0;
            font-size: 15px;
            font-weight: 600;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(255, 62, 3, 0.3);
          }

          .urgent-message {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            text-align: center;
          }

          .alert-icon {
            color: #fff;
            animation: pulse 2s infinite;
          }

          .pulse-icon {
            display: inline-block;
            animation: pulse 1.5s infinite;
          }

          .divider {
            color: rgba(255, 255, 255, 0.5);
            font-size: 12px;
          }

          .stock-status {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(0,0,0,0.15);
            padding: 4px 12px;
            border-radius: 20px;
          }

          /* Hero Section */
          .hero {
            padding: 120px 0 80px;
            background: linear-gradient(135deg, #1a1a1a, #2C3E50);
            text-align: center;
          }

          .hero-content {
            max-width: 900px;
            margin: 0 auto;
          }

          .hero h1 {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
          }

          .highlight {
            color: #ff4e03;
          }

          .hero-subtitle {
            font-size: 20px;
            margin-bottom: 30px;
          }

          /* Product Comparison */
          .product-comparison {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 40px auto;
            padding: 30px;
            background: rgba(255,255,255,0.05);
            border-radius: 20px;
            max-width: 500px;
          }

          .product.new {
            position: relative;
            text-align: center;
          }

          .product.new::after {
            content: 'NEW';
            position: absolute;
            top: -15px;
            right: -15px;
            background: #ff4e03;
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: bold;
          }

          .bottle-image {
            height: clamp(250px, 50vw, 400px);
            width: auto;
            object-fit: contain;
            transition: transform 0.3s ease;
            filter: none !important;
          }

          /* CTA Button */
          .cta-button {
            background: linear-gradient(45deg, #ff4e03, #ff6a2b);
            color: #fff;
            padding: 20px 40px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-size: 18px;
            margin-top: 30px;
            box-shadow: 0 4px 15px rgba(255, 78, 3, 0.3);
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 78, 3, 0.4);
          }

          .guarantee-text {
            display: block;
            font-size: 14px;
            margin-top: 8px;
            font-weight: normal;
            opacity: 0.9;
          }

          /* Evolution Section */
          .upgrade-section {
            padding: 80px 0;
            background: #222;
            color: #fff;
          }

          .section-header {
            text-align: center;
            margin-bottom: 60px;
          }

          .overline {
            color: #ff4e03;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 2px;
            text-transform: uppercase;
            display: block;
            margin-bottom: 10px;
          }

          .evolution-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }

          .evolution-card {
            background: rgba(255,255,255,0.05);
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .evolution-card:hover {
            transform: translateY(-5px);
          }

          .icon-wrapper {
            width: 80px;
            height: 80px;
            background: var(--primary-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
          }

          .icon-wrapper i {
            font-size: 32px;
            color: white;
          }

          /* Benefits Section */
          .benefits-section {
            padding: 80px 0;
            background: #1a1a1a;
          }

          .benefits-comparison {
            max-width: 800px;
            margin: 40px auto;
          }

          .comparison-row {
            background: rgba(255,255,255,0.05);
            padding: 20px 30px;
            border-radius: 10px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .metric {
            display: flex;
            align-items: center;
            gap: 15px;
            font-weight: 500;
            font-size: 18px;
          }

          .metric i {
            font-size: 24px;
            color: #ff4e03;
            width: 24px;
            text-align: center;
          }

          .values {
            display: flex;
            align-items: center;
            gap: 30px;
            min-width: 300px;
            justify-content: flex-end;
          }

          .old-value, .new-value {
            display: flex;
            align-items: center;
            gap: 8px;
            min-width: 120px;
          }

          .product {
            color: rgba(255,255,255,0.6);
            font-size: 14px;
          }

          .time {
            font-size: 18px;
            font-weight: 600;
          }

          .separator {
            color: #ff4e03;
            display: flex;
            align-items: center;
            font-size: 20px;
          }

          .new-value {
            color: #ff4e03;
            font-weight: 600;
          }

          .new-value .time {
            color: #ff4e03;
          }

          /* Quick Comparison */
          .quick-comparison {
            padding: 80px 0;
            background: #222;
          }

          .comparison-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            max-width: 1000px;
            margin: 40px auto;
          }

          .comparison-card {
            background: rgba(255,255,255,0.05);
            padding: 30px;
            border-radius: 15px;
            color: #fff;
          }

          .comparison-card.new {
            background: rgba(255,78,3,0.1);
            border: 2px solid #ff4e03;
          }

          .comparison-card ul {
            list-style: none;
            padding: 0;
            margin: 20px 0 0;
          }

          .comparison-card li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            font-size: 16px;
          }

          .comparison-card.old li i {
            color: var(--text-dark);
          }

          .comparison-card.new li i {
            color: #ff4e03;
          }

          /* Testimonials */
          .testimonials {
            padding: 80px 0;
            background: #1a1a1a;
          }

          .testimonial-slider {
            max-width: 1000px;
            margin: 40px auto;
            position: relative;
          }

          .testimonial-track {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            max-width: 1000px;
            margin: 40px auto;
          }

          .testimonial-card {
            background: rgba(255,255,255,0.05);
            padding: 30px;
            border-radius: 15px;
            position: relative;
          }

          .testimonial-badge {
            position: absolute;
            top: -12px;
            left: 30px;
            background: #ff4e03;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
          }

          /* Trust Seals Styling */
          .seals-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            max-width: 800px;
            margin: 40px auto 0;
            padding: 20px;
            background: transparent;
          }

          .seals-grid img {
            width: 100%;
            max-width: 120px;
            height: auto;
            margin: 0 auto;
            transition: transform 0.3s ease;
            filter: invert(1) !important;
            -webkit-filter: invert(1) !important;
            background: transparent !important;
          }

          .guarantee-seal {
            position: relative;
            z-index: 2;
          }

          .guarantee-seal img {
            width: 200px;
            height: auto;
            display: block;
            margin: 0 auto;
            filter: invert(1) !important;
            -webkit-filter: invert(1) !important;
            background: transparent !important;
          }

          /* Guarantee Section */
          .guarantee-section {
            padding: 80px 0;
            background: #222;
            position: relative;
            z-index: 1;
          }

          .guarantee-content {
            display: flex;
            align-items: center;
            gap: 40px;
            max-width: 800px;
            margin: 0 auto;
            padding: 30px;
            background: rgba(255,255,255,0.03);
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.1);
          }

          .trust-seals {
            margin-top: 60px;
            position: relative;
            z-index: 2;
            background: transparent;
          }

          .guarantee-points {
            list-style: none;
            padding: 0;
            margin: 20px 0 0;
          }

          .guarantee-points li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            font-size: 18px;
            color: #fff;
          }

          .guarantee-points li i {
            color: #ff4e03;
          }

          /* Social Proof Popup */
          .social-proof-popup {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
          }

          .social-proof-popup.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .popup-inner {
            background: #fff;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            gap: 15px;
            max-width: 300px;
          }

          .buyer-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
          }

          .popup-content {
            flex: 1;
          }

          .buyer-name {
            color: #333;
            font-size: 14px;
            margin: 0;
            line-height: 1.4;
          }

          .purchase-info {
            color: #ff4e03;
            font-size: 13px;
            margin: 2px 0;
            font-weight: 500;
          }

          .time-ago {
            color: #999;
            font-size: 12px;
            display: block;
            margin-top: 4px;
          }

          /* CTA Sections */
          .mid-page-cta {
            padding: 80px 0;
            background: linear-gradient(135deg, #1a1a1a, #2C3E50);
            text-align: center;
          }

          .cta-wrapper {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            background: rgba(255,255,255,0.03);
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.1);
          }

          .cta-wrapper h3 {
            font-size: 32px;
            margin-bottom: 20px;
            color: #fff;
          }

          .urgency-text {
            color: #ff4e03;
            font-size: 18px;
            margin-bottom: 30px;
            font-weight: 500;
          }

          /* Mobile Optimizations */
          @media (max-width: 768px) {
            .container {
              padding: 0 15px;
            }

            .product-comparison {
              flex-direction: column;
              padding: 20px;
            }

            .comparison-row {
              flex-direction: column;
              text-align: center;
              gap: 15px;
            }

            .values {
              min-width: unset;
              width: 100%;
              justify-content: space-between;
              gap: 15px;
            }

            .old-value, .new-value {
              min-width: unset;
              flex-direction: column;
              gap: 4px;
            }

            .comparison-row {
              padding: 20px;
            }

            .social-proof-popup {
              left: 10px;
              right: 10px;
              bottom: 10px;
            }
            
            .popup-inner {
              max-width: none;
            }

            .seals-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
              padding: 15px;
            }
            
            .seals-grid img {
              max-width: 100px;
            }

            .announcement-bar {
              font-size: 13px;
              padding: 8px 0;
            }

            .urgent-message {
              gap: 8px;
            }

            .stock-status {
              padding: 3px 8px;
              font-size: 12px;
            }

            .cta-wrapper {
              padding: 30px 20px;
              margin: 0 15px;
            }

            .cta-wrapper h3 {
              font-size: 24px;
            }

            .urgency-text {
              font-size: 16px;
            }
          }

          @media (max-width: 480px) {
            .urgent-message {
              font-size: 12px;
              gap: 8px;
            }

            .hero {
              padding: 100px 0 60px;
            }

            .product-comparison {
              margin: 20px auto;
            }

            .evolution-card {
              padding: 20px;
            }

            .metric {
              font-size: 16px;
            }

            .time {
              font-size: 16px;
            }

            .values {
              gap: 10px;
            }

            .separator {
              font-size: 16px;
            }
          }
        `}</style>
      </div>
    </>
  );
} 