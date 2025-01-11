import React, { useEffect, useState } from 'react';

const VideoPlayer = () => {
  const [showCTA, setShowCTA] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Load the smartplayer script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/fa037796-870e-4d05-a5a0-79244e13ce7f/players/678267b582fbade93fa58c5c/player.js';
    script.async = true;
    script.id = 'scr_678267b582fbade93fa58c5c';
    
    // Add load handler to track when video is ready
    script.onload = () => {
      let videoCheckInterval;
      let videoElement;

      const initializeVideo = () => {
        videoElement = document.querySelector('video');
        if (videoElement) {
          // Ensure video starts from 0 seconds
          videoElement.currentTime = 0;
          
          // Set up time update listener
          const handleTimeUpdate = () => {
            if (videoElement.currentTime >= 10 && !showCTA) {
              setShowCTA(true);
            }
          };
          
          videoElement.addEventListener('timeupdate', handleTimeUpdate);
          
          // Cleanup function
          return () => {
            videoElement.removeEventListener('timeupdate', handleTimeUpdate);
            clearInterval(videoCheckInterval);
          };
        }
        return null;
      };

      // Check for video element every 100ms until found
      videoCheckInterval = setInterval(() => {
        const cleanup = initializeVideo();
        if (cleanup) {
          clearInterval(videoCheckInterval);
          setVideoLoaded(true);
          return cleanup;
        }
      }, 100);
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
