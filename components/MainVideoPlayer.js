import React, { useEffect, useRef } from 'react';

// Simple vturb player component following official vturb React integration guide
export default function MainVideoPlayer({ onVideoProgress }) {
  const videoId = "67cdb02e18de859a97b2c80b";
  const scriptRef = useRef(null);
  const playerInitialized = useRef(false);

  useEffect(() => {
    // For testing in development, set to true to reveal after a shorter time
    const DEBUG_MODE = process.env.NODE_ENV === 'development';
    const REVEAL_TIME = DEBUG_MODE ? 5 : 1084; // 5 seconds in debug mode, 1084 seconds in production
    
    // Prevent multiple initializations
    if (playerInitialized.current) {
      return;
    }
    
    playerInitialized.current = true;
    
    // Create and inject the player script
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
    script.async = true;
    script.id = `scr_${videoId}`;
    document.head.appendChild(script);
    scriptRef.current = script;
    
    // Set up event listener for video time updates
    // This uses vturb's API to monitor video progress
    window.addEventListener('message', function(event) {
      // Make sure message is from vturb
      if (event.data && typeof event.data === 'object' && event.data.action === 'timeupdate') {
        console.log('Video time update:', event.data.currentTime);
        
        // Check if we've reached the reveal time
        if (event.data.currentTime >= REVEAL_TIME) {
          console.log(`Reached reveal time (${REVEAL_TIME}s), triggering content reveal`);
          onVideoProgress && onVideoProgress();
        }
      }
    });
    
    // For testing in development, add a timeout to reveal content after 10 seconds
    let debugTimer;
    if (DEBUG_MODE) {
      debugTimer = setTimeout(() => {
        console.log("DEBUG MODE: Revealing content after timeout");
        onVideoProgress && onVideoProgress();
      }, 10000);
    }

    // Cleanup function
    return () => {
      // Remove script if it exists
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
      
      // Clear debug timer if it exists
      if (DEBUG_MODE && debugTimer) {
        clearTimeout(debugTimer);
      }
      
      playerInitialized.current = false;
    };
  }, [onVideoProgress]);

  // Render the video container exactly as provided by vturb
  return (
    <div className="video-wrapper">
      <div id={`vid_${videoId}`} style={{ 
        position: 'relative', 
        width: '100%', 
        padding: '176.47058823529412% 0 0',
        borderRadius: '6px',
        overflow: 'hidden'
      }}>
        <img 
          id={`thumb_${videoId}`} 
          src={`https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/thumbnail.jpg`} 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            display: 'block',
            borderRadius: '6px'
          }} 
          alt="thumbnail" 
        />
        <div 
          id={`backdrop_${videoId}`} 
          style={{ 
            WebkitBackdropFilter: 'blur(5px)', 
            backdropFilter: 'blur(5px)', 
            position: 'absolute', 
            top: 0, 
            height: '100%', 
            width: '100%',
            borderRadius: '6px'
          }}
        ></div>
      </div>
    </div>
  );
} 