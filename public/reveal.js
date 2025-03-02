// Script to handle video reveal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Function to reveal all hidden product sections
  function revealProducts() {
    console.log('Revealing product sections');
    const productContainer = document.querySelector('.product-reveal-container');
    if (productContainer) {
      productContainer.style.display = 'flex';
    }
  }
  
  // Function to check if smartplayer is loaded
  function checkSmartPlayer() {
    if (window.smartplayer && window.smartplayer.instances && window.smartplayer.instances.length > 0) {
      const player = window.smartplayer.instances[0];
      
      // Listen for video end event
      player.on('ended', function() {
        console.log('Video ended, revealing products');
        revealProducts();
      });
      
      // Also listen for play event to confirm player is working
      player.on('play', function() {
        console.log('Video started playing');
      });
      
      // Also show after a certain time (fallback)
      setTimeout(function() {
        console.log('Timeout reached, revealing products');
        revealProducts();
      }, 180000); // 3 minutes
    } else {
      setTimeout(checkSmartPlayer, 1000);
    }
  }
  
  // Start checking for smartplayer
  setTimeout(checkSmartPlayer, 2000);
  
  // Function to move CTA
  function moveCTA(container) {
    const cta = container.querySelector(".smartplay + .smartplayer-call-action");
    
    if (!cta) return;
    
    container.parentNode.insertBefore(cta, container.nextSibling);
  }
  
  // Function to insert before player
  function insertBeforePlayer(instance, prefix) {
    if(!instance) return;
    
    const player = instance.mobileContainer || instance.container;
    
    const container = document.createElement("div");
    
    container.id = `${prefix}-${instance.options.id}`;
    container.classList.add(prefix);
    
    player.parentNode.insertBefore(container, player);
    
    container.appendChild(player);
    
    return container;
  }
  
  // Function to mount containers
  function mountContainers() {
    const instances = window.smartplayer.instances;
    
    instances.forEach(instance => {
      const container = insertBeforePlayer(instance, `player-fake-fs`);
      
      if(!container) return;
      
      moveCTA(container);
      
      let firstClick = instance.resume?.inResume === undefined;
    });
    
    instances.forEach(instance => insertBeforePlayer(instance, `player-auto-height`));
  }
  
  // Function to mount styles
  function mountStyles() {
    const styles = document.createElement("style");
    
    styles.innerHTML = `
      .player-fake-fs[data-fullscreen='true'] {
        display: flex !important;
        align-items: center !important;
        background-color: #000 !important;
        height: 100vh !important;
        width: 100vw !important;
        cursor: pointer;
      }
      
      .player-fake-fs[data-fullscreen='true'] .player-auto-height .smartplayer-mobile-container {
        max-width: 100% !important;
      }
      
      .player-fake-fs[data-fullscreen='false'] .player-auto-height {
        width: 100% !important;
      }
      
      .player-fake-fs[data-fullscreen='false'] {
        margin-left: 0 !important;
      }
      
      .player-auto-height {
        margin: 0 auto;
        width: 100%;
      }
    `;
    
    document.head.appendChild(styles);
  }
  
  // Function to adjust X position for fullscreen
  function adjustXPositionFs() {
    const currentFs = document.querySelectorAll(".player-fake-fs[data-fullscreen='true']");
    
    currentFs.forEach(container => {
      container.style.marginLeft = "0";
      
      const position = container.getBoundingClientRect();
      
      if(position.left <= 0) return;
      
      container.style.marginLeft = `-${position.left}px`;
    });
  }
  
  // Function to change width by height
  function changeWidthByHeight() {
    const containers = document.querySelectorAll(".player-auto-height");
    
    containers.forEach(container => {
      const video = container.querySelector("video");
      
      if (!video) return;
      
      const aspectRatio = video.clientWidth / video.clientHeight;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      if (windowWidth / windowHeight > aspectRatio) {
        container.style.width = `${windowHeight * aspectRatio}px`;
      } else {
        container.style.width = "100%";
      }
    });
  }
  
  // Function to toggle fullscreen
  function toggleFs(id, isFullscreen) {
    const container = document.querySelector(`#player-fake-fs-${id}`);
    
    if (!container) return;
    
    container.setAttribute('data-fullscreen', isFullscreen);
    
    if (!isFullscreen) {
      window.removeEventListener("resize", changeWidthByHeight);
      return;
    }
    
    window.addEventListener("resize", changeWidthByHeight);
    changeWidthByHeight();
    adjustXPositionFs();
  }
  
  // Function to mount fake fullscreen events
  function mountFakeFsEvents() {
    const instances = window.smartplayer.instances;
    
    window.addEventListener("resize", adjustXPositionFs);
    
    instances.forEach(instance => {
      instance.on("play", () => toggleFs(instance.options.id, true));
      
      instance.on("pause", () => toggleFs(instance.options.id, false));
    });
  }
  
  // Function to set up custom events
  function customEvents() {
    mountContainers();
    mountStyles();
    mountFakeFsEvents();
  }
  
  // Function to check if player is loaded
  function checkPlayerLoaded() {
    if (window.smartplayer && window.smartplayer.instances) return customEvents();
    
    return setTimeout(checkPlayerLoaded, 100);
  }
  
  // Start checking if player is loaded
  setTimeout(checkPlayerLoaded, 100);
}); 