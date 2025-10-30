// ==============================================
// 🏠 SafeSpace - Home.js
// ==============================================
// Developer Instructions 👩‍💻
//
// This script adds a smooth typing animation to the home page heading.
// It types out the text “Welcome to SafeSpace 💜” letter by letter
// to create a warm, calm first impression for users.
//
// 💡 Developer Notes:
// 1. The animation starts only after the DOM is fully loaded.
// 2. You can change typing speed by adjusting the timeout delay (currently 100ms).
// 3. To change the message, edit `welcomeText` below.
// 4. Make sure your HTML includes: <main><h2></h2></main>
// 5. This script focuses on UX — delivering a soft, human-centered welcome effect.
//
// ==============================================
// 🧠 Typing Animation Logic
// =============================================

// The message that will appear one letter at a time
const welcomeText = "Welcome to SafeSpace 💜";

// Selects the <h2> inside the main section where text will be typed
const welcomeElement = document.querySelector("main h2");

// Counter to track which letter we are currently typing
let i = 0;

// ---------------------------------------------------------------
// Function: typeWriter()
// Purpose: Adds one letter of welcomeText to the <h2> every 100ms
// ----------------------------------------------------------------

function typeWriter() {
  //Continue typing until the entire message is shown
  if (i < welcomeText.length) {
    //  Add the next character to the <h2> element.
    welcomeElement.innerHTML += welcomeText.charAt(i);
    i++;//Move to the next character index
    // Wait 100 milliseconds, then call typewriter again (recursive typing)
    setTimeout(typeWriter, 100);
  }
}

// ----------------------------------------------
// Event Listener: Waits for HTML to fully load
// ----------------------------------------------
// Ensures the <h2> element exists before typing starts.
// Prevents “undefined” or “null” errors if script runs too early.
window.addEventListener("DOMContentLoaded", () => {
  // Clear any exixting text to ensure clean typing effect
  welcomeElement.textContent = "";
  //  Start the typing animation
  typeWriter();
});