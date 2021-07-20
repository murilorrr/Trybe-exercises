
function somaDeNumeros(numero) {
    numerosASomar = []
    for(let index = 1; index <= numero; index += 1){
        numerosASomar.push(index)        
    }
    soma = 0
    for(let i in numerosASomar){
        soma += numerosASomar[i]
    }
    return console.log(soma)
}
somaDeNumeros(5)