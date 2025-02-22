import { useEffect } from 'react';

export default function Version3({ onTrack }) {
  useEffect(() => {
    onTrack('visit');
  }, []);

  const handleClick = () => {
    onTrack('click');
  };

  return (
    <div className="content-wrapper">
      <div className="headline">
        <div className="research-badge">CLINICAL RESEARCH</div>
        <h1>
          Brazilian Scientists Discover Natural Compound That "Reactivates Male Power"
        </h1>
        <div className="subtitle">
          Groundbreaking Study Shows 300%+ Improvement in Performance, Size, and Stamina
        </div>
      </div>

      <div className="story-preview">
        <div className="research-highlight">
          <div className="quote">
            "This natural compound from the Brazilian rainforest has shown remarkable results in clinical trials. The improvement in male performance metrics is unprecedented."
          </div>
          <div className="author">- Dr. Carlos Silva, Lead Researcher</div>
        </div>

        <div className="study-results">
          <div className="result-item">
            <div className="result-icon">🔬</div>
            <div className="result-text">
              <strong>Clinical Trial Results:</strong>
              <span>312% increase in performance</span>
            </div>
          </div>
          <div className="result-item">
            <div className="result-icon">⚡</div>
            <div className="result-text">
              <strong>Activation Time:</strong>
              <span>30 minutes vs 1 hour (traditional)</span>
            </div>
          </div>
          <div className="result-item">
            <div className="result-icon">⏱️</div>
            <div className="result-text">
              <strong>Duration:</strong>
              <span>Up to 72 hours of enhancement</span>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="research-alert">
            <i className="fas fa-microscope"></i>
            Clinical Trial Spots Available: Limited Time Only
          </div>
          
          <a href="/lander" className="cta-button" onClick={handleClick}>
            View Clinical Research
            <i className="fas fa-arrow-right"></i>
          </a>

          <div className="certifications">
            <span><i className="fas fa-check-circle"></i> FDA Registered Facility</span>
            <span><i className="fas fa-check-circle"></i> GMP Certified</span>
            <span><i className="fas fa-check-circle"></i> 180-Day Guarantee</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .research-badge {
          background: #ff4e03;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 20px;
        }

        .research-highlight {
          background: rgba(255,255,255,0.05);
          padding: 25px;
          border-radius: 15px;
          margin: 30px 0;
          border-left: 4px solid #ff4e03;
        }

        .quote {
          font-style: italic;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 15px;
          color: rgba(255,255,255,0.9);
        }

        .author {
          color: #ff4e03;
          font-weight: 500;
        }

        .study-results {
          display: grid;
          gap: 20px;
          margin: 30px 0;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255,255,255,0.03);
          padding: 15px;
          border-radius: 10px;
        }

        .result-icon {
          font-size: 24px;
          min-width: 40px;
          text-align: center;
        }

        .result-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .result-text strong {
          color: #ff4e03;
          font-size: 14px;
        }

        .result-text span {
          color: rgba(255,255,255,0.9);
        }

        .research-alert {
          background: rgba(255,78,3,0.1);
          border: 1px solid #ff4e03;
          padding: 10px 20px;
          border-radius: 30px;
          color: #ff4e03;
          font-weight: 500;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .certifications {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .certifications span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255,255,255,0.8);
          font-size: 14px;
        }

        .certifications i {
          color: #ff4e03;
        }

        @media (max-width: 768px) {
          .quote {
            font-size: 16px;
          }

          .certifications {
            gap: 15px;
          }

          .certifications span {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
} 