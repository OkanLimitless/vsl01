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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      </Head>

      <div className="pageWrapper">
        {/* Red notification bar */}
        <div className="top-notification">
          <p>{viewerCount} people are watching this presentation. Due to the high number of accesses, it will only be available until: {new Date().toLocaleDateString('en-us')}</p>
        </div>

        {/* Title Section */}
        <div className="title-section">
          <h1>
            Potent <span className="red-text">Salt Trick</span> SkyRocket
            <br />
            SexDrive & Performance
          </h1>
        </div>

        {/* Video Container */}
        <div className="main-container">
          <div className="video-container">
            <VideoPlayer />
          </div>

          {/* Package Selection */}
          <div className="package-selection" style={{ display: showPackages ? 'block' : 'none' }}>
            <div className="discount-header">
              <h2>Select Your Discount Package</h2>
              <p>LIMITED TIME OFFER!</p>
            </div>

            <div className="package-cards">
              {/* Try One Package */}
              <div className="package-card">
                <div className="package-label">TRY ONE</div>
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/bottles/1.webp" alt="1 Bottle" />
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">79</span>
                </div>
                <a href="https://lp.wellhealthsub.site/click/1" className="buy-now-button">BUY NOW</a>
                <div className="shipping-info">
                  + $9.99 SHIPPING
                  <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/freeship.jpg" alt="Shipping" />
                </div>
                <div className="price-comparison">
                  <del>$594</del> $158
                </div>
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/paypal-500x.png" alt="Payment Methods" className="payment-methods" />
              </div>

              {/* Best Value Package */}
              <div className="package-card featured">
                <div className="package-label">BEST VALUE</div>
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/bottles/5.webp" alt="6 Bottles" />
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">49</span>
                  <span className="per-bottle">/bottle</span>
                </div>
                <a href="https://lp.wellhealthsub.site/click/3" className="buy-now-button">BUY NOW</a>
                <div className="shipping-info">
                  FREE SHIPPING
                  <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/freeship.jpg" alt="Free Shipping" />
                </div>
                <div className="price-comparison">
                  <del>$1782</del> $294
                </div>
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/paypal-500x.png" alt="Payment Methods" className="payment-methods" />
              </div>

              {/* Most Popular Package */}
              <div className="package-card">
                <div className="package-label">MOST POPULAR</div>
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/bottles/3.webp" alt="3 Bottles" />
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">69</span>
                  <span className="per-bottle">/bottle</span>
                </div>
                <a href="https://lp.wellhealthsub.site/click/2" className="buy-now-button">BUY NOW</a>
                <div className="shipping-info">
                  FREE SHIPPING
                  <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/freeship.jpg" alt="Free Shipping" />
                </div>
                <div className="price-comparison">
                  <del>$891</del> $207
                </div>
                <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/icons/paypal-500x.png" alt="Payment Methods" className="payment-methods" />
              </div>
            </div>

            {/* Timer Section */}
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

            {/* Guarantee Section */}
            <div className="guarantee-section">
              <img src="https://wellhealthsub.site/salt/alpha/pvpote/lead4/assets/images/guarantee.png" alt="180 Day Guarantee" />
              <h2>100% SATISFACTION GUARANTEE</h2>
              <p>AlphaBites comes with a 100% money back guarantee - 180 full days from your original purchase...</p>
            </div>

            {/* Scientific References */}
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
        </div>

        <style jsx>{`
          .pageWrapper {
            background: #000;
            color: white;
            font-family: 'Poppins', sans-serif;
            max-width: 100%;
            overflow-x: hidden;
          }

          .top-notification {
            background: #ff0000;
            color: white;
            text-align: center;
            padding: 8px;
            font-size: 14px;
          }

          .title-section {
            background: white;
            padding: 20px;
            text-align: center;
            margin-bottom: 0;
          }

          .title-section h1 {
            color: black;
            font-size: 32px;
            font-weight: bold;
            line-height: 1.2;
            margin: 0;
          }

          .red-text {
            color: #ff0000;
          }

          .main-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0;
          }

          .video-container {
            width: 100%;
            margin: 0;
            padding: 0;
            background: #000;
          }

          .package-selection {
            background: #000;
            padding: 20px 0;
          }

          .discount-header {
            background: #ff0000;
            color: white;
            text-align: center;
            padding: 15px;
            margin: 20px 0;
          }

          .discount-header h2 {
            color: #ffff00;
            font-size: 24px;
            margin: 0;
            margin-bottom: 5px;
          }

          .discount-header p {
            margin: 0;
            font-size: 16px;
          }

          .package-cards {
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 0 15px;
          }

          .package-card {
            background: white;
            border-radius: 10px;
            padding: 0;
            width: 100%;
            max-width: 300px;
            overflow: hidden;
          }

          .package-card.featured {
            transform: scale(1.05);
            border: 2px solid #ff6b00;
          }

          .package-label {
            background: black;
            color: white;
            padding: 10px;
            text-align: center;
            font-weight: bold;
          }

          .buy-now-button {
            background: #00c110;
            color: white;
            text-align: center;
            padding: 15px;
            display: block;
            text-decoration: none;
            font-size: 22px;
            font-weight: 600;
            margin: 10px;
            border-radius: 8px;
          }

          .buy-now-button:hover {
            background: #2d6617;
          }

          .timer-section {
            text-align: center;
            padding: 40px 20px;
          }

          .timer {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
          }

          .time-unit {
            text-align: center;
          }

          .time-value {
            background: #ff6b00;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-size: 24px;
            font-weight: bold;
          }

          .time-label {
            margin-top: 5px;
            color: rgba(255, 255, 255, 0.8);
          }

          .guarantee-section {
            background: #111;
            padding: 60px 0;
            margin-top: 60px;
          }

          .guarantee-content {
            text-align: center;
          }

          .guarantee-img {
            max-width: 300px;
            margin-bottom: 30px;
          }

          .references-section {
            padding: 60px 0;
          }

          .ref-img {
            width: 100%;
            max-width: 200px;
            margin: 20px 0;
          }

          @media (max-width: 768px) {
            .title-section h1 {
              font-size: 24px;
            }

            .package-cards {
              flex-direction: column;
              align-items: center;
            }

            .package-card {
              max-width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
} 