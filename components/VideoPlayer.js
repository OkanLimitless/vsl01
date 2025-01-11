import React, { useEffect, useState } from 'react';

const VideoPlayer = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Load the smartplayer script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/677444f834e21f48aa3179b8/player.js';
    script.async = true;
    document.head.appendChild(script);

    const checkVideo = () => {
      const video = document.querySelector('video');
      if (video) {
        const handleTimeUpdate = () => {
          if (video.currentTime >= 10 && !showCTA) {
            setShowCTA(true);
          }
        };
        
        video.addEventListener('timeupdate', handleTimeUpdate);
        
        // Cleanup
        return () => {
          video.removeEventListener('timeupdate', handleTimeUpdate);
        };
      } else {
        // If video not found yet, check again in 500ms
        setTimeout(checkVideo, 500);
      }
    };

    const cleanup = checkVideo();

    return () => {
      document.head.removeChild(script);
      if (cleanup) cleanup();
    };
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
        style={{ zIndex: 3 }}
      >
        VIEW PACKAGES
      </a>
    </div>
  );
};

export default VideoPlayer;
