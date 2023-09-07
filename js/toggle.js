document.addEventListener("DOMContentLoaded", function() {
    const passwordField1 = document.getElementById("password1");
    const passwordField2 = document.getElementById("password2");
    const loginPasswordField = document.getElementById("password");

    const togglePasswordsCheckbox = document.getElementById("togglePasswords");
    const toggleLoginPasswordCheckbox = document.getElementById("togglePassword");

    // Handle the signup form's password fields
    if (togglePasswordsCheckbox) {
        togglePasswordsCheckbox.addEventListener('change', function() {
            const typeToSet = (passwordField1.type === "password") ? "text" : "password";
            passwordField1.type = typeToSet;
            if (passwordField2) {
                passwordField2.type = typeToSet;
            }
        });
    }

    // Handle the login form's password field
    if (toggleLoginPasswordCheckbox) {
        toggleLoginPasswordCheckbox.addEventListener('change', function() {
            loginPasswordField.type = (loginPasswordField.type === "password") ? "text" : "password";
        });
    }
});
