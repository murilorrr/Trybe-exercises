//Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.
const { describe, test } = require('mocha');
const { expect } = require("chai");
const WhatsIsTheNumber = require("../exercicio1.js")

describe("should results in function on ", ()=> {

  test('should result is positive', () => {
    const result = WhatsIsTheNumber(1);
    
    expect(result).to.be.equal('positive');
  });

  test('should result is negative', () => {
    const result = WhatsIsTheNumber(-1);
    
    expect(result).to.be.equal('negative');
  });

  test('should result is neutral', () => {
    const result = WhatsIsTheNumber(0);
    
    expect(result).to.be.equal('neutral');
  });

  test('should result is NaN', () => {
    const result = WhatsIsTheNumber('0');
    
    expect(result).to.be.equal('NaN');
  });
  
})