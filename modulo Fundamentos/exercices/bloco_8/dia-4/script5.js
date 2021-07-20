const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc,cur) => {
    let contador = 0;
    for (let i = 0; i < cur.length; i += 1) {
      if (cur[i].toLowerCase() === 'a') {
        contador += 1;
      }
    };
    return acc + contador;
  },0)
}

assert.deepStrictEqual(containsA(), 20);