// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {
        let top=window.scrollY;

        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }

    });

    
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
// Function to toggle the visibility of the additional text
function toggleReadMore() {
    const moreText = document.getElementById("more-text");
    const readMoreLink = document.getElementById("read-more");
    // Check the current display style of the more text
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline"; // Show the text
        readMoreLink.textContent = "Read Less"; // Change the link text
    } else {
        moreText.style.display = "none"; // Hide the text
        readMoreLink.textContent = "Read More"; // Reset the link text
    }
}

// Initialize the state on page load
document.addEventListener("DOMContentLoaded", function() {
    // Hide the additional text initially
    const moreText = document.getElementById("more-text");
    moreText.style.display = "none"; // Ensure it starts hidden
});
// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("XrK7riMo29KIiLjDK"); // Use your Public Key here
})();



// Event listener for the form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Check if the form is valid
    if (!this.checkValidity()) {
        // Mark all invalid fields
        const inputs = this.querySelectorAll("input, textarea");
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('error'); // Add red border for invalid fields
            } else {
                input.classList.remove('error'); // Remove error class if valid
            }
        });
        alert("Please fill out all required fields correctly.");
    } else {
        // If form is valid, get values from the form fields
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        // Send the form data using EmailJS
        emailjs.send("service_oymr045", "template_1pmd28d", {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        })
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            // Clear the form after submission
            document.getElementById("contact-form").reset();
        }, function(error) {
            console.log("FAILED...", error);
            alert("Failed to send message. Please try again.");
        });
    }
});

