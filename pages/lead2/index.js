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
          {viewerCount} people are watching this presentation. Due to the high number of accesses, it will only be available until: 1/27/2025
        </div>

        <div className="title-section">
          <h1>
            Potent <span className="red-text">Salt Trick</span> SkyRocket
            <br />
            SexDrive & Performance
          </h1>
        </div>

        <VideoPlayer />

        <style jsx>{`
          .page-container {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
            background: #000;
            min-height: 100vh;
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
            font-size: 14px;
            font-family: 'Poppins', sans-serif;
          }

          .title-section {
            width: 100%;
            background: white;
            padding: 20px 0;
            text-align: center;
            margin: 0;
          }

          .title-section h1 {
            color: black;
            font-size: 32px;
            font-weight: bold;
            line-height: 1.2;
            margin: 0;
            font-family: 'Poppins', sans-serif;
          }

          .red-text {
            color: #ff0000;
          }

          @media (max-width: 768px) {
            .title-section h1 {
              font-size: 24px;
            }
          }
        `}</style>
      </div>
    </>
  );
} 