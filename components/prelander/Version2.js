import { useEffect } from 'react';
import styles from '../../styles/prelander.module.css';

export default function Version2({ onTrack }) {
  useEffect(() => {
    onTrack('visit');
  }, []);

  const handleClick = () => {
    onTrack('click');
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.headline}>
        <h1 className={styles.title}>
          "97% of Men See Results Within 30 Days with This Brazilian Formula"
        </h1>
        <div className={styles.subtitle}>
          Clinical Study Reveals Breakthrough in Natural Male Enhancement
        </div>
      </div>

      <div className="stats-preview">
        <p className="lead-text">
          "In a groundbreaking study of 1,000 men, this unique Brazilian compound showed remarkable results..."
        </p>
        
        <div className={styles.keyPoints}>
          <div className={styles.point}>
            <i className="fas fa-chart-line"></i>
            <span>97% success rate in clinical trials</span>
          </div>
          <div className={styles.point}>
            <i className="fas fa-user-check"></i>
            <span>10,000+ satisfied customers</span>
          </div>
          <div className={styles.point}>
            <i className="fas fa-award"></i>
            <span>#1 rated natural solution</span>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <p className="urgency-text">
            <i className="fas fa-exclamation-circle"></i>
            Limited Time Offer: Special Discount Available
          </p>
          
          <a href="/lander" className={styles.ctaButton} onClick={handleClick}>
            See the Clinical Results
            <i className="fas fa-arrow-right"></i>
          </a>

          <div className={styles.guarantee}>
            <i className="fas fa-shield-alt"></i>
            180-Day Money-Back Guarantee
          </div>
        </div>
      </div>
    </div>
  );
} 