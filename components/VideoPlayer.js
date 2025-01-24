import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Set up observer for CTA element
    const observerInterval = setInterval(() => {
      const cta = document.querySelector('.callaction_6790dfc60f8856647ba39eee_0');
      const alertElement = document.querySelector('.video-alert');
      if (cta && alertElement) {
        alertElement.style.display = !cta.classList.contains('smartplayer-hide') ? 'none' : 'block';
      }
    }, 1000);

    // Load the smartplayer script for the new video
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/3b5f2e0a-d4d5-4b09-832d-cc04a06c6b74/players/6790dfc60f8856647ba39eee/player.js';
    script.async = true;
    script.id = 'scr_6790dfc60f8856647ba39eee';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      clearInterval(observerInterval);
    };
  }, []);

  return (
    <div className="video-section">
      <div className="video-container">
        <div 
          id="vid_6790dfc60f8856647ba39eee"
          style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}
        >
          <img
            id="thumb_6790dfc60f8856647ba39eee"
            src="https://images.converteai.net/3b5f2e0a-d4d5-4b09-832d-cc04a06c6b74/players/6790dfc60f8856647ba39eee/thumbnail.jpg"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            alt="thumbnail"
          />
          <div 
            id="backdrop_6790dfc60f8856647ba39eee"
            style={{
              WebkitBackdropFilter: 'blur(5px)',
              backdropFilter: 'blur(5px)',
              position: 'absolute',
              top: 0,
              height: '100%',
              width: '100%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
