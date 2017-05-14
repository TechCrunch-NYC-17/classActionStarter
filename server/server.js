var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const session = require('express-session')
const bcrypt = require('bcrypt-nodejs')
const routes = require('./routes/routes.js')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const config = require('../config/fb')
const LocalStrategy = require('passport-local').Strategy
const db = require('./models/db')
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