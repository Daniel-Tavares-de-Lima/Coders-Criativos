//--- HEADER PARA FUNCIONALIDADE DA NAVBAR
let hamburguer = document.querySelector(".hamburguer")
let  navMenu = document.querySelector(".navMenu")

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle("ativar")
    navMenu.classList.toggle("ativar")
})