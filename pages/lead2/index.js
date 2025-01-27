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

  useEffect(() => {
    // Viewer counter logic
    const viewerInterval = setInterval(() => {
      setViewerCount(prev => {
        if (Math.random() < 0.3) {
          return prev + Math.floor(Math.random() * 3) - 1;
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
                <div className="stock-alert">
                  ⚠️ Warning: Only <span className="highlight">{bottlesLeft}</span> bottles left in stock
                </div>
                
                <div className="viewers-bar">
                  <div className="pulse-dot"></div>
                  <span className="highlight">{viewerCount}</span> people watching right now
                </div>

                <div className="urgency-messages">
                  <div className="timer-message">
                    ⏰ Special Offer Ends In: <span className="countdown">23:59:59</span>
                  </div>
                  <div className="stock-message">
                    📊 High Demand: <span className="highlight">87%</span> of Today's Stock Sold
                  </div>
                  <div className="discount-message">
                    💰 Save Up To <span className="highlight">$780</span> Today Only
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

          .stock-alert {
            width: 100%;
            background: #ff3b3b;
            color: white;
            padding: 15px;
            font-size: 22px;
            text-align: center;
            margin: 15px 0;
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
        `}</style>
      </div>
    </>
  );
} 