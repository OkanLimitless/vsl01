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
        <title>Health more</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
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

        {/* Hidden Sections */}
        <div className="show-on-call-action" style={{ display: showPackages ? 'block' : 'none' }}>
          {/* Packages Section */}
          <div className="container" id="firstPackage">
            <section className="oferta-especial pt-lg-4 pb-lg-4 pt-4 pb-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12 text-center">
                    <h2 className="discount-title">Select Your Discount Package</h2>
                    <p className="limited-offer">LIMITED TIME OFFER!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Package Cards */}
            <div className="row justify-content-center">
              {/* Single Bottle */}
              <div className="col-12 col-lg-4">
                <div className="package-card">
                  <div className="package-header">Try One</div>
                  <img src="/images/bottles/1.webp" alt="1 Bottle" className="bottle-img" />
                  <div className="price-tag">
                    <span className="currency">$</span>
                    <span className="amount">79</span>
                  </div>
                  <a href="https://lp.wellhealthsub.site/click/1" className="buy-button">
                    BUY NOW
                  </a>
                  <div className="shipping">+ $9.99 SHIPPING</div>
                  <div className="original-price">
                    <del>$594</del> $158
                  </div>
                  <img src="/images/icons/paypal-500x.png" alt="PayPal" className="payment-method" />
                </div>
              </div>

              {/* Best Value - 5 Bottles */}
              <div className="col-12 col-lg-4">
                <div className="package-card featured">
                  <div className="package-header">Best Value</div>
                  <img src="/images/bottles/5.webp" alt="5 Bottles" className="bottle-img" />
                  <div className="price-tag">
                    <span className="currency">$</span>
                    <span className="amount">49</span>
                    <span className="per-bottle">/ bottle</span>
                  </div>
                  <a href="https://lp.wellhealthsub.site/click/3" className="buy-button">
                    BUY NOW
                  </a>
                  <div className="shipping">FREE SHIPPING</div>
                  <div className="original-price">
                    <del>$1782</del> $294
                  </div>
                  <img src="/images/icons/paypal-500x.png" alt="PayPal" className="payment-method" />
                </div>
              </div>

              {/* Popular - 3 Bottles */}
              <div className="col-12 col-lg-4">
                <div className="package-card">
                  <div className="package-header">Most Popular</div>
                  <img src="/images/bottles/3.webp" alt="3 Bottles" className="bottle-img" />
                  <div className="price-tag">
                    <span className="currency">$</span>
                    <span className="amount">69</span>
                    <span className="per-bottle">/ bottle</span>
                  </div>
                  <a href="https://lp.wellhealthsub.site/click/2" className="buy-button">
                    BUY NOW
                  </a>
                  <div className="shipping">FREE SHIPPING</div>
                  <div className="original-price">
                    <del>$891</del> $207
                  </div>
                  <img src="/images/icons/paypal-500x.png" alt="PayPal" className="payment-method" />
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <section className="guarantee-section">
            <div className="container">
              <div className="guarantee-content">
                <img src="/images/guarantee.png" alt="60 Day Guarantee" className="guarantee-img" />
                <div className="guarantee-text">
                  <h2>100% SATISFACTION GUARANTEE</h2>
                  <p>
                    AlphaBites comes with a 100% money back guarantee - 180 full days from your original purchase. 
                    If you're not totally and completely satisfied with our product or your results within the first 
                    180 days simply let us know by calling our toll-free number or dropping us an email and we'll 
                    gladly give you a full refund within 48 hours of the product being returned. That's right - 
                    simply return the product, even your empty bottles, anytime within 180 days of your purchase 
                    and you'll receive a full, no-questions-asked refund (minus shipping and handling fees).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Scientific References */}
          <section className="references-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <h2>Scientific References</h2>
                </div>
                <div className="col-xxl-3 col-xl-3 col-6">
                  <img src="/images/estudos/l1.png" alt="Reference 1" className="ref-img" />
                </div>
                <div className="col-xxl-3 col-xl-3 col-6">
                  <img src="/images/estudos/l2.png" alt="Reference 2" className="ref-img" />
                </div>
                <div className="col-xxl-3 col-xl-3 col-6">
                  <img src="/images/estudos/l3.png" alt="Reference 3" className="ref-img" />
                </div>
                <div className="col-xxl-3 col-xl-3 col-6">
                  <img src="/images/estudos/l4.png" alt="Reference 4" className="ref-img" />
                </div>
              </div>
            </div>
          </section>
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

          .show-on-call-action {
            opacity: 0;
            transition: opacity 0.5s ease;
          }

          .show-on-call-action.visible {
            opacity: 1;
          }

          .package-card {
            border: 5px solid #c1cac9;
            border-radius: 20px;
            margin: 15px;
            padding: 20px;
            text-align: center;
            background: white;
            color: black;
            transition: transform 0.3s ease;
          }

          .package-card:hover {
            transform: translateY(-5px);
          }

          .package-card.featured {
            border-color: #ff6b00;
            transform: scale(1.05);
          }

          .package-header {
            background: black;
            color: white;
            padding: 10px;
            border-radius: 15px 15px 0 0;
            font-weight: bold;
            margin: -20px -20px 20px -20px;
          }

          .bottle-img {
            width: 96%;
            margin: 20px 0;
          }

          .buy-button {
            background: linear-gradient(to bottom, #00dd00, #00aa00);
            color: #001824;
            padding: 15px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 45px;
            font-weight: 900;
            display: block;
            margin: 20px 0;
            transition: transform 0.2s ease;
          }

          .buy-button:hover {
            transform: scale(1.05);
            background: linear-gradient(to bottom, #00ff00, #00dd00);
            text-decoration: none;
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
            .video-wrapper {
              padding: 10px;
            }

            .digitsCircle {
              padding: 10px 15px;
              font-size: 20px;
            }

            .package-card {
              margin: 10px;
            }

            .package-card.featured {
              transform: none;
            }

            .buy-button {
              font-size: 30px;
              padding: 10px 20px;
            }
          }
        `}</style>
      </div>
    </>
  );
} 