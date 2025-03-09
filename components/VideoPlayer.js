import React, { useEffect, useState } from 'react';

export default function VideoPlayer() {
  const [videoRevealed, setVideoRevealed] = useState(false);

  useEffect(() => {
    // Load the video player script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/67cd8d1edec86bc0f279df4d/player.js';
    script.async = true;
    document.head.appendChild(script);

    // Set up event listener for the video player
    const handleVideoProgress = (event) => {
      // Check if the video has reached the 25-minute mark (1500 seconds)
      if (event.data && event.data.currentTime >= 1500 && !videoRevealed) {
        setVideoRevealed(true);
        // Trigger any additional reveal actions here
        if (window.revealContent) {
          window.revealContent();
        }
      }
    };

    // Add event listener for the video player's messages
    window.addEventListener('message', handleVideoProgress);

    // Create a global function to check if video is revealed
    window.isVideoRevealed = () => videoRevealed;

    // Create a global function to manually reveal content (for testing)
    window.revealContent = () => {
      setVideoRevealed(true);
      
      // Show the hidden sections
      const hiddenSections = document.querySelectorAll('.hidden-until-reveal');
      hiddenSections.forEach(section => {
        section.classList.remove('hidden-until-reveal');
        section.classList.add('revealed');
      });
    };

    return () => {
      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      window.removeEventListener('message', handleVideoProgress);
      delete window.isVideoRevealed;
      delete window.revealContent;
    };
  }, [videoRevealed]);

  return (
    <div className="video-wrapper">
      <div className="video-section">
        <div className="video-message">
          <p>You're already started watching this video</p>
          <div className="video-controls">
            <button className="control-button">
              <span className="play-icon">▶</span> Resume watching
            </button>
            <button className="control-button muted">
              <span className="sound-icon">🔊</span> Click here to listen
            </button>
          </div>
        </div>
        
        <div id="vid_67cd8d1edec86bc0f279df4d" style={{position: 'relative', width: '100%', padding: '176.66666666666666% 0 0'}}>
          <img 
            id="thumb_67cd8d1edec86bc0f279df4d" 
            src="https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/67cd8d1edec86bc0f279df4d/thumbnail.jpg" 
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
            alt="Video Thumbnail"
          />
          <div 
            id="backdrop_67cd8d1edec86bc0f279df4d" 
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
        
        .video-message {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          background-color: #6c5ce7;
          padding: 20px;
          border-radius: 8px;
          width: 80%;
          max-width: 300px;
          text-align: center;
          color: white;
        }
        
        .video-message p {
          margin: 0 0 15px 0;
          font-weight: bold;
        }
        
        .video-controls {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .control-button {
          background-color: #fff;
          color: #6c5ce7;
          border: none;
          padding: 8px 15px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-weight: bold;
        }
        
        .control-button.muted {
          background-color: transparent;
          border: 1px solid white;
          color: white;
        }
        
        .play-icon, .sound-icon {
          font-size: 14px;
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
