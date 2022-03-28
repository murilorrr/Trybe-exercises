# Exercício 4: Vamos mudar um pouco nosso contexto para um sistema de vendas
# de uma cafeteria. Como podemos abstrair um pedido composto por vários itens?
# Qual seu nome, atributos e comportamentos?

from datetime import date


class Item:
    def __init__(self, nome: str, preco):
        self.nome = nome
        self.preco = preco


class Pedido:
    def __init__(self, itens):
        self.itensDoPedido: list[Item] = []
        self.itensDoPedido = itens
        self.tamanho = len(self.itensDoPedido)
        today = date.today()
        dataFormatada = today.strftime("%d/%m/%Y")
        self.data = dataFormatada

    def retirarPrimeiroItemDoPedido(self):
        self.itensDoPedido.pop(0)
        self.tamanho -= 1

    def adicionaItemAoPedido(self, item):
        self.itensDoPedido.append(item)
        self.tamanho += 1

    def getData(self):
        return self.data

    def getPedido(self):
        array = []
        for item in self.itensDoPedido:
            array.append((item.nome, item.preco))
        return array

    def totalPedido(self):
        total = 0
        for item in self.itensDoPedido:
            total = total + item.preco
        return total


maca = Item("maça", 2)
guarana = Item("Guarana", 5.9)
fritas = Item("Fritas crocantes", 10.9)


def main():
    pedido = Pedido([maca, guarana, fritas])
    print(pedido.getData())
    print(pedido.getPedido())
    print(pedido.totalPedido())

    return None


if __name__ == "__main__":
    main()
