import React, { useEffect } from 'react';

export default function VideoPlayer() {
  useEffect(() => {
    // Preload the player scripts
    const preloadPlayerScript = document.createElement('link');
    preloadPlayerScript.rel = 'preload';
    preloadPlayerScript.as = 'script';
    preloadPlayerScript.href = "https://scripts.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/player.js";
    document.head.appendChild(preloadPlayerScript);
    
    const preloadSmartPlayer = document.createElement('link');
    preloadSmartPlayer.rel = 'preload';
    preloadSmartPlayer.as = 'script';
    preloadSmartPlayer.href = "https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js";
    document.head.appendChild(preloadSmartPlayer);
    
    // Create script element with higher priority
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/player.js";
    script.async = false; // Changed to false for better synchronization
    script.id = "scr_67c42af2aedb9697b81c45ce";
    
    // Add event listener to initialize player with optimal settings
    script.onload = () => {
      if (window.smartplayer && window.smartplayer.instances && window.smartplayer.instances.length > 0) {
        // Try to apply settings that might help with sync
        try {
          window.smartplayer.instances[0].once('canplay', () => {
            // Force audio and video sync on canplay event
            const videoElement = window.smartplayer.instances[0].video;
            if (videoElement) {
              // These properties can help with A/V sync in some browsers
              videoElement.playbackRate = 1.0;
              videoElement.preservesPitch = false;
            }
          });
        } catch (e) {
          console.log('Error applying video settings:', e);
        }
      }
    };
    
    // Append to document head
    document.head.appendChild(script);
    
    // Clean up on unmount
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(preloadPlayerScript)) {
        document.head.removeChild(preloadPlayerScript);
      }
      if (document.head.contains(preloadSmartPlayer)) {
        document.head.removeChild(preloadSmartPlayer);
      }
    };
  }, []);

  return (
    <div id="vid_67c42af2aedb9697b81c45ce" style={{ 
      position: 'relative', 
      width: '100%', 
      padding: '56.25% 0 0',
      willChange: 'transform', // Optimize rendering
      transform: 'translateZ(0)' // Force GPU acceleration
    }}>
      <img 
        id="thumb_67c42af2aedb9697b81c45ce" 
        src="https://images.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/thumbnail.jpg" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        alt="Video Thumbnail"
      />
      <div 
        id="backdrop_67c42af2aedb9697b81c45ce" 
        style={{ WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
      ></div>
    </div>
  );
}
