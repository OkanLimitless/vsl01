import React, { useEffect, useState } from 'react';

const VideoPlayer = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Load the smartplayer script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/fa037796-870e-4d05-a5a0-79244e13ce7f/players/678267b582fbade93fa58c5c/player.js';
    script.async = true;
    script.id = 'scr_678267b582fbade93fa58c5c';
    
    // Add time tracking directly to the smartplayer instance
    script.onload = () => {
      const player = window.smartPlayer;
      if (player) {
        player.on('timeupdate', (currentTime) => {
          if (currentTime >= 10 && !showCTA) {
            setShowCTA(true);
          }
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [showCTA]);

  return (
    <div className="video-section">
      <div className="video-container">
        <div id="vid_678267b582fbade93fa58c5c" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
          <img 
            id="thumb_678267b582fbade93fa58c5c" 
            src="https://images.converteai.net/fa037796-870e-4d05-a5a0-79244e13ce7f/players/678267b582fbade93fa58c5c/thumbnail.jpg" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            alt="thumbnail"
          />
          <div 
            id="backdrop_678267b582fbade93fa58c5c" 
            style={{ 
              backdropFilter: 'blur(5px)', 
              WebkitBackdropFilter: 'blur(5px)', 
              position: 'absolute', 
              top: 0, 
              height: '100%', 
              width: '100%' 
            }}
          ></div>
          {!videoLoaded && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
              <p>Loading video...</p>
            </div>
          )}
        </div>
      </div>
      
      <a 
        href="https://lp.zobal.site/click" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`cta-button ${showCTA ? 'active' : ''}`}
        style={{ zIndex: 3 }}
      >
        VIEW PACKAGES
      </a>
    </div>
  );
};

export default VideoPlayer;
