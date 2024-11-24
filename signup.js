let userinput=document.getElementById("username")
let emailinput=document.getElementById("email")
let passwordinput=document.getElementById("password")
let signup=document.getElementById("signup")
signup.addEventListener("click",(e)=>{
    e.preventDefault()
    if(userinput.value!==" "&&emailinput.value!==" "&&passwordinput.value!=" "){
        let name=userinput.value;
        let email=emailinput.value;
        let password=passwordinput.value;
        alert("signup done !!!")
localStorage.setItem("name" ,name)
localStorage.setItem("email",email)
localStorage.setItem("password",password)/
window.location.href="login.js"

    }
    else{  
        alert("please filll the details")
    }
})