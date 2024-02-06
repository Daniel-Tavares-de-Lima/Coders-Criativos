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



//-----REVIEWS

const reviews = [
    {
        id: 1,
        nome: "Daniel Tavares",
        job: "FullStack Developer",
        img: "./Imagens/Section-Main3/perfil.jpg",
        texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
        id: 2,
        nome: "João Pedro",
        job: "Analista de Projetos",
        img: "./Imagens/Section-Main3/Perfil2.png",
        texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
        id: 3,
        nome: "Carlos Jonathan",
        job: "Analista de Projetos",
        img: "./Imagens/Section-Main3/Perfil3.png",
        texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    }

]

const img2 = document.getElementById("person-img")
const autor = document.getElementById("autor")
const job = document.getElementById("ocupacao")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//-- Começar a setar os itens
let contagem = 0

//-----Carregar inicialização do item
window.addEventListener("DOMContentLoaded", function(){
    mostrarPessoa()
})

function mostrarPessoa(){
    const item = reviews[contagem]
    img2.src = item.img
    autor.textContent = item.nome
    job.textContent = item.job
    info.textContent = item.texto
}

//--proximo
nextBtn.addEventListener("click", function(){
    contagem++
    if(contagem > reviews.length - 1){
        contagem = 0
    }
    mostrarPessoa()
})

//---anterior
prevBtn.addEventListener("click", function(){
    contagem--
    if(contagem < 0){
        contagem = reviews.length - 1
    }
    mostrarPessoa()
})

