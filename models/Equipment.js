const mongoose = require('mongoose')
const Schema = mongoose.Schema

const equipmentSchema = new Schema({
  user: {ref: 'users', type: Schema.Types.ObjectId}, //имя создавшего пользователя
  name: {type: String, required: true}, // название оборудования
  startUsingDate: {type: Date, required: true}, //начало использования
  type: {type: String, required: true}, //ИО, СИ, ВО
  serialNumber: {type: String, required: true}, //Заводской || Инвертарный
  currentState: {type: String, required: true}, // Сломаный || Рабочий
  attestationNumber: {type: String, required: true}, //Номер аттестации
  attestationPeriod: {type: String, required: true}, //Период аттестации (1год)
  completeness: {type: String, required: false}, //комплектность (сколько штук в наборе? например сита)
  location: {type: String, required: true}, //местонахождение (привязать базу данных постов)
})

module.exports = mongoose.model('equipment', equipmentSchema)
