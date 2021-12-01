const readlineSync = require('readline-sync');

var imcPeso = readlineSync.questionFloat('Qual seu peso?');

var imcAltura = readlineSync.questionFloat('Qual sua altura?');

console.log(`Seu imc é: ${imcPeso / imcAltura ** 2}`);