const {
  sum
} = require("./sum");

test('sums two values', () => {
  expect(5).toEqual(sum(2, 3));
});
