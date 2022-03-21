const { Router } = require('express');

const router = Router();
const multer = require('multer');
const controllers = require('../controllers');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'envios');
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('file'), controllers.envio);
router.get('/', (req, res) => {
  res.status(200).send({ ok: 'esta tudo ok' });
});

module.exports = router;