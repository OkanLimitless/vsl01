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
  const [recentPurchases, setRecentPurchases] = useState(['John from New York', 'Jane from Chicago', 'Bob from Boston']);

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
              <div className="attention-arrows">
                <div className="arrow">⬇️</div>
                <div className="arrow">⬇️</div>
                <div className="arrow">⬇️</div>
              </div>
              
              <div className="cta-wrapper">
                <div className="live-stats">
                  <div className="stock-alert">
                    <span className="warning-icon">⚠️</span>
                    Warning: Only <span className="highlight">{bottlesLeft}</span> bottles left in stock
                  </div>
                  <div className="viewers-bar">
                    <span className="pulse-dot"></span>
                    <span className="live-count">{viewerCount}</span> people watching right now
                  </div>
                  <div className="recent-sales">
                    {recentPurchases.map((purchase, index) => (
                      <div key={index} className="notification" style={{animationDelay: `${index * 4}s`}}>
                        🔥 {purchase}
                      </div>
                    ))}
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
              </div>
            </>
          )}

          <div className="featured-section">
            <h2>AS FEATURED IN</h2>
            <div className="featured-logos">
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/featured/nbc.png" alt="NBC News" />
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/featured/usa.png" alt="USA Today" />
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/featured/cbs.png" alt="CBS" />
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/featured/fox.png" alt="Fox News" />
            </div>
          </div>

          <div className="scientific-section">
            <div className="scientific-button">SCIENTIFIC REFERENCES</div>
            <div className="scientific-logos">
              <div className="top-row">
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/refs/jhu.png" alt="Johns Hopkins University" />
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/refs/harvard.png" alt="Harvard University" />
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/refs/mit.png" alt="MIT" />
              </div>
              <div className="bottom-row">
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/refs/nih.png" alt="NIH" />
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/refs/pubmed.png" alt="PubMed" />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .page-container {
            width: 100%;
            min-height: 100vh;
            background: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
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
            background: #fff;
            border: 2px solid #000;
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

          .cta-wrapper {
            background: #000;
            padding: 20px;
            text-align: center;
          }

          .live-stats {
            margin-bottom: 20px;
          }

          .stock-alert {
            background: #ff0000;
            color: white;
            padding: 12px;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite;
          }

          .warning-icon {
            font-size: 20px;
            margin-right: 8px;
          }

          .highlight {
            color: #ffff00;
            font-weight: bold;
          }

          .viewers-bar {
            background: #1a1a1a;
            color: white;
            padding: 10px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .pulse-dot {
            width: 8px;
            height: 8px;
            background: #ff0000;
            border-radius: 50%;
            animation: pulse 1s infinite;
          }

          .live-count {
            color: #ff0000;
            font-weight: bold;
          }

          .recent-sales {
            color: white;
            font-size: 14px;
            margin-top: 10px;
          }

          .notification {
            position: absolute;
            white-space: nowrap;
            animation: slideIn 12s linear infinite;
          }

          .cta-button {
            display: inline-block;
            background: linear-gradient(to bottom, #00d40e, #00a80b);
            color: white;
            font-size: 28px;
            font-weight: bold;
            padding: 25px 50px;
            border-radius: 12px;
            text-decoration: none;
            text-transform: uppercase;
            box-shadow: 0 5px 15px rgba(0,255,0,0.3);
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
          }

          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,255,0,0.4);
            background: linear-gradient(to bottom, #00e40f, #00b80c);
            color: white;
            text-decoration: none;
          }

          .sub-text {
            font-size: 16px;
            opacity: 0.9;
            margin-top: 5px;
            text-transform: none;
          }

          .trust-badges {
            margin-top: 20px;
            color: white;
            display: flex;
            justify-content: center;
            gap: 20px;
            font-size: 14px;
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          @keyframes shake {
            10%, 90% { transform: translate3d(-1px, 0, 0); }
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% { transform: translate3d(4px, 0, 0); }
          }

          @keyframes slideIn {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          @media (max-width: 768px) {
            .featured-logos img,
            .scientific-logos img {
              height: 30px;
            }

            .cta-button {
              font-size: 20px;
              padding: 15px 30px;
            }
          }

          .attention-arrows {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
          }

          .arrow {
            font-size: 40px;
            animation: bounce 1s infinite;
          }

          .arrow:nth-child(2) {
            animation-delay: 0.2s;
          }

          .arrow:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(20px); }
          }
        `}</style>
      </div>
    </>
  );
} 