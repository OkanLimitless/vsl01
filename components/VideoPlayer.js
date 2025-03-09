import React, { useEffect, useState } from 'react';

export default function VideoPlayer() {
  const [videoRevealed, setVideoRevealed] = useState(false);
  const videoId = "67cdb02e18de859a97b2c80b";
  
  // For testing in development, set to true to reveal after 5 seconds instead of 25 minutes
  const DEBUG_MODE = process.env.NODE_ENV === 'development';
  const REVEAL_TIME = DEBUG_MODE ? 5 : 1500; // 5 seconds in debug mode, 25 minutes (1500 seconds) in production

  useEffect(() => {
    console.log(`Video player initialized. Debug mode: ${DEBUG_MODE ? 'ON' : 'OFF'}`);
    console.log(`Content will be revealed after ${REVEAL_TIME} seconds`);
    
    // Load the video player script
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
    script.async = true;
    document.head.appendChild(script);

    // Set up event listener for the video player
    const handleVideoProgress = (event) => {
      try {
        // Check if we have data and it's an object
        if (!event.data || typeof event.data !== 'object') return;
        
        // Log all messages in debug mode
        if (DEBUG_MODE && event.data.currentTime) {
          console.log(`Video time: ${event.data.currentTime}s`);
        }
        
        // Check if this is a video progress event
        if (event.data.currentTime !== undefined) {
          // Check if the video has reached the reveal time
          if (event.data.currentTime >= REVEAL_TIME && !videoRevealed) {
            console.log(`Video reached ${REVEAL_TIME} seconds, revealing content`);
            setVideoRevealed(true);
            
            // Trigger the reveal in the parent component
            if (window.revealContent) {
              window.revealContent();
            }
          }
        }
      } catch (error) {
        console.error("Error processing video message:", error);
      }
    };

    // Add event listener for the video player's messages
    window.addEventListener('message', handleVideoProgress);

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
    };

    // For testing in development, add a timeout to reveal content after 10 seconds
    let debugTimer;
    if (DEBUG_MODE) {
      debugTimer = setTimeout(() => {
        console.log("Debug mode: Testing reveal after 10 seconds");
        window.revealContent();
      }, 10000);
    }

    return () => {
      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      window.removeEventListener('message', handleVideoProgress);
      delete window.isVideoRevealed;
      delete window.revealContent;
      
      if (DEBUG_MODE && debugTimer) {
        clearTimeout(debugTimer);
      }
    };
  }, [videoRevealed, videoId, DEBUG_MODE, REVEAL_TIME]);

  return (
    <div className="video-wrapper">
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
