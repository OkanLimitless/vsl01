import { useEffect } from 'react';

export default function Version2({ onTrack }) {
  useEffect(() => {
    onTrack('visit');
  }, []);

  const handleClick = () => {
    onTrack('click');
  };

  return (
    <div className="content-wrapper">
      <div className="headline">
        <div className="alert-badge">BREAKING NEWS</div>
        <h1>
          Ancient Brazilian Tribe's Secret Formula Makes ED Pills Obsolete
        </h1>
        <div className="subtitle">
          Recent Clinical Studies Show 312% More Effective Than Traditional Solutions
        </div>
      </div>

      <div className="story-preview">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">13,847</div>
            <div className="stat-label">Men Already Using This</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98.7%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3-5x</div>
            <div className="stat-label">More Powerful</div>
          </div>
        </div>

        <div className="key-points">
          <div className="point">
            <i className="fas fa-flask"></i>
            <span>Scientifically proven formula</span>
          </div>
          <div className="point">
            <i className="fas fa-bolt"></i>
            <span>Activates in 30 minutes</span>
          </div>
          <div className="point">
            <i className="fas fa-clock"></i>
            <span>Lasts up to 72 hours</span>
          </div>
        </div>

        <div className="cta-section">
          <div className="stock-warning">
            <i className="fas fa-exclamation-triangle"></i>
            Limited Stock Alert: Only 37 Bottles Remaining
          </div>
          
          <a href="/lander" className="cta-button" onClick={handleClick}>
            See The Breakthrough
            <i className="fas fa-arrow-right"></i>
          </a>

          <div className="guarantee">
            <i className="fas fa-shield-alt"></i>
            180-Day Money-Back Promise • 100% Satisfaction Guaranteed
          </div>
        </div>
      </div>

      <style jsx>{`
        .alert-badge {
          background: #ff4e03;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 20px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 30px 0;
          text-align: center;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: #ff4e03;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255,255,255,0.8);
        }

        .stock-warning {
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

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
} 