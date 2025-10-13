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


// =====================
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

  // Reset the form
  reportForm.reset();
});