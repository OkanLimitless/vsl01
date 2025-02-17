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
        <title>Brazilian Wood™ | Premium Natural Performance Enhancement</title>
        <meta name="description" content="Discover Brazilian Wood™ - A clinically tested natural solution for enhanced male vitality. Backed by science, trusted by professionals." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <div className="landing-page">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar-content">
            <div className="live-counter">
              <div className="pulse-dot"></div>
              <span>{viewerCount} people currently viewing</span>
            </div>
            <div className="stock-status">
              <span>Limited Stock: {bottlesLeft} units remaining</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="trust-badges">
            <div className="badge">
              <i className="fas fa-certificate"></i>
              <span>Clinically Tested</span>
            </div>
            <div className="badge">
              <i className="fas fa-leaf"></i>
              <span>100% Natural</span>
            </div>
            <div className="badge">
              <i className="fas fa-shield-alt"></i>
              <span>Quality Guaranteed</span>
            </div>
          </div>

          <h1>Experience the Power of Nature's Premium Performance Enhancement</h1>
          <h2>Clinically Tested Formula | Trusted by Professionals | 180-Day Money-Back Guarantee</h2>
          
          <div className="hero-content">
            <div className="product-image">
              <img src="https://www.braziliansecretwood.com/images/BrazlilianWood_1Bottle.png" alt="Brazilian Wood Premium Formula" />
            </div>
            <div className="hero-benefits">
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>Clinically Proven Results</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>Premium Natural Ingredients</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>Doctor-Recommended Formula</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check"></i>
                <span>Satisfaction Guaranteed</span>
              </div>
              <button 
                className="hero-cta-button" 
                onClick={() => window.location.href = 'https://afflat3e1.com/lnk.asp?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307'}
              >
                Get Your Supply Now
                <span className="guarantee-text">180-Day Money-Back Guarantee</span>
              </button>
            </div>
          </div>
        </section>

        {/* Scientific Backing Section */}
        <section className="science-section">
          <h2>Backed by Science</h2>
          <div className="research-grid">
            <div className="research-item">
              <div className="stat">94%</div>
              <p>of participants reported improved performance*</p>
            </div>
            <div className="research-item">
              <div className="stat">89%</div>
              <p>experienced results within the first week*</p>
            </div>
            <div className="research-item">
              <div className="stat">96%</div>
              <p>would recommend to others*</p>
            </div>
          </div>
          <p className="study-note">*Based on a clinical study of 250 participants over 90 days</p>
        </section>

        {/* Premium Ingredients Section */}
        <section className="ingredients-section">
          <h2>Premium Natural Ingredients</h2>
          <div className="ingredients-grid">
            <div className="ingredient-card">
              <img src="/images/ingredient1.jpg" alt="Ingredient 1" />
              <h3>Tribulus Terrestris</h3>
              <p>Clinically proven to support natural testosterone levels</p>
            </div>
            <div className="ingredient-card">
              <img src="/images/ingredient2.jpg" alt="Ingredient 2" />
              <h3>Maca Root</h3>
              <p>Traditional performance enhancer backed by modern research</p>
            </div>
            <div className="ingredient-card">
              <img src="/images/ingredient3.jpg" alt="Ingredient 3" />
              <h3>Tongkat Ali</h3>
              <p>Supports healthy hormone balance and vitality</p>
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

        /* Top Bar */
        .top-bar {
          background: linear-gradient(90deg, #1a1a1a, #2c3e50);
          padding: 12px 0;
          color: white;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          font-size: 0.9rem;
        }

        .live-counter {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #4CAF50;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
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