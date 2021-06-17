const calculaFatorial = (numero) => {
  let resultado = 1;
  while (numero > 1) {
    resultado = resultado * numero;
    numero = numero - 1;
  }
  return resultado
}

const funcaoMaiorPalavra = (string) => {
  let palavra = "";
  string = string.split(' ')
  let i = 0
  while (i != string.length){
    if (string[i].length > palavra.length){
      palavra = string[i]
      }
    i += 1
  }
  return palavra
}

// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const cliqueiNoBotao = ()=> {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    let contador = document.getElementsByTagName('p')[0];
    let numero = parseInt(contador.innerText);
    numero += 1;
    contador.innerText = numero;
  })
}

cliqueiNoBotao()