module.exports = (key) => {
  return JSON.parse(localStorage.getItem(key))
}
