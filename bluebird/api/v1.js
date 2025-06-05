/* ===================
       SIMPLE VERSION
       =================== */
    class BlueBirdLinkSimple extends HTMLElement {
      constructor() {
        super();
        const videoSrc = this.getAttribute('src') || '';
        const sizeAttr = this.getAttribute('size') || 'norm';
        const sizes = { big: '1080px', norm: '720px', small: '480px' };
        const sizeValue = sizes[sizeAttr] || sizes['norm'];
  
        this.innerHTML = `
          <style>
            .video-wrapper {
              display: block;
              max-width: ${sizeValue};
              margin: 20px auto;
            }
            .video-container {
              position: relative;
              background: #000;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
            video {
              display: block;
              width: 100%;
            }
            .controls {
              position: absolute;
              bottom: 10px;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              gap: 20px;
              opacity: 0;
              transition: opacity 0.3s ease;
              background: rgba(0,0,0,0.6);
              padding: 5px 10px;
              border-radius: 5px;
            }
            .video-container:hover .controls {
              opacity: 1;
            }
            .controls button {
              background: none;
              border: none;
              color: #fff;
              font-size: 18px;
              cursor: pointer;
              transition: color 0.2s;
            }
            .controls button:hover {
              color: #f00;
            }
            /* Custom Context Menu */
            .custom-context-menu {
              position: absolute;
              display: none;
              background: #fff;
              border: 1px solid #ccc;
              border-radius: 5px;
              padding: 10px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              z-index: 100;
              font-size: 14px;
              white-space: nowrap;
            }
            .custom-context-menu p {
              margin: 0 0 10px;
              color: #333;
            }
            .custom-context-menu .learn-more {
              background: #007BFF;
              color: #fff;
              border: none;
              padding: 5px 10px;
              border-radius: 3px;
              cursor: pointer;
            }
            .custom-context-menu .learn-more:hover {
              background: #0056b3;
            }
          </style>
          <div class="video-wrapper">
            <div class="video-container">
              <video id="video" src="${videoSrc}"></video>
              <div class="controls">
                <button id="rewind" title="Rewind 5 seconds">
                  <i class="fa-solid fa-rotate-left"></i> 5
                </button>
                <button id="playPause" title="Play/Pause">
                  <i class="fa-solid fa-play"></i>
                </button>
                <button id="forward" title="Forward 5 seconds">
                  5 <i class="fa-solid fa-rotate-right"></i>
                </button>
              </div>
              <!-- Custom Right-Click Context Menu -->
              <div class="custom-context-menu" id="custom-context-menu">
                <p>Blue Bird Video Player Simple Version</p>
                <button class="learn-more" onclick="window.location.href='docs.html'">Learn More</button>
              </div>
            </div>
          </div>
        `;
      }
  
      connectedCallback() {
        const video = this.querySelector('#video');
        const playPauseBtn = this.querySelector('#playPause');
        const rewindBtn = this.querySelector('#rewind');
        const forwardBtn = this.querySelector('#forward');
        const container = this.querySelector('.video-container');
        const contextMenu = this.querySelector('.custom-context-menu');
  
        playPauseBtn.addEventListener('click', () => {
          if (video.paused || video.ended) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
          } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          }
        });
        rewindBtn.addEventListener('click', () => {
          video.currentTime = Math.max(video.currentTime - 5, 0);
        });
        forwardBtn.addEventListener('click', () => {
          video.currentTime = Math.min(video.currentTime + 5, video.duration);
        });
        video.addEventListener('ended', () => {
          playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        });
  
        // Prevent default right-click menu & show custom one
        container.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          // Position the custom menu based on mouse position relative to container
          const rect = container.getBoundingClientRect();
          contextMenu.style.left = (e.clientX - rect.left) + "px";
          contextMenu.style.top = (e.clientY - rect.top) + "px";
          contextMenu.style.display = "block";
        });
        // Hide custom menu on clicking outside
        document.addEventListener('click', () => {
          contextMenu.style.display = "none";
        });
        // Prevent clicks inside the custom menu from bubbling up
        contextMenu.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }
    }
    customElements.define('blue-bird-link-simple', BlueBirdLinkSimple);
    
    /* ===================
       ADVANCED VERSION
       =================== */
    class BlueBirdLinkAdvanced extends HTMLElement {
      constructor() {
        super();
        const videoSrc = this.getAttribute('src') || '';
        const sizeAttr = this.getAttribute('size') || 'norm';
        const sizes = { big: '1080px', norm: '720px', small: '480px' };
        const sizeValue = sizes[sizeAttr] || sizes['norm'];
  
        this.innerHTML = `
          <style>
            .video-wrapper {
              display: block;
              max-width: ${sizeValue};
              margin: 20px auto;
            }
            .video-container {
              position: relative;
              background: #000;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
            video {
              display: block;
              width: 100%;
            }
            /* Progress Bar */
            .progress {
              position: absolute;
              bottom: 50px;
              left: 0;
              width: 100%;
              height: 5px;
              background: #444;
              cursor: pointer;
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            .progress-filled {
              width: 0%;
              height: 100%;
              background: #f00;
              transition: width 0.1s linear;
            }
            .controls {
              position: absolute;
              bottom: 10px;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              gap: 15px;
              opacity: 0;
              transition: opacity 0.3s ease;
              background: rgba(0,0,0,0.6);
              padding: 5px 10px;
              border-radius: 5px;
            }
            .video-container:hover .controls,
            .video-container:hover .progress {
              opacity: 1;
            }
            .controls button {
              background: none;
              border: none;
              color: #fff;
              font-size: 18px;
              cursor: pointer;
              transition: color 0.2s;
            }
            .controls button:hover {
              color: #f00;
            }
            /* Custom Context Menu */
            .custom-context-menu {
              position: absolute;
              display: none;
              background: #fff;
              border: 1px solid #ccc;
              border-radius: 5px;
              padding: 10px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              z-index: 100;
              font-size: 14px;
              white-space: nowrap;
            }
            .custom-context-menu p {
              margin: 0 0 10px;
              color: #333;
            }
            .custom-context-menu .learn-more {
              background: #007BFF;
              color: #fff;
              border: none;
              padding: 5px 10px;
              border-radius: 3px;
              cursor: pointer;
            }
            .custom-context-menu .learn-more:hover {
              background: #0056b3;
            }
          </style>
          <div class="video-wrapper">
            <div class="video-container">
              <video id="video" src="${videoSrc}"></video>
              <!-- Progress Bar -->
              <div class="progress" id="progress">
                <div class="progress-filled" id="progress-filled"></div>
              </div>
              <div class="controls">
                <button id="rewind" title="Rewind 5 seconds">
                  <i class="fa-solid fa-rotate-left"></i> 5
                </button>
                <button id="playPause" title="Play/Pause">
                  <i class="fa-solid fa-play"></i>
                </button>
                <button id="forward" title="Forward 5 seconds">
                  5 <i class="fa-solid fa-rotate-right"></i>
                </button>
                <button id="mute" title="Mute/Unmute">
                  <i class="fa-solid fa-volume-high"></i>
                </button>
                <button id="fullscreen" title="Fullscreen">
                  <i class="fa-solid fa-expand"></i>
                </button>
              </div>
              <!-- Custom Right-Click Context Menu -->
              <div class="custom-context-menu" id="custom-context-menu">
                <p>Powered by Blue Bird</p>
                <button class="learn-more" onclick="window.location.href='https://madebydanny.uk/bluebird.html'">Learn More</button>
              </div>
            </div>
          </div>
        `;
      }
  
      connectedCallback() {
        const video = this.querySelector('#video');
        const playPauseBtn = this.querySelector('#playPause');
        const rewindBtn = this.querySelector('#rewind');
        const forwardBtn = this.querySelector('#forward');
        const muteBtn = this.querySelector('#mute');
        const fullscreenBtn = this.querySelector('#fullscreen');
        const progress = this.querySelector('#progress');
        const progressFilled = this.querySelector('#progress-filled');
        const container = this.querySelector('.video-container');
        const contextMenu = this.querySelector('.custom-context-menu');
  
        playPauseBtn.addEventListener('click', () => {
          if (video.paused || video.ended) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
          } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          }
        });
        rewindBtn.addEventListener('click', () => {
          video.currentTime = Math.max(video.currentTime - 5, 0);
        });
        forwardBtn.addEventListener('click', () => {
          video.currentTime = Math.min(video.currentTime + 5, video.duration);
        });
        muteBtn.addEventListener('click', () => {
          video.muted = !video.muted;
          muteBtn.innerHTML = video.muted 
            ? '<i class="fa-solid fa-volume-mute"></i>' 
            : '<i class="fa-solid fa-volume-high"></i>';
        });
        fullscreenBtn.addEventListener('click', () => {
          if (!document.fullscreenElement) {
            container.requestFullscreen();
            fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
          } else {
            document.exitFullscreen();
            fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
          }
        });
        video.addEventListener('timeupdate', () => {
          const percent = (video.currentTime / video.duration) * 100;
          progressFilled.style.width = percent + '%';
        });
        progress.addEventListener('click', (e) => {
          const rect = progress.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const newTime = (clickX / rect.width) * video.duration;
          video.currentTime = newTime;
        });
        video.addEventListener('ended', () => {
          playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        });
  
        // Custom context menu for advanced version
        container.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          const rect = container.getBoundingClientRect();
          contextMenu.style.left = (e.clientX - rect.left) + "px";
          contextMenu.style.top = (e.clientY - rect.top) + "px";
          contextMenu.style.display = "block";
        });
        document.addEventListener('click', () => {
          contextMenu.style.display = "none";
        });
        contextMenu.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }
    }
    customElements.define('blue-bird-link-advanced', BlueBirdLinkAdvanced);