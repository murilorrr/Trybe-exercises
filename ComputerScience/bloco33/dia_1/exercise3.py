# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# Por exemplo:


def desenhaQuadradoDeNAltura(n):
    for linha in range(n):
        print("*" * n)


desenhaQuadradoDeNAltura(7)
