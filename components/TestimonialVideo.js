import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Create a client-side only wrapper to avoid hydration issues
const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function TestimonialVideo() {
  const videoId = "67cdac39072c3fc40e3f9f4b";
  const scriptRef = useRef(null);

  useEffect(() => {
    // Wait for DOM to be fully ready before injecting scripts
    const initializePlayer = () => {
      // Load the video player script
      const script = document.createElement('script');
      script.src = `https://scripts.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/player.js`;
      script.async = true;
      script.id = `scr_${videoId}`;
      document.head.appendChild(script);
      
      scriptRef.current = script;
    };

    // Initialize player with a slight delay to ensure DOM is ready
    const initTimer = setTimeout(initializePlayer, 100);

    return () => {
      // Clean up
      if (scriptRef.current) {
        try {
          document.head.removeChild(scriptRef.current);
        } catch (e) {
          // Silently handle errors
        }
      }
      
      // Clear timer
      clearTimeout(initTimer);
    };
  }, []);

  // The simplest possible implementation - just a div with an ID
  // The script will replace this with the video player
  return (
    <ClientSideOnly>
      <div id={`vid_${videoId}`} style={{width: '100%', position: 'relative'}}>
        <img 
          id={`thumb_${videoId}`} 
          src={`https://images.converteai.net/0b62a3c4-d373-4d44-b808-36e366f23f00/players/${videoId}/thumbnail.jpg`} 
          style={{width: '100%'}} 
          alt="Testimonial video thumbnail" 
        />
        <div id={`backdrop_${videoId}`} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></div>
      </div>
    </ClientSideOnly>
  );
} 