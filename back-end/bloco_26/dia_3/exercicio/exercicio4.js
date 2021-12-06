const fs = require('fs/promises');

const writeContentInFile = async (fileName, fileContent) => {
  try {
    await fs.writeFile(`${__dirname}/${fileName}`, fileContent);
    return 'ok';
  } catch (error) {
    return 'error';
  }
}

module.exports = writeContentInFile;