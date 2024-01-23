//--- HEADER PARA FUNCIONALIDADE DA NAVBAR
let hamburguer = document.querySelector(".hamburguer")
let  navMenu = document.querySelector(".navMenu")

//-----ARROW FUNCTION QUE ATIVA A NAVBAR
hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle("ativar")
    navMenu.classList.toggle("ativar")
})


//---CARROSSEL

//--VARIAVEL PARA A DIV ONDE ESTÃO AS IMAGENS
let imgs = document.getElementById("img")
//----VARIAVEL PARA AS TAGS IMG DENTRO DA DIV
let img = document.querySelectorAll("#img img")
let num = 0


function atualizarCarrossel(){
    imgs.style.transform = `translateX(${-num * 500}px)`
}

//--PARA PROSSEGUIR
function sliderProximo(){
    num++

    if(num > img.length - 1){
        num = 0
    }

    atualizarCarrossel()
}

//---PARA REGREDIR
function sliderVoltar(){
    num--

    if(num < 0){
        num = img.length - 1
    }

    atualizarCarrossel()
}

setInterval(sliderProximo, 3000)



