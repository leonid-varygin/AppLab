const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const equipmentRoutes = require('./routes/equipment')
const authRoutes = require('./routes/auth')
require('colors')
const app = express()

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected'.bgCyan.black))
  .catch(err => console.log(err))

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

const versionAPI = 'v1'

app.use(`/api/${versionAPI}/equipment`, equipmentRoutes)
app.use(`/api/${versionAPI}/auth`, authRoutes)


module.exports = app

