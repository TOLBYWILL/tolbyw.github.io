const form = document.getElementById("myForm");
const output = document.getElementById("output");
const loginForm = document.getElementById("loginForm");
const messageArea = document.getElementById("messageArea");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("username").value;
    const username = nameInput.value;
    output.textContent = username
    console.log("User Input: ", username)

    if (usernameInput === "Tolby" && passwordInput === "Wong") {
        // --- SUCCESS ---
        // Redirect the user to the new website or page
        window.location.href = "https://example.com"; 
        // Replace "welcome_page.html" with the actual URL you want to open
        
    } else {
        // --- FAILURE ---
        // Display an error message
        messageArea.textContent = "Invalid username or password.";
        // Optional: Clear the password field
        document.getElementById("password").value = ''; 
    }
})