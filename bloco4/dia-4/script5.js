
function maiorValor(array) {
    maiorValor = 0
    for(let i in array){
        if(maiorValor >= array[i]){
            
        } else {
            maiorValor = array[i]
        }
    }
    return console.log(array.indexOf(maiorValor))
    
}


function menorValor(array) {
    menorValor = 0
    for(let i in array){
        if(menorValor <= array[i]){
            
        } else {
            menorValor = array[i]
        }
    }
    return console.log(array.indexOf(menorValor))
    
}

function maiorPalavra(array) {
    maiorPalavra = 0
    indexDaMaiorPalavra = 0
    for(let i in array){
        if(maiorPalavra >= array[i].length){
            
        } else {
            maiorPalavra = array[i].length
            indexDaMaiorPalavra = i
        }
    }
    return console.log(array[indexDaMaiorPalavra])
    
}

function inteiroMaisRepetido(array) {
    let numeroDeRepetiçõesDoMaisRepetidoAnterior = 0
    let indexDoNumeroMaisRepetido = 0
    for(let i in array){

        let numeroDeRepetiçõesDoNumeroi = 0
        for(let j in array){

            if(i === j){
                numeroDeRepetiçõesDoNumeroi += 1
            } else {

            }
        }
        if (numeroDeRepetiçõesDoNumeroi > numeroDeRepetiçõesDoMaisRepetidoAnterior ){
            numeroDeRepetiçõesDoMaisRepetidoAnterior = numeroDeRepetiçõesDoNumeroi
            indexDoNumeroMaisRepetido = i
        } else {

        }
}   
    console.log(array[indexDoNumeroMaisRepetido])
}

inteiroMaisRepetido([2, 3, 2, 5, 8, 2, 3])
