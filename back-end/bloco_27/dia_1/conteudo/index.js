const express = require('express');
const app = express();
const port = 3000;

const getAll = require('./Controller/Books/getAll');
const getById = require('./Controller/Books/getById');
const Books = require('./Model/Books');

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/books', getAll);

app.get('/books/:id', getById)

app.post('/users', (req, res) => res.send())

app.listen(port, () => console.log(`App ouvindo na Porta: ${port}!`));