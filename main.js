// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {

    // Function to handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Get form elements
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form inputs
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Form data is valid - simulate form submission
        alert('Form submitted successfully!');
        
        // Reset the form
        document.getElementById('contactForm').reset();
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    // Attach event listener to form
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
});
