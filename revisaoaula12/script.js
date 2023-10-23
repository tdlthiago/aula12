
/* selecionar elementos do HTML no JS*/
document.querySelector('.texto2')//selecionando classe
document.querySelector('#texto')//selecionando o id



/* trocando textos*/
let paragrafo = document.querySelector('.texto2')
paragrafo.innerText = "troquei o texto da classe .texto2"
document.querySelector('.texto2').innerText = "troquei o texto da classe .texto2"




/* troca textos com elementos*/
document.querySelector('#texto').innerHTML = " <h2>troquei o texto da classe .texto2"



/*alterando estilo com CSS*/
let texto = document.getElementById('texto1')
texto.style.backgroundColor = "green"


/*criando um elemento*/
let paragrafo = document.createElement('p')//<p> </p>
paragrafo.innerText = "texto novo aqui"//<p> texto novo aqui <p>
paragrafo.body.appenChild(paragrafo)//anexando paragrafo dentro do body


/* trocando elementos*/ 
let imagem = document.querySelector('img')
imagem.setAttribute('src','linkdaimagem')

/*Eventos mais usando:
onclick,onmouseenter,onmouseout e onchange esses eventos colocamos na tag do botao

<button onclick="suaFuncao()"> Clique aqui</button>
*/


/*AddEventListener*/
//Esse evento e usado diretamente no documento JS
texto.addEventListener('cilck',suaFuncao)


/*parentNODE */
document.querySelector('li').parentNode

