# Calcule a média aritmética dos valores contidos em uma lista.


def mediaDeUmaLista(lista):
    reducer = 0
    for item in lista:
        reducer += item
    return reducer / len(lista)


print(mediaDeUmaLista([2, 3, 4, 5, 6]))
