// ======= Emergency Action Functions =======
// SafeSpace Project
// Description: These functions simulate emergency actions for the SafeSpace application.
// Note: In a real-world production version, these would connect to actual services like
//       phone dialer, location sharing, or sending SMS alerts to trusted contacts.

function showEmergencyPopup(message, type = "info") {
  const popup = document.createElement("div");
  popup.className = type === "alert" ? "critical-alert" :  "emergency-popup";
  popup.textContent = message;
  document.body.appendChild(popup);

  //  Trigger CSS animation
  popup.offsetHeight;

  //  Auto-remove after 3 seconds
  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 500);
  },3000);
  
}

// Function: callHelp
// Purpose: Simulates dialing the national women’s helpline (112) when the user clicks the button.
function callHelp() {
  showEmergencyPopup("📞 Dialing 112... Stay calm, help is on the way.","info");

}

// Function: shareLocation
// Purpose: Simulates sharing the user's current location with trusted contacts for safety.
function shareLocation(){
  showEmergencyPopup("📍 Location shared with your trusted contacts (simulated).", "info");
}

// Function: sendAlert
// Purpose: Simulates sending a quick SMS alert to a registered guardian or emergency contact.
function sendAlert() {
  showEmergencyPopup("🚨 Emergency SMS alert sent to registered guardian (simulated).","info");
}
