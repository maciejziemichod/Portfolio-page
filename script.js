const contact = document.querySelector("#nav-contact");
const emailWindow = document.querySelector("#email-window");
const emailWindowContent = document.querySelector("#email-window-content");
const closeBtn = document.querySelector("#close");
const copyBtn = document.querySelector("#copy-btn");
const textToCopy = document.querySelector("#text-to-copy");

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
