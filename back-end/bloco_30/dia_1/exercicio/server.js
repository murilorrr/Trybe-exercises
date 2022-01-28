const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

require('./seedling')();

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/plants', (req, res) => res.status(200).json('plants'));

app.get('/plants/:id', (req, res) => res.status(200).json('plants'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(bodyParser.json());