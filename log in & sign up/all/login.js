const email = document.getElementById("email");
const form = document.getElementById("form");
const input = document.querySelector("input");
const passwordlogin = document.getElementById("password-login");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("succes");
};
const setSucces = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("succes");
};

const isValidEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(String(email).toLowerCase());
};
const validateInputs = () => {
  const emailValue = email.value.trim();
  const passwordloginValue = passwordlogin.value.trim();
  if (emailValue === "") {
    setError(email, "Email boş ola bilməz.");
  } else if (isValidEmail(emailValue) === false) {
    setError(email, "Email təyin olunmayıb.");
  } else {
    setSucces(email);
    localStorage.setItem("email", emailValue);
  }
  if (passwordloginValue === "") {
    setError(passwordlogin, "Password boş ola bilməz.");
  } else {
    setSucces(passwordlogin);
  }
};
