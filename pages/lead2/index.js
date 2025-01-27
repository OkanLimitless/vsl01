import Head from 'next/head';
import dynamic from 'next/dynamic';
import VideoPlayer from '../../components/VideoPlayer';
import { useState, useEffect } from 'react';

const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function Lead2() {
  const [viewerCount, setViewerCount] = useState(390);
  const [showCTA, setShowCTA] = useState(false);
  const [bottlesLeft, setBottlesLeft] = useState(15);
  const [currentPurchase, setCurrentPurchase] = useState(null);
  const [guaranteeTime, setGuaranteeTime] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    // Viewer counter logic
    const viewerInterval = setInterval(() => {
      setViewerCount(prev => {
        // 70% chance to change the number
        if (Math.random() < 0.7) {
          // Generate a change between -3 and +5
          const change = Math.floor(Math.random() * 9) - 3;
          const newCount = prev + change;
          // Keep it between 350 and 450
          return Math.min(450, Math.max(350, newCount));
        }
        return prev;
      });
    }, 2000);

    // Video progress watcher
    const watchVideoProgress = () => {
      if (typeof smartplayer === 'undefined') {
        setTimeout(watchVideoProgress, 500);
        return;
      }

      smartplayer.instances[0].on('timeupdate', () => {
        if (smartplayer.instances[0].video.currentTime >= 1882) { // ~31 minutes
          setShowCTA(true);
          localStorage.setItem('alreadyCtaDisplayed', true);
        }
      });
    };

    // Check if CTA should be shown
    if (localStorage.getItem('alreadyCtaDisplayed') === 'true') {
      setShowCTA(true);
    } else {
      watchVideoProgress();
    }

    return () => {
      clearInterval(viewerInterval);
    };
  }, []);

  useEffect(() => {
    let hours = 23;
    let minutes = 59;
    let seconds = 59;

    const timerInterval = setInterval(() => {
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      }

      const countdownElement = document.querySelector('.countdown');
      if (countdownElement) {
        countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (showCTA) {
      const purchases = [
        { location: 'New York, US', product: 'Single Bottle', time: '2 minutes ago', verified: true },
        { location: 'London, UK', product: '6 Bottle Pack', time: 'Just now', verified: true },
        { location: 'Toronto, CA', product: '3 Bottle Pack', time: '1 minute ago', verified: true },
        { location: 'Sydney, AU', product: 'Single Bottle', time: '3 minutes ago', verified: true }
      ];

      let currentIndex = 0;
      const showPurchase = () => {
        setCurrentPurchase(purchases[currentIndex]);
        currentIndex = (currentIndex + 1) % purchases.length;
      };

      showPurchase(); // Show first purchase immediately
      const purchaseInterval = setInterval(showPurchase, 8000); // Show new purchase every 8 seconds

      return () => clearInterval(purchaseInterval);
    }
  }, [showCTA]);

  useEffect(() => {
    if (showCTA) {
      const countdownInterval = setInterval(() => {
        setGuaranteeTime(prev => {
          if (prev <= 0) return 0;
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [showCTA]);

  return (
    <>
      <Head>
        <title>Potent Salt Trick SkyRocket SexDrive & Performance</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      </Head>

      <div className="page-container">
        <div className="top-notification">
          <span className="viewer-count">{viewerCount}</span> people are watching this presentation. Due to the high number of accesses, it will only be available until: 1/27/2025
        </div>

        <div className="content-box">
          <div className="title-section">
            <h1>
              Potent <span className="red-text">Salt Trick</span> SkyRocket
              <br />
              SexDrive & Performance
            </h1>
          </div>

          <VideoPlayer />

          {showCTA && (
            <>
              <div className="live-stats">
                <div className="attention-container">
                  <div className="attention-arrows">
                    <div className="arrow-wrapper">
                      <div className="arrow-down"></div>
                      <div className="arrow-down"></div>
                      <div className="arrow-down"></div>
                    </div>
                  </div>
                  <div className="stock-alert">
                    ⚠️ Warning: Only <span className="highlight">{bottlesLeft}</span> bottles left in stock
                    <div className="scroll-text">Scroll Down To Secure Your Bottle</div>
                  </div>
                </div>
                
                <div className="viewers-bar">
                  <div className="pulse-dot"></div>
                  <span className="highlight">{viewerCount}</span> people watching right now
                </div>

                <div className="guarantee-countdown">
                  <div className="guarantee-icon">🔒</div>
                  <div className="guarantee-content">
                    <div className="guarantee-title">100% Money-Back Guarantee!</div>
                    <div className="guarantee-timer">
                      Special Deal Expires In: {Math.floor(guaranteeTime / 60)}:{(guaranteeTime % 60).toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571" 
                className="cta-button pulse"
                target="_blank"
                rel="noopener noreferrer"
              >
                CLICK HERE TO GET YOUR BOTTLE
                <div className="sub-text">While Supplies Last</div>
              </a>

              <div className="trust-badges">
                <div className="secure-badge">🔒 Secure 256-bit SSL Encryption</div>
                <div className="guarantee">✓ 180-Day Money Back Guarantee</div>
              </div>
            </>
          )}

          {currentPurchase && (
            <div className="purchase-notification">
              <div className="notification-content">
                <div className="notification-icon">✓</div>
                <div className="notification-text">
                  <span className="verified-text">Verified Purchase</span>
                  <span className="purchase-details">
                    {currentPurchase.location} • {currentPurchase.time}
                  </span>
                  <span className="product-name">{currentPurchase.product}</span>
                </div>
              </div>
            </div>
          )}

          <div className="featured-section">
            <h2>AS FEATURED IN</h2>
            <div className="featured-logos">
              <img src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2Fc03d3b4b3c5bfc6ca2e350f9e465fb8842d94462%2Fft1.png?auto=compress,format&fit=scale&w=115&h=90" alt="NBC News" />
              <img src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2F0f761c6519a78db8280d626afad111d6a0c595c8%2Fft2.png?auto=compress,format&fit=scale&w=89&h=85" alt="USA Today" />
              <img src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2Fce40fa89617d681dd22e8afa71dffe72826a181d%2Fft3.png?auto=compress,format&fit=scale&w=101&h=80" alt="CBS" />
              <img src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2F34ab16f31881281575ffdce9fe9d104b05d00c4a%2Fft4.png?auto=compress,format&fit=scale&w=84&h=84" alt="Fox News" />
            </div>
          </div>

          <div className="scientific-section">
            <div className="scientific-button">SCIENTIFIC REFERENCES</div>
            <div className="scientific-logos">
              <div className="top-row">
                <img src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2F42e00510186f96a3f459bd6e498e64d349ecd53b%2FMIT-Logo.png?auto=compress,format&fit=scale&w=222&h=125" alt="MIT" />
                <img src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2Fce9ee87f492e279f28512c69c92705d30cebf37b%2FJournal-sexual-logo-removebg-preview.png?auto=compress,format&fit=scale&w=379&h=76" alt="Harvard University" />
                <img src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2F617e8eb8d2ab9fbd29f51df8e43eb1b04761392f%2Fpasted%20image%200%20%282%29.png?auto=compress,format&fit=scale&w=243&h=81" alt="Johns Hopkins University" />
              </div>
              <div className="bottom-row">
                <img src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2Fdb446f6354d97436079a6a9233aff4ebbe35ef0d%2Fref_1.png?auto=compress,format&fit=scale&w=187&h=64" alt="NIH" />
                <img src="https://convertri.imgix.net/e7429909-68fc-11ee-b5e1-06326af95a41%2Fd53981d166bcb27485e51a589ddf60006c1f8a89%2Fref_3.png?auto=compress,format&fit=scale&w=264&h=73" alt="PubMed" />
              </div>
            </div>
          </div>
        </div>

        <footer className="site-footer">
          <div className="footer-content">
            <p className="copyright">© 2025 EP ® - All Rights Reserved</p>
            <div className="footer-links">
              <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a>
              <span className="divider">|</span>
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </div>
            <p className="disclaimer">
              This site is not affiliated with any advertising platform. This product is marketed with the support of Hotmart. The platform does not perform prior editorial control of the products marketed, nor does it evaluate the technicality and experience of those who produce them. The existence of a product and its acquisition through the platform cannot be considered, under any circumstances, as a guarantee of the quality of the content and the result. By acquiring it, the buyer declares to be aware of this information. Hotmart's terms and policies can be consulted here, even before finalizing the purchase.
            </p>
          </div>
        </footer>

        <style jsx>{`
          .page-container {
            width: 100%;
            min-height: 100vh;
            background: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;
          }

          .top-notification {
            width: 100%;
            background: #ff0000;
            color: white;
            text-align: center;
            padding: 8px;
            font-size: 16px;
          }

          .viewer-count {
            font-weight: bold;
          }

          .content-box {
            width: 100%;
            max-width: 800px;
            margin: 20px auto;
            padding: 0 20px;
          }

          .title-section {
            background: #fff;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #000;
          }

          .title-section h1 {
            color: #000;
            font-size: 32px;
            font-weight: bold;
            line-height: 1.2;
            margin: 0;
          }

          .red-text {
            color: #ff0000;
          }

          .featured-section {
            background: #000;
            padding: 40px 20px;
            text-align: center;
          }

          .featured-section h2 {
            color: white;
            font-size: 24px;
            margin-bottom: 30px;
          }

          .featured-logos {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            flex-wrap: wrap;
          }

          .featured-logos img {
            height: 40px;
            filter: brightness(0) invert(1);
          }

          .scientific-section {
            background: #fff;
            padding: 40px 20px;
            text-align: center;
          }

          .scientific-button {
            display: inline-block;
            background: #000;
            color: white;
            padding: 10px 30px;
            border-radius: 25px;
            font-weight: bold;
            margin-bottom: 30px;
          }

          .scientific-logos {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .top-row, .bottom-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            flex-wrap: wrap;
          }

          .scientific-logos img {
            height: 50px;
            object-fit: contain;
          }

          .live-stats {
            margin-bottom: 20px;
          }

          .attention-container {
            position: sticky;
            top: 0;
            z-index: 100;
            background: rgba(0,0,0,0.95);
            padding: 15px 0;
            backdrop-filter: blur(8px);
          }

          .attention-arrows {
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
          }

          .arrow-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          .arrow-down {
            width: 20px;
            height: 20px;
            border-right: 4px solid #fff;
            border-bottom: 4px solid #fff;
            transform: rotate(45deg);
            margin: 0 auto;
            animation: arrowBounce 2s infinite;
            opacity: 0;
          }

          .arrow-down:nth-child(1) {
            animation-delay: 0s;
          }

          .arrow-down:nth-child(2) {
            animation-delay: 0.2s;
          }

          .arrow-down:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes arrowBounce {
            0% {
              opacity: 0;
              transform: rotate(45deg) translate(-20px, -20px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: rotate(45deg) translate(20px, 20px);
            }
          }

          .stock-alert {
            background: #ff3b3b;
            color: white;
            padding: 15px;
            font-size: 22px;
            text-align: center;
            border-radius: 4px;
            box-shadow: 0 4px 15px rgba(255, 59, 59, 0.3);
            margin: 0 20px;
          }

          .scroll-text {
            font-size: 18px;
            margin-top: 8px;
            color: #fff;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
            font-weight: 500;
          }

          .highlight {
            color: #fff;
            font-weight: bold;
          }

          .viewers-bar {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px;
            font-size: 22px;
            margin: 15px 0;
          }

          .pulse-dot {
            width: 10px;
            height: 10px;
            background: #ff0000;
            border-radius: 50%;
            animation: pulse 1.5s ease-in-out infinite;
          }

          .urgency-messages {
            width: 100%;
            margin: 20px 0;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 15px;
          }

          .timer-message,
          .stock-message,
          .discount-message {
            color: white;
            font-size: 20px;
            padding: 10px;
            margin: 5px 0;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .timer-message:last-child,
          .stock-message:last-child,
          .discount-message:last-child {
            border-bottom: none;
          }

          .countdown {
            color: #ff3b3b;
            font-weight: bold;
            font-family: monospace;
          }

          .cta-button {
            display: block;
            width: 100%;
            max-width: 600px;
            margin: 30px auto;
            background: #2ecc71;
            color: white;
            font-size: 32px;
            font-weight: bold;
            padding: 25px 20px;
            border-radius: 12px;
            text-decoration: none;
            text-align: center;
            text-transform: uppercase;
            box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
            transition: all 0.3s ease;
            animation: bounce 2s infinite;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(46, 204, 113, 0.4);
            background: #27ae60;
          }

          .sub-text {
            font-size: 20px;
            margin-top: 8px;
            text-transform: none;
          }

          .trust-badges {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin: 30px 0;
            font-size: 18px;
          }

          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }

          @media (max-width: 768px) {
            .content-box {
              padding: 0 15px;
            }

            .stock-alert,
            .viewers-bar {
              font-size: 18px;
            }

            .cta-button {
              font-size: 24px;
              padding: 20px 15px;
            }

            .sub-text {
              font-size: 16px;
            }

            .trust-badges {
              flex-direction: row;
              flex-wrap: wrap;
              gap: 20px;
              font-size: 16px;
            }
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }

          .countdown {
            animation: blink 1s ease-in-out infinite;
          }

          .site-footer {
            width: 100%;
            background: #000;
            padding: 30px 20px;
            margin-top: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .footer-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .copyright {
            color: #888;
            margin-bottom: 15px;
          }

          .footer-links {
            margin-bottom: 20px;
          }

          .footer-links a {
            color: #888;
            text-decoration: none;
            transition: color 0.3s;
          }

          .footer-links a:hover {
            color: #fff;
          }

          .divider {
            color: #888;
            margin: 0 10px;
          }

          .disclaimer {
            color: #666;
            font-size: 12px;
            line-height: 1.5;
          }

          .purchase-notification {
            background: rgba(46, 204, 113, 0.1);
            border-left: 4px solid #2ecc71;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
            animation: slideIn 0.5s ease-out;
          }

          .notification-content {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .notification-icon {
            background: #2ecc71;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
          }

          .notification-text {
            display: flex;
            flex-direction: column;
          }

          .verified-text {
            color: #2ecc71;
            font-weight: bold;
            font-size: 14px;
          }

          .purchase-details {
            color: #888;
            font-size: 12px;
            margin: 2px 0;
          }

          .product-name {
            color: white;
            font-size: 16px;
            font-weight: 500;
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-20px);
            }
            60% {
              transform: translateY(-10px);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .scroll-indicator {
            margin-top: 10px;
            font-size: 16px;
            color: #fff;
            text-align: center;
          }

          .chevron {
            margin: 0 auto;
            width: 28px;
            height: 8px;
            opacity: 0;
            transform: scale3d(0.5, 0.5, 0.5);
            animation: move 3s ease-out infinite;
          }

          .chevron:first-child {
            animation: move 3s ease-out 1s infinite;
          }

          .chevron:nth-child(2) {
            animation: move 3s ease-out 2s infinite;
          }

          .chevron:before,
          .chevron:after {
            content: ' ';
            position: absolute;
            top: 0;
            height: 100%;
            width: 51%;
            background: #fff;
          }

          .chevron:before {
            left: 0;
            transform: skew(0deg, 30deg);
          }

          .chevron:after {
            right: 0;
            transform: skew(0deg, -30deg);
          }

          .guarantee-countdown {
            background: linear-gradient(to right, rgba(46, 204, 113, 0.1), rgba(46, 204, 113, 0.2));
            border: 1px solid rgba(46, 204, 113, 0.3);
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            animation: pulse 2s infinite;
          }

          .guarantee-icon {
            font-size: 32px;
            margin-bottom: 10px;
          }

          .guarantee-title {
            color: #2ecc71;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .guarantee-timer {
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            font-family: monospace;
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }

          @media (max-width: 768px) {
            .guarantee-title {
              font-size: 20px;
            }
            .guarantee-timer {
              font-size: 18px;
            }
          }
        `}</style>
      </div>
    </>
  );
} 