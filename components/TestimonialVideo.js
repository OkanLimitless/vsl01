import React, { useEffect } from 'react';

export default function TestimonialVideo() {
  const videoId = "67cdac39072c3fc40e3f9f4b";

  useEffect(() => {
    // Load the video player script
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="testimonial-video-wrapper">
      <div id={`vid_${videoId}`} style={{position: 'relative', width: '100%', padding: '56.25% 0 0'}}>
        <img 
          id={`thumb_${videoId}`} 
          src={`https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/thumbnail.jpg`}
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
          alt="Testimonial Video Thumbnail"
        />
        <div 
          id={`backdrop_${videoId}`} 
          style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}
        ></div>
      </div>

      <style jsx>{`
        .testimonial-video-wrapper {
          width: 100%;
          max-width: 800px;
          margin: 20px auto;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
} 