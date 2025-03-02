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
      // Wait for smartplayer to be fully initialized
      const checkSmartPlayer = setInterval(() => {
        if (window.smartplayer && window.smartplayer.instances && window.smartplayer.instances.length > 0) {
          clearInterval(checkSmartPlayer);
          
          // Get the player instance
          const player = window.smartplayer.instances[0];
          
          // Override VTurb's default settings
          if (player && player.options) {
            // Try to modify player options that might affect sync
            try {
              // Force higher buffer size
              if (player.options.hlsConfig) {
                player.options.hlsConfig.maxBufferLength = 30;
                player.options.hlsConfig.maxMaxBufferLength = 60;
                player.options.hlsConfig.liveSyncDuration = 3;
                player.options.hlsConfig.liveMaxLatencyDuration = 10;
                player.options.hlsConfig.liveDurationInfinity = false;
                player.options.hlsConfig.enableWorker = true;
              }
              
              // Apply these changes to the player
              if (player.hls && typeof player.hls.recoverMediaError === 'function') {
                const originalError = player.hls.onError;
                player.hls.onError = function(event, data) {
                  // Try to recover from media errors automatically
                  if (data.fatal && data.type === 'mediaError') {
                    player.hls.recoverMediaError();
                  }
                  if (originalError) originalError.call(player.hls, event, data);
                };
              }
            } catch (e) {
              console.log('Error modifying player options:', e);
            }
          }
          
          // Apply direct settings to the video element
          if (player.video) {
            const videoElement = player.video;
            
            // Force hardware acceleration
            videoElement.style.transform = 'translateZ(0)';
            videoElement.style.willChange = 'transform';
            
            // Set audio-specific properties
            if ('mozHasAudio' in videoElement || 'webkitAudioDecodedByteCount' in videoElement) {
              // These are Firefox and Chrome specific properties
              videoElement.mozPreservesPitch = false;
              videoElement.webkitPreservesPitch = false;
            }
            
            // Set playback rate to exactly 1.0 (sometimes players use 0.99 or 1.01)
            videoElement.playbackRate = 1.0;
            
            // Ensure audio track is enabled and synchronized
            if (videoElement.audioTracks && videoElement.audioTracks.length > 0) {
              videoElement.audioTracks[0].enabled = true;
            }
            
            // Add event listeners for better sync
            videoElement.addEventListener('loadedmetadata', () => {
              // Once metadata is loaded, set audio output device if possible
              if (typeof videoElement.setSinkId === 'function') {
                videoElement.setSinkId('default').catch(e => {
                  console.log('Error setting audio output device:', e);
                });
              }
            });
            
            // Handle play event to ensure sync
            videoElement.addEventListener('play', () => {
              // Small delay then seek slightly to force AV sync
              setTimeout(() => {
                if (!videoElement.paused) {
                  const currentTime = videoElement.currentTime;
                  videoElement.currentTime = currentTime + 0.01;
                }
              }, 1000);
            });
            
            // Handle seeking which can cause sync issues
            videoElement.addEventListener('seeking', () => {
              // Mark the time we started seeking
              videoElement.dataset.seekStartTime = Date.now();
            });
            
            videoElement.addEventListener('seeked', () => {
              // If seeking took too long, it might cause sync issues
              const seekStartTime = parseInt(videoElement.dataset.seekStartTime || '0');
              const seekTime = Date.now() - seekStartTime;
              
              if (seekTime > 500) { // If seeking took more than 500ms
                // Small delay then play to ensure buffers are filled
                setTimeout(() => {
                  if (!videoElement.paused) {
                    videoElement.play();
                  }
                }, 100);
              }
            });
          }
        }
      }, 100);
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
      transform: 'translateZ(0)', // Force GPU acceleration
      isolation: 'isolate' // Create a new stacking context
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
