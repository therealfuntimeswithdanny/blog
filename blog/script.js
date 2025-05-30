document.addEventListener("DOMContentLoaded", () => {
  // Select the <nav-bar> element
  const navBarEl = document.querySelector("side-bar");

  // Define your HTML snippet as a template string
  const headerHTML = `
   <!-- Introduction menu -->
<div class="w3-col l4">
<status></status>
  <!-- About Card -->
  <div class="w3-card w3-margin w3-margin-top">
    <div class="w3-container w3-white">
      <h4><b>Danny Morrisey, <i class="fa-regular fa-hand-peace"></i></b></h4>
      <p>Hi I'm Danny Morrisey A self taught Front End Web Developer, OG Raft player since 2022 & Head of Development @ Funtimes Media <i class="fa-regular fa-hand-point-down"></i><br><a href="https://corp.madebydanny.uk">Funtimes Media - Company Website</a></p>
    </div>
  </div><hr>
  
  <!-- Posts -->
  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4><i class="fa-regular fa-star"></i> Top Posts</h4>
    </div>
    <ul class="w3-ul w3-hoverable w3-white">
      <li class="w3-padding-16">
        <img src="img/apple-brands-solid.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">The iPhone 14, Three Years later</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="iphone-14.html">Read More</a></span>
      </li>
      <li class="w3-padding-16">
        <img src="img/bluesky-brands.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Bluesky Adds new a form of Verification</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="bluesky-verification.html">Read More</a></span>
      </li> 
      <li class="w3-padding-16">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2CmLBr7ObpwYH1ii9yYseVqGLDyFMzTbcTGUZ36vnhq3HgSB-E74D9cRe7YO0MsLKwXnu" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Raft</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="raft.html">Read More</a></span>
      </li>    
    </ul>
  </div>
  <hr> 

    <!-- Posts -->
  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4><i class="fa-regular fa-newspaper"></i> News/Updates</h4>
    </div>
    <ul class="w3-ul w3-hoverable w3-white">
    <li class="w3-padding-16">
        <img src="img/buffer-brands.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">16 Weeks of Buffer!</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="https://bsky.app/profile/madebydanny.uk/post/3lq3nxzj57222">View Post</a></span>
      </li>
      <li class="w3-padding-16">
        <img src="img/bluesky-brands.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">@madebydanny.uk Makes it to 80 Followers</span><br>
      </li>
      <li class="w3-padding-16">
        <span class="w3-large">Version 10.0 is here</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="/updates/10.0.html">Read More</a></span>
      </li> 
      <li class="w3-padding-16">
        <img src="img/share-from-square-regular.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Sharing Just got Better</span><br>
        <span>You can now Share post using Buffer & Bluesky!</span>
      </li>
    </ul>
  </div>
  <hr> 
<!-- END Introduction Menu -->
</div>

  `;

  // If the <nav-bar> element exists, inject the HTML into it
  if (navBarEl) {
    navBarEl.innerHTML = headerHTML;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the <nav-bar> element
  const navBarEl = document.querySelector("footer-blank");

  // Define your HTML snippet as a template string
  const headerHTML = `
  <!-- Footer -->
<footer class="w3-container w3-red w3-padding-32 w3-margin-top">
  <button class="w3-button w3-white w3-padding-large w3-margin-bottom"><i class="fa-regular fa-hand-point-left"></i> <a href="index.html">Home</a></button>
  <button class="w3-button w3-white w3-padding-large w3-margin-bottom"><i class="fa-regular fa-hand-point-up"></i> <a href="#">Top</a></button>
  <p>&copy; 2024-2029 Made by Danny UK, <i>A <a href="https://corp.madebydanny.uk">Funtimes Media</a> Company </i>/ Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a><br>
  Built with <i class="fa-regular fa-heart"></i> & <i class="fa-regular fa-hand-peace"></i> by <a href="https://madebydanny.uk">Daniel Morrisey</a>, Secured by <a href="https://www.cloudflare.com/case-studies/">Cloudflare</a> / <a href="https://status.madebydanny.uk">Site Status</a> / <a href="/tos.html">TOS</a><br>Get updates, news, announcements and more on <a href="https://bsky.app/profile/madebydanny.uk">our Bluesky</a><br>
  <a href="/rss"><i class="fa-solid fa-rss"></i></a> / <a href="/startpage"><i class="fa-brands fa-buffer"></i></a> / <a href="https://bsky.app/profile/madebydanny.uk"><i class="fa-brands fa-bluesky"></i></a> / <a href="https://github.com/therealfuntimeswithdanny"><i class="fa-brands fa-github"></i></a></p>
  <info></info>
</footer>
  `;

  // If the <nav-bar> element exists, inject the HTML into it
  if (navBarEl) {
    navBarEl.innerHTML = headerHTML;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the <nav-bar> element
  const navBarEl = document.querySelector("comments");

  // Define your HTML snippet as a template string
  const headerHTML = `
            <h6><a href="#comments"><i class="fa-regular fa-comment"></i> Jump To Comments</a></h6>
  `;

  // If the <nav-bar> element exists, inject the HTML into it
  if (navBarEl) {
    navBarEl.innerHTML = headerHTML;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the <nav-bar> element
  const navBarEl = document.querySelector("header");

  // Define your HTML snippet as a template string
  const headerHTML = `
<header class="w3-container w3-center w3-padding-32"> 
  <h1><b><i class="fa-regular fa-hand-peace"></i></b></h1>
  <p><span class="w3-tag">Danny Morrisey</span></p>
</header>
  `;

  // If the <nav-bar> element exists, inject the HTML into it
  if (navBarEl) {
    navBarEl.innerHTML = headerHTML;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the <nav-bar> element
  const navBarEl = document.querySelector("info");

  // Define your HTML snippet as a template string
  const headerHTML = `
<p>Version 10.2.1 Stable, <a href="https://bsky.app/profile/madebydanny.uk/post/3lqfbgnxxbs2r">View Update Notes</a></p>
  `;

  // If the <nav-bar> element exists, inject the HTML into it
  if (navBarEl) {
    navBarEl.innerHTML = headerHTML;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the <nav-bar> element
  const navBarEl = document.querySelector("status");

  // Define your HTML snippet as a template string
  const headerHTML = `
    <!-- About Card -->
  <div class="w3-card w3-margin w3-margin-top">
    <div class="w3-container w3-white w3-text-black">
      <h4><b>All systems are looking Good!</b></h4>
    </div>
  </div><hr>
  `;

  // If the <nav-bar> element exists, inject the HTML into it
  if (navBarEl) {
    navBarEl.innerHTML = headerHTML;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the <nav-bar> element
  const navBarEl = document.querySelector("footer-home");

  // Define your HTML snippet as a template string
  const headerHTML = `
     <!-- Footer -->
<footer class="w3-container w3-red w3-padding-32 w3-margin-top">
  <button class="w3-button w3-white w3-disabled w3-padding-large w3-margin-bottom"><i class="fa-regular fa-hand-point-left"></i> Previous</button>
  <button class="w3-button w3-white w3-padding-large w3-margin-bottom"><i class="fa-regular fa-hand-point-up"></i> <a href="#">Top</a></button>
  <button class="w3-button w3-white w3-padding-large w3-margin-bottom"><a href="page/2.html">Next</a> <i class="fa-regular fa-hand-point-right"></i></button>
  <p>&copy; 2024-2029 Made by Danny UK, <i>A <a href="https://corp.madebydanny.uk">Funtimes Media</a> Company </i>/ Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a><br>
  Built with <i class="fa-regular fa-heart"></i> & <i class="fa-regular fa-hand-peace"></i> by <a href="https://madebydanny.uk">Daniel Morrisey</a>, Secured by <a href="https://www.cloudflare.com/case-studies/">Cloudflare</a> / <a href="https://status.madebydanny.uk">Site Status</a> / <a href="/tos.html">TOS</a><br>Get updates, news, announcements and more on <a href="https://bsky.app/profile/madebydanny.uk">our Bluesky</a><br>
  <a href="/rss"><i class="fa-solid fa-rss"></i></a> / <a href="/startpage"><i class="fa-brands fa-buffer"></i></a> / <a href="https://bsky.app/profile/madebydanny.uk"><i class="fa-brands fa-bluesky"></i></a> / <a href="https://github.com/therealfuntimeswithdanny"><i class="fa-brands fa-github"></i></a></p>
  <info></info>
</footer>
  `;

  // If the <nav-bar> element exists, inject the HTML into it
  if (navBarEl) {
    navBarEl.innerHTML = headerHTML;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the <nav-bar> element
  const navBarEl = document.querySelector("side");

  // Define your HTML snippet as a template string
  const headerHTML = `
   <!-- Introduction menu -->
<div class="w3-col l4">
<status></status>
  <!-- About Card -->
  <div class="w3-card w3-margin w3-margin-top">
    <div class="w3-container w3-white">
      <h4><b>Danny Morrisey, <i class="fa-regular fa-hand-peace"></i></b></h4>
      <p>Hi I'm Danny Morrisey A self taught Front End Web Developer, OG Raft player since 2022 & Head of Development @ Funtimes Media <i class="fa-regular fa-hand-point-down"></i><br><a href="https://corp.madebydanny.uk">Funtimes Media - Company Website</a></p>
    </div>
  </div><hr>

  <!-- Posts -->
  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4><i class="fa-regular fa-clock"></i> Newest Posts</h4>
    </div>
    <ul class="w3-ul w3-hoverable w3-white">
      <li class="w3-padding-16">
        <img src="img/bluesky-brands.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">How to Bluesky</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="how-to-bluesky.html">Read More</a></span>
      </li> 
      <li class="w3-padding-16">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2CmLBr7ObpwYH1ii9yYseVqGLDyFMzTbcTGUZ36vnhq3HgSB-E74D9cRe7YO0MsLKwXnu" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Raft</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="raft.html">Read More</a></span>
      </li>   
      <li class="w3-padding-16">
        <img src="img/apple-brands-solid.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">The iPhone 14, Three Years later</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="iphone-14.html">Read More</a></span>
      </li> 
    </ul>
  </div>
  <hr> 

  <!-- Posts -->
  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4><i class="fa-regular fa-star"></i> Top Posts</h4>
    </div>
    <ul class="w3-ul w3-hoverable w3-white">
      <li class="w3-padding-16">
        <img src="img/apple-brands-solid.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">The iPhone 14, Three Years later</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="iphone-14.html">Read More</a></span>
      </li>
      <li class="w3-padding-16">
        <img src="img/bluesky-brands.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Bluesky Adds new a form of Verification</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="bluesky-verification.html">Read More</a></span>
      </li> 
      <li class="w3-padding-16">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2CmLBr7ObpwYH1ii9yYseVqGLDyFMzTbcTGUZ36vnhq3HgSB-E74D9cRe7YO0MsLKwXnu" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Raft</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="raft.html">Read More</a></span>
      </li>    
    </ul>
  </div>
  <hr> 
 
  <!-- Labels / tags -->
  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4>Socials</h4>
    </div>
    <div class="w3-container w3-white">
    <p><span class="w3-tag w3-light-grey w3-small w3-margin-bottom"><a href="https://madebydanny.uk/startpage">Start Page</a></span>
        <span class="w3-tag w3-light-grey w3-small w3-margin-bottom"><a href="https://bsky.app/profile/madebydanny.uk">Bluesky</a></span>
        <span class="w3-tag w3-light-grey w3-small w3-margin-bottom"><a href="https://reddit.com/u/funtimeswithdanny">Reddit</a></span>
        <span class="w3-tag w3-light-grey w3-small w3-margin-bottom"><a href="https://steamcommunity.com/id/MadeByDanny">Steam</a></span>
    </p>
    </div>
  </div>
  <!-- About Card -->
  <div class="w3-card w3-margin w3-margin-top">
  <img src="img/oreo.jpeg" style="width:100%">
    <div class="w3-container w3-white">
      <h4><b>Oreo, <i class="fa-regular fa-hand-peace"></i></b></h4>
    </div>
   </div>
    <!-- Posts -->
  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4><i class="fa-regular fa-newspaper"></i> News/Updates</h4>
    </div>
    <ul class="w3-ul w3-hoverable w3-white">
    <li class="w3-padding-16">
        <img src="img/buffer-brands.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">16 Weeks of Buffer!</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="https://bsky.app/profile/madebydanny.uk/post/3lq3nxzj57222">View Post</a></span>
      </li>
      <li class="w3-padding-16">
        <img src="img/bluesky-brands.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">@madebydanny.uk Makes it to 80 Followers</span><br>
      </li>
      <li class="w3-padding-16">
        <span class="w3-large">Version 10.0 is here</span><br>
        <span><i class="fa-regular fa-hand-point-right"></i> <a href="/updates/10.0.html">Read More</a></span>
      </li> 
      <li class="w3-padding-16">
        <img src="img/share-from-square-regular.svg" load="lazy" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Sharing Just got Better</span><br>
        <span>You can now Share using Buffer, Bluesky & save to raindrop.io!</span>
      </li>
    </ul>
  </div>
  <hr> 
<!-- END Introduction Menu -->
</div>

  `;

  // If the <nav-bar> element exists, inject the HTML into it
  if (navBarEl) {
    navBarEl.innerHTML = headerHTML;
  }
});