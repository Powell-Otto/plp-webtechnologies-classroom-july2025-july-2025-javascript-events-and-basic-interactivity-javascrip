// Grab elements
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");
const colorBtn = document.getElementById("colorBtn");
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("count");

let counter = 0;

// Form validation
signupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || email === "" || password === "") {
    formMessage.textContent = "All fields required.";
    formMessage.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Invalid email.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "Password too short.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted!";
  formMessage.style.color = "green";
});

// Random background color
colorBtn.addEventListener("click", function() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// Click counter
countBtn.addEventListener("click", function() {
  counter++;
  countDisplay.textContent = counter;
});
