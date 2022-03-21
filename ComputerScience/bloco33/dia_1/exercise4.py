# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
# "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .


def maiorNomeDaLista(lista):
    retorno = ""
    for item in lista:
        if len(item) > len(retorno):
            retorno = item
    return retorno


print(
    maiorNomeDaLista(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
)
