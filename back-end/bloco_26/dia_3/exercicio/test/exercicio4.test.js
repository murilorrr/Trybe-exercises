// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .
// Descreva todos os cenários de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

const fs = require('fs/promises');
const sinon = require('sinon');
const { expect } = require('chai');
const writeContentInFile = require('../exercicio4');

describe('Teste para escrita do arquivo passando nome do arquivo e conteudo', ()=> {

  describe('retorna', ()=> {

    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });
  
    after(() => {
      fs.writeFileSync.restore();
    });
    
    it('ok se deu bom', async ()=>{

      
      const response = await writeContentInFile('sim.txt', 'exato');

      expect(response).to.be.equal('ok');

    });

    it('erro se deu ruim', async ()=>{

      const response = await writeContentInFile('sim.txt', 'exato');

      expect(response).to.be.equal('error');

    });

  });

});