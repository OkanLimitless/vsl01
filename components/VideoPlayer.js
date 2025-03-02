import React, { useEffect } from 'react';

export default function VideoPlayer() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c33f335c0ec5383526aee6/player.js";
    script.async = true;
    script.id = "scr_67c33f335c0ec5383526aee6";
    
    // Append to document head
    document.head.appendChild(script);
    
    // Clean up on unmount
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="vid_67c33f335c0ec5383526aee6" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img 
        id="thumb_67c33f335c0ec5383526aee6" 
        src="https://images.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c33f335c0ec5383526aee6/thumbnail.jpg" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        alt="Video Thumbnail"
      />
    </div>
  );
}
