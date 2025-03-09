import React, { useEffect } from 'react';

export default function VideoPlayer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/67cd8d1edec86bc0f279df4d/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="video-section">
      <div id="vid_67cd8d1edec86bc0f279df4d" style={{position: 'relative', width: '100%', padding: '176.66666666666666% 0 0'}}>
        <img 
          id="thumb_67cd8d1edec86bc0f279df4d" 
          src="https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/67cd8d1edec86bc0f279df4d/thumbnail.jpg" 
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
          alt="Video Thumbnail"
        />
        <div 
          id="backdrop_67cd8d1edec86bc0f279df4d" 
          style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}
        ></div>
      </div>

      <style jsx>{`
        .video-section {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          background: #000;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
