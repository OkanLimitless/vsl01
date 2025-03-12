import React from 'react';
import dynamic from 'next/dynamic';

// Create a client-side only wrapper to avoid hydration issues
const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default function TestimonialVideo() {
  // Using direct MP4 video instead of the vturb player to avoid conflicts
  return (
    <ClientSideOnly>
      <div className="testimonial-video-container">
        <video 
          controls
          preload="metadata"
          poster="/images/reviewvidthumbnail.png"
          style={{
            width: '100%',
            maxWidth: '100%',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <source 
            src="https://dalrnrpokeqkc.cloudfront.net/0b62a3c4-d373-4d44-b808-36e366f23f00/67cdac2d59e75be524042576/original.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </ClientSideOnly>
  );
} 