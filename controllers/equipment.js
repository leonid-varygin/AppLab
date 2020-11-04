const Equipment = require('../models/Equipment')
const errorHandler = require('../utils/errorHandler')

module.exports.addEquipment = async (req, res) => {
  try {
    const position = await new Equipment ({
      user: req.body.user,                     //Kristi
      name: req.body.name,                     //press IP500
      startUsingDate: req.body.startUsingDate, //date
      type: req.body.type,                     //IO, SI, VO
      serialNumber: req.body.serialNumber,     //123456
      currentState: req.body.currentState      //broken, active
    }).save()
    res.status(201).json(position)
  } catch (error) {
    errorHandler(res, error)
  }
}
/*
*  "_id": "5fa2adbe3d29021254084474",
    "name": "Press IP-500",
    "startUsingDate": "2020-11-04T13:33:50.560Z",
    "type": "IO",
    "serialNumber": 1234567,
    "currentState": "2020-11-04T13:33:50.560Z",
    "__v": 0
*
* */
