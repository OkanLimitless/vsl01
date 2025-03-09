import React, { useEffect, useState, useRef } from 'react';

export default function VideoPlayer() {
  const [videoRevealed, setVideoRevealed] = useState(false);
  const videoId = "67cdb02e18de859a97b2c80b";
  const playerRef = useRef(null);
  const checkIntervalRef = useRef(null);
  
  // For testing in development, set to true to reveal after a shorter time
  const DEBUG_MODE = process.env.NODE_ENV === 'development';
  const REVEAL_TIME = DEBUG_MODE ? 5 : 1500; // 5 seconds in debug mode, 25 minutes (1500 seconds) in production

  // Function to reveal content
  const revealContent = () => {
    if (videoRevealed) return; // Prevent multiple reveals
    
    console.log("Revealing content");
    setVideoRevealed(true);
    
    // Show the hidden sections
    const hiddenSections = document.querySelectorAll('.hidden-until-reveal');
    hiddenSections.forEach(section => {
      section.classList.remove('hidden-until-reveal');
      section.classList.add('revealed');
    });
    
    // Also update any React state that needs to know about the reveal
    if (typeof window !== 'undefined') {
      // Set a flag in localStorage to remember that content has been revealed
      localStorage.setItem('contentRevealed', 'true');
      
      // Dispatch a custom event that other components can listen for
      const revealEvent = new CustomEvent('contentRevealed');
      window.dispatchEvent(revealEvent);
    }
  };

  useEffect(() => {
    console.log(`Video player initialized. Debug mode: ${DEBUG_MODE ? 'ON' : 'OFF'}`);
    console.log(`Content will be revealed after ${REVEAL_TIME} seconds`);
    
    // Check if content was already revealed in a previous session
    if (typeof window !== 'undefined' && localStorage.getItem('contentRevealed') === 'true') {
      console.log("Content was previously revealed, showing content immediately");
      revealContent();
      return;
    }
    
    // Create a direct script injection to hook into the video player
    const setupVideoHook = () => {
      // Try to find the video element directly
      const findVideoElement = () => {
        const videoElement = document.querySelector(`#vid_${videoId} video`);
        if (videoElement) {
          console.log("Found video element, setting up timeupdate listener");
          
          // Add timeupdate event listener
          videoElement.addEventListener('timeupdate', () => {
            const currentTime = videoElement.currentTime;
            
            // Log every 10 seconds in debug mode
            if (DEBUG_MODE && Math.floor(currentTime) % 10 === 0) {
              console.log(`Video time: ${currentTime.toFixed(1)}s`);
            }
            
            // Check if we've reached the reveal time
            if (currentTime >= REVEAL_TIME && !videoRevealed) {
              console.log(`Video reached ${REVEAL_TIME} seconds, revealing content`);
              revealContent();
            }
          });
          
          return true;
        }
        return false;
      };
      
      // Try immediately
      if (!findVideoElement()) {
        // If not found, try again after a delay
        setTimeout(() => {
          if (!findVideoElement()) {
            // If still not found, set up a polling interval
            const videoCheckInterval = setInterval(() => {
              if (findVideoElement()) {
                clearInterval(videoCheckInterval);
              }
            }, 1000);
            
            // Clean up after 30 seconds if video is never found
            setTimeout(() => {
              clearInterval(videoCheckInterval);
            }, 30000);
          }
        }, 2000);
      }
    };
    
    // Load the video player script
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
    script.async = true;
    document.head.appendChild(script);
    
    // Set up the video hook after the script has loaded
    script.onload = setupVideoHook;
    
    // Fallback: Set up a polling mechanism to check video progress
    const startProgressPolling = () => {
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
      
      checkIntervalRef.current = setInterval(() => {
        try {
          // Try to find the video element
          const videoElement = document.querySelector(`#vid_${videoId} video`);
          if (videoElement) {
            const currentTime = videoElement.currentTime;
            
            // Log every 10 seconds in debug mode
            if (DEBUG_MODE && Math.floor(currentTime) % 10 === 0) {
              console.log(`Polling - Video time: ${currentTime.toFixed(1)}s`);
            }
            
            if (currentTime >= REVEAL_TIME && !videoRevealed) {
              console.log(`Video reached ${REVEAL_TIME} seconds via polling, revealing content`);
              revealContent();
            }
          }
        } catch (error) {
          console.error("Error checking video progress:", error);
        }
      }, 1000); // Check every second
    };
    
    // Start polling after a short delay to allow the player to initialize
    setTimeout(startProgressPolling, 3000);

    // For testing in development, add a timeout to reveal content after 10 seconds
    let debugTimer;
    if (DEBUG_MODE) {
      debugTimer = setTimeout(() => {
        console.log("Debug mode: Testing reveal after 10 seconds");
        revealContent();
      }, 10000);
    }

    return () => {
      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
      
      if (DEBUG_MODE && debugTimer) {
        clearTimeout(debugTimer);
      }
    };
  }, [videoRevealed, videoId, DEBUG_MODE, REVEAL_TIME]);

  return (
    <div className="video-wrapper" ref={playerRef}>
      <div className="video-section">
        <div id={`vid_${videoId}`} style={{position: 'relative', width: '100%', padding: '176.47058823529412% 0 0'}}>
          <img 
            id={`thumb_${videoId}`} 
            src={`https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/thumbnail.jpg`}
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', overflow: 'hidden'}}
            alt="Video Thumbnail"
          />
          <div 
            id={`backdrop_${videoId}`} 
            style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}
          ></div>
        </div>
        
        <p className="video-footer">Attention: Make sure your sound is ON!</p>
      </div>

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
