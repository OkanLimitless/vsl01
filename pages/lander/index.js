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
        }

        /* Top Bar */
        .top-bar {
          background: #1a1a1a;
          padding: 10px;
          color: white;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero {
          padding: 100px 20px 60px;
          text-align: center;
          background: linear-gradient(to bottom, #f8f9fa, #fff);
        }

        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 40px;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2c5282;
        }

        .hero h1 {
          font-size: 2.5rem;
          color: #2c5282;
          margin-bottom: 20px;
          max-width: 800px;
          margin: 0 auto 20px;
        }

        .hero h2 {
          color: #666;
          font-size: 1.2rem;
          margin-bottom: 40px;
        }

        /* Benefits Section */
        .hero-benefits {
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          color: #333;
        }

        .benefit-item i {
          color: #2c5282;
        }

        /* CTA Buttons */
        .hero-cta-button, .main-cta-button {
          background: #2c5282;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          margin-top: 20px;
        }

        .hero-cta-button:hover, .main-cta-button:hover {
          background: #1a365d;
          transform: translateY(-2px);
        }

        .guarantee-text {
          font-size: 0.9rem;
          opacity: 0.9;
          display: block;
          margin-top: 5px;
        }

        /* Science Section */
        .science-section {
          padding: 60px 20px;
          background: #f8f9fa;
          text-align: center;
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
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .stat {
          font-size: 2.5rem;
          color: #2c5282;
          font-weight: 700;
          margin-bottom: 10px;
        }

        /* Ingredients Section */
        .ingredients-section {
          padding: 60px 20px;
          background: white;
        }

        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 40px auto;
        }

        .ingredient-card {
          text-align: center;
          padding: 20px;
        }

        .ingredient-card img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 20px;
        }

        /* Experts Section */
        .experts-section {
          padding: 60px 20px;
          background: #f8f9fa;
        }

        .expert-testimonials {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 40px auto;
        }

        .expert-card {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 20px;
        }

        .expert-card img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
        }

        /* Guarantee Section */
        .guarantee-section {
          padding: 60px 20px;
          background: white;
          text-align: center;
        }

        .guarantee-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .guarantee-badge {
          background: #2c5282;
          color: white;
          padding: 20px;
          border-radius: 50%;
          width: 120px;
          height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: 700;
        }

        /* Footer */
        .site-footer {
          background: #1a1a1a;
          color: white;
          padding: 40px 20px;
          margin-top: 60px;
        }

        .footer-badges {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 30px;
        }

        .footer-badges img {
          height: 40px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .research-grid,
          .ingredients-grid,
          .expert-testimonials {
            grid-template-columns: 1fr;
          }

          .guarantee-content {
            flex-direction: column;
            text-align: center;
          }

          .trust-badges {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
} 