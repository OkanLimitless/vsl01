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

  useEffect(() => {
    // For testing in development, set to true to reveal after a shorter time
    const DEBUG_MODE = process.env.NODE_ENV === 'development';
    const REVEAL_TIME = DEBUG_MODE ? 5 : 1084; // 5 seconds in debug mode, 1084 seconds in production
    
    // Create and inject the player script
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
    script.async = true;
    script.id = `scr_${videoId}`;
    document.head.appendChild(script);
    scriptRef.current = script;
    
    // Set up monitoring for the video
    const monitorVideo = () => {
      // Create a global object to receive messages from the player
      window.vturbPlayerAPI = window.vturbPlayerAPI || {};
      window.vturbPlayerAPI.onTimeUpdate = (currentTime) => {
        console.log(`API Time update: ${currentTime}s`);
        
        if (currentTime >= REVEAL_TIME) {
          onVideoProgress && onVideoProgress();
        }
      };
      
      // Inject a script to communicate with the player
      const monitorScript = document.createElement('script');
      monitorScript.innerHTML = `
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
      document.head.appendChild(monitorScript);
      monitorScriptRef.current = monitorScript;
    };
    
    // Start monitoring after a short delay
    const monitorTimer = setTimeout(monitorVideo, 2000);
    
    // For testing in development, add a timeout to reveal content after 10 seconds
    let debugTimer;
    if (DEBUG_MODE) {
      debugTimer = setTimeout(() => {
        console.log("Debug mode: Testing reveal after 10 seconds");
        onVideoProgress && onVideoProgress();
      }, 10000);
    }

    return () => {
      // Clean up all scripts
      if (scriptRef.current) {
        try {
          document.head.removeChild(scriptRef.current);
        } catch (e) {
          console.log("Error removing player script:", e);
        }
      }
      
      if (monitorScriptRef.current) {
        try {
          document.head.removeChild(monitorScriptRef.current);
        } catch (e) {
          console.log("Error removing monitor script:", e);
        }
      }
      
      // Clear timers
      clearTimeout(monitorTimer);
      if (DEBUG_MODE && debugTimer) {
        clearTimeout(debugTimer);
      }
      
      delete window.vturbPlayerAPI;
    };
  }, [onVideoProgress]);

  // Render the video container only (the script is injected via useEffect)
  return (
    <ClientSideOnly>
      <div className="video-wrapper">
        <div id={`vid_${videoId}`} style={{ position: 'relative', width: '100%', padding: '176.47058823529412% 0 0' }}>
          <img 
            id={`thumb_${videoId}`} 
            src={`https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/thumbnail.jpg`} 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            alt="thumbnail" 
          />
          <div 
            id={`backdrop_${videoId}`} 
            style={{ WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
          ></div>
        </div>
        {/* Script is now injected in useEffect instead of here */}
      </div>
    </ClientSideOnly>
  );
} 