# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def retornaMaiorNumero(numero1, numero2):
    maiorNumero = 0
    if numero1 > numero2:
        maiorNumero = numero1
    else:
        maiorNumero = numero2

    return maiorNumero


print(retornaMaiorNumero(3, 7))
