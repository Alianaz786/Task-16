// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const successMessage = document.getElementById("successMessage");

  if (name === "" || email === "" || message === "") {
    successMessage.style.color = "red";
    successMessage.textContent = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    successMessage.style.color = "red";
    successMessage.textContent = "Enter a valid email address.";
    return;
  }

  successMessage.style.color = "green";
  successMessage.textContent = "Thank you! Your message has been sent.";
  
  // Clear form
  document.getElementById("contactForm").reset();
});

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
