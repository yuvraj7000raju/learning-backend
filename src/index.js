const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/f', (req, res) => {
  res.send('Hello Wofgfrgrld!')
})
app.get('/jokes', (req, res) => {
  const jokes = ["hello world","hello universe"];
  res.send(jokes)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}` ,"---",process.env.PORT )
})