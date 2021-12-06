const express= require('express');

const app = express();

const handleHelloRequest = (req, res) => {
  res.status(200).send('hello world!SIM');
}

app.get('/hello', handleHelloRequest);

app.listen(3002, () => {
  console.log('aplicação ouvindo na porta 3002');
})
