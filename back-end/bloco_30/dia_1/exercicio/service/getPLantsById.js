const getFromLocalStorage = require('../model/getFromLocalStorage');

module.exports = getPlantById = (id) => {
  return getFromLocalStorage("plants").filter((plant) => plant.id === id);
};