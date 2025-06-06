// v1.js
// This script captures the current URL, encodes it,
// and redirects the user to:
// https://madebydanny.uk/unresolved?l={encoded_current_url}

window.addEventListener('load', function() {
  // Get the current URL of the visitor's browser
  var currentUrl = window.location.href;
  
  // Encode the URL so it can be safely used as a query parameter
  var encodedUrl = encodeURIComponent(currentUrl);
  
  // Construct the redirect URL with the encoded current URL appended as a query parameter.
  var redirectUrl = "https://madebydanny.uk/unresolved?l=" + encodedUrl;
  
  // Redirect the user to the new URL
  window.location.href = redirectUrl;
});
