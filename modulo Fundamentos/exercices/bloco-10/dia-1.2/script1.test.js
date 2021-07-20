const sum = require('./script1');
const myRemove = require('./script2')

test('Soma de numeros com função soma', () => {
  expect(sum(4,5)).toBe(9);
});
test('Soma 0 e 0', () => {
  expect(sum(0,0)).toBe(0);
});
test('função soma recebe nada', () => {
  expect(() => {sum()}).toThrow();
})
test('função soma recebe nada encontra erro "parameters must be numbers"', () => {
  expect(() => {sum()}).toThrowError(new Error('parameters must be numbers'));
})

