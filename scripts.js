const words = ["VENTAS", "SERVICIO AL CLIENTE", "OPERACIONES", "RECURSOS HUMANOS"];
let index = 0;
const rotatingText = document.getElementById("rotatingText");

if (rotatingText) {
  rotatingText.textContent = words[0];

  setInterval(() => {
    index = (index + 1) % words.length;
    rotatingText.textContent = words[index];
  }, 2000);
}

const emailForm = document.getElementById("emailForm");
const successMessage = document.getElementById("successMessage");
const emailFormWrapper = document.getElementById("emailFormWrapper");

if (emailForm && successMessage && emailFormWrapper) {
  emailForm.addEventListener("submit", function (e) {
    e.preventDefault();
    emailFormWrapper.classList.add("hidden");
    successMessage.classList.remove("hidden");
  });
}
