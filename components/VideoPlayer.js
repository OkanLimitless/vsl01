import React, { useEffect, useState } from 'react';

const VideoPlayer = () => {
  const [showCTA, setShowCTA] = useState(false);
  const SECONDS_TO_DISPLAY = 2285; // 38 minutes and 5 seconds

  useEffect(() => {
    // Load the smartplayer script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/677444f834e21f48aa3179b8/player.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const alreadyDisplayedKey = `ctaDisplayed${SECONDS_TO_DISPLAY}`;
    const alreadyDisplayed = localStorage.getItem(alreadyDisplayedKey);
    let attempts = 0;
    const maxAttempts = 10;

    const checkVideoPlayer = () => {
      if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
        if (attempts >= maxAttempts) return;
        attempts++;
        setTimeout(checkVideoPlayer, 1000);
        return;
      }

      const player = smartplayer.instances[0];
      player.on('timeupdate', () => {
        if (player.video.currentTime >= SECONDS_TO_DISPLAY && !showCTA) {
          setShowCTA(true);
          localStorage.setItem(alreadyDisplayedKey, 'true');
        }
      });
    };

    if (alreadyDisplayed === 'true') {
      setShowCTA(true);
    } else {
      checkVideoPlayer();
    }
  }, [showCTA]);

  return (
    <div className="video-section">
      <div className="video-container">
        <div id="vid_677444f834e21f48aa3179b8">
          <img 
            id="thumb_677444f834e21f48aa3179b8" 
            src="https://images.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/677444f834e21f48aa3179b8/thumbnail.jpg" 
            alt="Video Thumbnail"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div id="backdrop_677444f834e21f48aa3179b8" className="backdrop"></div>
          <div className="play-button">▶</div>
        </div>
      </div>
      
      <a 
        href="https://lp.zobal.site/click" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`cta-button ${showCTA ? 'active' : ''}`}
      >
        VIEW PACKAGES
      </a>
    </div>
  );
};

export default VideoPlayer;
