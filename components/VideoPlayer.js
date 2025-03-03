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
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/e9bad9e6-04bd-4183-b4a5-0ab5b677316f/players/67c42af2aedb9697b81c45ce/player.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.smartplayer) {
        window.smartplayer.instances[0].on('ready', () => {
          // Disable pause functionality
          const videoElement = window.smartplayer.instances[0].video;
          if (videoElement) {
            videoElement.addEventListener('pause', (e) => {
              e.preventDefault();
              videoElement.play();
            });
          }
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
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
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
      <div id="vid_67c42af2aedb9697b81c45ce" style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img 
          id="thumb_67c42af2aedb9697b81c45ce" 
          src="/images/thumbnail1.png" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} 
          alt="Video Thumbnail"
        />
      </div>
    </div>
  );
}
