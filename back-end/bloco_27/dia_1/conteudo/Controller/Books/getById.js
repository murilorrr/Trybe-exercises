const Books = require("../../Model/Books");

const getById = async (req, res) => {
  const { id } = req.params;
  const livros = await Books.getByAuthorId(id);
  livros ? res.status(200).json(livros) : res.status(404).send({ message: "Not Found"})
};

module.exports = getById;