
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  class FeedbackCounter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      // Retrieve the blog-id and endpoint attributes (with defaults)
      this.blogId = this.getAttribute("blog-id") || "blog-1";
      this.endpoint =
        this.getAttribute("endpoint") ||
        "https://likecounter-young-mouse-f484.madebydannyuk.workers.dev";
      
      // Render the one-line widget and then load the current counts.
      this.render();
      this.loadCounts();
    }
  
    render() {
      // Render the widget inside the shadow DOM using inline-flex for one-line layout.
      // All text and icons are set to white.
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        	<link rel="stylesheet" type="text/css" href="./assets/styles/style.css">
        <style>
          .container {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-family: sans-serif;
            color: var(--foreground);
          }
          button {
            font-size: 1em;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--foreground);
            padding: 0;
          }
          button:focus {
            outline: none;
          }
        </style>
        <div class="container">
          <span><strong>Feedback:</strong></span>
          <button id="likeBtn">
            <i class="fa-solid fa-thumbs-up" style="color: #FFD43B;"></i> <span id="likeCount">0</span>
          </button>
          <button id="loveBtn">
            <i class="fa-solid fa-heart" style="color: #ff8787;"></i> <span id="loveCount">0</span>
          </button>
          <button id="dislikeBtn">
            <i class="fa-solid fa-thumbs-down" style="color: #74C0FC;"></i> <span id="dislikeCount">0</span>
          </button>
        </div>
      `;
      
      // Attach event listeners for each button.
      this.shadowRoot
        .getElementById("likeBtn")
        .addEventListener("click", () => this.vote("like"));
      this.shadowRoot
        .getElementById("loveBtn")
        .addEventListener("click", () => this.vote("love"));
      this.shadowRoot
        .getElementById("dislikeBtn")
        .addEventListener("click", () => this.vote("dislike"));
    }
    
    async loadCounts() {
      try {
        // Request a JSON response so our Worker returns counts.
        const res = await fetch(`${this.endpoint}/${this.blogId}`, {
          headers: { "Accept": "application/json" }
        });
        if (res.ok) {
          const data = await res.json();
          this.updateCount("like", data.like);
          this.updateCount("love", data.love);
          this.updateCount("dislike", data.dislike);
        } else {
          console.error("Failed to load counts from", this.endpoint);
        }
      } catch (err) {
        console.error("Error loading counts:", err);
      }
    }
  
    async vote(action) {
      try {
        const res = await fetch(`${this.endpoint}/${this.blogId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action })
        });
        if (res.ok) {
          const data = await res.json();
          if (data[action] !== undefined) {
            this.updateCount(action, data[action]);
          }
        } else {
          console.error("Failed to post vote. Status:", res.status);
        }
      } catch (err) {
        console.error("Error posting vote:", err);
      }
    }
  
    updateCount(action, count) {
      const elem = this.shadowRoot.getElementById(`${action}Count`);
      if (elem) {
        elem.textContent = count;
      }
    }
  }
  
  customElements.define("feedback-counter", FeedbackCounter);
 // Define one custom element for all blog posts.
 class ViewsBlog extends HTMLElement {
  connectedCallback() {
    // Read the blog number from the element attribute "blog-number"
    const blogNumber = this.getAttribute('blog-number');
    if (!blogNumber) {
      this.innerHTML = '<p>Error: no blog number provided.</p>';
      return;
    }
    
    // Construct the URL using the blog number.
    const workerUrl = `https://view-counter-snowy-bar-1106.madebydannyuk.workers.dev/blog-${blogNumber}`;
    
    // Fetch the view count from the Cloudflare Worker.
    fetch(workerUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then(text => {
        // Display the response inside a <p> element.
        this.innerHTML = `<p>${text}</p>`;
      })
      .catch(error => {
        console.error('Error fetching view count for blog', blogNumber, ':', error);
        this.innerHTML = '<p>Error loading view count.</p>';
      });
  }
}

// Register the custom element only once.
if (!customElements.get('views-blog')) {
  customElements.define('views-blog', ViewsBlog);
}

document.addEventListener("DOMContentLoaded", () => {
  // Select the <nav-bar> element
  const navBarEl = document.querySelector("nav-bar");

  // Define your HTML snippet as a template string
  const headerHTML = `
    <header class="container__">
      <h1 class="__header-title">
        <a href="/index.html">Danny's Blog</a>
      </h1>
      <nav class="__header-nav">
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/assets/html/about.html">About</a></li>
          <li><a href="/assets/html/posts.html">Posts</a></li>
          <li>
            <a href="https://danielmorrisey.start.page">
              <i class="fa-brands fa-buffer"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/therealfuntimeswithdanny">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://bsky.app/profile/madebydanny.uk">
              <i class="fa-brands fa-bluesky"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `;

  // If the <nav-bar> element exists, inject the HTML into it
  if (navBarEl) {
    navBarEl.innerHTML = headerHTML;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the <nav-bar> element
  const navBarEl = document.querySelector("footer-bar");

  // Define your HTML snippet as a template string
  const headerHTML = `
		<div id="notice">
			Design by: <a href="https://github.com/westtle/simple-blog-template" target="_blank">westtle on Github</a>
		</div>
	</main>
	<footer>
		<p class="__footer-copyright">&copy; 2025-2029 Made by Danny, <i>A Funtimes Media Company</i></p>
	</footer>
  `;

  // If the <nav-bar> element exists, inject the HTML into it
  if (navBarEl) {
    navBarEl.innerHTML = headerHTML;
  }
});