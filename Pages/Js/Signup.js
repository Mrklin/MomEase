

      const registrationForm = document.getElementById("registration");
      const usernameInput = document.getElementById("username");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("comfirmPassword");
      const registerButton = document.getElementById("signin");
       const formMessage = document.getElementById("formMessage");
      // Hypothetical Backend API Endpoint for Registration
      // In a real application, replace this with your actual backend URL.
      const API_REGISTER_ENDPOINT = "https://api.yourdomain.com/register"; // Example placeholder
      registrationForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent the default form submission;
        // Reset messages
        formMessage.textContent = "";
        formMessage.className = "message"; // Reset classes
        // Get form values
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        // --- Client-Side Validation ---
        if (!username || !email || !password || !confirmPassword) {
          displayMessage("All fields are required!", "error");
          return;
        }
        if (password !== confirmPassword) {
          displayMessage("Passwords do not match!", "error");
          return;
        }
        if (password.length < 6) {
          displayMessage(
            "Password must be at least 6 characters long.",
            "error"
          );
          return;
        }
        // Basic email format validation (more robust validation should be done on the backend)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          displayMessage("Please enter a valid email address.", "error");
          return;
        }
        // --- End Client-Side Validation ---
        // Show loading state
        registerButton.textContent = "Registering...";
        registerButton.disabled = true;
        try {
          const response = await fetch(API_REGISTER_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json", // Indicate that we prefer JSON response
            },
            body: JSON.stringify({ username, email, password }),
          });
          const data = await response.json(); // Always try to parse JSON, even for errors
          if (response.ok) {
            // Status code is 2xx (e.g., 200 OK, 201 Created)
            displayMessage(
              data.message || "Registration successful! You can now log in.",
              "success"
            );
            console.log("Registration successful:", data);
            // Optionally, clear the form after successful registration;
            registrationForm.reset();
            // If you want to redirect the user after a short delay:
            setTimeout(() => {
              window.location.href = "./Login.html"; // Or your login page
            }, 2000);
          } else {
            // Server returned an error (e.g., 400 Bad Request, 409 Conflict for existing user)
            const errorMessage =
              data.message || "Registration failed. Please try again.";
            displayMessage(errorMessage, "error");
            console.error("Registration failed:", data);
          }
        } catch (error) {
          // Network error (e.g., server down, no internet connection)
          displayMessage(
            "Network error. Could not connect to the server.",
            "error"
          );
          console.error("Network or parsing error:", error);
        } finally {
          // Always reset button state
          registerButton.textContent = "Register";
          registerButton.disabled = false;
        }
      });
      function displayMessage(message, type) {
        formMessage.textContent = message;
        formMessage.classList.add(type); // 'success' or 'error'
      }


