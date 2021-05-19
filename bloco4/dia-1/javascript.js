// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// // -----------------------------------
let peca = "RAINHA";
let a = 0
let b = 0
let c = 0
function adicao(a,b){
  let c = a + b
  console.log(c)
}

function subtracao(a,b){
  var c = a - b
  console.log(c)
}

function multiplicacaoo(a,b){
  var c = a * b
  console.log(c)
}

function divisao(a,b){
  let c = a / b
}

function adição(a,b){
  var c = a + b
  console.log(c)
}

function modulo(a,b){
  var c = a % b
  console.log(c)
}

function maiorQue(a,b){
  if (a>b){
    console.log(a + " é maior que " + b + ".")
  } else if (b>a) {
    console.log(b + " é maior que " + a + ".")
  } else {
    console.log(a + " e " + b + "são iguais.")
  }
}

function maioresQue(a,b,c){
  if (a>b && a>c) {
    console.log(a + " é maior que " + b + " e " + c)
  } else if (b>a && b>c) {
    console.log(b + " é maior que " + a + " e " + c)
  } else if (c>a && c>b) {
    console.log(c + " é maior que " + a + " e " + b )
  } else {

  }
}
  function testeDeValores(a){
    if(a==="positivo"){
      console.log("positive")
    } else if(a==="negativo"){
      console.log("negative")
    } else {
      console.log("zero")
    }
  }

function angulosDeTriangulo(a,b,c){
  if(a < 0||b < 0||c < 0){
    console.log("error")
  }
  if(a+b+c ===180){
    console.log(true)
  } else {
    console.log(false)
  }
}

function movimentoDaPeça(peça){
  peça = peça.toLowerCase()
  switch(peça){
    case "peao": 
      console.log("Anda uma casa para frente");
      break;
    case "torre":
      console.log("Anda por toda horizontal e vertical");
      break;
    case "cavalo":
      console.log("Anda sempre na proporção 2:1, uma casa na direção vertical ou horizontal e duas ao lado não escolhido pela primeira casa");
      break;
    case "bishop":
      console.log("Anda sempre pela diagonal");
      break;
    case "rainha":
      console.log("Anda tanto pelas diagonais quanto pelas verticais e horizontais");
      break;
    case "rei":
      console.log("Anda somente uma casa tanto pelas diagonais quanto pelas verticais e horizontais");
      break;
    default:
      console.log("esta não é uma peça de xadrez");
      break;
  }
}

function avaliarNota(nota){
  if (nota >= 90) {
    console.log("A")
  } else if (nota >= 80 && nota <90) {
    console.log("B")
  } else if (nota >= 70 && nota <80) {
    console.log("C")
  } else if (nota >= 60 && nota <70) {
    console.log("D")
  } else if (nota >= 50 && nota <60) {
    console.log("E")
  } else {
    console.log("F")
  }
}

function seraQueAlgumÉPar(a,b,c){
  if(a/2 === 0||b/2 === 0||c/2 === 0){
    console.log("true")
  } else {
    console.log("false")
  }


function seraQueAlgumÉImpar(a,b,c){
  if(a%2 !== 0||b%2 !== 0||c%2 !== 0){
    console.log("true")
  } else {
    console.log("false")
  }
}

function lucroAoVenderMil(a,b){
  if(a<0 || b< 0){
    console.log("erro")
  } else {
    let c = ((a*1.2) + b)*1000
    console.log("Lucro de " + c)
  }
}

function salarioLiquido(salárioBruto){
  let salárioDeduzidoDoInss = 0
  let salárioTotal = 0
  // Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
  if (salárioBruto <= 1556.94){
    salárioDeduzidoDoInss = salárioBruto
  } else if (salárioBruto > 1556.94 && salárioBruto <= 2594.92){
    salárioDeduzidoDoInss = salárioBruto * 0.91
  } else if (salárioBruto > 2594.92 && salárioBruto <= 5189.82){
    salárioDeduzidoDoInss = salárioBruto * 0.89
  } else if(salárioBruto * 0.89 >= 570,88){
    salárioDeduzidoDoInss = salárioBruto - 570.88
  } else {
    salárioDeduzidoDoInss = salárioBruto * 0.89
  }
  if (salárioDeduzidoDoInss <= 1903.98){
    salárioTotal = salárioDeduzidoDoInss salárioTotal
  } else if (salárioDeduzidoDoInss > 1903.98 && salárioDeduzidoDoInss <= 2.826.65){
    salárioTotal = salárioDeduzidoDoInss - (salárioDeduzidoDoInss*0.925 - 142.80)
  } else if (salárioDeduzidoDoInss > 2.826.65 && salárioDeduzidoDoInss <= 3.751,05 ) {
    salárioTotal = salárioDeduzidoDoInss - (salárioDeduzidoDoInss*0.85 - 354.80)
  } else if (salárioDeduzidoDoInss > 3.751,05 && salárioDeduzidoDoInss <= 4.664.68 ) {
    salárioTotal = salárioDeduzidoDoInss - (salárioDeduzidoDoInss*0.775 - 636.13)
  } else {
    salárioTotal = salárioDeduzidoDoInss - (salárioDeduzidoDoInss*0.725 - 869.36)
  }
  console.log("Resultado: " + salárioTotal)


}
