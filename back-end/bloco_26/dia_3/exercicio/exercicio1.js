const WhatsIsTheNumber = (number) => {
  if (number > 0) return 'positive';
  if (number < 0) return 'negative';
  if (number === 0) return 'neutral';
  if(typeof number !== 'number') return 'NaN'
}

module.exports = WhatsIsTheNumber;