import React, { useEffect, useRef } from 'react';

export default function TestimonialVideo() {
  const videoId = "67cdac39072c3fc40e3f9f4b";
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
    <div id={`vid_${videoId}`} style={{width: '100%', display: 'block', margin: '0 auto'}}> 
      {/* The video player script will replace this content */}
      <img 
        id={`thumb_${videoId}`} 
        src={`https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/thumbnail.jpg`} 
        style={{width: '100%', display: 'block'}} 
        alt="testimonial thumbnail" 
      /> 
      <div 
        id={`backdrop_${videoId}`} 
        style={{
          WebkitBackdropFilter: 'blur(5px)', 
          backdropFilter: 'blur(5px)', 
          width: '100%',
          display: 'none' // Hide this initially, the script will handle it
        }}
      ></div> 
    </div>
  );
} 