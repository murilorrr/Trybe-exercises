let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

function ImprimeNumeros(numbers){
    for(index = 0;index<numbers.length;index += 1){
        console.log(numbers[index]);
    }
}

function SomaEImprime(numbers){
    let soma = 0;
    for(index=0;index<numbers.length;index += 1){
        soma = soma + numbers[index]
    }
    console.log(soma)
}

function ImprimeMedia(numbers){
    let soma = 0;
    for(index=0;index<numbers.length;index += 1){
        soma = soma + numbers[index]
    }
    soma = soma/numbers.length
    console.log(soma)
}

function NumeroMaiorOuMenorQue20(numbers){
    let soma = 0;
    for(index=0;index<numbers.length;index += 1){
        soma = soma + numbers[index]
    }
    soma = soma/numbers.length
    if (soma>20){
        console.log("valor maior que 20")
    } else {
        console.log("valor menor ou igual a 20")
    }
}
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
function MaiorValorDentreEles(numbers){
    let maiorNumero = 0
    for(index = 0;index<numbers.length;index += 1){
        if (numbers[index]> maiorNumero){
            maiorNumero = numbers[index]
        } else {

        }
    }
    console.log(maiorNumero)
}

function ValoresImpares(numbers){
    let impares = []
    for(index = 0;index<numbers.length;index += 1){
        if (numbers[index]%2 !== 0){
            impares.push(numbers[index])
        } else {
        }
    }
    if (impares.length == 0){
        console.log("nenhum valor ímpar encontrado")
    } else {
        console.log(impares)
    }
}

function MenorValorEntreEles(numbers){
    let menor = 999;
    for(index = 0;index<numbers.length;index += 1){
        if (numbers[index] < menor){
            menor = numbers[index];
        } else {
        }
    }
    console.log(menor);
}

function criarArreyAtéNumeroEImprime(numero){
    let arrey = []
    for (index = 1; index<=numero;index += 1 ){
        arrey.push(index)
    }
    console.log(arrey)
}

function criarArreyAtéNumeroERetornaArrey(numero){
    let arrey = []
    for (index = 1; index<=numero;index += 1 ){
        arrey.push(index)
    }
    return arrey
}

function todosOsNumerosDoArreyDivididosPor2(arrey){
    let numeroDivididoPor2 = 0
    arrey = criarArreyAtéNumeroERetornaArrey(arrey)
    for (index=0;index<arrey.length;index+=1){
        numeroDivididoPor2 = arrey[index]/2
        console.log(numeroDivididoPor2)
    }
}
todosOsNumerosDoArreyDivididosPor2(25)