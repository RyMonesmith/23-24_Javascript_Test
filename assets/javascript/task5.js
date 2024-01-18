/* Put code for the task below */
// Function to validate form fields
function validateForm() {
    const fullNameInput = document.getElementById('fullName');
    const addressInput = document.getElementById('address');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');

    // Check if the full name is empty
    if (fullNameInput.value === '') {
        fullNameInput.style.Color = 'red';
    } else {
        fullNameInput.style.borderColor = 'white';
    }

    // Check if the address is empty
    if (addressInput.value === '') {
        addressInput.style.borderColor = 'red';
    } else {
        addressInput.style.borderColor = 'white';
    }

    // Check if the phone number is empty
    if (phoneInput.value === '') {
        phoneInput.style.borderColor = 'red';
    } else {
        phoneInput.style.borderColor = 'white';
    }

    // Check if the email is empty
    if (emailInput.value === '') {
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = 'white';
    }
}
// Event listener for the form submit button
document.querySelector('form button').addEventListener('click', validateForm);

/* This script defines a function validateForm that checks each form field for empty values and changes the border color accordingly.
The event listener is set up for the submit button of the form, triggering the validateForm function when clicked.
 */
