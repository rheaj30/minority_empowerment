document.getElementById('createAccountForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Store user details in Local Storage (for demonstration purposes)
    // Replace this with your actual data storage mechanism
    localStorage.setItem('userDetails', JSON.stringify({
        firstName: document.getElementById('firstName').value,
        middleName: document.getElementById('middleName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
        gender: document.getElementById('gender').value
    }));

    // Redirect to the signup/login page
    window.location.href = 'signup_login.html'; // Redirect to the signup/login page
});