import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';

const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(null);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    // Buy notifications logic
    const buyers = [
      { name: 'Michael R.', location: 'Los Angeles, CA' },
      { name: 'James S.', location: 'Houston, TX' },
      { name: 'William D.', location: 'Chicago, IL' },
      { name: 'Robert K.', location: 'Miami, FL' },
      { name: 'Thomas B.', location: 'Phoenix, AZ' }
    ];

    const showRandomPurchase = () => {
      const buyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentBuyer(buyer);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    };

    // Show first notification after 15-30 seconds
    const initialNotification = setTimeout(() => {
      showRandomPurchase();
      // Then show subsequent notifications every 40-90 seconds
      setInterval(showRandomPurchase, 40000 + Math.random() * 50000);
    }, 15000 + Math.random() * 15000);

    // Video progress watcher
    const watchVideoProgress = () => {
      if (typeof window !== 'undefined' && typeof window.smartplayer === 'undefined') {
        setTimeout(watchVideoProgress, 500);
        return;
      }

      if (typeof window !== 'undefined' && window.smartplayer && window.smartplayer.instances && window.smartplayer.instances.length > 0) {
        window.smartplayer.instances[0].on('timeupdate', () => {
          if (window.smartplayer.instances[0].video.currentTime >= 2078) { // Changed from 180 to 2078 seconds
            setShowProducts(true);
          }
        });

        // Also listen for video end event
        window.smartplayer.instances[0].on('ended', () => {
          setShowProducts(true);
        });
      }
    };

    // Check if products should be shown
    if (localStorage && localStorage.getItem('alreadyProductsDisplayed') === 'true') {
      setShowProducts(true);
    } else {
      watchVideoProgress();
      
      // Fallback: Show products after 2078 seconds regardless of video progress
      setTimeout(() => {
        setShowProducts(true);
        if (localStorage) {
          localStorage.setItem('alreadyProductsDisplayed', true);
        }
      }, 2078000); // Changed from 180000 to 2078000 (2078 seconds)
    }

    return () => {
      clearTimeout(initialNotification);
    };
  }, []);

  // Save to localStorage when products are shown
  useEffect(() => {
    if (showProducts && localStorage) {
      localStorage.setItem('alreadyProductsDisplayed', true);
    }
  }, [showProducts]);

  return (
    <>
      <Head>
        <title>DO THIS "BLUE SALT HACK" TO GET UP WHENEVER YOU WANT</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://getalphabites.fun/video-fb" />
        <meta property="og:title" content="DO THIS &quot;BLUE SALT HACK&quot; TO GET UP WHENEVER YOU WANT" />
        <meta property="og:description" content="Watch Now" />
        <meta property="og:image" content="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/pWoEyG4191889.png" />
        <link rel="preload" href="https://scripts.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/thumbnail.jpg" as="image" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
      </Head>
      
      {/* Buy Notification Popup */}
      {showNotification && currentBuyer && (
        <div className="social-proof-popup show">
          <div className="popup-content">
            <p><strong>{currentBuyer.name}</strong> from <span>{currentBuyer.location}</span></p>
            <p>Just purchased</p>
            <small>a moment ago</small>
          </div>
        </div>
      )}

      <div className="page-container">
        {/* Main Headline */}
        <div className="headline-section">
          <h1>
            DO THIS <span className="blue-highlight">"BLUE SALT HACK"</span> TO GET UP WHENEVER YOU WANT
          </h1>
        </div>
        
        {/* Video Section */}
        <div className="video-container">
          <VideoPlayer />
          <div className="sound-check">
            <i className="fas fa-volume-up volume-icon"></i>
            Please check if the sound is on.
          </div>
        </div>
        
        {/* Product Options Section - Shown after video plays for 3 minutes or ends */}
        {showProducts && (
          <div className="product-reveal-container">
            <div className="instruction-text">
              <h3>
                Click on the green button to be directed to choose the bottle quantity
              </h3>
            </div>
            
            <div className="product-options">
              <div className="product-option">
                <div className="product-container">
                  <p className="product-title">BEST VALUE - 6 BOTTLES</p>
                  <div className="product-image">
                    <img src="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/oHyrlA2811229.png" alt="6 bottles" />
                  </div>
                  <h3 className="product-price">$49/ Bottle</h3>
                </div>
              </div>
              
              <div className="product-option">
                <div className="product-container">
                  <p className="product-title">GOOD VALUE - 3 BOTTLES</p>
                  <div className="product-image">
                    <img src="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/kCErml4113188.png" alt="3 bottles" />
                  </div>
                  <h3 className="product-price">$69/ Bottle</h3>
                </div>
              </div>
              
              <div className="product-option">
                <div className="product-container">
                  <p className="product-title">BASIC - 2 BOTTLES</p>
                  <div className="product-image">
                    <img src="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/HBzclW1579379.png" alt="2 bottles" />
                  </div>
                  <h3 className="product-price">$79/ Bottle</h3>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="cta-button-container">
              <a 
                href="https://hop.clickbank.net/?affiliate=die97&vendor=alphabites&pg=dtc" 
                target="_blank" 
                className="cta-button zooming"
                rel="noopener noreferrer"
              >
                CLICK HERE TO BUY
              </a>
            </div>
            
            {/* Guarantee Section */}
            <div className="guarantee-section">
              <div className="guarantee-content">
                <div className="guarantee-image">
                  <img src="https://media.atomicatpages.net/u/DY8cVjx7EoOjljlxdJtxyFSKa7o2/Pictures/mXREBX9929515.webp" alt="Money Back Guarantee" />
                </div>
                <div className="guarantee-text">
                  <p>
                    Still not sure? Remember, Alpha Bites comes with a 100% Money-Back Guarantee for a full 180 days! That means if you don't get the results we promise or you change your mind for any reason at all, just call or email our support team within the next 6 months and quickly get every penny back. What do you have to lose? Your success is virtually guaranteed!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <ClientSideOnly>
          <footer className="site-footer">
            <div className="footer-content">
              <p className="copyright">&copy; 2025 Alpha Bites ® - All Rights Reserved</p>
              <div className="footer-links">
                <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a>
                <span className="divider">|</span>
                <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              </div>
            </div>
          </footer>
        </ClientSideOnly>
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
            
            // Audio/Video Sync Helper
            window.addEventListener('load', function() {
              // Wait for smartplayer to be available
              const checkSmartPlayer = setInterval(function() {
                if (window.smartplayer && window.smartplayer.instances && window.smartplayer.instances.length > 0) {
                  clearInterval(checkSmartPlayer);
                  
                  // Get the player instance
                  const player = window.smartplayer.instances[0];
                  const videoElement = player.video;
                  
                  if (videoElement) {
                    // Add a debug overlay to help diagnose sync issues
                    const debugOverlay = document.createElement('div');
                    debugOverlay.style.position = 'absolute';
                    debugOverlay.style.bottom = '40px';
                    debugOverlay.style.right = '10px';
                    debugOverlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
                    debugOverlay.style.color = 'white';
                    debugOverlay.style.padding = '5px';
                    debugOverlay.style.fontSize = '10px';
                    debugOverlay.style.zIndex = '100';
                    debugOverlay.style.display = 'none'; // Hidden by default
                    
                    // Create a toggle button for the debug overlay
                    const debugToggle = document.createElement('button');
                    debugToggle.textContent = 'Debug Info';
                    debugToggle.style.position = 'absolute';
                    debugToggle.style.bottom = '10px';
                    debugToggle.style.left = '10px';
                    debugToggle.style.zIndex = '100';
                    debugToggle.style.background = 'rgba(0,0,0,0.5)';
                    debugToggle.style.color = 'white';
                    debugToggle.style.border = 'none';
                    debugToggle.style.borderRadius = '4px';
                    debugToggle.style.padding = '5px 10px';
                    debugToggle.style.fontSize = '12px';
                    debugToggle.style.cursor = 'pointer';
                    debugToggle.style.opacity = '0.7';
                    
                    debugToggle.addEventListener('click', () => {
                      if (debugOverlay.style.display === 'none') {
                        debugOverlay.style.display = 'block';
                        // Start updating debug info
                        updateDebugInfo();
                      } else {
                        debugOverlay.style.display = 'none';
                      }
                    });
                    
                    // Function to update debug info
                    function updateDebugInfo() {
                      if (debugOverlay.style.display === 'none') return;
                      
                      if (videoElement) {
                        const info = {
                          currentTime: videoElement.currentTime.toFixed(2),
                          duration: videoElement.duration.toFixed(2),
                          playbackRate: videoElement.playbackRate,
                          paused: videoElement.paused,
                          readyState: videoElement.readyState,
                          networkState: videoElement.networkState,
                          buffered: videoElement.buffered.length > 0 ? 
                            `${videoElement.buffered.start(0).toFixed(2)}-${videoElement.buffered.end(0).toFixed(2)}` : 'none'
                        };
                        
                        let debugText = '';
                        for (const [key, value] of Object.entries(info)) {
                          debugText += `${key}: ${value}<br>`;
                        }
                        debugOverlay.innerHTML = debugText;
                        
                        requestAnimationFrame(updateDebugInfo);
                      }
                    }
                    
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
                    
                    // More aggressive resync on button click
                    resyncButton.addEventListener('click', () => {
                      if (videoElement && !videoElement.paused) {
                        const currentTime = videoElement.currentTime;
                        
                        // Try a more aggressive resync approach
                        videoElement.pause();
                        
                        // Force a reload of media segments
                        if (player.hls && typeof player.hls.trigger === 'function') {
                          try {
                            // Try to force HLS to reload current segment
                            player.hls.trigger('hlsMediaDetached');
                            setTimeout(() => {
                              player.hls.trigger('hlsMediaAttached');
                            }, 50);
                          } catch (e) {
                            console.log('HLS reload error:', e);
                          }
                        }
                        
                        setTimeout(() => {
                          // Seek to slightly different position to force buffers to reset
                          videoElement.currentTime = currentTime + 0.1;
                          
                          setTimeout(() => {
                            videoElement.play().catch(e => {
                              console.log('Play error:', e);
                              // Try again with user interaction
                              resyncButton.textContent = 'Click to Play';
                              const clickHandler = () => {
                                videoElement.play();
                                resyncButton.textContent = 'Fix Audio Sync';
                                resyncButton.removeEventListener('click', clickHandler);
                              };
                              resyncButton.addEventListener('click', clickHandler);
                            });
                          }, 100);
                        }, 100);
                      }
                    });
                    
                    // Add the elements to the video container
                    const videoContainer = document.querySelector('.video-container');
                    if (videoContainer) {
                      videoContainer.appendChild(resyncButton);
                      videoContainer.appendChild(debugToggle);
                      videoContainer.appendChild(debugOverlay);
                    }
                    
                    // Add a keyboard shortcut for resyncing (press 'r')
                    document.addEventListener('keydown', (e) => {
                      if (e.key === 'r' && videoElement && !videoElement.paused) {
                        const currentTime = videoElement.currentTime;
                        videoElement.currentTime = currentTime + 0.1;
                      }
                    });
                  }
                }
              }, 500);
            });
          `
        }} />
      </ClientSideOnly>
    </>
  );
}
