# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo" , caso não
# seja possível formar um triângulo.


def analizarTriangulo(ladoA, ladoB, ladoC):
    listaLados = [ladoA, ladoB, ladoC]
    ladoOrdenado = sorted(listaLados)

    somaDeQuaisquerDoisLadosMenorQueTerceiro = (
        ladoOrdenado[0] + ladoOrdenado[1] < ladoOrdenado[2]
    )

    doisLadosIguais = (
        ladoOrdenado[0] == ladoOrdenado[1]
        or ladoOrdenado[1] == ladoOrdenado[2]
    )

    tresLadosIguais = ladoOrdenado[0] == ladoOrdenado[2]

    if somaDeQuaisquerDoisLadosMenorQueTerceiro:
        print("Não é possivel montar um triangulo")
    elif tresLadosIguais:
        print("Triângulo Equilátero: três lados iguais.")
    elif doisLadosIguais:
        print("Triângulo Isósceles: quaisquer dois lados iguais")
    else:
        print("Triângulo Escaleno: três lados diferentes.")
