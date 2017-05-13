var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const routes = require('./routes/routes.js')

var app = express()
var port = process.env.port || 8080
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/../client/src')))
app.use(express.static(path.join(__dirname, '/../node_modules/')))

routes(app)
app.listen(port, () => {
  console.log('Listening on port: 8080')
})