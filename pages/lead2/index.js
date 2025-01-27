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
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [showPackages, setShowPackages] = useState(false);

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

    // Countdown timer
    const timerInterval = setInterval(() => {
      setSeconds(prev => {
        if (prev === 0) {
          setMinutes(prevMin => {
            if (prevMin === 0) {
              setHours(prevHr => {
                if (prevHr === 0) {
                  return 1; // Reset timer
                }
                return prevHr - 1;
              });
              return 59;
            }
            return prevMin - 1;
          });
          return 59;
        }
        return prev - 1;
      });
    }, 1000);

    // Video progress watcher
    const watchVideoProgress = () => {
      if (typeof smartplayer === 'undefined') {
        setTimeout(watchVideoProgress, 500);
        return;
      }

      smartplayer.instances[0].on('timeupdate', () => {
        if (smartplayer.instances[0].video.currentTime >= 1882) { // ~31 minutes
          setShowPackages(true);
          localStorage.setItem('alreadyElsDisplayed', true);
        }
      });
    };

    // Check if packages should be shown
    if (localStorage.getItem('alreadyElsDisplayed') === 'true') {
      setShowPackages(true);
    } else {
      watchVideoProgress();
    }

    return () => {
      clearInterval(viewerInterval);
      clearInterval(timerInterval);
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

          <div className="cta-section">
            <a href="https://lp.wellhealthsub.site/click/1" className="cta-button bounce">
              Click Here To Get Access Now!
            </a>
            <div className="urgency-text">
              ⚠️ Warning: Limited Time Offer - Spots Are Filling Up Fast!
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
            margin: 0 auto;
            background: #000;
            border: 2px solid #000;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
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
        `}</style>
      </div>
    </>
  );
} 