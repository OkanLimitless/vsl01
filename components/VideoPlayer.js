import React, { useEffect, useState, useRef } from 'react';

const VideoPlayer = () => {
  const [showCTA, setShowCTA] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Load the smartplayer script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/677444f834e21f48aa3179b8/player.js';
    script.async = true;
    document.head.appendChild(script);

    const handleTimeUpdate = () => {
      if (videoRef.current && videoRef.current.currentTime >= 10 && !showCTA) {
        setShowCTA(true);
      }
    };

    const checkVideoPlayer = () => {
      if (typeof smartplayer !== 'undefined' && smartplayer.instances && smartplayer.instances.length) {
        const player = smartplayer.instances[0];
        videoRef.current = player.video;
        player.video.addEventListener('timeupdate', handleTimeUpdate);
      } else {
        setTimeout(checkVideoPlayer, 500);
      }
    };

    checkVideoPlayer();

    return () => {
      document.head.removeChild(script);
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
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
