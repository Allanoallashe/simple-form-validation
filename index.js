
const userName = document.getElementById('name');
const email = document.getElementById('email');
const pwdOne = document.getElementById('pwd1');
const pwdTwo = document.getElementById('pwd2');
const phone = document.getElementById('phone');

function Validation() {
  // check an empty user name
  if (userName.value.trim() === "") {
    Invalid(userName,"User Name Is Required!");
  }
  else {
    Successful(userName);
  }
  // email
  if (email.value.trim() === "") {
    Invalid(email,"Enter Your Email!");
  }
  else {
    if (!validEmail(email.value.trim())) {
      Invalid(email,"Invalid Email!");
    } else 
      Successful(email);
  }
  // password1
   if (pwdOne.value.trim() === "") {
    Invalid(pwdOne,"Password1 Is Required!");
  }
  else {
    Successful(pwdOne);
  }
  // Password2
   if (pwdTwo.value.trim() === "") {
    Invalid(pwdTwo,"Password2 Is Required!");
  }
   else {
     if (pwdTwo.value.trim() !== pwdOne.value.trim()) {
       Invalid(pwdTwo, "Passwords do not Match!");
     } else {
       Successful(pwdTwo);
     }
  }
  // telephone
   if (phone.value.trim() === "") {
    Invalid(phone,"Telephone Is Required!");
  }
  else {
    Successful(phone);
  }
}

function Successful(input) {
  let parent = input.parentElement;
  let message = parent.querySelector('section');
  message.style.visibility = "hidden";
  parent.classList.add('valid');
  parent.classList.remove('empty');
}
function Invalid(input,alert) {
  let parent = input.parentElement;
  let message = parent.querySelector('section');
  message.style.visibility = "visible";
  message.innerText = alert;
  message.style.color = "#e41d16";
    parent.classList.add('empty');
  parent.classList.remove('valid');
}
function validEmail(email)
{
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

document.querySelector('.submit').addEventListener('click', (event) => {
  event.preventDefault();
  Validation();
});

