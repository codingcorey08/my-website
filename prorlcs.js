// Function to scroll to the target section
// Function to scroll to the target section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Form submission handling with EmailJS
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Send the form data to EmailJS
        emailjs.send("service_ml9qzz2", "template_hz623sh", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            alert('Thank you for contacting GamingX Studio, ' + name + '. We will get back to you soon!');
            document.getElementById('contact-form').reset(); // Reset the form
        }, function(error) {
            alert('Oops! Something went wrong. Please try again later.');
        });
    } else {
        alert('Please fill out all fields.');
    }
}

// Initialize EmailJS with your userID
(function() {
    emailjs.init("YOUR_USER_ID");
})();
