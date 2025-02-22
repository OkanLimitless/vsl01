import { useEffect } from 'react';
import styles from '../../styles/prelander.module.css';

export default function Version3({ onTrack }) {
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
          "Groundbreaking Research: Brazilian Plant Extract Shows 312% Increase in Male Performance"
        </h1>
        <div className={styles.subtitle}>
          Scientific Study Published in International Journal of Urology
        </div>
      </div>

      <div className="research-preview">
        <p className="lead-text">
          "The active compounds in this rare Brazilian plant have shown remarkable effects on male enhancement in double-blind clinical trials..."
        </p>
        
        <div className={styles.keyPoints}>
          <div className={styles.point}>
            <i className="fas fa-microscope"></i>
            <span>Clinically proven formula</span>
          </div>
          <div className={styles.point}>
            <i className="fas fa-leaf"></i>
            <span>100% natural compounds</span>
          </div>
          <div className={styles.point}>
            <i className="fas fa-certificate"></i>
            <span>FDA registered facility</span>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <p className="urgency-text">
            <i className="fas fa-exclamation-circle"></i>
            Limited Production Due to Rare Ingredients
          </p>
          
          <a href="/lander" className={styles.ctaButton} onClick={handleClick}>
            View Scientific Research
            <i className="fas fa-arrow-right"></i>
          </a>

          <div className={styles.guarantee}>
            <i className="fas fa-shield-alt"></i>
            180-Day Scientific Guarantee
          </div>
        </div>
      </div>
    </div>
  );
} 