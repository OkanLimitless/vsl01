import React, { useEffect } from 'react';

export default function VideoPlayer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/3b5f2e0a-d4d5-4b09-832d-cc04a06c6b74/players/67977ece921b5eb7e8735d5e/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="video-container">
      <div className="warning-banner">WARNING: DO NOT CLOSE THIS SITE</div>
      <div className="video-wrapper">
        <div id="vid_67977ece921b5eb7e8735d5e" style={{position: 'relative', width: '100%', padding: '56.25% 0 0'}}>
          <div className="video-alert">
            <p>Cure for ED will be revealed in a moment...</p>
            <p>This video will be taken offline at any time.</p>
            <p>This is your LAST chance to watch to the end.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          background: #000;
          position: relative;
          z-index: 1;
        }

        .warning-banner {
          background: #ffd700;
          color: #000;
          text-align: center;
          padding: 8px;
          font-weight: bold;
          font-size: 18px;
          width: 100%;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          background: #000;
        }

        .video-alert {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #ff0000;
          color: white;
          padding: 10px;
          text-align: center;
        }

        .video-alert p {
          margin: 5px 0;
          font-size: 14px;
          line-height: 1.2;
        }
      `}</style>
    </div>
  );
}
