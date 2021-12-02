const MoreThan50 = (number1, number2, number3) => {
  return new Promise((resolve, reject) => {
    if(typeof number1 == 'string' || typeof number2 == 'string' || typeof number3 == 'string') {
      reject(new Error("Informe apenas números"));
    };

    const result = (number1 + number2) * number3;

    if(result < 5000) {reject(new Error("Valor muito baixo"))};
    resolve(result);
  });
}

const randomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
}

const fetch = async () => {
  try {
    const result = await MoreThan50(randomNumber(), randomNumber(), randomNumber());
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

fetch();