import Head from 'next/head';
import dynamic from 'next/dynamic';
import VideoPlayer from '../components/VideoPlayer';
import TestimonialVideo from '../components/TestimonialVideo';
import { useState, useEffect } from 'react';

const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function Home() {
  const [videoRevealed, setVideoRevealed] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  
  // Product package links
  const productLinks = {
    sixBottle: "https://pay.hotmart.com/X86267910X?off=qqvnwvxl",
    threeBottle: "https://pay.hotmart.com/X86267910X?off=qqvnwvxl",
    oneBottle: "https://pay.hotmart.com/X86267910X?off=qqvnwvxl"
  };

  // Toggle FAQ item
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  useEffect(() => {
    // Generate a realistic view count between 1,200 and 2,500
    const baseViewCount = Math.floor(Math.random() * (2500 - 1200 + 1)) + 1200;
    setViewCount(baseViewCount);
    
    // Simulate view count increasing over time
    const viewCountInterval = setInterval(() => {
      setViewCount(prevCount => {
        // Random increase between 1-3 viewers
        const increase = Math.floor(Math.random() * 3) + 1;
        return prevCount + increase;
      });
    }, 30000); // Update every 30 seconds
    
    // For testing in development, set to true to reveal after a shorter time
    const DEBUG_MODE = process.env.NODE_ENV === 'development';
    const REVEAL_TIME = DEBUG_MODE ? 5 : 1500; // 5 seconds in debug mode, 25 minutes (1500 seconds) in production
    
    // Function to reveal content
    const revealContent = () => {
      console.log("REVEALING CONTENT NOW!");
      setVideoRevealed(true);
      
      // Show the hidden sections by directly removing the class
      document.querySelectorAll('.hidden-until-reveal').forEach(el => {
        el.classList.remove('hidden-until-reveal');
        el.style.display = 'block';
        el.classList.add('revealed');
      });
      
      // Hide the lock message
      const lockMessage = document.querySelector('.access-message');
      if (lockMessage) {
        lockMessage.style.display = 'none';
      }
      
      // Show the released message
      const releasedMessage = document.querySelector('.released-message');
      if (releasedMessage) {
        releasedMessage.style.display = 'block';
      }
      
      // Store in localStorage that content has been revealed
      if (typeof window !== 'undefined') {
        localStorage.setItem('contentRevealed', 'true');
      }
    };
    
    // Check if content was already revealed in a previous session
    if (typeof window !== 'undefined' && localStorage.getItem('contentRevealed') === 'true') {
      console.log("Content was previously revealed, showing content immediately");
      setTimeout(revealContent, 500); // Small delay to ensure DOM is ready
    } else {
      // Set up monitoring for the video
      const monitorVideo = () => {
        // Create a global object to receive messages from the player
        window.vturbPlayerAPI = window.vturbPlayerAPI || {};
        window.vturbPlayerAPI.onTimeUpdate = (currentTime) => {
          console.log(`API Time update: ${currentTime}s`);
          
          if (currentTime >= REVEAL_TIME && !videoRevealed) {
            revealContent();
          }
        };
        
        // Inject a script to communicate with the player
        const script = document.createElement('script');
        script.innerHTML = `
          // Wait for player to initialize
          setTimeout(function() {
            // Try to find the video element
            var videoElement = document.querySelector('video');
            if (videoElement) {
              console.log("Found video element, setting up timeupdate listener");
              videoElement.addEventListener('timeupdate', function() {
                if (window.vturbPlayerAPI && typeof window.vturbPlayerAPI.onTimeUpdate === 'function') {
                  window.vturbPlayerAPI.onTimeUpdate(videoElement.currentTime);
                }
              });
            }
          }, 2000);
        `;
        document.head.appendChild(script);
      };
      
      // Start monitoring after a short delay
      setTimeout(monitorVideo, 2000);
      
      // For testing in development, add a timeout to reveal content after 10 seconds
      if (DEBUG_MODE) {
        setTimeout(() => {
          console.log("Debug mode: Testing reveal after 10 seconds");
          revealContent();
        }, 10000);
      }
    }
    
    return () => {
      clearInterval(viewCountInterval);
      delete window.vturbPlayerAPI;
    };
  }, [videoRevealed]);

  return (
    <>
      <Head>
        <title>AlphaBites - Natural Male Enhancement</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Discover the natural secret for long-lasting, rock-solid erections they're afraid to reveal." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
          
          :root {
            --primary-color: #6c5ce7;
            --secondary-color: #ff3333;
            --accent-color: #00b894;
            --text-color: #333;
            --light-text: #777;
            --background: #f5f5f5;
            --card-bg: #fff;
            --border-radius: 8px;
          }
          
          * {
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
          }
          
          body {
            background-color: var(--background);
            color: #333;
            font-family: 'Roboto', 'Helvetica Neue', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            overflow-x: hidden;
            width: 100%;
          }
          
          img {
            max-width: 100%;
            overflow: hidden;
          }
          
          button {
            cursor: pointer;
          }
        `}</style>
      </Head>
      
      {/* Urgent Notification Bar */}
      <div className="notification-bar">
        <p>⚠️ URGENT! ⚠️</p>
        <p>What Big Pharma Doesn't Want You to Know About Male Health.</p>
      </div>

      <div className="sub-notification">
        <p>Discover the natural secret for long-lasting, rock-solid erections they're afraid to reveal.</p>
        <p className="watching-now">Start watching now</p>
      </div>

      <div className="container">
        {/* Video Section */}
        <div className="black-bg-full">
          <div className="video-container">
            <div className="view-counter">
              <span className="view-icon">👁️</span> {viewCount.toLocaleString()} people watching now
            </div>
            
            {/* Direct video embed */}
            <div id="vid_67cdb02e18de859a97b2c80b" style={{position: 'relative', width: '100%', padding: '176.47058823529412% 0 0'}}> 
              <img id="thumb_67cdb02e18de859a97b2c80b" src="https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/67cdb02e18de859a97b2c80b/thumbnail.jpg" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} alt="thumbnail" /> 
              <div id="backdrop_67cdb02e18de859a97b2c80b" style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}></div> 
            </div>
            
            {/* Video script */}
            <ClientSideOnly>
              {() => {
                useEffect(() => {
                  const script = document.createElement('script');
                  script.src = "https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/67cdb02e18de859a97b2c80b/player.js";
                  script.async = true;
                  document.head.appendChild(script);
                  
                  return () => {
                    if (script.parentNode) {
                      script.parentNode.removeChild(script);
                    }
                  };
                }, []);
                return null;
              }}
            </ClientSideOnly>
          </div>
        </div>
        
        {/* Access Message */}
        <div className="access-message" style={{display: videoRevealed ? 'none' : 'block'}}>
          <span className="lock-icon">🔒</span>
          <p>YOUR ACCESS WILL BE RELEASED</p>
          <p>AT THE END OF THE VIDEO</p>
        </div>
        
        {/* Released Message - Shown when content is revealed */}
        <div className="released-message" style={{display: videoRevealed ? 'block' : 'none'}}>
          <span className="unlock-icon">🔓</span>
          <p>ACCESS RELEASED</p>
          <p>ENJOY YOUR EXCLUSIVE CONTENT</p>
        </div>
        
        {/* Special Offer Section - Hidden until video reveal */}
        <div className="special-offer hidden-until-reveal" style={{display: videoRevealed ? 'block' : 'none'}}>
          <div className="black-bg-section">
            <h2 className="offer-heading">To get started with AlphaBites today, simply click below and take advantage of this unique special time-limited offer...</h2>
          </div>
          
          <div className="product-options">
            <a href={productLinks.sixBottle} target="_blank" rel="noopener noreferrer" className="product-link">
              <img src="/images/six.png" alt="6 Bottle Package" className="product-full-image" />
            </a>
            
            <a href={productLinks.threeBottle} target="_blank" rel="noopener noreferrer" className="product-link">
              <img src="/images/three.png" alt="3 Bottle Package" className="product-full-image" />
            </a>
            
            <a href={productLinks.oneBottle} target="_blank" rel="noopener noreferrer" className="product-link">
              <img src="/images/two.png" alt="1 Bottle Package" className="product-full-image" />
            </a>
          </div>
        </div>
        
        {/* Testimonials Section - Hidden until video reveal */}
        <div className="testimonials-section hidden-until-reveal" style={{display: videoRevealed ? 'block' : 'none'}}>
          <div className="black-bg-section">
            <h2 className="section-heading">What they're saying about AlphaBites</h2>
          </div>
          
          {/* Testimonial Video */}
          <TestimonialVideo />
          
          <div className="testimonials-container">
            <img src="/images/ytcomments.png" alt="Customer Testimonials" className="testimonials-image" />
          </div>
        </div>
        
        {/* Money Back Guarantee - Hidden until video reveal */}
        <div className="guarantee-section hidden-until-reveal" style={{display: videoRevealed ? 'block' : 'none'}}>
          <img src="/images/moneyback.png" alt="60-Day Money Back Guarantee" className="guarantee-image" />
          
          <div className="certification-badges">
            <div className="badge-row">
              <div className="badge">
                <img src="/images/productlogos.png" alt="Product Certifications" className="certification-logos" />
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section - Hidden until video reveal */}
        <div className="faq-section hidden-until-reveal" style={{display: videoRevealed ? 'block' : 'none'}}>
          <div className="black-bg-section">
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-container">
            <div className="faq-item">
              <button 
                className={`faq-question-btn ${openFaq === 0 ? 'active' : ''}`} 
                onClick={() => toggleFaq(0)}
              >
                How does AlphaBites work? <span className="toggle-icon">{openFaq === 0 ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
                <p>AlphaBites works by naturally increasing blood flow to the penile chambers, supporting healthy testosterone levels, and enhancing nitric oxide production - the three key factors for strong, lasting erections.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button 
                className={`faq-question-btn ${openFaq === 1 ? 'active' : ''}`} 
                onClick={() => toggleFaq(1)}
              >
                When will I receive my order? <span className="toggle-icon">{openFaq === 1 ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                <p>Orders are typically processed within 24 hours and shipped via expedited shipping. Domestic orders arrive in 3-5 business days, while international orders may take 7-14 business days.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button 
                className={`faq-question-btn ${openFaq === 2 ? 'active' : ''}`} 
                onClick={() => toggleFaq(2)}
              >
                Is AlphaBites safe to take? <span className="toggle-icon">{openFaq === 2 ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                <p>Yes, AlphaBites is made with 100% natural ingredients in an FDA-registered, GMP-certified facility. It contains no harmful stimulants or additives and has no reported side effects.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button 
                className={`faq-question-btn ${openFaq === 3 ? 'active' : ''}`} 
                onClick={() => toggleFaq(3)}
              >
                What if it doesn't work for me? <span className="toggle-icon">{openFaq === 3 ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                <p>We're so confident in AlphaBites that we offer a 60-day, 100% money-back guarantee. If you're not completely satisfied, simply return the bottles (even empty ones) for a full refund.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final CTA - Hidden until video reveal */}
        <div className="final-cta hidden-until-reveal" style={{display: videoRevealed ? 'block' : 'none'}}>
          <div className="black-bg-section">
            <h2 className="offer-heading">To get started with AlphaBites today, simply click below and take advantage of this unique special time-limited offer...</h2>
          </div>
          
          <div className="product-options">
            <a href={productLinks.sixBottle} target="_blank" rel="noopener noreferrer" className="product-link">
              <img src="/images/six.png" alt="6 Bottle Package" className="product-full-image" />
            </a>
            
            <a href={productLinks.threeBottle} target="_blank" rel="noopener noreferrer" className="product-link">
              <img src="/images/three.png" alt="3 Bottle Package" className="product-full-image" />
            </a>
            
            <a href={productLinks.oneBottle} target="_blank" rel="noopener noreferrer" className="product-link">
              <img src="/images/two.png" alt="1 Bottle Package" className="product-full-image" />
            </a>
          </div>
        </div>

        {/* Scientific References Section */}
        <div className="references-section">
          <div className="logos-container">
            <img src="/images/logos.png" alt="Scientific Institution Logos" className="logos-image" />
          </div>
          
          <p className="disclaimer">AlphaBites is not endorsed by, sponsored by, or affiliated with any of these organizations.</p>
          
          <div className="references-list">
            <ol>
              <li>
                <p>Heart attack warning - the simple test YOU can do at home to reveal your risk <span className="reference-link">https://www.express.co.uk/life-style/health/995242/heart-attack-test-exercise-risk-symptoms-blood-stretch</span></p>
              </li>
              <li>
                <p>Magnesium and the inflammatory response: potential physiological implications <span className="reference-link">https://www.ncbi.nlm.nih.gov/pubmed/16712775?dopt=Abstract</span></p>
              </li>
              <li>
                <p>Low blood mononuclear cell magnesium in intensive cardiac care unit patients <span className="reference-link">https://www.ncbi.nlm.nih.gov/pubmed/3953355?dopt=Abstract</span></p>
              </li>
              <li>
                <p>Low Magnesium Linked To Heart Disease <span className="reference-link">https://www.medicalnewstoday.com/articles/255783.php</span></p>
              </li>
              <li>
                <p>L-arginine <span className="reference-link">https://www.mayoclinic.org/drugs-supplements-l-arginine/art-20364681</span></p>
              </li>
              <li>
                <p>Role of the general base Glu-268 in nitroglycerin bioactivation and superoxide formation by aldehyde dehydrogenase-2 <span className="reference-link">https://www.ncbi.nlm.nih.gov/pubmed/19506075</span></p>
              </li>
              <li>
                <p>Coenzyme Q10 for the treatment of heart failure: a review of the literature <span className="reference-link">https://openheart.bmj.com/content/2/1/e000326</span></p>
              </li>
              <li>
                <p>The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO: a randomized double-blind trial <span className="reference-link">https://www.ncbi.nlm.nih.gov/pubmed/25282031</span></p>
              </li>
              <li>
                <p>Nattokinase: A Promising Alternative in Prevention and Treatment of Cardiovascular Diseases <span className="reference-link">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6043915/</span></p>
              </li>
              <li>
                <p>Dietary soy and natto intake and cardiovascular disease mortality in Japanese adults: the Takayama study <span className="reference-link">https://www.ncbi.nlm.nih.gov/pubmed/27927636/</span></p>
              </li>
              <li>
                <p>Increasing severity of erectile dysfunction is a marker for increasing risk of cardiovascular disease and death <span className="reference-link">https://www.sciencedaily.com/releases/2013/01/130129130945.htm</span></p>
              </li>
              <li>
                <p>Dietary intake of menaquinone is associated with a reduced risk of coronary heart disease: the Rotterdam Study <span className="reference-link">https://pubmed.ncbi.nlm.nih.gov/15514282/</span></p>
              </li>
            </ol>
          </div>
        </div>

        <footer className="site-footer">
          <div className="footer-content">
            <p className="copyright">AlphaBites is the creator of this product. AlphaBites is a registered trademark of AlphaBites, a Delaware corporation located at 1201 Orange Street Suite #7223, Wilmington, DE, 19801, USA and used with permission. AlphaBites may not monitor, does not endorse, and is not responsible or liable for any products, services, statements, or other materials on this website. Statements on this website have not been evaluated by the Food and Drug Administration.</p>
            <div className="footer-links">
              <a href="/shipping-policy">Shipping Policy</a>
              <span className="divider">|</span>
              <a href="/terms">Terms & Conditions</a>
              <span className="divider">|</span>
              <a href="/refund">Refund & Return Policy</a>
              <span className="divider">|</span>
              <a href="/privacy">Privacy Policy</a>
            </div>
            <p className="copyright">Copyright 2025 - All rights reserved</p>
            <p className="copyright">Terms de Uso/Privacidade</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .notification-bar {
          width: 100%;
          background-color: #ff3333;
          color: white;
          padding: 5px 0;
          text-align: center;
          font-weight: bold;
        }

        .notification-bar p {
          margin: 5px 0;
          font-size: 16px;
        }

        .sub-notification {
          width: 100%;
          background-color: #000;
          color: white;
          padding: 10px 0;
          text-align: center;
          border-bottom: 1px solid #333;
        }

        .sub-notification p {
          margin: 5px 0;
          font-size: 14px;
        }

        .watching-now {
          color: #aaa;
          font-size: 12px !important;
        }

        .container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
          text-align: center;
          background-color: var(--background);
        }
        
        .black-bg-full {
          background-color: #000;
          width: 100%;
          padding: 0;
        }
        
        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .view-counter {
          position: absolute;
          top: 10px;
          right: 20px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 14px;
          z-index: 10;
        }
        
        .view-icon {
          margin-right: 5px;
        }

        .access-message {
          margin: 0;
          text-align: center;
          color: #fff;
          transition: opacity 0.5s ease;
          background-color: #000;
          padding: 20px;
        }
        
        .released-message {
          margin: 0;
          text-align: center;
          color: #fff;
          transition: opacity 0.5s ease;
          background-color: #000;
          padding: 20px;
        }

        .lock-icon {
          font-size: 24px;
          display: block;
          margin-bottom: 10px;
          color: #ff3333;
        }
        
        .unlock-icon {
          font-size: 24px;
          display: block;
          margin-bottom: 10px;
          color: #00b894;
        }

        .access-message p, .released-message p {
          margin: 5px 0;
          font-weight: bold;
          font-size: 14px;
        }
        
        .released-message p {
          color: #00b894;
        }
        
        /* Black background sections for headings */
        .black-bg-section {
          background-color: #000;
          color: #fff;
          padding: 30px 20px;
          width: 100%;
          margin: 0;
        }
        
        /* Hidden sections until reveal */
        .hidden-until-reveal {
          display: none;
        }
        
        .revealed {
          animation: fadeIn 1s ease-in-out;
          display: block;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Special Offer Section */
        .special-offer, .final-cta {
          margin: 0;
          width: 100%;
        }
        
        .offer-heading {
          color: #fff;
          font-size: 24px;
          margin: 0 auto;
          max-width: 1000px;
          line-height: 1.4;
        }
        
        .product-options {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin: 30px auto;
          padding: 20px;
          max-width: 1200px;
          background-color: var(--background);
        }
        
        .product-link {
          display: block;
          width: 300px;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .product-link:hover {
          transform: translateY(-5px);
        }
        
        .product-full-image {
          width: 100%;
          height: auto;
          display: block;
          overflow: hidden;
        }
        
        /* Testimonials Section */
        .testimonials-section {
          margin: 0;
          width: 100%;
        }
        
        .section-heading {
          color: #fff;
          font-size: 28px;
          margin: 0 auto;
          max-width: 1000px;
        }
        
        .testimonials-container {
          background-color: #fff;
          padding: 20px;
          color: #333;
          margin: 0 auto;
          max-width: 800px;
        }
        
        .testimonials-image {
          max-width: 100%;
          height: auto;
          overflow: hidden;
        }
        
        /* Guarantee Section */
        .guarantee-section {
          margin: 40px auto;
          max-width: 800px;
          padding: 20px;
        }
        
        .guarantee-image {
          max-width: 100%;
          height: auto;
          margin-bottom: 30px;
          overflow: hidden;
        }
        
        .certification-badges {
          margin: 30px auto;
        }
        
        .badge-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .certification-logos {
          width: 100%;
          max-width: 600px;
          height: auto;
        }
        
        /* FAQ Section */
        .faq-section {
          margin: 0;
          width: 100%;
        }
        
        .faq-container {
          background-color: #fff;
          padding: 30px;
          color: #333;
          text-align: left;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .faq-item {
          margin-bottom: 15px;
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
        }
        
        .faq-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        
        .faq-question-btn {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 10px 0;
          font-size: 18px;
          font-weight: 500;
          color: #6c5ce7;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .faq-question-btn:hover {
          color: #5649c0;
        }
        
        .faq-question-btn.active {
          color: #5649c0;
        }
        
        .toggle-icon {
          font-size: 20px;
          font-weight: bold;
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        
        .faq-answer.open {
          max-height: 500px;
        }
        
        .faq-answer p {
          margin: 10px 0;
          color: #555;
          line-height: 1.6;
          padding: 0 0 10px 0;
        }

        .references-section {
          margin: 0;
          width: 100%;
          text-align: center;
          padding-top: 30px;
          background-color: #fff;
        }

        .logos-container {
          margin: 0 auto;
          padding: 20px;
          max-width: 800px;
          background-color: #fff;
        }

        .logos-image {
          max-width: 100%;
          height: auto;
          overflow: hidden;
        }

        .disclaimer {
          font-style: italic;
          color: #777;
          margin: 20px 0;
          font-size: 14px;
          background-color: #fff;
          padding: 0 20px;
        }

        .references-list {
          text-align: left;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
        }

        .references-list ol {
          padding-left: 20px;
        }

        .references-list li {
          margin-bottom: 20px;
          color: #555;
        }

        .reference-link {
          color: #999;
          font-size: 14px;
          display: block;
          word-break: break-all;
        }

        .site-footer {
          margin-top: 40px;
          padding: 20px;
          background-color: #000;
          color: #777;
          font-size: 12px;
          border-top: 1px solid #333;
        }

        .footer-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin: 15px 0;
        }

        .footer-links a {
          color: #777;
          text-decoration: none;
        }

        .divider {
          color: #555;
        }

        @media (max-width: 768px) {
          .product-options {
            flex-direction: column;
            align-items: center;
          }
          
          .product-link {
            width: 100%;
            max-width: 350px;
          }
          
          .section-heading, .offer-heading {
            font-size: 22px;
          }
          
          .view-counter {
            top: 5px;
            right: 10px;
            font-size: 12px;
            padding: 3px 8px;
          }
          
          .certification-logos {
            max-width: 100%;
          }
          
          .black-bg-full {
            padding: 0;
          }
          
          .video-container {
            width: 100%;
            max-width: 100%;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}
