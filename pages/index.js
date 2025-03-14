import Head from 'next/head';
import dynamic from 'next/dynamic';
import VideoPlayer from '../components/VideoPlayer';
import MainVideoPlayer from '../components/MainVideoPlayer';
import TestimonialVideo from '../components/TestimonialVideo';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function Home() {
  const [videoRevealed, setVideoRevealed] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [gtagParams, setGtagParams] = useState({ id: null, label: null });
  const router = useRouter();
  
  // Product package links - Updated with the new URL
  const productLinks = {
    sixBottle: "https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571",
    threeBottle: "https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571",
    oneBottle: "https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571"
  };

  // Toggle FAQ item
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

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
    
    // Hide the scroll indicator after 10 seconds
    setTimeout(() => {
      const scrollIndicator = document.querySelector('.scroll-indicator-container');
      if (scrollIndicator) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.transition = 'opacity 1s ease-out';
        
        // Remove from DOM after fade out
        setTimeout(() => {
          if (scrollIndicator) {
            scrollIndicator.style.display = 'none';
          }
        }, 1000);
      }
    }, 10000);
    
    // Fire Google Ads conversion tracking for 20-minute mark using dynamic parameters
    if (typeof window !== 'undefined' && window.gtag && gtagParams.id && gtagParams.label) {
      console.log(`Firing Google Ads conversion for 20-minute mark with ID: ${gtagParams.id} and Label: ${gtagParams.label}`);
      window.gtag('event', 'conversion', {
        'send_to': `${gtagParams.id}/${gtagParams.label}`,
        'value': 1.0,
        'currency': 'USD'
      });
    } else {
      console.log("Google Ads conversion not fired - missing gtag function or parameters");
    }
    
    // Store in localStorage that content has been revealed
    if (typeof window !== 'undefined') {
      localStorage.setItem('contentRevealed', 'true');
    }
  };

  useEffect(() => {
    // Extract gtag parameters from URL if available
    if (router.isReady) {
      const { gtag_id, gtag_label } = router.query;
      if (gtag_id && gtag_label) {
        console.log(`Found gtag parameters in URL - ID: ${gtag_id}, Label: ${gtag_label}`);
        setGtagParams({ id: gtag_id, label: gtag_label });
      }
    }
    
    // Generate a realistic view count between 1,200 and 2,500
    const baseViewCount = Math.floor(Math.random() * (2500 - 1200 + 1)) + 1200;
    setViewCount(baseViewCount);
    
    // Simulate view count increasing over time - more frequently
    const viewCountInterval = setInterval(() => {
      setViewCount(prevCount => {
        // Random increase between 1-5 viewers
        const increase = Math.floor(Math.random() * 5) + 1;
        return prevCount + increase;
      });
    }, 5000); // Update every 5 seconds
    
    // Check if content was already revealed in a previous session
    if (typeof window !== 'undefined' && localStorage.getItem('contentRevealed') === 'true') {
      console.log("Content was previously revealed, showing content immediately");
      setTimeout(revealContent, 500); // Small delay to ensure DOM is ready
    }
    
    return () => clearInterval(viewCountInterval);
  }, [router.isReady, router.query]);

  return (
    <>
      <Head>
        <title>Natural Male Enhancement Secret</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Discover the natural secret for long-lasting, rock-solid erections they're afraid to reveal." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* Google Fonts - Fixed import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        
        {/* Google Ads Conversion Tracking - Dynamic Script */}
        {gtagParams.id && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtagParams.id}`}></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtagParams.id}');
              `
            }} />
          </>
        )}
        
        <style>{`
          /* Font import removed from here and added as link above */
          
          :root {
            --primary-color: #6c5ce7;
            --secondary-color: #ff3333;
            --accent-color: #00b894;
            --text-color: #333;
            --light-text: #777;
            --background: #fff;
            --card-bg: #fff;
            --border-radius: 8px;
            --glow-color: rgba(255, 215, 0, 0.8);
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
            display: block;
          }
          
          button {
            cursor: pointer;
          }
          
          /* Fix for video iframes */
          iframe {
            max-width: 100%;
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
          }
          
          /* Fix for video containers */
          div[id^="vid_"] {
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
          }
          
          /* Fix for video elements */
          video {
            max-width: 100%;
            width: 100%;
            overflow: hidden;
          }
        `}</style>
      </Head>
      
      {/* Urgent Notification Bar */}
      <div className="notification-bar">
        <p>⚠️ URGENT! ⚠️</p>
        <p>What Big Pharma Doesn't Want You to Know About Male Health.</p>
      </div>

      <div className="sub-notification">
        <h1 className="main-title">Discover the natural secret for long-lasting, rock-solid erections they're afraid to reveal.</h1>
      </div>

      <div className="container">
        {/* Video Section - Simple vertical stack */}
        <div className="black-bg-full">
          <div className="video-section">
            {/* View Counter */}
            <div className="view-counter-container">
              <div className="view-counter">
                <span className="view-icon">
                  <span className="live-dot"></span>
                </span>
                <span className="view-count">{viewCount.toLocaleString()}</span>
                <span className="view-text">watching now</span>
              </div>
            </div>
            
            {/* Video Player */}
            <div className="video-player-container">
              <MainVideoPlayer onVideoProgress={revealContent} />
            </div>
            
            {/* Scroll down indicator - Only visible when content is revealed */}
            <div className="scroll-indicator-container" style={{display: videoRevealed ? 'block' : 'none'}}>
              <div className="scroll-indicator">
                <p>Scroll Down to See Special Offer</p>
                <div className="arrows-container">
                  <div className="arrow-down"></div>
                  <div className="arrow-down"></div>
                  <div className="arrow-down"></div>
                </div>
              </div>
            </div>
            
            {/* Sound Reminder */}
            <div className="sound-reminder">
              <p>ATTENTION: Make Sure Your Sound Is On!</p>
            </div>
            
            {/* Access Message */}
            <div className="access-message" style={{display: videoRevealed ? 'none' : 'block'}}>
              <span className="lock-icon">🔒</span>
              <p>YOUR ACCESS WILL BE RELEASED</p>
              <p>AT THE END OF THE VIDEO</p>
            </div>
            
            {/* Released Message */}
            <div className="released-message" style={{display: videoRevealed ? 'block' : 'none'}}>
              <span className="unlock-icon">🔓</span>
              <p>ACCESS RELEASED</p>
              <p>ENJOY YOUR EXCLUSIVE CONTENT</p>
            </div>
          </div>
        </div>
        
        {/* Special Offer Section - Hidden until video reveal */}
        <div className="special-offer hidden-until-reveal" style={{display: videoRevealed ? 'block' : 'none'}}>
          <div className="black-bg-section">
            <h2 className="offer-heading">To get started with <span className="highlight">AlphaBites</span> today, simply select your package below:</h2>
          </div>
          
          <div className="product-options-new">
            <div className="product-card">
              <div className="product-header">BEST VALUE - 6 BOTTLES</div>
              <div className="product-image-container">
                <img src="/images/six.png" alt="6 Bottle Package" className="product-image" />
              </div>
              <div className="product-price">$49/ Bottle</div>
              <a href={productLinks.sixBottle} target="_blank" rel="noopener noreferrer" className="buy-button">
                CLICK HERE TO BUY
              </a>
            </div>
            
            <div className="product-card">
              <div className="product-header">GOOD VALUE - 3 BOTTLES</div>
              <div className="product-image-container">
                <img src="/images/three.png" alt="3 Bottle Package" className="product-image" />
              </div>
              <div className="product-price">$69/ Bottle</div>
              <a href={productLinks.threeBottle} target="_blank" rel="noopener noreferrer" className="buy-button">
                CLICK HERE TO BUY
              </a>
            </div>
            
            <div className="product-card">
              <div className="product-header">BASIC - 2 BOTTLES</div>
              <div className="product-image-container">
                <img src="/images/two.png" alt="2 Bottle Package" className="product-image" />
              </div>
              <div className="product-price">$79/ Bottle</div>
              <a href={productLinks.oneBottle} target="_blank" rel="noopener noreferrer" className="buy-button">
                CLICK HERE TO BUY
              </a>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section - Hidden until video reveal */}
        <div className="testimonials-section hidden-until-reveal" style={{display: videoRevealed ? 'block' : 'none'}}>
          <div className="black-bg-section">
            <h2 className="section-heading">What they're saying about <span className="highlight">AlphaBites</span></h2>
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
            <h2 className="offer-heading">To get started with <span className="highlight">AlphaBites</span> today, simply select your package below:</h2>
          </div>
          
          <div className="product-options-new">
            <div className="product-card">
              <div className="product-header">BEST VALUE - 6 BOTTLES</div>
              <div className="product-image-container">
                <img src="/images/six.png" alt="6 Bottle Package" className="product-image" />
              </div>
              <div className="product-price">$49/ Bottle</div>
              <a href={productLinks.sixBottle} target="_blank" rel="noopener noreferrer" className="buy-button">
                CLICK HERE TO BUY
              </a>
            </div>
            
            <div className="product-card">
              <div className="product-header">GOOD VALUE - 3 BOTTLES</div>
              <div className="product-image-container">
                <img src="/images/three.png" alt="3 Bottle Package" className="product-image" />
              </div>
              <div className="product-price">$69/ Bottle</div>
              <a href={productLinks.threeBottle} target="_blank" rel="noopener noreferrer" className="buy-button">
                CLICK HERE TO BUY
              </a>
            </div>
            
            <div className="product-card">
              <div className="product-header">BASIC - 2 BOTTLES</div>
              <div className="product-image-container">
                <img src="/images/two.png" alt="2 Bottle Package" className="product-image" />
              </div>
              <div className="product-price">$79/ Bottle</div>
              <a href={productLinks.oneBottle} target="_blank" rel="noopener noreferrer" className="buy-button">
                CLICK HERE TO BUY
              </a>
            </div>
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
            <p className="copyright">This product is brought to you by a Delaware corporation located at 1201 Orange Street Suite #7223, Wilmington, DE, 19801, USA. We do not monitor, endorse, or take responsibility for any products, services, statements, or other materials on this website. Statements on this website have not been evaluated by the Food and Drug Administration.</p>
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

        .main-title {
          margin: 10px auto;
          font-size: 28px;
          max-width: 800px;
          background: linear-gradient(to right, #ff6b6b, #9c88ff, #ff6b6b);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          font-weight: 700;
          line-height: 1.3;
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
          display: block;
        }
        
        .video-section {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          display: block;
          padding: 0;
        }
        
        .view-counter-container {
          width: 100%;
          text-align: center;
          padding: 10px 0;
          position: relative;
          z-index: 2;
          margin-bottom: 10px;
        }
        
        .view-counter {
          background-color: rgba(0, 0, 0, 0.8);
          color: #ff3333;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          font-weight: bold;
          border: 1px solid rgba(255, 51, 51, 0.3);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .view-icon {
          margin-right: 8px;
          background-color: rgba(255, 51, 51, 0.2);
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 12px;
          position: relative;
        }
        
        .live-dot {
          width: 10px;
          height: 10px;
          background-color: #ff3333;
          border-radius: 50%;
          display: block;
          position: relative;
          animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(255, 51, 51, 0.7);
          }
          
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 5px rgba(255, 51, 51, 0);
          }
          
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(255, 51, 51, 0);
          }
        }
        
        .view-count {
          color: #ffffff;
          margin-right: 5px;
          font-weight: 700;
        }
        
        .view-text {
          color: #aaaaaa;
          font-size: 12px;
          font-weight: 400;
        }
        
        .video-player-container {
          width: 100%;
          margin: 0 auto;
          display: block;
        }
        
        .video-wrapper {
          border-radius: 10px;
          box-shadow: 0 0 25px var(--glow-color), 0 0 50px var(--glow-color);
          overflow: hidden;
          margin: 0 auto;
          width: 100%;
          max-width: 500px;
          position: relative;
          border: 1px solid rgba(255, 215, 0, 0.5);
          padding: 8px;
          background: linear-gradient(145deg, rgba(0,0,0,0.9), rgba(20,20,20,0.8));
        }
        
        /* Canvas-like texture overlay for video */
        .video-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
          z-index: 1;
          border-radius: 8px;
        }
        
        /* Enhanced corners for canvas effect */
        .video-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid rgba(255, 215, 0, 0.3);
          border-radius: 8px;
          pointer-events: none;
          z-index: 1;
          box-shadow: inset 0 0 15px rgba(255, 215, 0, 0.2);
        }
        
        .scroll-indicator-container {
          width: 100%;
          text-align: center;
          padding: 10px 0;
          position: relative;
          z-index: 5;
          margin: 10px 0;
        }
        
        .scroll-indicator {
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 10px 15px;
          border-radius: 20px;
          font-size: 16px;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          font-weight: bold;
          border: 1px solid rgba(0, 184, 148, 0.5);
          box-shadow: 0 0 15px rgba(0, 184, 148, 0.3);
          animation: fadeInPulse 0.8s ease-out forwards;
          max-width: 90%;
          margin: 0 auto;
        }
        
        .scroll-indicator p {
          color: #ffffff;
          font-size: 16px;
          margin-bottom: 10px;
          text-shadow: 0 0 10px rgba(0, 184, 148, 0.7);
          font-weight: 700;
        }
        
        .arrows-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 60px;
          margin-top: 5px;
        }
        
        .arrow-down {
          width: 20px;
          height: 20px;
          border-right: 4px solid #00b894;
          border-bottom: 4px solid #00b894;
          transform: rotate(45deg);
          margin: -10px 0;
          animation: arrowBounce 2s infinite;
        }
        
        .arrow-down:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .arrow-down:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes arrowBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          40% {
            transform: translateY(10px) rotate(45deg);
          }
          60% {
            transform: translateY(5px) rotate(45deg);
          }
        }
        
        @keyframes fadeInPulse {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          70% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .sound-reminder {
          margin: 10px auto;
          color: #fff;
          font-weight: bold;
          font-size: 14px;
          text-align: center;
        }

        .access-message {
          width: 100%;
          margin: 20px 0 0 0;
          text-align: center;
          color: #fff;
          background-color: #000;
          padding: 20px;
          display: block;
        }
        
        .released-message {
          width: 100%;
          margin: 20px 0 0 0;
          text-align: center;
          color: #fff;
          background-color: #000;
          padding: 20px;
          display: block;
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
          margin: 5px 0;
          font-weight: bold;
          font-size: 14px;
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
          position: relative;
          clear: both;
        }
        
        .revealed {
          animation: fadeIn 1s ease-in-out;
          display: block;
          position: relative;
          clear: both;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Special Offer Section */
        .special-offer, .final-cta {
          margin: 0;
          width: 100%;
          background-color: #fff;
        }
        
        .offer-heading {
          color: #fff;
          font-size: 24px;
          margin: 0 auto;
          max-width: 1000px;
          line-height: 1.4;
        }
        
        .product-options-new {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin: 30px auto;
          padding: 20px;
          max-width: 1200px;
          background-color: #000;
        }
        
        .product-card {
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          width: 300px;
          margin-bottom: 20px;
          border: 1px solid #333;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
        }
        
        .product-header {
          background-color: #b8860b; /* Golden color */
          color: #fff;
          padding: 15px 10px;
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
        }
        
        .product-image-container {
          width: 100%;
          padding: 20px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .product-image {
          max-width: 100%;
          height: auto;
        }
        
        .product-price {
          background-color: #000;
          color: #fff;
          padding: 15px 10px;
          font-size: 28px;
          font-weight: bold;
          text-align: center;
        }
        
        .buy-button {
          display: block;
          width: 100%;
          background-color: #4CAF50; /* Green */
          color: #fff;
          padding: 15px 10px;
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-transform: uppercase;
        }
        
        .buy-button:hover {
          background-color: #45a049; /* Darker green */
        }
        
        /* Testimonials Section */
        .testimonials-section {
          margin: 0;
          width: 100%;
          position: relative;
          clear: both;
          display: block;
          background-color: #fff;
        }
        
        .section-heading {
          color: #fff;
          font-size: 28px;
          margin: 0 auto;
          max-width: 1000px;
        }
        
        .section-heading .highlight {
          color: #ff6b6b;
          font-weight: bold;
        }
        
        .testimonials-container {
          background-color: #fff;
          padding: 20px;
          color: #333;
          margin: 0 auto;
          max-width: 800px;
          position: relative;
          clear: both;
          display: block;
        }
        
        .testimonial-video-container {
          margin: 20px auto;
          max-width: 800px;
          width: 100%;
          position: relative;
          overflow: hidden;
          background-color: #000;
          border-radius: 8px;
        }
        
        .testimonial-video-container video {
          display: block;
          width: 100%;
          height: auto;
          background-color: #000;
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
          background-color: #fff;
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
          .product-options-new {
            flex-direction: column;
            align-items: center;
          }
          
          .product-card {
            width: 100%;
            max-width: 350px;
          }
          
          .section-heading, .offer-heading {
            font-size: 22px;
          }
          
          .view-counter {
            margin-right: 5px;
            font-size: 12px;
            padding: 3px 8px;
          }
          
          .certification-logos {
            max-width: 100%;
          }
          
          .black-bg-full {
            padding: 0;
          }
          
          .video-section {
            width: 100%;
            max-width: 100%;
            margin-bottom: 0;
          }
          
          /* Ensure video elements display properly on mobile */
          #vid_67cdb02e18de859a97b2c80b, 
          #vid_67cdac39072c3fc40e3f9f4b {
            width: 100% !important;
          }
          
          .access-message, .released-message {
            position: relative;
            display: block;
            clear: both;
          }
        }
      `}</style>
    </>
  );
}
