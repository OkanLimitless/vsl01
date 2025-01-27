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

          {/* These sections are always visible */}
          <div className="featured-section">
            <h2>AS FEATURED IN</h2>
            <div className="featured-logos">
              <img src="/images/nbc-news.png" alt="NBC News" />
              <img src="/images/usa-today.png" alt="USA Today" />
              <img src="/images/cbs.png" alt="CBS" />
              <img src="/images/fox-news.png" alt="Fox News" />
            </div>
          </div>

          <div className="scientific-section">
            <div className="scientific-button">SCIENTIFIC REFERENCES</div>
            <div className="scientific-logos">
              <div className="top-row">
                <img src="/images/johns-hopkins.png" alt="Johns Hopkins University" />
                <img src="/images/sexual-medicine.png" alt="Sexual Medicine" />
                <img src="/images/harvard.png" alt="Harvard University" />
              </div>
              <div className="bottom-row">
                <img src="/images/mit.png" alt="MIT" />
                <img src="/images/nih.png" alt="NIH" />
                <img src="/images/pubmed.png" alt="PubMed" />
              </div>
            </div>
          </div>

          {/* CTA only shows at reveal time */}
          {showCTA && (
            <div className="cta-section">
              <div className="urgency-alert">
                <span className="material-symbols-outlined">warning</span>
                Warning: Only 15 bottles left in stock
              </div>
              <div className="viewers-bar">
                <span className="dot"></span>
                14 people watching right now
              </div>
              <a 
                href="https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571" 
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                CLICK HERE TO GET YOUR BOTTLE
                <div className="sub-text">While Supplies Last</div>
              </a>
            </div>
          )}
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

          .cta-section {
            background: #000;
            padding: 30px 20px;
            text-align: center;
          }

          .urgency-alert {
            background: #ff0000;
            color: white;
            padding: 10px;
            font-weight: bold;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .viewers-bar {
            background: #1a1a1a;
            color: white;
            padding: 10px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .dot {
            width: 8px;
            height: 8px;
            background: #ff0000;
            border-radius: 50%;
            animation: pulse 1s infinite;
          }

          .cta-button {
            display: inline-block;
            background: #00c110;
            color: white;
            font-size: 24px;
            font-weight: bold;
            padding: 20px 40px;
            border-radius: 8px;
            text-decoration: none;
            transition: transform 0.3s ease;
          }

          .sub-text {
            font-size: 14px;
            opacity: 0.8;
            margin-top: 5px;
          }

          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
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
        `}</style>
      </div>
    </>
  );
} 