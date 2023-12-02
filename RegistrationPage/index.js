const GeneratedOTP = generateOTP();

function validateAndSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
        const firstname = document.getElementById("firstname").value;
        const secondname = document.getElementById("secondname").value;
        const email = document.getElementById("email").value;
        const number = document.getElementById('number').value;
        const password = document.getElementById("password").value;
        const userData = {
            firstname: firstname,
            secondname: secondname,
            email: email,
            password: password,
            number: number
        };

        const userDataJSON = JSON.stringify(userData);
        localStorage.setItem("userData", userDataJSON);

        console.log("User data stored in local storage", userDataJSON);
        window.location.href = './otpGen.html';
        alert(`The OTP is ${GeneratedOTP}`);
    }
    else {
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}

function validateForm() {
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const email = document.getElementById("email").value;

    if (!email.match(emailPattern)) {
        emailError.innerText = "Invalid email address";
        return false; // Validation failed
    } else {
        emailError.innerText = "";
    }

    const numberError = document.getElementById("numberError");
    const numberPattern = /^\d{10}$/;
    const number = document.getElementById('number').value;

    if (!number.match(numberPattern)) {
        numberError.innerText = "Invalid phone number (10 digits required)";
        return false; // Validation failed
    } else {
        numberError.innerText = "";
    }

    const passwordError = document.getElementById("passwordError");
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    const password = document.getElementById("password").value;

    if (!password.match(passwordPattern)) {
        passwordError.innerText = "Password must be at least 6 characters long and include at least one uppercase, one lowercase, one digit, and one special character (@$!%*?&)";
        return false; // Validation failed
    } else {
        passwordError.innerText = "";
    }

    // All validations passed
    return true;
}

function generateOTP() { 
          
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    return OTP; 
} 


  function validateOTP(){
      const first = document.getElementById('first').value; console.log(first);
      const second = document.getElementById('second').value; console.log(second);
      const third = document.getElementById('third').value;console.log(third);
      const fourth = document.getElementById('fourth').value;console.log(fourth);
      if(GeneratedOTP[0]==first && GeneratedOTP[1] ==second &&GeneratedOTP[2]==third &&GeneratedOTP[3]==fourth){
          alert("Registration Successful");
          window.location.href = '../Home/index.html';
      }
      else{
          alert(`Incorrect OTP, The OTP is ${GeneratedOTP}`);
      }
  }
 