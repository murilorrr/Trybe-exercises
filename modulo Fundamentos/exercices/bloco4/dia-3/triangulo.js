function escreveTrianguloEquilateroDeBaseN(n){
    let NumeroDeLinhas = Math.round(n/2) ;
    let NumeroDeColunas = n;
    let LadoEsquerdo = Math.floor(n/2)-1;
    let LadoDireito = Math.round(n/2) ;
    for (let nlinha = 0;nlinha <= NumeroDeLinhas; nlinha += 1){
        linha = "";
        if (nlinha == NumeroDeLinhas ){
            for(let ncoluna = 0; ncoluna < NumeroDeColunas; ncoluna += 1){
                linha += "*"
            }
            console.log(linha)
        } else {
            for(let ncoluna = 0; ncoluna < NumeroDeColunas; ncoluna += 1){
                if (ncoluna <= LadoEsquerdo || ncoluna >= LadoDireito){
                    linha += " ";
                } else if (ncoluna - LadoEsquerdo  >= 2 && ncoluna - LadoDireito  <= -2){
                    linha += " ";
                }  else {
                    linha += "*";
                }
            }
            LadoEsquerdo -= 1
            LadoDireito += 1
            console.log(linha)
    }}
}
escreveTrianguloEquilateroDeBaseN(39)