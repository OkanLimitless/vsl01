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

    return () => {
      clearInterval(viewerInterval);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Health more</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
      </Head>

      <div className="pageWrapper width101">
        <header className="header first-time">
          <div className="header2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xxl-12 col-xl-12 text-center">
                  <p>
                    <span id="pessoasAssistindo" style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                      {viewerCount}
                    </span>
                    {' '}people are watching this presentation. Due to the high number of accesses, 
                    it will only be available until:{' '}
                    <span style={{fontWeight: 'bold'}}>
                      {new Date().toLocaleDateString('en-us')}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="video-wrapper">
            <div className="bordavideo">
              <VideoPlayer />
              <p className="sound-note">
                <i className="fa fa-volume-up"></i>
                <strong>Please check if the sound is on.</strong>
              </p>
            </div>
          </section>
        </header>

        {/* Timer Section */}
        <div className="countdown-section">
          <h3>Limited-time offer! Prices may increase after:</h3>
          <div className="countdown">
            <div className="wrapperCountdown">
              <div className="digitsCircle">{hours.toString().padStart(2, '0')}</div>
              <div className="units">hrs</div>
            </div>
            <div className="wrapperCountdown">
              <div className="digitsCircle">{minutes.toString().padStart(2, '0')}</div>
              <div className="units">min</div>
            </div>
            <div className="wrapperCountdown">
              <div className="digitsCircle">{seconds.toString().padStart(2, '0')}</div>
              <div className="units">sec</div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .pageWrapper {
            background: #000;
            color: white;
            font-family: 'Poppins', sans-serif;
          }

          .header2 {
            background: #111;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .video-wrapper {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }

          .bordavideo {
            border-radius: 8px;
            overflow: hidden;
            background: #000;
          }

          .sound-note {
            text-align: center;
            margin-top: 15px;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
          }

          .countdown-section {
            text-align: center;
            padding: 40px 20px;
          }

          .countdown {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
          }

          .wrapperCountdown {
            text-align: center;
          }

          .digitsCircle {
            background: #ff6b00;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-size: 24px;
            font-weight: bold;
          }

          .units {
            margin-top: 5px;
            color: rgba(255, 255, 255, 0.8);
          }

          @media (max-width: 768px) {
            .video-wrapper {
              padding: 10px;
            }

            .digitsCircle {
              padding: 10px 15px;
              font-size: 20px;
            }
          }
        `}</style>
      </div>
    </>
  );
} 