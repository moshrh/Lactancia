
document.getElementById("button").addEventListener("click", () => {

    const emailOrPhone = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    
    const userDataJSON = localStorage.getItem("userData");
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        if ((userData.email === emailOrPhone || userData.number ===emailOrPhone) && userData.password === password) {

            window.location.href = "../Home/index.html";
        } else {
           
            alert("Authentication failed. Please check your credentials.");
        }
    } else {
       
        alert("Authentication failed. User not found.");
    }
});
