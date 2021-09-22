"use strict"

const imagens = [
    "img/ft_A.jpg",
    "img/ft_B.jpg",
    "img/ft_C.jpg",
    "img/ft_D.jpg",
    "img/ft_E.jpg",
    "img/ft_F.jpg",
    "img/ft_G.jpg",
    "img/ft_H.jpg"
]

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    
    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = ` <img src= "${urlImagem}" alt""></img> `

    container.appendChild(novoLink)

}

const carregarImg = () => imagens.forEach(criarItem)

carregarImg()