// ==============================
// Part 1: Event Handling
// ==============================

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// ==============================
// Part 2: Interactive Elements
// ==============================

// Dark Mode Toggle
const body = document.body;
document.getElementById("themeToggle").addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// FAQ Toggle
const questions = document.querySelectorAll(".faq-question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ==============================
// Part 3: Form Validation
// ==============================

const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  let valid = true;

  // Name validation
  const nameInput = document.getElementById("name").value.trim();
  if (nameInput.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (regex)
  const emailInput = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const passwordInput = document.getElementById("password").value.trim();
  if (passwordInput.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success Message
  if (valid) {
    document.getElementById("formSuccess").textContent = "🎉 Registration successful!";
    form.reset();
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});
