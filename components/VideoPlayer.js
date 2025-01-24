import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Load the smartplayer script for the new video
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/3b5f2e0a-d4d5-4b09-832d-cc04a06c6b74/players/6790dfc60f8856647ba39eee/player.js';
    script.async = true;
    script.id = 'scr_6790dfc60f8856647ba39eee';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="video-section" style={{ position: 'relative' }}>
      <div className="video-container" style={{ marginBottom: '20px' }}>
        <div 
          id="vid_6790dfc60f8856647ba39eee"
          style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}
        >
          <img
            id="thumb_6790dfc60f8856647ba39eee"
            src="https://images.converteai.net/3b5f2e0a-d4d5-4b09-832d-cc04a06c6b74/players/6790dfc60f8856647ba39eee/thumbnail.jpg"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            alt="thumbnail"
          />
          <div 
            id="backdrop_6790dfc60f8856647ba39eee"
            style={{
              WebkitBackdropFilter: 'blur(5px)',
              backdropFilter: 'blur(5px)',
              position: 'absolute',
              top: 0,
              height: '100%',
              width: '100%'
            }}
          />
        </div>
      </div>
      <style>{`
        .smartplayer-call-action.smartplayer-hide {
          display: none;
        }
        .smartplayer-call-action.callaction_6790dfc60f8856647ba39eee_0 {
          text-align: center;
          padding: 20px 10px;
          position: relative;
          z-index: 1;
        }
        .smartplayer-call-action.callaction_6790dfc60f8856647ba39eee_0 a.smartplayer-call-action--link {
          background-color: #00c110;
          color: #FFFFFF;
          padding: 1em 3em;
          display: inline-block;
          border-radius: 0.4em;
          font-size: 22px;
          line-height: 1;
          font-weight: 600;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .smartplayer-call-action.callaction_6790dfc60f8856647ba39eee_0 a.smartplayer-call-action--link:hover {
          background-color: #1890ff;
          color: #ffffff;
          text-decoration: none;
        }
        /* Ensure content below CTA shifts down smoothly */
        #callaction_6790dfc60f8856647ba39eee_0 {
          margin-bottom: 20px;
          transition: margin 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
