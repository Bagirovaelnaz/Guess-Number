const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");
const input = document.querySelector("input");
console.log(input, "input");
const passwordIcon = document.querySelector(".password-icon");
console.log(passwordIcon.classList, "icon ozu");
input.addEventListener("keyup", function (e) {
  let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (input.value === "") {
    passwordIcon.classlist.replace("fa-solid fa-eye-slash", "fa-solid fa-eye");
    return (passwordIcon.style.color = "#44af69");
  }
  if (input.value.match(pattern)) {
    console.log(passwordIcon.classList, "CLASSLIST");
    passwordIcon.classList.replace("fa-eye", "fa-eye-slash");
    return (passwordIcon.style.color = "#d90429");
  }
  passwordIcon.classlist.replace("fa-solid fa-eye-slash", "fa-solid fa-eye");
  return (passwordIcon.style.color = "#44af69");
});
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
const isValidPassword = (password1) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return regex.test(String(password1));
};
const validateInputs = () => {
  const emailValue = email.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();
  if (emailValue === "") {
    setError(email, "Email boş ola bilməz.");
  } else if (isValidEmail(emailValue) === false) {
    setError(email, "Email təyin olunmayıb.");
  } else {
    setSucces(email);
    localStorage.setItem("email", emailValue);
  }
  if (password1Value === "") {
    setError(password1, "Password boş ola bilməz.");
  } else if (isValidPassword(password1Value) === false) {
    setError(password1, "Daha güclü password daxil edin.");
  } else {
    setSucces(password1);
    localStorage.setItem("password1", password1Value);
  }
  if (password2Value === "") {
    setError(password2, "Password boş ola bilməz.");
  } else if (!(isValidPassword(password1Value) === password2Value)) {
    setError(password2, "Passwordlar uyğunlaşmır.");
  } else {
    setSucces(password2);
    localStorage.setItem("password2", password2Value);
  }
};
