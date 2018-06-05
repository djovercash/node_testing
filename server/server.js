const express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.status(404).send({
    error: "Page Not Found",
    name: "App v1.0"
  })
})

app.get('/users', (req, res) => {
  res.status(200).send([
    {name: "Sheila", age: 33},
    {name: "Drew", age:30},
    {name: "Paul", age: 29}
  ])
})

app.listen(3000)
module.exports.app = app
