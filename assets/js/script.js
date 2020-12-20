var error = document.getElementById('lblError');

function validateForm() {
    var email = document.getElementById('txtEmail').value;
    var password = document.getElementById('txtPassword').value;
    var address = document.getElementById('txtAddress').value;
    var dob = document.getElementById('dob').value;
    var male = document.getElementById('rbMale').checked;
    var female = document.getElementById('rbFemale').checked;

    if(email == "") {
        error.innerHTML = "Email must be filled.";
    }
    else if(email.indexOf('@') == -1 || email.indexOf('.') == -1 || email.indexOf('@') == 0 || email.indexOf('.') == 0) {
        error.innerHTML = "Email must be in correct format. [e.g. aaa@gmail.com]"
    }
    else if(password == "") {
        error.innerHTML = "Password must be filled.";
    }
    else if(password.length < 8) {
        error.innerHTML = "Password too short. Minimal 8 characters."
    }
    else if(address == "") {
        error.innerHTML = "Address must be filled.";
    }
    else if(dob == "") {
        error.innerHTML = "Enter your date of birth.";
    }
    else if(male == false && female == false) {
        error.innerHTML = "Choose gender";
    }

    if(error.innerHTML == "") {
        alert('Register success!');
    }
    
}