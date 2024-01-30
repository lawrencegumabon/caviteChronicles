const users = [];
let loginAttempts = 0;
let cooldownTimeout;

function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    alert("Username is already taken. Please choose another one.");
    return;
  }

  // Store the user in the "database"
  users.push({ username, password });

  alert("Sign up successful! You can now login.");

  console.log(users);

  window.location.href = "login.html";
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Check if the username and password match a user
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    alert("Login successful!");
    window.location.href = "home.html";
  } else {
    loginAttempts++;

    if (loginAttempts == 3) {
      alert(
        "You have reached the maximum number of login attempts. Please wait for the cooldown."
      );

      // Set a 30-second cooldown
      // 30 seconds in milliseconds
    } else {
      // alert("Invalid username or password. Please try again.");
      cooldownTimeout = setTimeout(() => {
        loginAttempts = 0; // Reset login attempts after cooldown
        alert("Cooldown period is over. You can now try again.");
      }, 30000);
    }
  }
}
