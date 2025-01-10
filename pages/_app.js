import '../styles/globals.css'
import { Component } from 'react'
import Script from 'next/script'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // You can log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p>Please try refreshing the page</p>
          <details style={{ marginTop: '1rem' }}>
            <summary>Error details</summary>
            <pre style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>
              {this.state.error.toString()}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <Script src="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" strategy="afterInteractive" />
      <Script id="smartplayer-init" strategy="afterInteractive">
      {`
        document.addEventListener("DOMContentLoaded", function() {
          const videoContainer = document.getElementById('vid_player');
          if (videoContainer) {
            // Initialize Smartplayer
            const playerDiv = document.createElement('div');
            playerDiv.id = 'smartplayer-ee23f5b0-45e7-4e27-a038-209fb03d31cc';
            videoContainer.appendChild(playerDiv);
            
            // Load player script
            const script = document.createElement('script');
            script.src = 'https://scripts.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/656a1302a316f8000993422b/player.js';
            script.async = true;
            document.body.appendChild(script);
            
            // Show video when ready
            script.onload = function() {
              const thumbnail = document.getElementById('thumb_player');
              if (thumbnail) {
                thumbnail.style.display = 'none';
              }
            };
          }
        });
      `}
      </Script>
      <Script id="video-cta-logic" strategy="afterInteractive">
      {`
        document.addEventListener("DOMContentLoaded", function () {
          const SECONDS_TO_DISPLAY = 30;
          const ctaButton = document.querySelector(".cta-button");
          const alreadyDisplayed = localStorage.getItem(\`ctaDisplayed\${SECONDS_TO_DISPLAY}\`);
          let attempts = 0;
          const maxAttempts = 10;

          function showCTA() {
            if (ctaButton) {
              ctaButton.style.display = 'block'; // Make visible
              ctaButton.classList.add('active');
              localStorage.setItem(\`ctaDisplayed\${SECONDS_TO_DISPLAY}\`, 'true');
            }
          }

          function watchVideoProgress() {
            if (typeof smartplayer === 'undefined' || !smartplayer.instances.length) {
              if (attempts >= maxAttempts) return;
              attempts++;
              setTimeout(watchVideoProgress, 1000);
              return;
            }

            const player = smartplayer.instances[0];
            player.on('timeupdate', function () {
              if (ctaButton.classList.contains('active') || player.smartAutoPlay) return;
              if (player.video.currentTime >= SECONDS_TO_DISPLAY) {
                showCTA();
              }
            });
          }

          if (alreadyDisplayed === 'true') {
            showCTA();
          } else {
            watchVideoProgress();
          }
        });
      `}
      </Script>
    </>
  )
}

export default MyApp
