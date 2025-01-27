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

          {showCTA && (
            <>
              <div className="cta-section">
                <a 
                  href="https://afflat3e3.com/lnk.asp?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571" 
                  className="cta-button bounce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here To Get Access Now!
                </a>
                <div className="urgency-text">
                  ⚠️ Warning: Limited Time Offer - Spots Are Filling Up Fast!
                </div>
              </div>

              <div className="guarantee-section">
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/guarantee.png" alt="180 Day Guarantee" />
                <h2>100% SATISFACTION GUARANTEE</h2>
                <p>AlphaBites comes with a 100% money back guarantee - 180 full days from your original purchase...</p>
              </div>

              <div className="references-section">
                <h2>Scientific References</h2>
                <div className="reference-logos">
                  <div className="top-row">
                    <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/estudos/l1.png" alt="Cambridge" />
                    <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/estudos/l2.png" alt="The Lancet" />
                    <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/estudos/l3.png" alt="Frontiers" />
                  </div>
                  <div className="bottom-row">
                    <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/estudos/l4.png" alt="NCBI" />
                  </div>
                </div>
              </div>
            </>
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

          .cta-section {
            padding: 30px;
            text-align: center;
            background: #000;
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
            margin: 20px 0;
            transition: transform 0.3s ease;
            animation: bounce 1s infinite;
          }

          .cta-button:hover {
            background: #00a00d;
            color: white;
            text-decoration: none;
          }

          .urgency-text {
            color: #ff0000;
            font-size: 18px;
            font-weight: bold;
            margin-top: 15px;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @media (max-width: 768px) {
            .content-box {
              margin: 10px;
            }

            .title-section h1 {
              font-size: 24px;
            }

            .cta-button {
              font-size: 20px;
              padding: 15px 30px;
            }

            .urgency-text {
              font-size: 16px;
            }
          }

          .guarantee-section {
            width: 100%;
            text-align: center;
            padding: 40px 20px;
            background: #000;
            color: white;
          }

          .guarantee-section img {
            max-width: 100%;
            height: auto;
            margin-bottom: 20px;
          }

          .guarantee-section h2 {
            font-size: 36px;
            font-weight: bold;
            margin: 20px 0;
          }

          .guarantee-section p {
            font-size: 16px;
            line-height: 1.5;
            max-width: 800px;
            margin: 0 auto;
          }

          .references-section {
            width: 100%;
            padding: 40px 20px;
            background: #fff;
            text-align: center;
          }

          .references-section h2 {
            color: #333;
            font-size: 24px;
            margin-bottom: 30px;
          }

          .reference-logos {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .top-row, .bottom-row {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
          }

          .reference-logos img {
            height: 50px;
            object-fit: contain;
          }

          @media (max-width: 768px) {
            .guarantee-section h2 {
              font-size: 28px;
            }

            .reference-logos img {
              height: 40px;
            }

            .top-row, .bottom-row {
              gap: 20px;
            }
          }
        `}</style>
      </div>
    </>
  );
} 