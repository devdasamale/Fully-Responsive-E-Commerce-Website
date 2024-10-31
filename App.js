let bar = document.getElementById("bar");
let close = document.getElementById("close");
let nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}



// & Display login form &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

let btnLogin = document.querySelector(".btn-login");
let btnSignup = document.querySelector(".btn-signup");
let signUpForm = document.querySelector(".signup-form-control");
let loginForm = document.querySelector(".login-form-control");


if (btnLogin) {
  btnLogin.addEventListener("click", (e) => {
    loginForm.style.display = "flex";
    signUpForm.style.display = "none";
  });
}

if (btnSignup) {
  btnSignup.addEventListener("click", (e) => {
    loginForm.style.display = "none";
    signUpForm.style.display = "flex";
  });
}
