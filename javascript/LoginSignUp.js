var signupData = {};


    function validateSignup() {
      var username = document.getElementById("signup-username").value;
      var password = document.getElementById("signup-password").value;
      var email = document.getElementById("signup-email").value;
      var birthdayMonth = document.getElementById("signup-birthday-month").value;
      var birthdayDay = document.getElementById("signup-birthday-day").value;
      var birthdayYear = document.getElementById("signup-birthday-year").value;


      if (username.trim() === "") {
        alert("Please enter a username.");
        return false;
      }


      if (password.trim() === "") {
        alert("Please enter a password.");
        return false;
      }


      if (email.trim() === "") {
        alert("Please enter an email.");
        return false;
      }


      if (birthdayMonth === "" || birthdayDay === "" || birthdayYear === "") {
        alert("Please select your birthday.");
        return false;
      }


      signupData.username = username;
      signupData.password = password;


      switchForm("login-form");
     
      // Clear the sign-up form fields
      document.getElementById("signup-email").value = "";
      document.getElementById("signup-username").value = "";
      document.getElementById("signup-password").value = "";
      document.getElementById("signup-birthday-month").value = "";
      document.getElementById("signup-birthday-day").value = "";
      document.getElementById("signup-birthday-year").value = "";


      return true;
    }


    function validateLogin() {
      var username = document.getElementById("login-username").value;
      var password = document.getElementById("login-password").value;


      if (username.trim() === "") {
        alert("Please enter a username.");
        return false;
      }


      if (password.trim() === "") {
        alert("Please enter a password.");
        return false;
      }


      if (username === signupData.username && password === signupData.password) {
        alert("Login successful!");
        // Redirect or perform any action you desire for successful login
        window.location.href = "BoardGsphere.html";
      } else {
        alert("Invalid username or password. Please try again.");
        // Handle invalid login attempt
      }
    }


    function switchForm(formId) {
      var loginForm = document.getElementById("login-form");
      var signupForm = document.getElementById("signup-form");


      if (formId === "login-form") {
        loginForm.classList.remove("hide");
        signupForm.classList.add("hide");
      } else if (formId === "signup-form") {
        loginForm.classList.add("hide");
        signupForm.classList.remove("hide");
      }
    }

    function navigateToPage(_pageUrl){
        window.location.href = _pageUrl;
    }