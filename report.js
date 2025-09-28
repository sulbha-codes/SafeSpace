const reportForm = document.querySelector("form");

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