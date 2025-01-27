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
      <div id="vid_67977ece921b5eb7e8735d5e" style={{position: 'relative', width: '100%', padding: '56.25% 0 0'}}>
        <img 
          id="thumb_67977ece921b5eb7e8735d5e" 
          src="https://images.converteai.net/3b5f2e0a-d4d5-4b09-832d-cc04a06c6b74/players/67977ece921b5eb7e8735d5e/thumbnail.jpg" 
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}}
          alt="Video Thumbnail"
        />
        <div className="play-overlay">
          <div className="play-text">CLICK HERE TO WATCH NOW!</div>
        </div>
      </div>

      <style jsx>{`
        .video-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          background: #000;
        }

        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          font-size: 24px;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }

        .play-text {
          background: rgba(0,0,0,0.7);
          padding: 10px 20px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
