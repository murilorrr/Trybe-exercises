const saveToLocalStorage = require('../model/connection');
const getFromLocalStorage = require('../model/getFromLocalStorage');

module.exports = createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  const plantsArray = getFromLocalStorage("plants");
  plantsArray.push(mappedPlant);
  saveToLocalStorage(plantsArray);
  return mappedPlant;
};