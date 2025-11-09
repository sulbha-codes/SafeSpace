// ==============================================
//  SafeSpace - Home.js
// ==============================================
// Developer Instructions 
//
// This script adds a smooth typing animation to the home page heading.
// It types out the text “Welcome to SafeSpace 💜” letter by letter
// to create a warm, calm first impression for users.
//
//  Developer Notes:
// 1. The animation starts only after the DOM is fully loaded.
// 2. You can change typing speed by adjusting the timeout delay (currently 100ms).
// 3. To change the message, edit `welcomeText` below.
// 4. Make sure your HTML includes: <main><h2></h2></main>
// 5. This script focuses on UX — delivering a soft, human-centered welcome effect.
//
// ==============================================
//  Typing Animation Logic
// =============================================

export function startTyping() {
const welcomeText = "Welcome to SafeSpace 💜";
const welcomeElement = document.querySelector("main h2");
let i = 0;

// ---------------------------------------------------------------
// Function: typeWriter()
// Purpose: Adds one letter of welcomeText to the <h2> every 100ms
// ----------------------------------------------------------------

function typeWriter() {
  
  if (i < welcomeText.length) {
    
    welcomeElement.innerHTML += welcomeText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
if (welcomeElement) {
  welcomeElement.textContent = "";
  typeWriter()
}
}

// ----------------------------------------------
// Event Listener: Waits for HTML to fully load
// ----------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  
  welcomeElement.textContent = "";
  
  typeWriter();
});