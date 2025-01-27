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

        <div className="content-wrapper">
          <div className="title-box">
            <h1>
              Potent <span className="red-text">Salt Trick</span> SkyRocket
              <br />
              SexDrive & Performance
            </h1>
          </div>

          <VideoPlayer />

          <div className="discount-header">
            <h2>Select Your Discount Package</h2>
            <p>LIMITED TIME OFFER!</p>
          </div>

          <div className="package-cards">
            <div className="package-card">
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/bottles/1.webp" alt="1 Bottle" />
              <a href="https://lp.wellhealthsub.site/click/1" className="buy-now-button">BUY NOW</a>
              <div className="shipping">
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/freeship.jpg" alt="Shipping" className="shipping-icon" />
              </div>
              <div className="payment-methods">
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/paypal-500x.png" alt="PayPal" />
                <div className="cards">
                  <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/cards.png" alt="Credit Cards" />
                </div>
              </div>
            </div>

            <div className="package-card">
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/bottles/5.webp" alt="5 Bottles" />
              <a href="https://lp.wellhealthsub.site/click/3" className="buy-now-button">BUY NOW</a>
              <div className="shipping">
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/freeship.jpg" alt="Shipping" className="shipping-icon" />
              </div>
              <div className="payment-methods">
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/paypal-500x.png" alt="PayPal" />
                <div className="cards">
                  <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/cards.png" alt="Credit Cards" />
                </div>
              </div>
            </div>

            <div className="package-card">
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/bottles/3.webp" alt="3 Bottles" />
              <a href="https://lp.wellhealthsub.site/click/2" className="buy-now-button">BUY NOW</a>
              <div className="shipping">
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/freeship.jpg" alt="Shipping" className="shipping-icon" />
              </div>
              <div className="payment-methods">
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/paypal-500x.png" alt="PayPal" />
                <div className="cards">
                  <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/cards.png" alt="Credit Cards" />
                </div>
              </div>
            </div>
          </div>

          <div className="timer-section">
            <h3>Limited-Time Offer! Prices May Increase After:</h3>
            <div className="timer">
              <div className="time-unit">
                <div className="time-value">{hours.toString().padStart(2, '0')}</div>
                <div className="time-label">hrs</div>
              </div>
              <div className="time-unit">
                <div className="time-value">{minutes.toString().padStart(2, '0')}</div>
                <div className="time-label">min</div>
              </div>
              <div className="time-unit">
                <div className="time-value">{seconds.toString().padStart(2, '0')}</div>
                <div className="time-label">sec</div>
              </div>
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
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/estudos/l1.png" alt="Cambridge" />
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/estudos/l2.png" alt="The Lancet" />
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/estudos/l3.png" alt="Frontiers" />
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/estudos/l4.png" alt="NCBI" />
            </div>
          </div>
        </div>

        <style jsx>{`
          .page-container {
            width: 100%;
            background: #000;
            margin: 0;
            padding: 0;
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
          }

          .content-wrapper {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            background: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .title-box {
            width: 100%;
            background: #fff;
            padding: 15px;
            text-align: center;
            margin: 0;
          }

          .title-box h1 {
            color: #000;
            font-size: 28px;
            font-weight: bold;
            line-height: 1.2;
            margin: 0;
          }

          .red-text {
            color: #ff0000;
          }

          .discount-header {
            width: 100%;
            background: #ff0000;
            color: #fff;
            text-align: center;
            padding: 10px;
            margin: 0;
          }

          .discount-header h2 {
            color: #ffff00;
            font-size: 24px;
            margin: 0;
            font-weight: bold;
          }

          .discount-header p {
            margin: 5px 0 0;
            color: white;
            font-size: 16px;
          }

          .package-cards {
            display: flex;
            justify-content: center;
            gap: 10px;
            padding: 20px;
            background: #fff;
            max-width: 800px;
            margin: 0 auto;
          }

          .package-card {
            flex: 1;
            background: #fff;
            padding: 15px;
            text-align: center;
            border: 1px solid #ddd;
          }

          .package-card img {
            max-width: 100%;
            height: auto;
            margin-bottom: 10px;
          }

          .buy-now-button {
            background: #00c110;
            color: white;
            text-align: center;
            padding: 12px;
            display: block;
            text-decoration: none;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;
            margin: 10px 0;
          }

          .shipping {
            margin: 10px 0;
          }

          .shipping-icon {
            height: 20px;
            width: auto;
          }

          .payment-methods {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
          }

          .payment-methods img {
            max-width: 120px;
            height: auto;
          }

          .cards {
            display: flex;
            justify-content: center;
            gap: 5px;
          }

          .cards img {
            height: 20px;
            width: auto;
          }

          .timer-section {
            width: 100%;
            text-align: center;
            padding: 20px 0;
            color: white;
          }

          .timer {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 10px;
          }

          .time-unit {
            background: #ff6b00;
            color: white;
            padding: 8px 15px;
            border-radius: 5px;
            font-size: 20px;
            font-weight: bold;
          }

          .time-label {
            font-size: 12px;
            margin-top: 2px;
          }

          .guarantee-section {
            width: 100%;
            text-align: center;
            padding: 20px 0;
            background: #000;
          }

          .guarantee-section img {
            max-width: 100%;
            height: auto;
          }

          .references-section {
            width: 100%;
            background: #fff;
            padding: 20px;
            text-align: center;
          }

          .reference-logos {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
          }

          .reference-logos img {
            height: 40px;
            object-fit: contain;
          }

          @media (max-width: 768px) {
            .package-cards {
              flex-direction: column;
            }

            .package-card {
              margin-bottom: 15px;
            }
          }
        `}</style>
      </div>
    </>
  );
} 