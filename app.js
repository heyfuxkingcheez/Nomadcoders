const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(e) {
    e.preventDefault();
    console.log(loginInput.value);

}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);


