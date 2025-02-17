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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <div className="landing-page">
        {/* New Version Banner */}
        <div className="version-banner">
          <span className="new-badge">NEW</span>
          <span className="version-text">Brazilian Wood™ 2.0</span>
          <span className="launch-badge">Just Launched</span>
        </div>

        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar-content">
            <div className="live-counter">
              <div className="pulse-dot"></div>
              <span>{viewerCount} people viewing the new formula</span>
            </div>
            <div className="stock-status">
              <span>Limited Launch Stock: {bottlesLeft} units remaining</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="trust-badges">
            <div className="badge">
              <i className="fas fa-flask"></i>
              <span>New 2024 Formula</span>
            </div>
            <div className="badge">
              <i className="fas fa-chart-line"></i>
              <span>3x More Effective</span>
            </div>
            <div className="badge">
              <i className="fas fa-shield-alt"></i>
              <span>Premium Quality</span>
            </div>
          </div>

          <h1>Introducing The Next Evolution in Male Enhancement</h1>
          <h2>Brazilian Wood™ 2.0 - Now 3x More Powerful Than Traditional Solutions</h2>
          
          <div className="hero-content">
            <div className="product-comparison">
              <div className="old-product">
                <img src="https://www.braziliansecretwood.com/images/BrazlilianWood_1Bottle.png" alt="Original Formula" className="faded" />
                <span className="label">Original Formula</span>
              </div>
              <div className="upgrade-arrow">
                <i className="fas fa-arrow-right"></i>
                <span>UPGRADED</span>
              </div>
              <div className="new-product">
                <img src="https://www.braziliansecretwood.com/images/BrazlilianWood_1Bottle.png" alt="Brazilian Wood 2.0" />
                <span className="label">NEW 2.0 Formula</span>
                <span className="new-badge">NEW</span>
              </div>
            </div>

            <div className="hero-benefits">
              <h3>Breakthrough Improvements in Version 2.0:</h3>
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>3x More Potent Formula</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>Faster Acting - Works in 30 Minutes</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>Longer Lasting - Up to 72 Hours</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>Enhanced Absorption Technology</span>
              </div>
              <button 
                className="hero-cta-button" 
                onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
              >
                Try The New Formula Today
                <span className="guarantee-text">Special Launch Price + 180-Day Guarantee</span>
              </button>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="comparison-section">
          <h2>Why Brazilian Wood™ 2.0 Outperforms Everything Else</h2>
          <div className="comparison-grid">
            <div className="comparison-card traditional">
              <h3>Traditional Solutions</h3>
              <ul>
                <li><i className="fas fa-times"></i> Expensive ($70+ per pill)</li>
                <li><i className="fas fa-times"></i> Prescription Required</li>
                <li><i className="fas fa-times"></i> Side Effects</li>
                <li><i className="fas fa-times"></i> Short Duration</li>
                <li><i className="fas fa-times"></i> Synthetic Ingredients</li>
              </ul>
              <div className="price">
                <span className="amount">$70+</span>
                <span className="unit">per dose</span>
              </div>
            </div>
            <div className="comparison-card original">
              <h3>Original Formula</h3>
              <ul>
                <li><i className="fas fa-check"></i> Natural Ingredients</li>
                <li><i className="fas fa-check"></i> No Prescription</li>
                <li><i className="fas fa-check"></i> No Side Effects</li>
                <li><i className="fas fa-check"></i> 24hr Duration</li>
                <li><i className="fas fa-check"></i> Affordable</li>
              </ul>
              <div className="price">
                <span className="amount">$2.30</span>
                <span className="unit">per dose</span>
              </div>
            </div>
            <div className="comparison-card new-version">
              <div className="best-value">BEST VALUE</div>
              <h3>Brazilian Wood™ 2.0</h3>
              <ul>
                <li><i className="fas fa-check"></i> 3x More Potent</li>
                <li><i className="fas fa-check"></i> Enhanced Formula</li>
                <li><i className="fas fa-check"></i> 72hr Duration</li>
                <li><i className="fas fa-check"></i> Faster Acting</li>
                <li><i className="fas fa-check"></i> Premium Quality</li>
              </ul>
              <div className="price">
                <span className="amount">$1.63</span>
                <span className="unit">per dose</span>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Backing Section */}
        <section className="science-section">
          <h2>Clinically Proven Results with New Formula</h2>
          <div className="research-grid">
            <div className="research-item">
              <div className="stat">327%</div>
              <p>More Effective Than Traditional Pills*</p>
            </div>
            <div className="research-item">
              <div className="stat">30min</div>
              <p>Average Time to Take Effect*</p>
            </div>
            <div className="research-item">
              <div className="stat">72hr</div>
              <p>Duration of Enhancement*</p>
            </div>
          </div>
          <p className="study-note">*Based on clinical study comparing Brazilian Wood™ 2.0 vs leading prescription medications</p>
        </section>

        {/* Premium Ingredients Section */}
        <section className="ingredients-section">
          <h2>Enhanced Premium Formula</h2>
          <div className="ingredients-grid">
            <div className="ingredient-card">
              <div className="potency-badge">3x More Potent</div>
              <img src="/images/ingredient1.jpg" alt="Enhanced Tribulus" />
              <h3>Enhanced Tribulus Terrestris</h3>
              <p>Now with 300% higher concentration for maximum effectiveness</p>
            </div>
            <div className="ingredient-card">
              <div className="potency-badge">New Addition</div>
              <img src="/images/ingredient2.jpg" alt="Absorption Complex" />
              <h3>Absorption Complex</h3>
              <p>Revolutionary compound that increases bioavailability by 200%</p>
            </div>
            <div className="ingredient-card">
              <div className="potency-badge">Upgraded</div>
              <img src="/images/ingredient3.jpg" alt="Premium Tongkat Ali" />
              <h3>Premium Tongkat Ali</h3>
              <p>Higher grade extract for longer-lasting results</p>
            </div>
          </div>
        </section>

        {/* Expert Endorsement Section */}
        <section className="experts-section">
          <h2>Trusted by Health Professionals</h2>
          <div className="expert-testimonials">
            <div className="expert-card">
              <img src="/images/doctor1.jpg" alt="Dr. James Wilson" />
              <div className="expert-info">
                <h3>Dr. James Wilson, MD</h3>
                <span>Board Certified Urologist</span>
                <p>"As a medical professional, I'm impressed by the clinical research behind Brazilian Wood™. The results speak for themselves."</p>
              </div>
            </div>
            <div className="expert-card">
              <img src="/images/doctor2.jpg" alt="Dr. Sarah Chen" />
              <div className="expert-info">
                <h3>Dr. Sarah Chen, Ph.D.</h3>
                <span>Clinical Research Director</span>
                <p>"The natural formula shows remarkable efficacy in clinical trials, with an excellent safety profile."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="guarantee-section">
          <div className="guarantee-content">
            <div className="guarantee-badge">
              <span>180-DAY</span>
              <span>GUARANTEE</span>
            </div>
            <div className="guarantee-text">
              <h2>Our Promise to You</h2>
              <p>We're so confident in Brazilian Wood™ that we offer a full 180-day money-back guarantee. If you're not completely satisfied with your results, simply return the bottles (even if empty) for a full refund.</p>
              <ul>
                <li>No Questions Asked</li>
                <li>Full Refund Guaranteed</li>
                <li>Premium Customer Support</li>
              </ul>
            </div>
          </div>
          <button 
            className="main-cta-button" 
            onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
          >
            Try Risk-Free Today
            <span>180-Day Money-Back Guarantee</span>
          </button>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-badges">
              <img src="/images/fda-registered.png" alt="FDA Registered Facility" />
              <img src="/images/gmp-certified.png" alt="GMP Certified" />
              <img src="/images/secure-payment.png" alt="Secure Payment" />
            </div>
            <p className="copyright">© 2024 Brazilian Wood™ - All Rights Reserved</p>
            <div className="footer-links">
              <a href="/terms">Terms of Use</a>
              <span className="divider">|</span>
              <a href="/privacy">Privacy Policy</a>
              <span className="divider">|</span>
              <a href="/contact">Contact Us</a>
            </div>
            <p className="disclaimer">
              *These statements have not been evaluated by the Food and Drug Administration. 
              This product is not intended to diagnose, treat, cure, or prevent any disease. 
              Results may vary. For best results, combine with a healthy diet and exercise routine.
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        /* Base Styles */
        .landing-page {
          background: #fff;
          color: #333;
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }

        .landing-page::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.97) 100%);
          z-index: -1;
        }

        /* New Version Banner */
        .version-banner {
          background: linear-gradient(90deg, #2c5282, #1a365d);
          color: white;
          padding: 8px 0;
          text-align: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1001;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }

        .new-badge {
          background: #ff3b3b;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 0.8rem;
        }

        .version-text {
          font-weight: 600;
          font-size: 1rem;
        }

        .launch-badge {
          background: rgba(255, 255, 255, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
        }

        /* Updated Top Bar */
        .top-bar {
          top: 36px;
        }

        /* Product Comparison */
        .product-comparison {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-bottom: 30px;
        }

        .old-product img {
          opacity: 0.5;
          filter: grayscale(1);
        }

        .upgrade-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #2c5282;
        }

        .upgrade-arrow i {
          font-size: 2rem;
          margin-bottom: 5px;
        }

        .upgrade-arrow span {
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Comparison Section */
        .comparison-section {
          padding: 80px 20px;
          background: #f8f9fa;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 40px auto;
        }

        .comparison-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          position: relative;
        }

        .comparison-card.new-version {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(44, 82, 130, 0.1);
          border: 2px solid #2c5282;
        }

        .best-value {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #2c5282;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .comparison-card h3 {
          color: #2c5282;
          font-size: 1.3rem;
          margin-bottom: 20px;
          text-align: center;
        }

        .comparison-card ul {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }

        .comparison-card li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
          color: #666;
        }

        .comparison-card .fa-times {
          color: #ff3b3b;
        }

        .comparison-card .fa-check {
          color: #2c5282;
        }

        .price {
          text-align: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }

        .price .amount {
          font-size: 2rem;
          color: #2c5282;
          font-weight: 700;
        }

        .price .unit {
          display: block;
          color: #666;
          font-size: 0.9rem;
        }

        /* Ingredient Cards Update */
        .ingredient-card {
          position: relative;
          padding-top: 50px;
        }

        .potency-badge {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #2c5282;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Hero Section */
        .hero {
          padding: 120px 20px 60px;
          text-align: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
          position: relative;
          overflow: hidden;
        }

        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          position: relative;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2c5282;
          background: white;
          padding: 12px 24px;
          border-radius: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .badge:hover {
          transform: translateY(-2px);
        }

        .badge i {
          font-size: 1.2rem;
          color: #2c5282;
        }

        .hero h1 {
          font-size: 2.5rem;
          color: #2c5282;
          margin: 0 auto 20px;
          max-width: 800px;
          line-height: 1.2;
          font-weight: 700;
        }

        .hero h2 {
          color: #666;
          font-size: 1.2rem;
          margin-bottom: 40px;
          font-weight: 500;
        }

        .hero-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .product-image {
          flex: 0 0 300px;
        }

        .product-image img {
          width: 100%;
          height: auto;
          max-width: 300px;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
          transition: transform 0.3s ease;
        }

        .product-image:hover img {
          transform: translateY(-10px);
        }

        /* Benefits Section */
        .hero-benefits {
          flex: 0 0 400px;
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          color: #333;
          font-size: 1.1rem;
        }

        .benefit-item i {
          color: #2c5282;
          font-size: 1.2rem;
        }

        /* CTA Buttons */
        .hero-cta-button, .main-cta-button {
          background: linear-gradient(135deg, #2c5282 0%, #1a365d 100%);
          color: white;
          border: none;
          padding: 20px 30px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          margin-top: 20px;
          font-size: 1.1rem;
          position: relative;
          overflow: hidden;
        }

        .hero-cta-button:hover, .main-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(44, 82, 130, 0.2);
        }

        .guarantee-text {
          font-size: 0.9rem;
          opacity: 0.9;
          display: block;
          margin-top: 8px;
        }

        /* Science Section */
        .science-section {
          padding: 80px 20px;
          background: #f8f9fa;
          text-align: center;
        }

        .science-section h2 {
          color: #2c5282;
          font-size: 2rem;
          margin-bottom: 40px;
          font-weight: 700;
        }

        .research-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 40px auto;
        }

        .research-item {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .research-item:hover {
          transform: translateY(-5px);
        }

        .stat {
          font-size: 3rem;
          color: #2c5282;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1;
        }

        .research-item p {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.4;
        }

        /* Ingredients Section */
        .ingredients-section {
          padding: 80px 20px;
          background: white;
        }

        .ingredients-section h2 {
          color: #2c5282;
          font-size: 2rem;
          margin-bottom: 40px;
          text-align: center;
          font-weight: 700;
        }

        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 40px auto;
        }

        .ingredient-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
          text-align: center;
        }

        .ingredient-card:hover {
          transform: translateY(-5px);
        }

        .ingredient-card img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 20px;
          border: 4px solid #f8f9fa;
        }

        .ingredient-card h3 {
          color: #2c5282;
          font-size: 1.3rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .ingredient-card p {
          color: #666;
          font-size: 1rem;
          line-height: 1.5;
        }

        /* Experts Section */
        .experts-section {
          padding: 80px 20px;
          background: #f8f9fa;
        }

        .experts-section h2 {
          color: #2c5282;
          font-size: 2rem;
          margin-bottom: 40px;
          text-align: center;
          font-weight: 700;
        }

        .expert-testimonials {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          max-width: 1000px;
          margin: 40px auto;
        }

        .expert-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          display: flex;
          gap: 20px;
          transition: transform 0.3s ease;
        }

        .expert-card:hover {
          transform: translateY(-5px);
        }

        .expert-card img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #f8f9fa;
        }

        .expert-info h3 {
          color: #2c5282;
          font-size: 1.2rem;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .expert-info span {
          color: #666;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 10px;
        }

        .expert-info p {
          color: #333;
          font-size: 1rem;
          line-height: 1.6;
          font-style: italic;
        }

        /* Guarantee Section */
        .guarantee-section {
          padding: 80px 20px;
          background: white;
          text-align: center;
        }

        .guarantee-content {
          max-width: 800px;
          margin: 0 auto 40px;
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .guarantee-badge {
          background: linear-gradient(135deg, #2c5282 0%, #1a365d 100%);
          color: white;
          padding: 20px;
          border-radius: 50%;
          width: 140px;
          height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          box-shadow: 0 10px 20px rgba(44, 82, 130, 0.2);
        }

        .guarantee-badge span:first-child {
          font-size: 1.8rem;
        }

        .guarantee-text {
          text-align: left;
        }

        .guarantee-text h2 {
          color: #2c5282;
          font-size: 2rem;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .guarantee-text p {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .guarantee-text ul {
          list-style: none;
          padding: 0;
        }

        .guarantee-text ul li {
          color: #333;
          font-size: 1.1rem;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .guarantee-text ul li:before {
          content: "✓";
          color: #2c5282;
          font-weight: bold;
        }

        /* Footer */
        .site-footer {
          background: linear-gradient(90deg, #1a1a1a, #2c3e50);
          color: white;
          padding: 60px 20px;
          position: relative;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .footer-badges {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .footer-badges img {
          height: 50px;
          filter: brightness(0.95);
          transition: transform 0.3s ease;
        }

        .footer-badges img:hover {
          transform: translateY(-3px);
        }

        .copyright {
          color: #fff;
          font-size: 1rem;
          margin-bottom: 20px;
        }

        .footer-links {
          margin: 20px 0;
        }

        .footer-links a {
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #2c5282;
        }

        .divider {
          color: #666;
          margin: 0 15px;
        }

        .disclaimer {
          color: #999;
          font-size: 0.8rem;
          max-width: 800px;
          margin: 20px auto 0;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-content {
            gap: 40px;
            padding: 30px;
          }

          .product-image {
            flex: 0 0 250px;
          }

          .hero-benefits {
            flex: 0 0 350px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 20px 40px;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero h2 {
            font-size: 1.1rem;
          }

          .trust-badges {
            gap: 20px;
          }

          .badge {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .research-grid,
          .ingredients-grid,
          .expert-testimonials {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .guarantee-content {
            flex-direction: column;
            text-align: center;
          }

          .guarantee-text {
            text-align: center;
          }

          .guarantee-text ul li {
            justify-content: center;
          }

          .expert-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-badges {
            gap: 20px;
          }

          .footer-badges img {
            height: 40px;
          }

          .comparison-grid {
            grid-template-columns: 1fr;
          }

          .comparison-card.new-version {
            transform: none;
          }

          .product-comparison {
            flex-direction: column;
          }

          .upgrade-arrow {
            transform: rotate(90deg);
          }
        }

        @media (max-width: 480px) {
          .hero h1 {
            font-size: 1.8rem;
          }

          .badge {
            width: 100%;
            justify-content: center;
          }

          .product-image {
            flex: 0 0 200px;
          }

          .stat {
            font-size: 2.5rem;
          }

          .guarantee-badge {
            width: 120px;
            height: 120px;
          }

          .footer-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .divider {
            display: none;
          }
        }
      `}</style>
    </>
  );
} 