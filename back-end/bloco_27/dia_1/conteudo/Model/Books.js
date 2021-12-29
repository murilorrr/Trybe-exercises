const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    `SELECT * FROM model_example.books`
    );
  return books.length ? books : null;
};

const getByAuthorId = async (id) => {
  const [bookByAuthorId] = await connection.execute(
    `SELECT *
    FROM model_example.books
    WHERE author_id = ?`,
    [id]);
  return bookByAuthorId.length ? bookByAuthorId : null;
};

module.exports = {
  getAll,
  getByAuthorId,
};
