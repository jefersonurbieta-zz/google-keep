require = require('esm')(module)
require('dotenv').config()

global.__dirname = __dirname

module.exports = require('./main.mjs')
