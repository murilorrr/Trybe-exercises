const saveToLocalStorage = require('../model/connection');
const getFromLocalStorage = require('../model/getFromLocalStorage');

module.exports = editPlant = (plantId, newPlant) => {
  const plants = getFromLocalStorage("plants").map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
  saveToLocalStorage(plants);
};