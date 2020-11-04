const express = require('express')
const router = express.Router()
// const passport = require('passport')
const controller = require('../controllers/equipment')

//Нужен для поддержания сессии
// passport.authenticate('jwt',{session: false})
router.get('/add-equipment', controller.addEquipment)

module.exports = router
