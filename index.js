let sessãoPrinicipal = document.querySelector("body")
let main                = document.createElement("main")
let titulo              = document.createElement("h1")
let productsList        = document.createElement("ul")

let resultado           = document.createElement("ul")
let total               = document.createElement("li")
let botao               = document.createElement("button")
let textButton          = document.createElement("span")

productsList.className  = "produto"


sessãoPrinicipal.appendChild(main)
main.appendChild(titulo)
main.appendChild(productsList)
main.appendChild(resultado)
resultado.appendChild(total)
main.appendChild(botao)
botao.appendChild(textButton)


titulo.innerText        = "Virtual Market"
total.innerText         = SomaDosResultados(productsCart)
textButton.innerText    = "Finalizar Compra"

function listaDeItens(produtos){
    for(let i = 0; i<produtos.length; i++){
        let itens   =  produtos[i]
        let card    = createCardItens(itens)
        productsList.appendChild(card)
    }
}

listaDeItens(productsCart)

function createCardItens(itens){
    let nome  = itens.name
    let valor = itens.price
    let id    = itens.id
 
    
    let productsDetails     = document.createElement("li")
    let tituloDoProduto     = document.createElement("h2")
    let preco               = document.createElement("span")


    tituloDoProduto.innerText   = nome
    preco.innerText             = `R$ ${valor}`.replace(".", ",")

    productsDetails.appendChild(tituloDoProduto)
    productsDetails.appendChild(preco)

    return productsDetails
}


function SomaDosResultados(produtos){
    let precoTotal     = 0
    for(let i = 0; i<produtos.length; i++){
        let preco      = produtos[i].price
        precoTotal = preco + precoTotal

    }
    return ` o preço total é de ${precoTotal}`
}