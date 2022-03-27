# Exercício 2: Para exercitar nossa capacidade de abstração, vamos modelar
# algumas partes de um software de geometria. Como poderíamos modelar um
# objeto retângulo?


class Retangulo:
    def __init__(self, ladoA, ladoB):
        self.ladoA = ladoA
        self.ladoB = ladoB

    def calcularArea(ladoA, ladoB):
        return ladoA * ladoB

    def calculaPerimetro(ladoA, ladoB):
        return ladoA * 2 + ladoB * 2
