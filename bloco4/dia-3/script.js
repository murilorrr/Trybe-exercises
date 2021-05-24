function CriarQuadradoDeNLados(n){
    let AsteriscoEmLinha = ""    
    for(index = 0;index<n;index += 1){
        AsteriscoEmLinha += "*"
    }
    for (index = 0;index<n;index += 1){
        console.log(AsteriscoEmLinha)
    }
}

function CriarTrianguloDeNTamanho(NumeroDeLinhas){
    let AsteriscoEmLinha = ""
    for (index = 0;index < NumeroDeLinhas;index += 1){
        AsteriscoEmLinha += "*"
        console.log(AsteriscoEmLinha)
    }
}

function CriarTrianguloDeNTamanhoInvertido(size){
    let symbol = "*";
    let imputLine = "";
    let imputPosition = size
    for ( lineIndex = 0; lineIndex <= size; lineIndex += 1){
        for (Columnindex = 0; Columnindex < size; Columnindex += 1){
            if (Columnindex < imputPosition){
                imputLine += " "
            } else {
                imputLine += symbol
            }
        }
    console.log(imputLine);
    imputLine = "";
    imputPosition -= 1;
    }
}

function CriarTrianguloEquilated(size){
    
let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (size/ 2) + 1;
let controlLeft = midOfMatrix -1;
let controlRight = midOfMatrix + 1;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
}
}