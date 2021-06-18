const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

let divs = document.querySelectorAll('.container div')
for (let i = 0; i < divs.length; i += 1) {
    divs[i].addEventListener("click",function (event){
        let existeTech = document.getElementsByClassName('tech')
        if (existeTech.length === 0){
            event.target.classList.add('tech')
    }
    })
}

let texto = document.getElementById('input')
texto.addEventListener('keyup',function(){
    let frase = texto.value
    document.getElementsByClassName('tech')[0].innerText = frase
})

function addClassTech(event){
    event.target.innerText = "sim"
    }

let titulo = document.getElementsByTagName('h1')[0]
titulo.addEventListener('mouseover',PintaDeRed)
function PintaDeRed (){
    titulo.style.backgroundColor = "red"
}
titulo.addEventListener('mouseleave',PintaDeGreen)
function PintaDeGreen (){
    titulo.style.backgroundColor = "#333"
}
/*
 
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  console.log(event.target)
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.