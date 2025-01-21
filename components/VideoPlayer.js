import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Load the smartplayer script for the new video
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/3b5f2e0a-d4d5-4b09-832d-cc04a06c6b74/players/678fe5eedc2aaba0992bb0f1/player.js';
    script.async = true;
    script.id = 'scr_678fe5eedc2aaba0992bb0f1';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="video-section">
      <div className="video-container">
        <div 
          id="vid_678fe5eedc2aaba0992bb0f1" 
          style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}
        >
          <img 
            id="thumb_678fe5eedc2aaba0992bb0f1"
            src="https://images.converteai.net/3b5f2e0a-d4d5-4b09-832d-cc04a06c6b74/players/678fe5eedc2aaba0992bb0f1/thumbnail.jpg"
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
            id="backdrop_678fe5eedc2aaba0992bb0f1"
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
