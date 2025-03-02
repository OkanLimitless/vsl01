import React, { useEffect, useRef, useState } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);
  
  // Function to calculate deceptive progress
  // This creates a non-linear progress that moves faster at the beginning
  // and slows down towards the end to make a long video appear shorter
  const calculateDeceptiveProgress = (currentTime, duration) => {
    // If we don't have duration yet, return 0
    if (!duration) return 0;
    
    // Actual linear progress (0-1)
    const actualProgress = currentTime / duration;
    
    // Apply a non-linear transformation to make progress appear faster at the beginning
    // and slower towards the end
    // This formula uses a power function where:
    // - Values < 0.3 will progress much faster than reality
    // - Values between 0.3-0.7 will progress slightly faster than reality
    // - Values > 0.7 will progress much slower than reality
    
    // For a 45-minute video, this will make it initially appear like a 5-minute video
    
    // Parameters to tune the deception curve
    const initialSpeedFactor = 3.5;  // How much faster it appears at the beginning
    const midpointSlowdown = 0.35;   // Where it starts to slow down (0-1)
    const endSlowFactor = 0.2;       // How much slower it appears at the end
    
    let deceptiveProgress;
    
    if (actualProgress < midpointSlowdown) {
      // Beginning: Move much faster
      deceptiveProgress = actualProgress * initialSpeedFactor;
    } else {
      // After midpoint: Start slowing down progressively
      const remainingProgress = actualProgress - midpointSlowdown;
      const remainingScale = 1 - midpointSlowdown;
      
      // Calculate how much to slow down based on how far we are past midpoint
      const slowdownFactor = 1 - (remainingProgress / remainingScale) * (1 - endSlowFactor);
      
      // Apply slowdown and add to the progress we already showed at midpoint
      deceptiveProgress = midpointSlowdown * initialSpeedFactor + 
                         (remainingProgress * slowdownFactor * (1 - midpointSlowdown * (initialSpeedFactor - 1)));
    }
    
    // Ensure we don't exceed 100% progress
    return Math.min(deceptiveProgress, 1) * 100;
  };
  
  useEffect(() => {
    // Add event listeners and initialize video when component mounts
    const videoElement = videoRef.current;
    
    if (videoElement) {
      // Force hardware acceleration
      videoElement.style.transform = 'translateZ(0)';
      videoElement.style.willChange = 'transform';
      
      // Set playback rate to exactly 1.0
      videoElement.playbackRate = 1.0;
      
      // Store video duration once metadata is loaded
      videoElement.addEventListener('loadedmetadata', () => {
        setVideoDuration(videoElement.duration);
      });
      
      // Update progress bar on timeupdate
      const handleTimeUpdate = () => {
        // Calculate deceptive progress percentage
        const progress = calculateDeceptiveProgress(videoElement.currentTime, videoElement.duration);
        
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${progress}%`;
        }
        setCurrentTime(videoElement.currentTime);
      };
      
      // Handle play/pause state
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      // Add event listeners
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);
      
      // Ensure audio track is enabled and synchronized
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
      
      // Expose video element to window for product reveal functionality
      if (typeof window !== 'undefined') {
        // Create a mock smartplayer interface for compatibility with existing code
        window.smartplayer = {
          instances: [{
            video: videoElement,
            on: (eventName, callback) => {
              if (eventName === 'timeupdate') {
                videoElement.addEventListener('timeupdate', callback);
              } else if (eventName === 'ended') {
                videoElement.addEventListener('ended', callback);
              }
            }
          }]
        };
      }
      
      // Handle clicks on progress bar for seeking
      const handleProgressBarClick = (e) => {
        if (progressContainerRef.current && videoElement) {
          const rect = progressContainerRef.current.getBoundingClientRect();
          const pos = (e.clientX - rect.left) / rect.width;
          
          // Convert the deceptive position back to actual video position
          // This is a rough inverse of the deceptive progress calculation
          let actualPos;
          
          const midpointSlowdown = 0.35;
          const initialSpeedFactor = 3.5;
          const endSlowFactor = 0.2;
          
          if (pos < midpointSlowdown * initialSpeedFactor) {
            // Beginning section
            actualPos = pos / initialSpeedFactor;
          } else {
            // After midpoint section - more complex inverse calculation
            const deceptiveMidpoint = midpointSlowdown * initialSpeedFactor;
            const remainingDeceptiveScale = 1 - deceptiveMidpoint;
            const deceptiveRemainder = pos - deceptiveMidpoint;
            
            // Approximate inverse calculation
            const remainingActualProgress = deceptiveRemainder / 
              ((1 - midpointSlowdown * (initialSpeedFactor - 1)) * 
               (1 - (deceptiveRemainder / remainingDeceptiveScale) * (1 - endSlowFactor)));
            
            actualPos = midpointSlowdown + remainingActualProgress;
          }
          
          // Ensure we stay within bounds
          actualPos = Math.max(0, Math.min(1, actualPos));
          
          // Set the video time based on the actual position
          videoElement.currentTime = actualPos * videoElement.duration;
        }
      };
      
      if (progressContainerRef.current) {
        progressContainerRef.current.addEventListener('click', handleProgressBarClick);
      }
      
      // Auto-hide controls after 3 seconds of inactivity
      let controlsTimeout;
      const resetControlsTimeout = () => {
        clearTimeout(controlsTimeout);
        setShowControls(true);
        controlsTimeout = setTimeout(() => {
          if (isPlaying) {
            setShowControls(false);
          }
        }, 3000);
      };
      
      const handleMouseMove = () => {
        resetControlsTimeout();
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      
      // Clean up on unmount
      return () => {
        if (videoElement) {
          videoElement.removeEventListener('timeupdate', handleTimeUpdate);
          videoElement.removeEventListener('play', handlePlay);
          videoElement.removeEventListener('pause', handlePause);
          videoElement.removeEventListener('loadedmetadata', () => {
            setVideoDuration(videoElement.duration);
          });
        }
        
        if (progressContainerRef.current) {
          progressContainerRef.current.removeEventListener('click', handleProgressBarClick);
        }
        
        document.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(controlsTimeout);
      };
    }
  }, [isPlaying]);
  
  // Format time to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Handle play/pause toggle
  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };
  
  // Handle mute toggle
  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        paddingTop: '56.25%',
        willChange: 'transform',
        transform: 'translateZ(0)',
        isolation: 'isolate',
        backgroundColor: '#000',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
      }}
      onMouseEnter={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        preload="auto"
        poster="https://images.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/thumbnail.jpg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          backgroundColor: '#000',
          cursor: 'pointer'
        }}
        onClick={togglePlay}
      >
        <source 
          src="https://dalrnrpokeqkc.cloudfront.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/67c42ac6c8f32f34895f6035/original.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Overlay Button (shows only when paused) */}
      {!isPlaying && (
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
          onClick={togglePlay}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: '20px solid transparent',
              borderBottom: '20px solid transparent',
              borderLeft: '30px solid white',
              marginLeft: '8px'
            }}
          />
        </div>
      )}
      
      {/* Custom Controls - similar to VTurb */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '10px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          display: 'flex',
          flexDirection: 'column',
          opacity: showControls ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 5
        }}
      >
        {/* Progress Bar */}
        <div 
          ref={progressContainerRef}
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: '2px',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
        >
          <div 
            ref={progressBarRef}
            style={{
              height: '100%',
              backgroundColor: '#ff0000',
              borderRadius: '2px',
              width: '0%'
            }}
          />
        </div>
        
        {/* Controls Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Left Controls */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Play/Pause Button */}
            <button 
              onClick={togglePlay}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '5px 10px',
                marginRight: '10px'
              }}
            >
              {isPlaying ? '❚❚' : '▶'}
            </button>
            
            {/* Current Time */}
            <span style={{ color: 'white', fontSize: '14px' }}>
              {formatTime(currentTime)}
            </span>
          </div>
          
          {/* Right Controls */}
          <div>
            {/* Volume Button */}
            <button 
              onClick={toggleMute}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '5px 10px'
              }}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
