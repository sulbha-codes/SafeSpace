/**
 * SafeSpace — Women’s Safety Web Platform
 *
 * Instructions:
 * 1. This JavaScript handles report submissions, emergency actions, and unsafe area tracking.
 * 2. reportForm submission:
 *    - Collects name, location, type, and details.
 *    - Validates that location and details are not empty.
 *    - Saves the report in localStorage and logs the action.
 * 3. showPopup(message):
 *    - Displays a temporary popup notification on the screen.
 * 4. logAction(action):
 *    - Stores an action (e.g., report submission) with a timestamp in localStorage.
 * 5. saveUnsafeArea(location):
 *    - Saves reported unsafe areas in localStorage.
 *    - Prevents duplicate entries.
 * 6. saveReport(report):
 *    - Saves the full report object in localStorage with a timestamp.
 *    - Updates the displayed report list.
 * 7. reportArea():
 *    - Handles separate unsafe area reporting via input.
 * 8. displayReportedAreas():
 *    - Displays all unsafe areas from localStorage in the UI.
 *
 * DOM Elements:
 * - reportForm: main form for submitting reports 📝
 * - nameInput: input field for name ✅
 * - locationInput: input field for location ✅
 * - typeInput: input field for type ✅
 * - detailsInput: input field for details ✅
 * - photoInput: input field for uploading a photo 📸
 * - reportedAreasList: ul element showing unsafe areas 📍
 * - photoPreview: img element showing selected photo preview ✅
 */

// =====================
// DOM Elements ✅
// =====================
const reportForm = document.querySelector("form"); // 📝
const nameInput = document.getElementById("name"); // ✅
const locationInput = document.getElementById('location'); // ✅
const typeInput = document.getElementById("type"); // ✅
const detailsInput = document.getElementById("details"); // ✅
const photoInput = document.getElementById('photo'); // 📸
const reportedAreasList = document.getElementById('reportedAreas'); // 📍
const photoPreview = document.getElementById('photopreview'); // ✅


// =================================================
// Function to show thank-you message at top center
// =================================================

function showThankYou(message) {
  const thankYou = document.createElement("div")
  thankYou.textContent = message;
  thankYou.classList.add("thank-you");

  // Ensure message appears above everything
  thankYou.style.zIndex = 9999;//
  document.body.appendChild(thankYou);

  //Force reflow to trigger CSS animation
  thankYou.offsetHeight;

  // Keep visible for 4 seconds,then fade out

  setTimeout(() => {
    thankYou.classList.add("removing"); 
    setTimeout (() => thankYou.remove(), 500);
  }, 3000); // 800ms = 8 seconds
}

// Handle form submission 📝
// =====================
reportForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values using top-level variables ✅
  const name = nameInput.value || "Anonymous"; // ✅
  const location = locationInput.value.trim(); // ✅
  const type = typeInput.value; // ✅
  const details = detailsInput.value.trim(); // ✅

  // Validate required fields
  if (!location || !details) {
    showPopup("❌ Please fill in location and description.");
    return;
  }

  // Save report to localStorage
  saveReport({ name, location, type, details }); 

  showThankYou("✅ Report submitted! Thank you for helping make your community safer 💜");

  // Reset the form
  reportForm.reset();
});


// ==========================
// Show popup message
// ==========================
function showPopup(message) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.textContent = message;
  document.body.appendChild(popup);

  // Remove popup after 2 seconds
  setTimeout(() => popup.remove(), 2000);
}


// ==============================
// Log actions to localStorage
// ==============================
function logAction(action) {
  let actions = JSON.parse(localStorage.getItem('emergencyActions')) || [];
  actions.push({ action: action, time: new Date().toLocaleString() });
  localStorage.setItem('emergencyActions', JSON.stringify(actions));
}


// ========================================
// Save unsafe areas (prevent duplicates)
// ========================================
function saveUnsafeArea(location) {
  let areas = JSON.parse(localStorage.getItem('unsafeAreas')) || [];
  if (!areas.includes(location)) { 
    areas.push(location);
    localStorage.setItem('unsafeAreas', JSON.stringify(areas));
  }
}


// ==================================
// Save full report in localStorage
// ==================================
function saveReport(report) {
  let reports = JSON.parse(localStorage.getItem('reports')) || [];
  reports.push({ ...report, time: new Date().toLocaleString() });
  localStorage.setItem('reports', JSON.stringify(reports));
  logAction(`Report submitted: ${report.location}`);
  displayReportedAreas(); // Update UI immediately
}


// ============================
// Quick Report Area Feature 📍
// ============================
function reportArea() {
  const location = locationInput.value.trim(); // ✅ use top-level variable
  if(location === ""){
    showPopup("❌ Please enter a location");
    return;
  }
  saveUnsafeArea(location);
  logAction(`Reported unsafe area: ${location}`);
  showPopup(`📍 Reported: ${location}`);

  // Clear input after reporting
  locationInput.value = ""; // ✅ top-level variable 
  displayReportedAreas();
}


// ===================================
// Display list of reported areas 📍
// ===================================
function displayReportedAreas() {
  reportedAreasList.innerHTML = ""; // ✅ top-level variable

  const areas = JSON.parse(localStorage.getItem('unsafeAreas')) || [];
  areas.forEach(area => {
    const li = document.createElement('li');
    li.textContent = area;
    reportedAreasList.appendChild(li); // ✅ top-level variable
  });
}


// =====================
// Initial display on page load
// =====================
displayReportedAreas();


// =====================
// Photo preview feature 📸
// ====================
photoInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      photoPreview.src = e.target.result; // ✅ use top-level variable
      photoPreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});