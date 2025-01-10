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
      <Script id="vTurb-player-init" strategy="afterInteractive">
      {`
        document.addEventListener("DOMContentLoaded", function() {
          console.log('DOMContentLoaded - Initializing vTurb player');
          
          const playerContainer = document.getElementById('smartplayer-ee23f5b0-45e7-4e27-a038-209fb03d31cc');
          if (!playerContainer) {
            console.error('vTurb player container not found');
            return;
          }
          console.log('vTurb player container found:', playerContainer);
          
          // Add loading overlay
          const loadingOverlay = document.createElement('div');
          loadingOverlay.className = 'loading-overlay';
          loadingOverlay.innerHTML = `
            <div class="loading-spinner"></div>
            <p>Loading video player...</p>
          `;
          playerContainer.appendChild(loadingOverlay);

          // Ensure container has dimensions
          playerContainer.style.width = '100%';
          playerContainer.style.height = '100%';
          playerContainer.style.position = 'absolute';
          playerContainer.style.top = '0';
          playerContainer.style.left = '0';

          // Load vTurb player script
          const script = document.createElement('script');
          script.src = 'https://scripts.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/656a1302a316f8000993422b/player.js';
          script.async = true;
          
          script.onload = function() {
            console.log('vTurb player script loaded');
            try {
              const thumbnail = document.getElementById('thumb_player');
              if (thumbnail) {
                thumbnail.style.display = 'none';
              }
              
              // Initialize vTurb player with retry logic
              let attempts = 0;
              const maxAttempts = 10;
              
              const initPlayer = setInterval(() => {
                if (typeof smartplayer !== 'undefined') {
                  clearInterval(initPlayer);
                  console.log('vTurb library loaded, initializing...');
                  try {
                    const player = new smartplayer({
                      container: 'smartplayer-ee23f5b0-45e7-4e27-a038-209fb03d31cc',
                      url: 'https://videos.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/playlist.m3u8',
                      poster: 'https://images.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/656a1302a316f8000993422b/thumbnail.jpg',
                      autoplay: true,
                      controls: false, // vTurb typically hides controls
                      width: '100%',
                      height: '100%',
                      vTurb: true, // Enable vTurb mode
                      vTurbConfig: {
                        autoNext: true,
                        showProgress: true,
                        showTime: true
                      }
                    });
                    
                    player.on('ready', () => {
                      console.log('vTurb player is ready');
                      playerContainer.style.backgroundColor = 'transparent';
                      // Remove loading overlay
                      const loadingOverlay = playerContainer.querySelector('.loading-overlay');
                      if (loadingOverlay) {
                        loadingOverlay.remove();
                      }
                      
                      // vTurb specific event handling
                      player.on('vTurbStart', () => {
                        console.log('vTurb sequence started');
                      });
                      
                      player.on('vTurbEnd', () => {
                        console.log('vTurb sequence ended');
                        // Show CTA when vTurb sequence ends
                        const ctaButton = document.querySelector('.cta-button');
                        if (ctaButton) {
                          ctaButton.style.display = 'block';
                          ctaButton.classList.add('active');
                        }
                      });
                    });
                    
                    player.on('error', (error) => {
                      console.error('vTurb player error:', error);
                    });
                    
                  } catch (e) {
                    console.error('vTurb initialization error:', e);
                  }
                } else if (attempts >= maxAttempts) {
                  clearInterval(initPlayer);
                  console.error('vTurb library not loaded after max attempts');
                } else {
                  attempts++;
                }
              }, 500);
            } catch (e) {
              console.error('vTurb player script load error:', e);
            }
          };
          
          script.onerror = function() {
            console.error('Failed to load vTurb player script');
          };
          
          document.body.appendChild(script);
        });
      `}
      </Script>
      <Script id="vTurb-cta-logic" strategy="afterInteractive">
      {`
        document.addEventListener("DOMContentLoaded", function () {
          const ctaButton = document.querySelector(".cta-button");
          
          // vTurb handles CTA display through its own events
          // We'll show the CTA when the vTurb sequence ends
          // as defined in the player initialization script
          
          // Check if we should show CTA immediately
          const alreadyDisplayed = localStorage.getItem('vTurbCTADisplayed');
          if (alreadyDisplayed === 'true' && ctaButton) {
            ctaButton.style.display = 'block';
            ctaButton.classList.add('active');
          }
        });
      `}
      </Script>
    </>
  )
}

export default MyApp
