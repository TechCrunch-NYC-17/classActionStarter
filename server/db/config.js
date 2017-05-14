const config = require('./db')
const knex = require('knex')(config)

module.exports = knex
