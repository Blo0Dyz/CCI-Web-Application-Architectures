function validateForm(){
    let email = document.getElementById("email").value;
    if (email.includes("@")){
        document.getElementById("formMessage").textContent = "Valid Email";
        return true;
    }else{
        document.getElementById("formMessage").textContent = "Enter a valid Email";
        return false;
    }
}