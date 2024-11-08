const submitLogin = document.querySelector("#login form");
const message = document.querySelector("#formLoginMessage");

const handleSubmitLogin = e => {
e.preventDefault();
message.innerText = "";

let emailForm = e.target.elements.email.value;
let passwordForm = e.target.elements.password.value;


if (emailForm === USER_LOGIN.email && passwordForm === USER_LOGIN.password) {
    localStorage.setItem("email", emailForm);
    location.href = "index.html"
} else {
    message.innerText = "Email o contraseña incorrectos.";
}
}


submitLogin.addEventListener("submit", handleSubmitLogin);