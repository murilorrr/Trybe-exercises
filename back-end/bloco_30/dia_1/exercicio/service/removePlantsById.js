const saveToLocalStorage = require("../model/connection");
const getPlants = require("./getPlants")();

module.exports = removePlantById = (id) => {
  const newPlants = getPlants.filter((plant) => plant.id !== id);
  saveToLocalStorage(newPlants);
};