const express = require('express')
const app = express()
const port = 3000

const { User } = require('./models')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/user', async (req, res) => {
  try { 
    const userModel =  await User.findAll();
    return res.send(userModel);
  } catch (e) {
    console.log(e.message);
  }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));