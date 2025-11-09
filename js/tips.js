//  tips.js — Dynamic Safety Tips for SafeSpace

const tips = [
  "🚨 Trust your gut — if a situation feels wrong, it probably is.",
  "🚗 Always share your cab or ride details with a friend or family member.",
  "🔦 Carry a small flashlight or use your phone light when walking in dark areas.",
  "📍 Learn basic self-defense moves — even simple ones can save you time to escape.",
  "🕵️‍♀️ Be cautious when sharing your location publicly on social media.",
  "🎧 Avoid using both earphones when walking alone at night.",
  "📞 If someone makes you uncomfortable, pretend to call a friend loudly.",
  "🚪 Always lock your doors immediately after getting into your vehicle or home.",
  "💳 Don’t share personal or financial info with strangers or on insecure sites.",
  "🏃‍♀️ If followed, go to the nearest public place or shop, not home.",
  "🧍‍♀️ Keep your head high and walk with confidence — it deters potential threats.",
  "📱 Set your phone to emergency SOS mode for quick help.",
  "🧥 Avoid wearing accessories that can be grabbed easily from behind.",
  "🏠 Learn local emergency contacts — not just 100 or 112.",
  "🚶‍♀️ Take familiar routes when walking alone late at night.",
  "💡 Keep your house entryway well-lit to avoid dark blind spots.",
  "🚴‍♀️ When commuting, vary your route occasionally to avoid patterns.",
  "👩‍💻 Never disclose your daily routine or home address online.",
  "💬 Practice assertive communication — say 'No' clearly and confidently."
];

//  Select HTML elements
const tipsList = document.getElementById("tipsList");// The <ul> where tips will appear
const newTipBtn = document.getElementById("newTipBtn");// The "Remind Your 💜" button


// Function to show a random  safety tip
function showRandomTip() {
    // Generate a random number between 0 and the total number of tips
  const randomIndex = Math.floor(Math.random() * tips.length);

  // Display a new random tip inside the <ul>
  tipsList.innerHTML = `<li>${tips[randomIndex]}</li>`;
}

// Show one random tip as soon as the page loads
showRandomTip();

//  When the user clicks the button, show a new random tip
newTipBtn.addEventListener("click", showRandomTip);

// Auto change every 2 seconds
setInterval(showRandomTip, 2000);
