const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm-password");

const btn = document.querySelector("#submit-button");

confirmPass.addEventListener("input", () =>{
    if(!(pass.value === confirmPass.value)){
        confirmPass.setCustomValidity("Passwords do not match");
        confirmPass.reportValidity()
    }
    else{
        confirmPass.setCustomValidity("");
    }
});