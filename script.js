const contact = document.getElementById("nav-contact");
const emailWindow = document.getElementById("email-window");
const emailWindowContent = document.getElementById("email-window-content");
const closeBtn = document.getElementById("close");
const copyBtn = document.getElementById("copy-btn");
const textToCopy = document.getElementById("text-to-copy");

contact.addEventListener("click", () => {
  emailWindow.classList.add("activate");
  emailWindowContent.classList.add("activate");
});

closeBtn.addEventListener("click", () => {
  emailWindow.classList.add("deactivate");
  emailWindowContent.classList.add("deactivate");

  setTimeout(() => {
    emailWindow.classList.remove("activate");
    emailWindowContent.classList.remove("activate");
    emailWindow.classList.remove("deactivate");
    emailWindowContent.classList.remove("deactivate");
  }, 800);
});

copyBtn.addEventListener("click", () => {
  textToCopy.select();
  document.execCommand("Copy");
});
