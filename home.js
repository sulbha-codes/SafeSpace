const welcomeText = "Welcome to SafeSpace 💜";
const welcomeElement = document.querySelector("main h2");
let i = 0;

function typeWriter() {
  if (i < welcomeText.length) {
    welcomeElement.innerHTML += welcomeText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

welcomeElement.innerHTML = "";
typeWriter();