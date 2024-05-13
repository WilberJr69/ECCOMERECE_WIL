const btnLogin = document.getElementById("login"),
        btnRegister=document.getElementById("register"),
        formRegister=document.querySelector(".register"),
        formLogin=document.querySelector(".login");
btnLogin.addEventListener("click",e=>{
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})
btnRegister.addEventListener("click",e=>{
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})
