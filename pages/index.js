import Head from 'next/head';
import dynamic from 'next/dynamic';
import VideoPlayer from '../components/VideoPlayer';
import { useState, useEffect } from 'react';

const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function Home() {
  const [viewerCount, setViewerCount] = useState(8);
  const [stockLeft, setStockLeft] = useState(37);
  const [showNotification, setShowNotification] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(null);

  useEffect(() => {
    // Viewer counter logic
    const viewerInterval = setInterval(() => {
      setViewerCount(prev => {
        if (Math.random() < 0.3) { // 30% chance to change
          const increase = Math.random() < 0.7; // 70% chance to increase
          if (increase && prev < 15) return prev + 1;
          if (!increase && prev > 8) return prev - 1;
        }
        return prev;
      });
    }, 5000 + Math.random() * 7000); // Random interval between 5-12 seconds

    // Stock counter logic
    const stockInterval = setInterval(() => {
      setStockLeft(prev => {
        if (prev > 15 && Math.random() < 0.4) return prev - 1;
        return prev;
      });
    }, 8000 + Math.random() * 7000); // Random interval between 8-15 seconds

    // Buy notifications logic
    const buyers = [
      { name: 'Michael R.', location: 'Los Angeles, CA' },
      { name: 'James S.', location: 'Houston, TX' },
      { name: 'William D.', location: 'Chicago, IL' },
      { name: 'Robert K.', location: 'Miami, FL' },
      { name: 'Thomas B.', location: 'Phoenix, AZ' }
    ];

    const showRandomPurchase = () => {
      const buyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentBuyer(buyer);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    };

    // Show first notification after 15-30 seconds
    const initialNotification = setTimeout(() => {
      showRandomPurchase();
      // Then show subsequent notifications every 40-90 seconds
      setInterval(showRandomPurchase, 40000 + Math.random() * 50000);
    }, 15000 + Math.random() * 15000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(stockInterval);
      clearTimeout(initialNotification);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Discovery</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          :root {
            --primary-color: #00dd00;
            --secondary-color: #ff0000;
            --font-primary: 'Roboto', sans-serif;
            --font-secondary: 'Oswald', sans-serif;
            --font-tertiary: 'Montserrat', sans-serif;
            --spacing-sm: 1rem;
            --spacing-md: 2rem;
            --spacing-lg: 3rem;
            --border-radius: 12px;
          }
          body {
            background-color: #000;
            color: #fff;
            font-family: var(--font-primary);
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Head>
      
      {/* Urgent Notification Bar */}
      <div className="notification-bar">
        <p>⚠️ URGENT ⚠️</p>
        <p>What Big Pharma Doesn't Want You to Know About Male Health.</p>
      </div>

      <div className="sub-notification">
        <p>Discover the natural secret for long-lasting, rock-solid erections they're afraid to reveal.</p>
        <p className="watching-now">Start watching now</p>
      </div>

      <div className="container">
        {/* Video Section */}
        <VideoPlayer />
        
        {/* Access Message */}
        <div className="access-message">
          <span className="lock-icon">🔒</span>
          <p>YOUR ACCESS WILL BE RELEASED</p>
          <p>AT THE END OF THE VIDEO</p>
        </div>

        {/* Scientific References Section */}
        <div className="references-section">
          <h2>Scientific References</h2>
          
          <div className="logos-container">
            <img src="/images/logos.png" alt="Scientific Institution Logos" className="logos-image" />
          </div>
          
          <p className="disclaimer">AlphaBites is not endorsed by, sponsored by, or affiliated with any of these organizations.</p>
          
          <div className="references-list">
            <ol>
              <li>
                <p>Heart attack warning - the simple test YOU can do at home to reveal your risk <span className="reference-link">https://www.express.co.uk/life-style/health/995242/heart-attack-test-exercise-risk-symptoms-blood-stretch</span></p>
              </li>
              <li>
                <p>Magnesium and the inflammatory response: potential physiological implications <span className="reference-link">https://www.ncbi.nlm.nih.gov/pubmed/16712775?dopt=Abstract</span></p>
              </li>
              <li>
                <p>Low blood mononuclear cell magnesium in intensive cardiac care unit patients <span className="reference-link">https://www.ncbi.nlm.nih.gov/pubmed/3953355?dopt=Abstract</span></p>
              </li>
              <li>
                <p>Low Magnesium Linked To Heart Disease <span className="reference-link">https://www.medicalnewstoday.com/articles/255783.php</span></p>
              </li>
              <li>
                <p>L-arginine <span className="reference-link">https://www.mayoclinic.org/drugs-supplements-l-arginine/art-20364681</span></p>
              </li>
              <li>
                <p>Role of the general base Glu-268 in nitroglycerin bioactivation and superoxide formation by aldehyde dehydrogenase-2 <span className="reference-link">https://www.ncbi.nlm.nih.gov/pubmed/19506075</span></p>
              </li>
              <li>
                <p>Coenzyme Q10 for the treatment of heart failure: a review of the literature <span className="reference-link">https://openheart.bmj.com/content/2/1/e000326</span></p>
              </li>
              <li>
                <p>The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO: a randomized double-blind trial <span className="reference-link">https://www.ncbi.nlm.nih.gov/pubmed/25282031</span></p>
              </li>
              <li>
                <p>Nattokinase: A Promising Alternative in Prevention and Treatment of Cardiovascular Diseases <span className="reference-link">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6043915/</span></p>
              </li>
              <li>
                <p>Dietary soy and natto intake and cardiovascular disease mortality in Japanese adults: the Takayama study <span className="reference-link">https://www.ncbi.nlm.nih.gov/pubmed/27927636/</span></p>
              </li>
              <li>
                <p>Increasing severity of erectile dysfunction is a marker for increasing risk of cardiovascular disease and death <span className="reference-link">https://www.sciencedaily.com/releases/2013/01/130129130945.htm</span></p>
              </li>
              <li>
                <p>Dietary intake of menaquinone is associated with a reduced risk of coronary heart disease: the Rotterdam Study <span className="reference-link">https://pubmed.ncbi.nlm.nih.gov/15514282/</span></p>
              </li>
            </ol>
          </div>
        </div>

        <footer className="site-footer">
          <div className="footer-content">
            <p className="copyright">Exoboost is the creator of this product. Exoboost is a registered trademark of Exoboost, a Delaware corporation located at 1201 Orange Street Suite #7223, Wilmington, DE, 19801, USA and used with permission. Exoboost may not monitor, does not endorse, and is not responsible or liable for any products, services, statements, or other materials on this website. Statements on this website have not been evaluated by the Food and Drug Administration.</p>
            <div className="footer-links">
              <a href="/shipping-policy">Shipping Policy</a>
              <span className="divider">|</span>
              <a href="/terms">Terms & Conditions</a>
              <span className="divider">|</span>
              <a href="/refund">Refund & Return Policy</a>
              <span className="divider">|</span>
              <a href="/privacy">Privacy Policy</a>
            </div>
            <p className="copyright">Copyright 2025 - All rights reserved</p>
            <p className="copyright">Terms de Uso/Privacidade</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .notification-bar {
          width: 100%;
          background-color: #ff3333;
          color: white;
          padding: 5px 0;
          text-align: center;
          font-weight: bold;
        }

        .notification-bar p {
          margin: 5px 0;
          font-size: 16px;
        }

        .sub-notification {
          width: 100%;
          background-color: #000;
          color: white;
          padding: 10px 0;
          text-align: center;
          border-bottom: 1px solid #333;
        }

        .sub-notification p {
          margin: 5px 0;
          font-size: 14px;
        }

        .watching-now {
          color: #aaa;
          font-size: 12px !important;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }

        .access-message {
          margin: 20px auto;
          text-align: center;
          color: #fff;
        }

        .lock-icon {
          font-size: 24px;
          display: block;
          margin-bottom: 10px;
        }

        .access-message p {
          margin: 5px 0;
          font-weight: bold;
          font-size: 14px;
        }

        .references-section {
          margin: 40px auto;
          max-width: 1000px;
          text-align: center;
          background-color: #fff;
          color: #333;
          padding: 30px;
          border-radius: 8px;
        }

        .references-section h2 {
          font-size: 36px;
          margin-bottom: 30px;
          color: #000;
        }

        .logos-container {
          margin: 30px auto;
        }

        .logos-image {
          max-width: 100%;
          height: auto;
        }

        .disclaimer {
          font-style: italic;
          color: #777;
          margin: 20px 0;
          font-size: 14px;
        }

        .references-list {
          text-align: left;
          max-width: 800px;
          margin: 0 auto;
        }

        .references-list ol {
          padding-left: 20px;
        }

        .references-list li {
          margin-bottom: 20px;
          color: #555;
        }

        .reference-link {
          color: #999;
          font-size: 14px;
          display: block;
          word-break: break-all;
        }

        .site-footer {
          margin-top: 40px;
          padding: 20px;
          background-color: #000;
          color: #777;
          font-size: 12px;
          border-top: 1px solid #333;
        }

        .footer-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin: 15px 0;
        }

        .footer-links a {
          color: #777;
          text-decoration: none;
        }

        .divider {
          color: #555;
        }

        @media (max-width: 768px) {
          .references-section {
            padding: 20px;
          }

          .references-section h2 {
            font-size: 28px;
          }

          .references-list li {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
