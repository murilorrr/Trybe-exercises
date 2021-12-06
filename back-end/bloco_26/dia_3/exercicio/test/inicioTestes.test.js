// 1 - Se passado um valor menor que 7 , por exemplo 4 , a resposta deve ser "reprovado" ; 2 - Se passado um valor maior que 7 , por exemplo 9 , a resposta ser "aprovado" ; 3 - E, não podemos esquecer do "OU", sendo assim, se passado 7 , a resposta deve ser "aprovado" ;

const { expect } = require('chai');

const calculaSituacao = require('../calculaSituação');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
  it('retorna aprovado', () => {
    const resposta = calculaSituacao(8);

    expect(resposta).to.be.equals('aprovado');
  })
});