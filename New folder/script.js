const username = "admin"; // Hardcoded username
const password = "secret"; // Hardcoded password
const errorMessage = document.getElementById("error-message");

const tabs = document.querySelectorAll(".tab");
const activeOrders = document.getElementById("active-orders");
const completedOrders = document.getElementById("completed-orders");


const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  if (enteredUsername === username && enteredPassword === password) {
    // Redirect to main application on successful login (replace with actual redirection logic)
    window.location.href = "main.html"; // Replace with actual application URL
  } else {
    errorMessage.textContent = "Invalid username or password";
  }
});
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      tabs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");
  
      const target = this.dataset.target;
      activeOrders.style.display = target === "active-orders" ? "block" : "none";
      completedOrders.style.display = target === "completed-orders" ? "block" : "none";
    });
  });


