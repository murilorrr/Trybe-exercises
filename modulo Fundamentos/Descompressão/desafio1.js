function getMaxNumber(numbers) {
  return numbers.reduce((acumulator, current) => {
    acumulator < current ? acumulator = current : acumulator;
    return acumulator;
  } ,0);
}

console.log(getMaxNumber([1,2,3,4,5,6]));