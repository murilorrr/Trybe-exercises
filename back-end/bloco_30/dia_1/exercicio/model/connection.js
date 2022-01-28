module.exports = (plantsArray) => {
  localStorage.setItem("plants", JSON.stringify(plantsArray))
}