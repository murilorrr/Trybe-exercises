const { error } = require("console");

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;
  if (remaining >= 0){
    while (payable > 0) {
      while (payable >= coins[0]) {
        change.push(coins[0]);
        payable - coins[0];
      }

      while (payable >= coins[1]) {
        change.push(coins[1]);
        payable - coins[1];
      }

      while (payable >= coins[2]) {
        change.push(coins[2]);
        payable - coins[2];
      }

      while (payable >= coins[3]) {
        change.push(coins[3]);
        payable - coins[3];
      }

      while (payable >= coins[4]) {
        change.push(coins[4]);
        payable - coins[4];
      }

      while (payable >= coins[5]) {
        change.push(coins[5]);
        payable - coins[5];
      }

      while (payable >= coins[6]) {
        change.push(coins[6]);
        payable - coins[6];
      }

      while (payable >= coins[7]) {
        change.push(coins[7]);
        payable - coins[7];
      }
  }
  } else {
    throw new error('paid value is not enough')
  }
  return change;
}

getChange(100,700);