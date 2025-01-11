import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Load the smartplayer script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/fa037796-870e-4d05-a5a0-79244e13ce7f/players/6782768082fbade93fa5911a/player.js';
    script.async = true;
    script.id = 'scr_6782768082fbade93fa5911a';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="video-section">
      <div className="video-container">
        <div id="vid_6782768082fbade93fa5911a" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
          <img 
            id="thumb_6782768082fbade93fa5911a" 
            src="https://images.converteai.net/fa037796-870e-4d05-a5a0-79244e13ce7f/players/6782768082fbade93fa5911a/thumbnail.jpg" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            alt="thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
