// Check if the user details are already stored
const storedUserDetails = localStorage.getItem('userDetails');

// If user details are not already stored, initialize an empty object
const userDetails = storedUserDetails ? JSON.parse(storedUserDetails) : {};

// Function to handle the form submission
function submitForm(event) {
    event.preventDefault();

    // Get form field values
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const reenterPassword = document.getElementById('reenterPassword').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const gender = document.getElementById('gender').value;
    const privacyAgreement = document.getElementById('privacyAgreement').checked;

    // Validate form data (add your validation logic here)
    if (!privacyAgreement) {
        alert("Please agree to the privacy terms.");
        return;
    }

    // Store user details
    userDetails.firstName = firstName;
    userDetails.middleName = middleName;
    userDetails.lastName = lastName;
    userDetails.email = email;
    userDetails.password = password;
    userDetails.phoneNumber = phoneNumber;
    userDetails.dateOfBirth = dateOfBirth;
    userDetails.gender = gender;

    // Save user details in Local Storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Redirect to a success page or perform other actions
    alert("Account created successfully!");
    window.location.href = 'login.html'; // Redirect to the login page
}

// Attach the submitForm function to the form's submit event
document.getElementById('createAccountForm').addEventListener('submit', submitForm);
