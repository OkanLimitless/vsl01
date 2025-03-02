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
  // This creates a non-linear progress that moves VERY fast at the beginning
  // and dramatically slows down later to make a long video appear shorter
  const calculateDeceptiveProgress = (currentTime, duration) => {
    // If we don't have duration yet, return 0
    if (!duration) return 0;
    
    // Actual linear progress (0-1)
    const actualProgress = currentTime / duration;
    
    // VTurb-style progress calculation:
    // - First 15 seconds should reach ~10-15% progress
    // - By 5 minutes (300 seconds) should reach ~60-70% progress
    // - Then dramatically slow down for the remainder
    
    // Constants for our calculation
    const initialBoostSeconds = 15;  // First 15 seconds get a massive boost
    const midPointSeconds = 300;     // At 5 minutes (300 seconds), we should be at ~65% progress
    const initialBoostTarget = 0.15; // Target progress after initial 15 seconds (15%)
    const midPointTarget = 0.70;     // Target progress at 5 minutes (70%)
    
    // Calculate progress based on which phase we're in
    if (currentTime <= initialBoostSeconds) {
      // Phase 1: Initial boost (first 15 seconds)
      // Linear mapping from 0-15 seconds to 0-15% progress
      return (currentTime / initialBoostSeconds) * initialBoostTarget * 100;
    } 
    else if (currentTime <= midPointSeconds) {
      // Phase 2: Fast progress (15 seconds to 5 minutes)
      // Linear mapping from 15-300 seconds to 15-70% progress
      const phaseProgress = (currentTime - initialBoostSeconds) / (midPointSeconds - initialBoostSeconds);
      return (initialBoostTarget + phaseProgress * (midPointTarget - initialBoostTarget)) * 100;
    } 
    else {
      // Phase 3: Slow down dramatically (after 5 minutes)
      // Use a curve that ensures we reach 100% exactly at the end
      // but progresses very slowly
      const remainingProgress = 1 - midPointTarget;
      const remainingTime = duration - midPointSeconds;
      const timeAfterMidpoint = currentTime - midPointSeconds;
      
      // Use a square root function to create a curve that starts faster and slows down
      // This ensures we reach exactly 100% at the end
      const slowProgress = Math.sqrt(timeAfterMidpoint / remainingTime);
      
      return (midPointTarget + (slowProgress * remainingProgress)) * 100;
    }
  };
  
  // Function to convert from deceptive progress position back to actual video position
  // This is used when the user clicks on the progress bar
  const deceptiveToActualPosition = (deceptivePos) => {
    // Normalize to 0-1 range
    deceptivePos = deceptivePos / 100;
    
    // Constants (must match those in calculateDeceptiveProgress)
    const initialBoostSeconds = 15;
    const midPointSeconds = 300;
    const initialBoostTarget = 0.15;
    const midPointTarget = 0.70;
    
    // Determine which phase the deceptive position falls into
    if (deceptivePos <= initialBoostTarget) {
      // Phase 1: Initial boost
      return (deceptivePos / initialBoostTarget) * initialBoostSeconds;
    } 
    else if (deceptivePos <= midPointTarget) {
      // Phase 2: Fast progress
      const phaseProgress = (deceptivePos - initialBoostTarget) / (midPointTarget - initialBoostTarget);
      return initialBoostSeconds + phaseProgress * (midPointSeconds - initialBoostSeconds);
    } 
    else {
      // Phase 3: Slow down dramatically
      const remainingProgress = 1 - midPointTarget;
      const remainingTime = videoDuration - midPointSeconds;
      const progressAfterMidpoint = deceptivePos - midPointTarget;
      
      // Inverse of the square root function
      const slowProgress = Math.pow(progressAfterMidpoint / remainingProgress, 2);
      
      return midPointSeconds + (slowProgress * remainingTime);
    }
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
          const actualTime = deceptiveToActualPosition(pos * 100);
          
          // Set the video time based on the actual position
          videoElement.currentTime = actualTime;
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
              backgroundImage: 'url(/thumbnail1.png)',
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
                    const actualTime = deceptiveToActualPosition(pos * 100);
                    videoRef.current.currentTime = actualTime;
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
