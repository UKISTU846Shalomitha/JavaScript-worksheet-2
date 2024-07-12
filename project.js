document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactBtn");
    const span = document.getElementsByClassName("closeBtn")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

})

document.getElementById('contactModal').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    let isValid = true;
    // Username validation
    const username = document.getElementById('name').value;
    const usernameError = document.getElementById('usernameError');
    if (username.trim() === '') {
        usernameError.textContent = 'Username is required.';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Address
    const address= document.getElementById('address').value;
    const addressError = document.getElementById('addressError');
    if (address.trim() === '') {
        addressError.textContent = 'Address is required.';
        isValid = false;
    } else {
        addressError.textContent = '';
    }

    // Phone Number
    const phonenumber= document.getElementById('phone').value;
    const phonenumberError = document.getElementById('phonenumberError');
    const phonenumberPattern= /^\+94\d{9}$/;
    if (!phonenumberPattern.test(phonenumber)) {
        phonenumberError.textContent = 'Invalid phone number it should start with +94 and be followed by exactly 9 digits';
        isValid = false;
    } else {
        phonenumberError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Message validation
    const message = document.getElementById('message').value;
    const messageError = document.getElementById('messageError');
    if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long.';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // const contactData = {
        //     name: nameValue,
        //     address: addressValue,
        //     phone: phoneValue,
        //     email: emailValue,
        //     message: messageValue
        // };
       
        
        // document.getElementById('contactForm').style.display = 'none';
        document.getElementById("contactModal").style.display = "none";
        form.reset()

        
    }
});
