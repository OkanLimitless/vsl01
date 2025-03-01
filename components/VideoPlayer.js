import React, { useEffect } from 'react';

export default function VideoPlayer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c33f335c0ec5383526aee6/player.js';
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
      <div id="vid_67c33f335c0ec5383526aee6" style={{position: 'relative', width: '100%', padding: '56.25% 0 0'}}>
        <img 
          id="thumb_67c33f335c0ec5383526aee6" 
          src="https://images.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c33f335c0ec5383526aee6/thumbnail.jpg" 
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}}
          alt="Video Thumbnail"
        />
        <div 
          id="backdrop_67c33f335c0ec5383526aee6" 
          style={{backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}
        ></div>
      </div>

      <style jsx>{`
        .video-section {
          width: 100%;
          background: #000;
          border: 2px solid #ffffff;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
