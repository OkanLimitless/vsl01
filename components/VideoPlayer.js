import React, { useEffect, useState, useRef } from 'react';

export default function VideoPlayer() {
  const [videoRevealed, setVideoRevealed] = useState(false);
  const videoId = "67cdb02e18de859a97b2c80b";
  const playerRef = useRef(null);
  const checkIntervalRef = useRef(null);
  
  // For testing in development, set to true to reveal after a shorter time
  const DEBUG_MODE = process.env.NODE_ENV === 'development';
  const REVEAL_TIME = DEBUG_MODE ? 5 : 1500; // 5 seconds in debug mode, 25 minutes (1500 seconds) in production

  useEffect(() => {
    console.log(`Video player initialized. Debug mode: ${DEBUG_MODE ? 'ON' : 'OFF'}`);
    console.log(`Content will be revealed after ${REVEAL_TIME} seconds`);
    
    // Create a global object to communicate with the video player
    window.vtubePlayer = window.vtubePlayer || {};
    window.vtubePlayer.onTimeUpdate = (currentTime) => {
      if (currentTime >= REVEAL_TIME && !videoRevealed) {
        console.log(`Video reached ${REVEAL_TIME} seconds, revealing content`);
        setVideoRevealed(true);
        triggerReveal();
      }
    };
    
    // Load the video player script with a custom callback
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
    script.async = true;
    document.head.appendChild(script);
    
    // Set up a polling mechanism to check video progress
    // This is a fallback in case the player doesn't emit events we can catch
    const startProgressPolling = () => {
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
      
      checkIntervalRef.current = setInterval(() => {
        try {
          // Try to find the video element
          const videoElement = document.querySelector(`#vid_${videoId} video`);
          if (videoElement) {
            const currentTime = videoElement.currentTime;
            console.log(`Current video time: ${currentTime}s`);
            
            if (currentTime >= REVEAL_TIME && !videoRevealed) {
              console.log(`Video reached ${REVEAL_TIME} seconds via polling, revealing content`);
              setVideoRevealed(true);
              triggerReveal();
            }
          }
        } catch (error) {
          console.error("Error checking video progress:", error);
        }
      }, 1000); // Check every second
    };
    
    // Start polling after a short delay to allow the player to initialize
    setTimeout(startProgressPolling, 3000);

    // Function to trigger the reveal
    const triggerReveal = () => {
      if (window.revealContent) {
        window.revealContent();
      }
    };

    // Create a global function to check if video is revealed
    window.isVideoRevealed = () => videoRevealed;

    // Create a global function to manually reveal content (for testing)
    window.revealContent = () => {
      console.log("Manually revealing content");
      setVideoRevealed(true);
      
      // Show the hidden sections
      const hiddenSections = document.querySelectorAll('.hidden-until-reveal');
      hiddenSections.forEach(section => {
        section.classList.remove('hidden-until-reveal');
        section.classList.add('revealed');
      });
      
      // Also update any React state that needs to know about the reveal
      if (window.onContentRevealed) {
        window.onContentRevealed();
      }
    };

    // For testing in development, add a timeout to reveal content after 10 seconds
    let debugTimer;
    if (DEBUG_MODE) {
      debugTimer = setTimeout(() => {
        console.log("Debug mode: Testing reveal after 10 seconds");
        window.revealContent();
      }, 10000);
    }

    // Add a click handler to the video container to manually trigger reveal in development
    if (DEBUG_MODE) {
      setTimeout(() => {
        const videoContainer = document.querySelector(`#vid_${videoId}`);
        if (videoContainer) {
          videoContainer.addEventListener('click', () => {
            console.log("Debug mode: Video clicked, triggering reveal");
            window.revealContent();
          });
        }
      }, 2000);
    }

    return () => {
      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
      
      delete window.vtubePlayer.onTimeUpdate;
      delete window.isVideoRevealed;
      delete window.revealContent;
      
      if (DEBUG_MODE && debugTimer) {
        clearTimeout(debugTimer);
      }
    };
  }, [videoRevealed, videoId, DEBUG_MODE, REVEAL_TIME]);

  // Add a script tag to inject our custom code into the player
  const injectPlayerHook = () => {
    const scriptContent = `
      // Try to hook into the player's timeupdate event
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
          try {
            const videoElement = document.querySelector('#vid_${videoId} video');
            if (videoElement) {
              videoElement.addEventListener('timeupdate', function() {
                if (window.vtubePlayer && typeof window.vtubePlayer.onTimeUpdate === 'function') {
                  window.vtubePlayer.onTimeUpdate(videoElement.currentTime);
                }
              });
              console.log('Successfully hooked into video timeupdate event');
            }
          } catch (e) {
            console.error('Error setting up video hook:', e);
          }
        }, 2000); // Wait for player to initialize
      });
    `;
    
    return <script dangerouslySetInnerHTML={{ __html: scriptContent }} />;
  };

  return (
    <div className="video-wrapper" ref={playerRef}>
      <div className="video-section">
        <div id={`vid_${videoId}`} style={{position: 'relative', width: '100%', padding: '176.47058823529412% 0 0'}}>
          <img 
            id={`thumb_${videoId}`} 
            src={`https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/thumbnail.jpg`}
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
            alt="Video Thumbnail"
          />
          <div 
            id={`backdrop_${videoId}`} 
            style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}
          ></div>
        </div>
        
        <p className="video-footer">Attention: Make sure your sound is ON!</p>
      </div>

      {/* Inject our custom script to hook into the player */}
      {injectPlayerHook()}

      <style jsx>{`
        .video-wrapper {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .video-section {
          width: 100%;
          background: #000;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          position: relative;
        }
        
        .video-footer {
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          text-align: center;
          color: white;
          font-size: 12px;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
