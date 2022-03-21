require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('../routes');

const { PORT } = process.env;

const controllers = require('../controllers');
const middlewares = require('../middlewares');

const app = express();
app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(express.static(path.join(`${__dirname}/../uploads`)));
console.log(__dirname);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.use('/files/upload', routes.fileUpload);

app.use('/envios', routes.envio);
