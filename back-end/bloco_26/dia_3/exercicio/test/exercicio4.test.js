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

describe('A resposta', ()=> {

  describe('é certa', ()=> {
    it('ok', async() => {

      let writeFile;

      before(() => {
        writeFile = sinon.stub(fs, 'writeFile').returns('ok');
      });

      after(() => {
        writeFile.restore();
      });

      const response = await writeContentInFile('arquivo.txt', '#vqv conteúdo');

      expect(response).to.be.equal('ok');
      
    });

  });

  describe('é errada', ()=>{
    it('error', async() => {

      let writeFile;

      before(() => {
        writeContentInFile= sinon.stub(fs, 'writeFile').rejects('error');
      });

      after(() => {
        writeFile.restore();
      })

      const response = await writeContentInFile('arquivo.txt', '#vqv conteúdo');

      expect(response).to.be.equal('error');

    });
  });
});