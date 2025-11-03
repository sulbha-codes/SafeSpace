document.addEventListener("DOMContentLoaded", () => {
  const tipsList = document.getElementById("tipsList");
  const newTipBtn = document.getElementById("newTipBtn");

  // Example tips array — you can fetch these from an API if you want
  const tips = [
    "🔒 Always share your live location with a trusted friend when traveling alone at night.",
    "📱 Keep emergency numbers saved and easily accessible.",
    "🚶‍♀️ Walk confidently and trust your instincts — if something feels off, leave.",
    "🧠 Be aware of your surroundings. Avoid distractions like texting while walking alone.",
    "👥 Use public transportation with visible security. Sit near other women or families.",
    "🚖 Before getting into a cab, verify the number plate and driver's name.",
    "🧳 Always carry a power bank. A dead phone is not an option in emergencies.",
    "🎯 Plan your route ahead and avoid poorly lit or isolated areas.",
    "🚌 Sit near the driver or other passengers when using public transport alone.",
    "📸 Be cautious about sharing personal information or locations on social media.",
    "🛡️ Take a basic self-defense course to boost confidence and safety skills.",
    "🚨 Always know the location of the nearest police station or help center.",
    "🧍‍♀️ Walk purposefully and avoid looking lost or distracted.",
    "📌 Use trusted ride-sharing apps and verify the driver before entering.",
    "💬 Inform someone you trust about your whereabouts when going out.",
    "🕰️ Avoid staying out late alone whenever possible.",
    "🔑 Don’t leave your belongings unattended, especially in public places.",
    "🛑 If someone is following you, enter a store or public place immediately.",
    "📍 Memorize important landmarks to navigate safely in unfamiliar areas.",
    "💡 Trust your instincts — they often alert you before danger arises.",
    "🎒 Keep essential items like a whistle or small flashlight handy.",
    "🚶‍♀️ Walk with a friend whenever possible, especially at night.",
    "🧴 Carry a legal self-defense spray or alarm device for emergencies.",
    "📞 Save emergency contacts on speed dial for quick access.",
    "👀 Stay alert and avoid being absorbed in your phone or headphones.",
    "🏃‍♀️ Know multiple exit routes in any building you enter.",
    "📝 Keep a note of emergency services numbers and nearby hospitals."
  ];

  // Function to show a random tip
  function showRandomTip() {
    // Clear current tips
    tipsList.innerHTML = "";

    // Pick a random tip
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tip = tips[randomIndex];

    // Create new li element
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  }

  // Show a tip on page load
  showRandomTip();

  // Show a new tip when button is clicked
  newTipBtn.addEventListener("click", showRandomTip);

  // Optional: auto-change tip every 2 seconds
  setInterval(showRandomTip, 5000);
});