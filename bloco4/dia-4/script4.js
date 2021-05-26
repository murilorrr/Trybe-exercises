
function ePalindromo(palavra){
    let sim = true
    let tamanhoDaPalavra = palavra.length
    for (let i in palavra){

        if(palavra[i] === palavra[tamanhoDaPalavra - 1]){
            tamanhoDaPalavra -= 1
        } else {
            sim = false
            break
        }
    }
    console.log(sim)
}

ePalindromo("desenvolvimento")