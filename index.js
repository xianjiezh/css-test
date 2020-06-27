const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.sendfile('./public/index.html')
})

app.get('/main.css', (req, res) => {
  setTimeout(() => {
    res.sendfile('./public/main.css')
  }, 10000);
})
app.get('/main.js', (req, res) => {
  res.sendfile('./public/main.js')
})


app.listen(3001)