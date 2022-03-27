# Exercício 3: E como poderíamos definir um círculo? Qual seu nome, atributos
# e comportamentos?

from math import pi
import math


class circulo:
    def __init__(self, raio):
        self.raio = raio

    def calculaArea(raio):
        return math.pow(raio, 2) * pi

    def calculaPerimetro(raio):
        return raio * pi * 2
