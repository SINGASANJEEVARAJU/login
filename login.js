let email=document.getElementById("email")
let password=document.getElementById("password")
let btn=document.getElementById("login btn")
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let loginmail=email.value;
    let loginpassword=password.value;
    let emailstorage=localStorage.getItem("email")
    let passwordstorage=localStorage.getItem("password")

    if(loginmail == emailstorage && loginpassword == passwordstorage){
        alert("login successfully")
        window.location.href="home.html"
    }
        else{
            alert("invalid creditinals")

        }
    }) 