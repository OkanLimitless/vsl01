import { useEffect } from 'react';

export default function Version1({ onTrack }) {
  useEffect(() => {
    // Track visit when component mounts
    onTrack('visit');
  }, []);

  const handleClick = () => {
    onTrack('click');
  };

  return (
    <div className="content-wrapper">
      <div className="headline">
        <h1>
          "My Husband's Growth Shocked Me, But What Happened Next Left Me Speechless..."
        </h1>
        <div className="subtitle">
          Brazilian Discovery Challenges Everything We Thought We Knew About Male Enhancement
        </div>
      </div>

      <div className="story-preview">
        <p className="lead-text">
          "When my husband first told me about this Brazilian discovery, I was skeptical. But after seeing the results firsthand, I had to share this with other women..."
        </p>
        
        <div className="key-points">
          <div className="point">
            <i className="fas fa-check-circle"></i>
            <span>Natural ingredients from Brazilian rainforest</span>
          </div>
          <div className="point">
            <i className="fas fa-check-circle"></i>
            <span>Results visible in just weeks</span>
          </div>
          <div className="point">
            <i className="fas fa-check-circle"></i>
            <span>Clinically tested formula</span>
          </div>
        </div>

        <div className="cta-section">
          <p className="urgency-text">
            <i className="fas fa-exclamation-circle"></i>
            Warning: Due to high demand, access to this page may be limited
          </p>
          
          <a href="/lander" className="cta-button" onClick={handleClick}>
            Learn The Full Story
            <i className="fas fa-arrow-right"></i>
          </a>

          <div className="guarantee">
            <i className="fas fa-shield-alt"></i>
            180-Day Satisfaction Guarantee
          </div>
        </div>
      </div>
    </div>
  );
} 