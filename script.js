let pass1;
let pass2;
document.addEventListener("keyup", () => {
            pass1 = document.querySelector("#password").value;
            pass2 = document.querySelector("#confirmpassword").value;
            if (pass1 === pass2) {
                document.querySelector("#password").classList.add("valid");
                document.querySelector("#confirmpassword").classList.add("valid");
            }
            else {
                document.querySelector("#password").classList.remove("valid");
                document.querySelector("#confirmpassword").classList.remove("valid");        
            }
});
