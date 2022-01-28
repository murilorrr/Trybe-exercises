const calculateWaterFrequency = (needsSun, size, origin ) => {
  return needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
}

module.exports = initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin)

  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};








