document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        // Validation rules
        let isValid = true;

        // Name validation
        if (name === '') {
            alert('Name is required.');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        // Password validation
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            isValid = false;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            alert('Form submitted successfully!');
            form.submit(); // Uncomment this line to submit the form
        }
    });
});