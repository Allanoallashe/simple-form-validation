
const userName = document.getElementById('name');
const email = document.getElementById('email');
const pwdOne = document.getElementById('pwd1');
const pwdTwo = document.getElementById('pwd2');
const phone = document.getElementById('phone');
const form = document.querySelector('form');

document.querySelector('.submit').addEventListener('click', (event) => {
  event.preventDefault();
  if (userName.value.trim() === "") {
    Empty(userName, "User Name Required");
  } else {
    Valid(userName);
  }
});

function Empty(input, message) {
  document.querySelector('section').style.visibility = "visible";
  document.querySelector('section').innerText=message;
}
function Valid(input) {
  document.querySelector('section').style.visibility = "hidden";
  document.querySelector('section').innerText="";
}

