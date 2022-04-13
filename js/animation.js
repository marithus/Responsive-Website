const form = document.getElementById('form');
const username1 = document.getElementById('username1');
const username2 = document.getElementById('username2');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const confirmation = document.getElementById('confirmation');

// Variables for validating
var usernameSignin = false;
var passwordSignin = false;
var usernameSignup = false;
var passwordSignup = false;
var emailSignup = false;
var confirmationSignup = false;

// Run functions when users click Log in or Sign up
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    isConfirm();
});

// Validating form function
function checkInputs() {
    const username1Value = username1.value.trim();
    const username2Value = username2.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    const emailValue = email.value.trim();
    const confirmationValue = confirmation.value.trim();

    if (username1Value == "") {
        setErrorFor(username1, "Username cannot be blank");
        usernameSignin = false;
    } else {
        setSuccessFor(username1);
        usernameSignin = true;
    }
    if (username2Value == "") {
        setErrorFor(username2, "Username cannot be blank");
        usernameSignup = false
    } else {
        setSuccessFor(username2);
        usernameSignup = true;
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        emailSignup = false
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
        emailSignup = false
    } else {
        setSuccessFor(email);
        emailSignup = true;
    }

    if (password1Value === '') {
        setErrorFor(password1, 'Password cannot be blank');
        passwordSignin = false;
    } else if (password1Value.length < 8 && password1Value.length > 0) {
        setErrorFor(password1, 'Password must be at least 8 characters');
        passwordSignin = false;
    } else {
        setSuccessFor(password1);
        passwordSignin = true;
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
        passwordSignup = false;
    } else if (password2Value.length < 8 && password2Value.length > 0) {
        setErrorFor(password2, 'Password must be at least 8 characters');
        passwordSignup = false;
    } else {
        setSuccessFor(password2);
        passwordSignup = true;
    }

    if (confirmationValue === '') {
        setErrorFor(confirmation, 'Password does not match');
        confirmationSignup = false;
    } else if (password2Value !== confirmationValue) {
        setErrorFor(confirmation, 'Passwords does not match');
        confirmationSignup = false;
    } else {
        setSuccessFor(confirmation);
        confirmationSignup = true;
    }
}

// Checking if email is filled correctly
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Display icons and error message when users input wrong
function setErrorFor(input, message) {
    const check = input.parentElement
    const small = check.querySelector('small');
    small.innerText = message;
    check.className = 'check error';
}

// Display icon when users input correctly
function setSuccessFor(input) {
    const check = input.parentElement;
    check.className = 'check success';
}


// Checking if the form is filled correctly
function isConfirm() {
    if (usernameSignup == true && passwordSignup == true && emailSignup == true && confirmationSignup == true) {
        alert("Thank you " + username2.value + " signing up, \nA confirmation email will be sent shortly, you will be updated on new changes");
    }
    if (usernameSignin == true && passwordSignin == true) {
        alert("Welcome back " + username1.value + ", \nHow are you? I hope you enjoy your stay!")
    }
}

// Trigger to change log in and sign up
function toggleForm() {
    var box0 = document.querySelector('.box0');
    box0.classList.toggle("active");
}