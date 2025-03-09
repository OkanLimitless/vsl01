import React, { useEffect, useState } from 'react';

export default function VideoPlayer() {
  const [videoRevealed, setVideoRevealed] = useState(false);
  const videoId = "67cdb02e18de859a97b2c80b";

  useEffect(() => {
    // Load the video player script
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
    script.async = true;
    document.head.appendChild(script);

    // Set up event listener for the video player
    const handleVideoProgress = (event) => {
      // Check if the event is from our video player
      if (event.data && typeof event.data === 'object' && event.data.video && event.data.video.includes(videoId)) {
        console.log("Video progress:", event.data.currentTime);
        // Check if the video has reached the 25-minute mark (1500 seconds)
        if (event.data.currentTime >= 1500 && !videoRevealed) {
          console.log("Video reached 25 minutes, revealing content");
          setVideoRevealed(true);
          // Trigger any additional reveal actions here
          if (window.revealContent) {
            window.revealContent();
          }
        }
      }
    };

    // Add event listener for the video player's messages
    window.addEventListener('message', handleVideoProgress);

    // Create a global function to check if video is revealed
    window.isVideoRevealed = () => videoRevealed;

    // Create a global function to manually reveal content (for testing)
    window.revealContent = () => {
      console.log("Manually revealing content");
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
  }, [videoRevealed, videoId]);

  return (
    <div className="video-wrapper">
      <div className="video-section">
        <div id={`vid_${videoId}`} style={{position: 'relative', width: '100%', padding: '176.47058823529412% 0 0'}}>
          <img 
            id={`thumb_${videoId}`} 
            src={`https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/thumbnail.jpg`}
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
            alt="Video Thumbnail"
          />
          <div 
            id={`backdrop_${videoId}`} 
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
