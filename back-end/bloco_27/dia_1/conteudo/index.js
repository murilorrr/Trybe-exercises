const express = require('express');
const app = express();
const port = 3000;

const Books = require('./Model/Books');

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/books',(req, res) => res.send(''));

app.get('/books/:id', (req, res) => {
  const id = req.params;
  const booksOfAuthor = Books.getByAuthorId(id);
  if (booksOfAuthor.length) {
    res.status(404).end();
  }
  res.status(200).json(booksOfAuthor);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));