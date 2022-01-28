const saveToLocalStorage = require("../model/connection");
const getPlants = require("./getPlants")();

const especialPlantWithId = (plant, id) => {
  if (
    plant.needsSun &&
    plant.id === id &&
    plant.specialCare.waterFrequency > 2
  ) {
    return plant;
  }filteredPlants
  return null;
};

module.exports = getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = getPlants.filter((plant) => {
    return especialPlantWithId(plant, id);
  });
  filteredPlants ? saveToLocalStorage(filteredPlants) : null;
  return filteredPlants;
};
