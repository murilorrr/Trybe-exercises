const Books = require("../../Model/Books");

const getAll = async (req, res) => {
  const livros = await Books.getAll();
  livros ? res.status(200).json(livros) : res.status(404).send({ message: "Not Found"})
};

module.exports = getAll;