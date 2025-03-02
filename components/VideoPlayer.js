import React, { useEffect, useRef, useState } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [showThumbnail, setShowThumbnail] = useState(true);
  
  // Function to calculate deceptive progress
  // This creates a non-linear progress that moves faster at the beginning
  // and gradually slows down throughout the video to make a long video appear shorter
  const calculateDeceptiveProgress = (currentTime, duration) => {
    // If we don't have duration yet, return 0
    if (!duration) return 0;
    
    // Actual linear progress (0-1)
    const actualProgress = currentTime / duration;
    
    // Apply a logarithmic transformation to make progress appear faster at the beginning
    // and gradually slow down throughout the entire video
    // This creates a more believable progression that doesn't reach 99% too quickly
    
    // For a 45-minute video, this will make it initially appear faster but maintain
    // a more realistic progression throughout
    
    // Parameters to tune the deception curve
    const initialBoost = 1.8;      // Initial speed boost (lower than before for more gradual start)
    const curveFactor = 0.6;       // Controls how quickly the curve flattens (higher = more gradual)
    
    // Logarithmic curve formula: creates a curve that starts fast and gradually slows down
    // The formula is designed to:
    // 1. Start with a boost (initialBoost) from the very beginning
    // 2. Gradually slow down throughout the entire video
    // 3. Reach exactly 100% at the end of the video
    
    // Calculate deceptive progress using a modified logarithmic function
    const logBase = 1 + curveFactor;
    const scaleFactor = 1 / Math.log(1 + curveFactor);
    
    // This formula creates a curve that:
    // - Starts faster than linear (but not too fast)
    // - Continuously slows down throughout the video
    // - Reaches exactly 100% when actualProgress = 1
    const deceptiveProgress = Math.log(1 + (actualProgress * curveFactor)) * scaleFactor;
    
    // Apply initial boost but ensure it gradually diminishes
    // This makes the beginning faster but prevents it from reaching 99% too quickly
    const boostedProgress = deceptiveProgress * (1 + (initialBoost - 1) * (1 - actualProgress));
    
    // Ensure we don't exceed 100% progress
    return Math.min(boostedProgress, 1) * 100;
  };
  
  // Function to convert from deceptive progress position back to actual video position
  // This is used when the user clicks on the progress bar
  const deceptiveToActualPosition = (deceptivePos) => {
    // Parameters should match those in calculateDeceptiveProgress
    const initialBoost = 1.8;
    const curveFactor = 0.6;
    
    // Normalize to 0-1 range
    deceptivePos = deceptivePos / 100;
    
    // Inverse of the logarithmic function used in calculateDeceptiveProgress
    const logBase = 1 + curveFactor;
    const scaleFactor = 1 / Math.log(1 + curveFactor);
    
    // First remove the boost effect (approximate inverse)
    // This is an approximation that works reasonably well
    let unboostedPos = deceptivePos;
    
    // Then apply inverse of logarithmic function
    // exp(deceptivePos / scaleFactor) - 1) / curveFactor
    const actualPos = (Math.exp(unboostedPos / scaleFactor) - 1) / curveFactor;
    
    // Ensure we stay within bounds
    return Math.max(0, Math.min(1, actualPos));
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
      const handlePlay = () => {
        setIsPlaying(true);
        setShowThumbnail(false);
      };
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
          const actualPos = deceptiveToActualPosition(pos * 100);
          
          // Set the video time based on the actual position
          videoElement.currentTime = actualPos * videoElement.duration;
        }
      };
      
      if (progressContainerRef.current) {
        progressContainerRef.current.addEventListener('click', handleProgressBarClick);
      }
      
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
      };
    }
  }, [isPlaying]);
  
  // Handle play/pause toggle
  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setShowThumbnail(false);
      } else {
        video.pause();
      }
    }
  };

  return (
    <div>
      {/* Title in the style shown in the image */}
      <div style={{ 
        width: '100%', 
        textAlign: 'center', 
        marginBottom: '15px',
        backgroundColor: '#000',
        padding: '10px 0'
      }}>
        <h1 style={{ 
          color: 'white', 
          fontFamily: 'Arial, sans-serif', 
          fontWeight: 'bold',
          fontSize: '2.5rem',
          margin: 0,
          padding: '0 10px',
          textTransform: 'uppercase'
        }}>
          DO THIS <span style={{ 
            backgroundColor: '#0000FF', 
            color: 'white',
            padding: '0 10px'
          }}>"BLUE SALT HACK"</span> TO GET UP
        </h1>
        <h1 style={{ 
          color: 'white', 
          fontFamily: 'Arial, sans-serif', 
          fontWeight: 'bold',
          fontSize: '2.5rem',
          margin: 0,
          padding: '0 10px',
          textTransform: 'uppercase'
        }}>
          WHENEVER YOU WANT
        </h1>
      </div>
      
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
      >
        {/* Custom Thumbnail */}
        {showThumbnail && (
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 20,
              cursor: 'pointer',
              backgroundImage: 'url(/thumbnail.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={togglePlay}
          >
            {/* Play button overlay on thumbnail */}
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(255, 0, 0, 0.8)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: 0,
                height: 0,
                borderTop: '20px solid transparent',
                borderBottom: '20px solid transparent',
                borderLeft: '30px solid white',
                marginLeft: '8px'
              }} />
            </div>
          </div>
        )}
        
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
        
        {/* Play/Pause Overlay Button (shows only when paused and thumbnail is not showing) */}
        {!isPlaying && !showThumbnail && (
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
        
        {/* VTurb-style fake progress bar */}
        <div className="smartplayer-controller-mask" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40px', zIndex: 1 }}></div>
        <div className="smartplayer-controller" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 2 }}>
          <div className="smartplayer-bar-wrap" style={{ position: 'relative', height: '8px' }}>
            <div className="smartplayer-bar-time" style={{ display: 'none' }}></div>
            <div className="smartplayer-bar" style={{ position: 'absolute', left: 0, top: 0, right: 0, height: '100%', width: '100%' }}>
              <div className="smartplayer-loaded" style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
              <div 
                ref={progressContainerRef}
                className="smartplayer-played" 
                style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '100%', zIndex: 2 }}
                onClick={(e) => {
                  if (progressContainerRef.current && videoRef.current) {
                    const rect = progressContainerRef.current.getBoundingClientRect();
                    const pos = (e.clientX - rect.left) / rect.width;
                    const actualPos = deceptiveToActualPosition(pos * 100);
                    videoRef.current.currentTime = actualPos * videoRef.current.duration;
                  }
                }}
              >
                <div 
                  ref={progressBarRef}
                  className="smartplayer-fake-bar" 
                  style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: 0, 
                    height: '100%', 
                    backgroundColor: '#8A2BE2', 
                    width: '0%',
                    transition: 'width 0.1s' 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
