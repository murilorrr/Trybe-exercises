import pytest
import codigo


def test_is_odd_when_number_is_odd_returns_true():
    "Para um número ímpar a função deve retornar o valor True"
    assert codigo.is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    "Para um número par a função deve retornar o valor False"
    assert codigo.is_odd(2) is False


def test_is_even_when_number_is_odd_returns_false():
    "Para um número ímpar a função deve retornar o valor True"
    assert codigo.is_even(3) is False


def test_is_even_when_number_is_even_returns_true():
    "Para um número par a função deve retornar o valor False"
    assert codigo.is_even(2) is True


def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        codigo.divide(2, 0)
