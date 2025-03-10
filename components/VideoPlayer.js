import React, { useEffect, useRef } from 'react';

export default function VideoPlayer() {
  const videoId = "67cdb02e18de859a97b2c80b";
  const scriptRef = useRef(null);

  useEffect(() => {
    // Load the video player script
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
    script.async = true;
    script.id = `scr_${videoId}`;
    document.head.appendChild(script);
    
    scriptRef.current = script;

    return () => {
      // Clean up
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div id={`vid_${videoId}`} style={{position: 'relative', width: '100%', padding: '176.47058823529412% 0 0'}}> 
      <img id={`thumb_${videoId}`} src={`https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/thumbnail.jpg`} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} alt="thumbnail" /> 
      <div id={`backdrop_${videoId}`} style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}></div> 
    </div>
  );
}
