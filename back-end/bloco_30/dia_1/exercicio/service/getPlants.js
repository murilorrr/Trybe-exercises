const getFromLocalStorage = require('../model/getFromLocalStorage');

module.exports = getPlants = () => {
  const plants = getFromLocalStorage("plants");
  return plants;
};