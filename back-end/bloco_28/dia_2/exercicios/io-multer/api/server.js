const { PORT } = process.env;

const app = require('./app');

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));