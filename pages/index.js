import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';

const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function Home() {
  const [showProducts, setShowProducts] = useState(false);
  const [watchCount, setWatchCount] = useState(574);

  useEffect(() => {
    // Video progress watcher
    const watchVideoProgress = () => {
      if (typeof window !== 'undefined' && typeof window.smartplayer === 'undefined') {
        setTimeout(watchVideoProgress, 500);
        return;
      }

      if (typeof window !== 'undefined' && window.smartplayer && window.smartplayer.instances && window.smartplayer.instances.length > 0) {
        window.smartplayer.instances[0].on('timeupdate', () => {
          if (window.smartplayer.instances[0].video.currentTime >= 2078) {
            setShowProducts(true);
          }
        });

        // Also listen for video end event
        window.smartplayer.instances[0].on('ended', () => {
          setShowProducts(true);
        });
      }
    };

    // Start watching video progress
    watchVideoProgress();
    
    // Fallback: Show products after 2078 seconds regardless of video progress
    const timer = setTimeout(() => {
      setShowProducts(true);
    }, 2078000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  // Function to randomly fluctuate viewer count
  useEffect(() => {
    const interval = setInterval(() => {
      // Random fluctuation between -3 and +5 viewers
      const fluctuation = Math.floor(Math.random() * 9) - 3;
      setWatchCount(prevCount => {
        // Keep count between 550 and 650
        const newCount = prevCount + fluctuation;
        return Math.min(Math.max(newCount, 550), 650);
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Watch Now - Limited Time Presentation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://getalphabites.fun/video-fb" />
        <meta property="og:title" content="Watch Now" />
        <meta property="og:description" content="Watch Now" />
        <meta property="og:image" content="/images/thumbnail1.png" />
        <link rel="preload" href="https://scripts.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="/images/thumbnail1.png" as="image" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
      </Head>
      
      <div style={{ 
        backgroundColor: '#fff',
        minHeight: '100vh',
        width: '100%',
        margin: 0,
        padding: 0
      }}>
        {/* Attention Bar */}
        <div style={{
          backgroundColor: '#B71C1C',
          color: '#fff',
          textAlign: 'center',
          padding: '10px 0',
          width: '100%',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold'
        }}>
          <span style={{ color: '#FFD700' }}>Attention:</span> This presentation will be available only until today
        </div>

        {/* Main Content Container */}
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Video Player */}
          <VideoPlayer />

          {/* Watch Count */}
          <div style={{
            marginTop: '15px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            color: '#333',
            fontWeight: 'bold'
          }}>
            {watchCount} People watching now...
      </div>

          {/* Product Reveal Section */}
          {showProducts && (
            <>
              {/* Green Bar with Text */}
              <div style={{
                width: '100%',
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '15px 0',
                textAlign: 'center',
                marginTop: '20px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold'
              }}>
                Claim Your Discounted Alpha Bites Below While Stock Lasts
          </div>

              {/* Product Options */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                padding: '20px',
                width: '100%',
                maxWidth: '960px'
              }}>
                {/* Try Two Option */}
                <div style={{
                  flex: '1',
                  minWidth: '280px',
                  maxWidth: '300px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    backgroundColor: '#FFF8E7',
                    padding: '15px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ margin: 0, color: '#333', fontSize: '24px' }}>Try Two</h3>
                    <p style={{ margin: '5px 0 0', color: '#666' }}>60 Days, 2 Bottles</p>
      </div>
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <img src="/images/2bottles.png" alt="2 Bottles" style={{ maxWidth: '200px', height: 'auto' }} />
                    <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#333', margin: '15px 0' }}>
                      <span style={{ fontSize: '30px' }}>$</span>79<span style={{ fontSize: '24px', color: '#666' }}> PER BOTTLE</span>
        </div>
                    <div style={{ color: '#D32F2F', fontWeight: 'bold', margin: '10px 0' }}>
                      YOU SAVE $436!
        </div>
                    <div style={{ margin: '10px 0', color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                      <span style={{ fontSize: '20px' }}>✓</span> 180 DAYS GUARANTEE
        </div>
                    <a href="https://afflat3e1.com/lnk.asp?o=28584&c=918277&a=271469&k=7AAF2B3495F0AA69D812039F5822E7A3&l=31571" style={{
                      display: 'block',
                      backgroundColor: '#FFD700',
                      color: '#000',
                      padding: '15px',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      marginTop: '15px',
                      fontSize: '20px'
                    }}>
                      BUY NOW
                    </a>
                    <div style={{ marginTop: '15px' }}>
                      <img src="/images/cards.png" alt="Payment Methods" style={{ maxWidth: '200px' }} />
          </div>
                    <div style={{ marginTop: '15px', fontSize: '16px' }}>
                      <div>Total: <span style={{ textDecoration: 'line-through', color: '#999' }}>$594</span> <strong>$158</strong></div>
                      <div>+9.99 SHIPPING</div>
                    </div>
          </div>
        </div>

                {/* Best Value Option */}
                <div style={{
                  flex: '1',
                  minWidth: '280px',
                  maxWidth: '300px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  border: '2px solid #DAA520'
                }}>
                  <div style={{
                    background: 'linear-gradient(to bottom, #DAA520, #FFD700)',
                    padding: '15px',
                    textAlign: 'center',
                    color: '#000'
                  }}>
                    <h3 style={{ margin: 0, fontSize: '24px' }}>Best Value!</h3>
                    <p style={{ margin: '5px 0 0' }}>180 Days, 6 Bottles</p>
                  </div>
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <img src="/images/6bottles.png" alt="6 Bottles" style={{ maxWidth: '200px', height: 'auto' }} />
                    <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#333', margin: '15px 0' }}>
                      <span style={{ fontSize: '30px' }}>$</span>49<span style={{ fontSize: '24px', color: '#666' }}> PER BOTTLE</span>
                    </div>
                    <div style={{ color: '#D32F2F', fontWeight: 'bold', margin: '10px 0' }}>
                      YOU SAVE $1488!
                    </div>
                    <div style={{ backgroundColor: '#000', color: '#fff', padding: '5px', margin: '10px 0', fontWeight: 'bold' }}>
                      BIGGEST DISCOUNT
                    </div>
                    <div style={{ margin: '10px 0', color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                      <span style={{ fontSize: '20px' }}>✓</span> 180 DAYS GUARANTEE
                    </div>
                    <a href="https://afflat3e1.com/lnk.asp?o=28584&c=918277&a=271469&k=7AAF2B3495F0AA69D812039F5822E7A3&l=31571" style={{
                      display: 'block',
                      backgroundColor: '#FFD700',
                      color: '#000',
                      padding: '15px',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      marginTop: '15px',
                      fontSize: '20px'
                    }}>
                      BUY NOW
                    </a>
                    <div style={{ marginTop: '15px' }}>
                      <img src="/images/cards.png" alt="Payment Methods" style={{ maxWidth: '200px' }} />
                    </div>
                    <div style={{ marginTop: '15px', fontSize: '16px' }}>
                      <div>Total: <span style={{ textDecoration: 'line-through', color: '#999' }}>$1782</span> <strong>$294</strong></div>
                      <div style={{ color: '#4CAF50', fontWeight: 'bold' }}>+ FREE SHIPPING</div>
                    </div>
                  </div>
        </div>

                {/* Good Value Option */}
                <div style={{
                  flex: '1',
                  minWidth: '280px',
                  maxWidth: '300px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    backgroundColor: '#FFF8E7',
                    padding: '15px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ margin: 0, color: '#333', fontSize: '24px' }}>Good Value</h3>
                    <p style={{ margin: '5px 0 0', color: '#666' }}>90 Days, 3 Bottles</p>
          </div>
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <img src="/images/3bottles.png" alt="3 Bottles" style={{ maxWidth: '200px', height: 'auto' }} />
                    <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#333', margin: '15px 0' }}>
                      <span style={{ fontSize: '30px' }}>$</span>69<span style={{ fontSize: '24px', color: '#666' }}> PER BOTTLE</span>
                    </div>
                    <div style={{ color: '#D32F2F', fontWeight: 'bold', margin: '10px 0' }}>
                      YOU SAVE $684!
                    </div>
                    <div style={{ margin: '10px 0', color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                      <span style={{ fontSize: '20px' }}>✓</span> 180 DAYS GUARANTEE
                    </div>
                    <a href="https://afflat3e1.com/lnk.asp?o=28584&c=918277&a=271469&k=7AAF2B3495F0AA69D812039F5822E7A3&l=31571" style={{
                      display: 'block',
                      backgroundColor: '#FFD700',
                      color: '#000',
                      padding: '15px',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      marginTop: '15px',
                      fontSize: '20px'
                    }}>
                      BUY NOW
                    </a>
                    <div style={{ marginTop: '15px' }}>
                      <img src="/images/cards.png" alt="Payment Methods" style={{ maxWidth: '200px' }} />
                    </div>
                    <div style={{ marginTop: '15px', fontSize: '16px' }}>
                      <div>Total: <span style={{ textDecoration: 'line-through', color: '#999' }}>$891</span> <strong>$207</strong></div>
                      <div style={{ color: '#4CAF50', fontWeight: 'bold' }}>+ FREE SHIPPING</div>
                    </div>
                  </div>
          </div>
        </div>

              {/* Money Back Guarantee Section */}
              <div style={{
                maxWidth: '800px',
                margin: '40px auto',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <img src="/images/guarantee.png" alt="180 Days Money Back Guarantee" style={{ maxWidth: '150px' }} />
                <h3 style={{ color: '#333', marginTop: '20px' }}>100% Satisfaction 180-Day Money Back Guarantee</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Your success is our success! If you are not absolutely thrilled with your transformation, 
                  just let us know within 180 days and we'll refund every penny of your investment. No questions asked!
                </p>
          </div>
            </>
          )}

          {/* Scientific References Section */}
          <div style={{
            marginTop: '50px',
            width: '100%',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '24px',
              color: '#333',
              marginBottom: '30px',
              fontFamily: 'Arial, sans-serif'
            }}>
              Scientific References
            </h2>

            {/* Logos Container */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '30px',
              marginBottom: '20px',
              padding: '20px'
            }}>
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} style={{
                  width: '160px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px'
                }}>
                  <img 
                    src={`/images/logo${num}.png`}
                    alt={`Scientific Reference ${num}`}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
            />
          </div>
              ))}
        </div>

            {/* Disclaimer */}
            <p style={{
              fontSize: '12px',
              color: '#666',
              maxWidth: '800px',
              margin: '20px auto',
              textAlign: 'center'
            }}>
              The company is not endorsed by, sponsored by, or affiliated with any of these organizations
            </p>
              </div>

          {/* Footer Disclaimers */}
          <div style={{
            marginTop: '50px',
            borderTop: '1px solid #eee',
            paddingTop: '20px',
            width: '100%'
          }}>
            <p style={{
              fontSize: '11px',
              color: '#666',
              textAlign: 'center',
              margin: '10px 0'
            }}>
              Disclaimer: These statements have not been evaluated by the Food and Drug Administration.
            </p>
            <p style={{
              fontSize: '11px',
              color: '#666',
              textAlign: 'center',
              margin: '10px 0'
            }}>
              This material is an advertising piece intended to market our product and supplements. This product is not intended to diagnose, treat, cure, or prevent any disease. The statements regarding these products have not been evaluated by the Food and Drug Administration. The testimonials presented are from actual customers. Results may vary.
            </p>
            <p style={{
              fontSize: '11px',
              color: '#666',
              textAlign: 'center',
              margin: '10px 0'
            }}>
              This site is not affiliated with Google or any Google entity. Once you leave Google, it is no longer their responsibility but that of our site. We make every effort to clearly indicate and show all the real proofs of the product and use actual results. We do not sell your email or any information to third parties. We never engage in any kind of spam. If you have any questions, feel free to use the contact link to reach us during business hours from Monday to Friday.
            </p>
            <p style={{
              fontSize: '11px',
              color: '#666',
              textAlign: 'center',
              margin: '10px 0'
            }}>
              © Alpha Bites Male Enhancement 2025. All Rights Reserved.
              </p>
            </div>
        </div>
      </div>

      <style jsx global>{`
        /* Global Styles */
        html {
          scroll-behavior: smooth;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          overflow-x: hidden;
        }
        
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #000000;
          color: #ffffff;
          line-height: 1;
          overflow-x: hidden;
        }
        
        /* Page Container */
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }
        
        /* Product Reveal Container */
        .product-reveal-container {
          width: 100%;
          max-width: 800px;
          margin: 20px auto 0; /* Reduced from 80px to 20px for tighter spacing */
          background-color: #c6890c;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 0 0 30px 0;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        /* Headline Section */
        .headline-section {
          text-align: center;
          padding: 20px 10px;
          background-color: #000000;
        }

        .headline-section h1 {
          font-size: 28px;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
          font-family: 'Ubuntu', sans-serif;
        }

        .blue-highlight {
          color: #ffffff;
          background-color: #0000ff;
          padding: 0 4px;
          font-weight: bold;
        }

        /* Video Container */
        .video-container {
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
          padding: 0 10px;
          position: relative;
          height: auto;
          margin-bottom: 0; /* Reduced from 20px to 0 */
        }

        /* Instruction Text */
        .instruction-text {
          width: 100%;
          text-align: center;
          margin: 0 0 30px 0;
          padding: 20px 0;
          background-color: #c6890c;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          border-bottom: 2px solid #ffffff;
        }

        .instruction-text h3 {
          font-size: 24px;
          text-align: center;
          color: #ffffff;
          line-height: 1.3;
          font-weight: 700;
          font-family: 'Ubuntu', sans-serif;
          margin: 0;
          padding: 0 20px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        /* Product Options */
        .product-options {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          width: 100%;
          max-width: 760px;
          margin: 20px auto;
          padding: 0 20px;
        }
        
        .product-option {
          width: calc(33.33% - 20px);
          min-width: 250px;
          margin-bottom: 20px;
        }
        
        .product-container {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          height: 100%;
          transition: transform 0.3s ease;
        }
        
        .product-container:hover {
          transform: translateY(-5px);
        }
        
        .product-title {
          font-size: 18px;
          color: #c6890c;
          font-weight: 700;
          margin: 0 0 15px 0;
        }
        
        .product-image {
          margin: 15px 0;
        }

        .product-image img {
          max-width: 200px;
          height: auto;
          margin: 0 auto;
          display: block;
        }
        
        .product-price {
          font-size: 24px;
          color: #000000;
          font-weight: 700;
          margin: 15px 0 0 0;
        }
        
        /* CTA Button */
        .cta-button-container {
          text-align: center;
          margin: 30px auto;
          width: 100%;
          max-width: 760px;
        }
        
        .cta-button {
          background: #00b800;
          border-radius: 8px;
          border: none;
          color: #ffffff;
          padding: 20px 40px;
          font-weight: 700;
          display: inline-block;
          text-align: center;
          font-size: 28px;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background: #00a000;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
        }

        .zooming {
          animation: zoom 1.5s infinite alternate;
        }
        
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        
        /* Guarantee Section */
        .guarantee-section {
          background-color: transparent;
          padding: 20px;
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .guarantee-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          padding: 20px;
        }

        .guarantee-image {
          margin-right: 20px;
          flex: 0 0 auto;
        }

        .guarantee-image img {
          max-width: 150px;
          height: auto;
        }
        
        .guarantee-text {
          max-width: 600px;
          text-align: left;
          flex: 1 1 auto;
        }

        .guarantee-text p {
          font-size: 16px;
          line-height: 1.5;
          color: #ffffff;
          text-align: left;
        }

        @media (max-width: 768px) {
          .guarantee-content {
            flex-direction: column;
          }
          
          .guarantee-image {
            margin-right: 0;
            margin-bottom: 20px;
          }
          
          .guarantee-text p {
          text-align: center;
          }
        }

        /* Social Proof Popup */
        .social-proof-popup {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 1rem;
          border-radius: 8px;
          z-index: 1000;
          transform: translateY(100%);
          transition: transform 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .social-proof-popup.show {
          transform: translateY(0);
        }

        .popup-content {
          font-size: 0.9rem;
        }

        .popup-content p {
          margin: 0;
        }

        .popup-content small {
          color: rgba(255, 255, 255, 0.6);
        }

        /* Footer */
        .site-footer {
          padding: 2rem 1rem;
          background-color: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
          margin-top: auto; /* Push to bottom */
          width: 100%;
        }

        .footer-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 0;
        }

        .footer-links a {
          color: #00b800;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #ffffff;
        }

        .divider {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .instruction-text h3 {
            font-size: 22px;
          }
          
          .product-options {
            width: 90%;
          }
          
          .product-option {
            width: calc(50% - 20px);
          }
        }

        @media (max-width: 640px) {
          .product-options {
            width: 90%;
            flex-direction: column;
          }
          
          .product-option {
            width: 100%;
          }
          
          .instruction-text h3 {
            font-size: 18px;
          }
          
          .cta-button {
            font-size: 16px;
            padding: 12px 24px;
          }
        }

        /* Sound Check */
        .sound-check {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          padding: 12px;
          margin: 10px 0 10px 0; /* Reduced bottom margin from 30px to 10px */
          text-align: center;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
        }

        .volume-icon {
          font-size: 20px;
          animation: pulse 2s infinite;
          color: #2ecc71;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* Script to show product options after video plays */}
      <ClientSideOnly>
        {/* Additional script to prevent right-click and other interactions */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
            });
            
            document.onkeydown = function(e) {
              if (e.keyCode == 123) return false;
            };
            
            document.addEventListener('selectstart', e => e.preventDefault());
            
            // Add a manual resync button for direct MP4 player
            window.addEventListener('load', function() {
              setTimeout(function() {
                // Wait for video element to be available
                if (window.smartplayer && window.smartplayer.instances && window.smartplayer.instances.length > 0) {
                  const videoElement = window.smartplayer.instances[0].video;
                  
                  if (videoElement) {
                    // Create a manual resync button
                    const resyncButton = document.createElement('button');
                    resyncButton.textContent = 'Fix Audio Sync';
                    resyncButton.style.position = 'absolute';
                    resyncButton.style.bottom = '10px';
                    resyncButton.style.right = '10px';
                    resyncButton.style.zIndex = '100';
                    resyncButton.style.background = 'rgba(0,0,0,0.5)';
                    resyncButton.style.color = 'white';
                    resyncButton.style.border = 'none';
                    resyncButton.style.borderRadius = '4px';
                    resyncButton.style.padding = '5px 10px';
                    resyncButton.style.fontSize = '12px';
                    resyncButton.style.cursor = 'pointer';
                    resyncButton.style.opacity = '0.7';
                    
                    // Simple resync on button click - just seek a tiny bit
                    resyncButton.addEventListener('click', function() {
                      if (videoElement && !videoElement.paused) {
                        const currentTime = videoElement.currentTime;
                        videoElement.currentTime = currentTime + 0.1;
                      }
                    });
                    
                    // Add the button to the video container
                    const videoContainer = document.querySelector('.video-container');
                    if (videoContainer) {
                      videoContainer.appendChild(resyncButton);
                    }
                    
                    // Add a keyboard shortcut for resyncing (press 'r')
                    document.addEventListener('keydown', function(e) {
                      if (e.key === 'r' && videoElement && !videoElement.paused) {
                        const currentTime = videoElement.currentTime;
                        videoElement.currentTime = currentTime + 0.1;
                      }
                    });
                  }
                }
              }, 1000);
            });
          `
        }} />
      </ClientSideOnly>
    </>
  );
}
