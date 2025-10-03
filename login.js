
// Save staff accounts in localStorage
function getStaffAccounts() {
  return JSON.parse(localStorage.getItem("staffAccounts")) || [];
}

function saveStaffAccounts(accounts) {
  localStorage.setItem("staffAccounts", JSON.stringify(accounts));
}

// Handle registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    let accounts = getStaffAccounts();

    if (accounts.find(acc => acc.username === username)) {
      document.getElementById("registerMessage").textContent = " Username already exists!";
      return;
    }

    accounts.push({ username, password });
    saveStaffAccounts(accounts);

    document.getElementById("registerMessage").textContent = " Registration successful!";
    registerForm.reset();
  });
}

// Handle login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let accounts = getStaffAccounts();

    const found = accounts.find(acc => acc.username === username && acc.password === password);

    if (found) {
  document.getElementById("loginMessage").textContent = " Login successful!";
  
  // Save logged in staff to localStorage
  localStorage.setItem("loggedInStaff", found.username);

  // Redirect to staffmenu
  setTimeout(() => window.location.href = "staffmenu.html", 1000);
} else {
  document.getElementById("loginMessage").textContent = " Invalid credentials!";
}

  });
}
