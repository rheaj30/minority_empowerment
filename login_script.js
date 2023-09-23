document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Retrieve user credentials from Local Storage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Get the values entered by the user in the login form
    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;

    // Check if the entered credentials match the stored credentials
    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        // Successful login, redirect to the success login page
        window.location.href = 'success_login.html'; // Redirect to the success login page
    } else {
        // Failed login, show an error message or take appropriate action
        alert('Login failed. Please check your credentials.');
    }
});
