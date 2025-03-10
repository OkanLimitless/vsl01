import React, { useEffect, useState, useRef } from 'react';

export default function VideoPlayer() {
  const [videoRevealed, setVideoRevealed] = useState(false);
  const videoId = "67cdb02e18de859a97b2c80b";
  const playerRef = useRef(null);
  const checkIntervalRef = useRef(null);
  const timeDisplayRef = useRef(null);
  
  // For testing in development, set to true to reveal after a shorter time
  const DEBUG_MODE = process.env.NODE_ENV === 'development';
  const REVEAL_TIME = DEBUG_MODE ? 5 : 1500; // 5 seconds in debug mode, 25 minutes (1500 seconds) in production

  // Function to reveal content
  const revealContent = () => {
    if (videoRevealed) return; // Prevent multiple reveals
    
    console.log("REVEALING CONTENT NOW!");
    setVideoRevealed(true);
    
    // Show the hidden sections by directly removing the class
    document.querySelectorAll('.hidden-until-reveal').forEach(el => {
      el.classList.remove('hidden-until-reveal');
      el.style.display = 'block';
      el.classList.add('revealed');
    });
    
    // Hide the lock message
    const lockMessage = document.querySelector('.access-message');
    if (lockMessage) {
      lockMessage.style.display = 'none';
    }
    
    // Show the released message
    const releasedMessage = document.querySelector('.released-message');
    if (releasedMessage) {
      releasedMessage.style.display = 'block';
    }
    
    // Store in localStorage that content has been revealed
    if (typeof window !== 'undefined') {
      localStorage.setItem('contentRevealed', 'true');
    }
  };

  useEffect(() => {
    console.log(`Video player initialized. Debug mode: ${DEBUG_MODE ? 'ON' : 'OFF'}`);
    console.log(`Content will be revealed after ${REVEAL_TIME} seconds`);
    
    // Create a time display element for debugging
    if (DEBUG_MODE) {
      timeDisplayRef.current = document.createElement('div');
      timeDisplayRef.current.style.position = 'fixed';
      timeDisplayRef.current.style.top = '10px';
      timeDisplayRef.current.style.right = '10px';
      timeDisplayRef.current.style.background = 'rgba(0,0,0,0.7)';
      timeDisplayRef.current.style.color = 'white';
      timeDisplayRef.current.style.padding = '5px 10px';
      timeDisplayRef.current.style.borderRadius = '5px';
      timeDisplayRef.current.style.zIndex = '9999';
      timeDisplayRef.current.textContent = 'Video Time: 0s';
      document.body.appendChild(timeDisplayRef.current);
    }
    
    // Check if content was already revealed in a previous session
    if (typeof window !== 'undefined' && localStorage.getItem('contentRevealed') === 'true') {
      console.log("Content was previously revealed, showing content immediately");
      setTimeout(revealContent, 500); // Small delay to ensure DOM is ready
      return;
    }
    
    // Direct approach to monitor the video element
    const monitorVideoElement = () => {
      // Try to find the iframe that contains the video
      const iframe = document.querySelector(`iframe[src*="${videoId}"]`);
      
      if (iframe) {
        console.log("Found video iframe, setting up monitoring");
        
        // Set up a polling interval to check video time
        const videoCheckInterval = setInterval(() => {
          try {
            // Try to access the video element inside the iframe
            // This might not work due to cross-origin restrictions
            const video = iframe.contentWindow.document.querySelector('video');
            
            if (video) {
              const currentTime = video.currentTime;
              console.log(`Video time: ${currentTime.toFixed(1)}s`);
              
              if (DEBUG_MODE && timeDisplayRef.current) {
                timeDisplayRef.current.textContent = `Video Time: ${currentTime.toFixed(1)}s`;
              }
              
              if (currentTime >= REVEAL_TIME && !videoRevealed) {
                console.log(`Video reached ${REVEAL_TIME} seconds, revealing content`);
                clearInterval(videoCheckInterval);
                revealContent();
              }
            }
          } catch (e) {
            // Cross-origin restrictions might prevent access to iframe content
            // console.error("Error accessing video element:", e);
          }
        }, 1000);
        
        return videoCheckInterval;
      }
      
      return null;
    };
    
    // Alternative approach using the Vturb player API
    const setupVturbPlayerMonitoring = () => {
      // Create a global object to receive messages from the player
      window.vturbPlayerAPI = window.vturbPlayerAPI || {};
      window.vturbPlayerAPI.onTimeUpdate = (currentTime) => {
        console.log(`API Time update: ${currentTime}s`);
        
        if (DEBUG_MODE && timeDisplayRef.current) {
          timeDisplayRef.current.textContent = `Video Time: ${currentTime.toFixed(1)}s`;
        }
        
        if (currentTime >= REVEAL_TIME && !videoRevealed) {
          revealContent();
        }
      };
      
      // Inject a script to communicate with the player
      const script = document.createElement('script');
      script.innerHTML = `
        // Wait for player to initialize
        setTimeout(function() {
          // Try to find the video element
          var videoElement = document.querySelector('video');
          if (videoElement) {
            console.log("Found video element, setting up timeupdate listener");
            videoElement.addEventListener('timeupdate', function() {
              if (window.vturbPlayerAPI && typeof window.vturbPlayerAPI.onTimeUpdate === 'function') {
                window.vturbPlayerAPI.onTimeUpdate(videoElement.currentTime);
              }
            });
          }
        }, 2000);
      `;
      document.head.appendChild(script);
    };
    
    // Load the video player script
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
    script.async = true;
    document.head.appendChild(script);
    
    // Set up monitoring after the script has loaded
    script.onload = () => {
      console.log("Video player script loaded");
      setupVturbPlayerMonitoring();
      
      // Wait a bit for the iframe to be created
      setTimeout(() => {
        const intervalId = monitorVideoElement();
        if (intervalId) {
          checkIntervalRef.current = intervalId;
        }
      }, 2000);
    };
    
    // Fallback: Set up a polling mechanism to check for the video element
    const startVideoElementPolling = () => {
      const pollingInterval = setInterval(() => {
        // Look for the video element in various ways
        const videoElement = document.querySelector(`video`) || 
                            document.querySelector(`#vid_${videoId} video`) ||
                            document.querySelector(`iframe[src*="${videoId}"]`);
        
        if (videoElement) {
          console.log("Found video element through polling");
          clearInterval(pollingInterval);
          
          // Try to set up a timeupdate listener
          try {
            videoElement.addEventListener('timeupdate', (e) => {
              const currentTime = videoElement.currentTime;
              console.log(`Timeupdate event: ${currentTime.toFixed(1)}s`);
              
              if (DEBUG_MODE && timeDisplayRef.current) {
                timeDisplayRef.current.textContent = `Video Time: ${currentTime.toFixed(1)}s`;
              }
              
              if (currentTime >= REVEAL_TIME && !videoRevealed) {
                revealContent();
              }
            });
          } catch (e) {
            console.error("Error setting up timeupdate listener:", e);
          }
        }
      }, 1000);
      
      return pollingInterval;
    };
    
    // Start polling after a short delay
    const pollingInterval = setTimeout(startVideoElementPolling, 3000);
    
    // For testing in development, add a timeout to reveal content after 10 seconds
    let debugTimer;
    if (DEBUG_MODE) {
      debugTimer = setTimeout(() => {
        console.log("Debug mode: Testing reveal after 10 seconds");
        revealContent();
      }, 10000);
      
      // Add a button to manually trigger reveal
      const revealButton = document.createElement('button');
      revealButton.textContent = 'Reveal Content';
      revealButton.style.position = 'fixed';
      revealButton.style.bottom = '10px';
      revealButton.style.right = '10px';
      revealButton.style.zIndex = '9999';
      revealButton.style.padding = '10px';
      revealButton.style.background = '#6c5ce7';
      revealButton.style.color = 'white';
      revealButton.style.border = 'none';
      revealButton.style.borderRadius = '5px';
      revealButton.style.cursor = 'pointer';
      revealButton.onclick = revealContent;
      document.body.appendChild(revealButton);
    }

    return () => {
      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
      
      clearTimeout(pollingInterval);
      
      if (DEBUG_MODE) {
        if (debugTimer) {
          clearTimeout(debugTimer);
        }
        
        if (timeDisplayRef.current && timeDisplayRef.current.parentNode) {
          timeDisplayRef.current.parentNode.removeChild(timeDisplayRef.current);
        }
      }
      
      delete window.vturbPlayerAPI;
    };
  }, [videoRevealed, videoId, DEBUG_MODE, REVEAL_TIME]);

  return (
    <div style={{width: '100%', maxWidth: '100%'}}>
      <div id="vid_67cdb02e18de859a97b2c80b" style={{position: 'relative', width: '100%', padding: '176.47058823529412% 0 0'}}> 
        <img id="thumb_67cdb02e18de859a97b2c80b" src="https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/67cdb02e18de859a97b2c80b/thumbnail.jpg" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} alt="thumbnail" /> 
        <div id="backdrop_67cdb02e18de859a97b2c80b" style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}></div> 
      </div>
    </div>
  );
}
