const defaultPlants = require('../plantsData');
const saveToLocalStorage = require('../model/connection');

module.exports = savePlants = () => {
  const plants = JSON.stringify(defaultPlants);
  saveToLocalStorage(plants);
};