import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Create a client-side only wrapper to avoid hydration issues
const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function MainVideoPlayer({ onVideoProgress }) {
  const videoId = "67cdb02e18de859a97b2c80b";
  const scriptRef = useRef(null);
  const monitorScriptRef = useRef(null);
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
    
    // Wait for DOM to be fully ready before injecting scripts
    const initializePlayer = () => {
      // Check if script already exists to prevent duplicates
      if (document.getElementById(`scr_${videoId}`)) {
        return;
      }
      
      // Create and inject the player script
      const script = document.createElement('script');
      script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
      script.async = true;
      script.id = `scr_${videoId}`;
      document.head.appendChild(script);
      scriptRef.current = script;
    };
    
    // Set up monitoring for the video
    const monitorVideo = () => {
      // Create a global object to receive messages from the player
      window.vturbPlayerAPI = window.vturbPlayerAPI || {};
      window.vturbPlayerAPI.onTimeUpdate = (currentTime) => {
        if (currentTime >= REVEAL_TIME) {
          onVideoProgress && onVideoProgress();
        }
      };
      
      // Inject a script to communicate with the player
      const monitorScript = document.createElement('script');
      monitorScript.id = `monitor_${videoId}`;
      monitorScript.innerHTML = `
        // Wait for player to initialize
        setTimeout(function() {
          // Try to find the video element
          var videoElement = document.querySelector('video');
          if (videoElement) {
            videoElement.addEventListener('timeupdate', function() {
              if (window.vturbPlayerAPI && typeof window.vturbPlayerAPI.onTimeUpdate === 'function') {
                window.vturbPlayerAPI.onTimeUpdate(videoElement.currentTime);
              }
            });
          }
        }, 3000); // Increased timeout to ensure video element is loaded
      `;
      
      // Check if script already exists to prevent duplicates
      if (!document.getElementById(`monitor_${videoId}`)) {
        document.head.appendChild(monitorScript);
        monitorScriptRef.current = monitorScript;
      }
    };
    
    // Initialize player with a slight delay to ensure DOM is ready
    const initTimer = setTimeout(initializePlayer, 100);
    
    // Start monitoring after a longer delay to ensure player is loaded
    const monitorTimer = setTimeout(monitorVideo, 3000);
    
    // For testing in development, add a timeout to reveal content after 10 seconds
    let debugTimer;
    if (DEBUG_MODE) {
      debugTimer = setTimeout(() => {
        onVideoProgress && onVideoProgress();
      }, 10000);
    }

    // Cleanup function
    return () => {
      // Only attempt to remove scripts if they exist and are still in the document
      if (scriptRef.current && document.getElementById(scriptRef.current.id)) {
        try {
          document.head.removeChild(scriptRef.current);
        } catch (e) {
          // Silently handle errors
        }
      }
      
      if (monitorScriptRef.current && document.getElementById(monitorScriptRef.current.id)) {
        try {
          document.head.removeChild(monitorScriptRef.current);
        } catch (e) {
          // Silently handle errors
        }
      }
      
      // Clear timers
      clearTimeout(initTimer);
      clearTimeout(monitorTimer);
      if (DEBUG_MODE && debugTimer) {
        clearTimeout(debugTimer);
      }
      
      // Reset the API
      if (window.vturbPlayerAPI) {
        window.vturbPlayerAPI.onTimeUpdate = null;
      }
      
      playerInitialized.current = false;
    };
  }, [onVideoProgress]);

  // Render the video container only (the script is injected via useEffect)
  return (
    <ClientSideOnly>
      <div className="video-wrapper">
        <div id={`vid_${videoId}`} style={{ 
          position: 'relative', 
          width: '100%', 
          padding: '176.47058823529412% 0 0',
          borderRadius: '6px',
          overflow: 'hidden',
          zIndex: 2
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
    </ClientSideOnly>
  );
} 