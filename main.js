'use strict'

//capturando elementos
let leiaMaisDiv = document.getElementsByClassName('leia-mais')
let leiaMaisButton = document.getElementById('leia-mais-btn')


//capturando article
let leiaMaisArticle = leiaMaisDiv[0].childNodes[1]
let leiaMaisDivElement = leiaMaisArticle.parentNode

console.log(leiaMaisDivElement.classList)

function observerArticle() {
    if (leiaMaisArticle.innerText == '' || leiaMaisArticle.textContent.length < 370) {

        leiaMaisButton.style.display = 'none'
        leiaMaisDivElement.classList.add('remove-styles')
        console.log('Conteúdo pequeno demais para o LEIA MAIS')

    } else if (leiaMaisArticle.textContent.length > 370) {
        console.log('Há conteúdos no article: \n\n' + leiaMaisArticle.innerText)
    }
}


// eventos do botao "Leia Mais"
leiaMaisButton.addEventListener('click', function () {

    //Validar o texto do botao para fazer realizar 
    //ações de ocultar e mostrar o resto do texto 

    if (leiaMaisButton.innerText == 'Leia Mais') {

        //revelar texto escondido
        leiaMaisArticle.style.display = '-webkit-flex'
        leiaMaisButton.innerText = 'Ocultar'


    } else {

        //ocultar texto
        leiaMaisArticle.style.display = 'block'
        leiaMaisArticle.style.webkitLineClamp = '2'
        leiaMaisArticle.style.webkitBoxOrient = 'vertical'
        leiaMaisButton.innerText = 'Leia Mais'

    }
})

observerArticle()