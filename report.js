const reportForm = document.querySelector("form");

 *DOM Elements:
 * - reportForm: main form for submitting reports 📝
 * - nameInput: input field for name ✅
 * - locationInput: input field for location ✅
 * - typeInput: input field for type ✅
 * - detailsInput: input field for details ✅
 * - photoInput: input field for uploading a photo 📸
 * - reportedAreasList: ul element showing unsafe areas 📍
 * - photoPreview: img element showing selected photo preview ✅
 * /

/// DOM Elements ✅
// =====================
const reportForm = document.querySelector("form"); // 📝
const nameInput = document.getElementById("name"); // ✅
const locationInput = document.getElementById('location'); // ✅
const typeInput = document.getElementById("type"); // ✅
const detailsInput = document.getElementById("details"); // ✅
const photoInput = document.getElementById('photo'); // 📸
const reportedAreasList = document.getElementById('reportedAreas'); // 📍
const photoPreview = document.getElementById('photopreview'); // ✅
*/

// Handle form submission
reportForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value || "Anonymous";
  const location = document.getElementById("location").value;
  const type = document.getElementById("type").value;
  const details = document.getElementById("details").value;

  if (!location || !details) {
    alert("Please fill in location and description.");
    return;
  }

  alert(
    `Thank you, ${name}! Your report has been submitted.\n` +
    `Incident Type: ${type}\nLocation: ${location}`
  );

  reportForm.reset();
});