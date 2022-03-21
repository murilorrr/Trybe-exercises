const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');
const { Router } = require('express');

const router = Router();
const multer = require('multer');
const controllers = require('../controllers');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const stream = fs.createReadStream('../meuArquivo.txt');
const form = new FormData();
form.append('file', stream);

const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/files/upload', form, {
    headers: {
      ...formHeaders,
    },
  })
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => {
    console.error(error);
  });

const upload = multer({ storage });

router.post('/', upload.single('file'), controllers.fileController);
router.get('/', (req, res) => {
  res.status(200).send({ ok: 'esta tudo ok' });
});

module.exports = router;
