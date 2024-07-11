let USER = require('../model/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



exports.sequre = async function(req, res, next) {
    try {
      let token = req.headers.authorization
      if(!token){
        throw new Error('Please attech Token..! ')
      }
      
      var decoded = jwt.verify(token, 'VEMS');
      console.log(decoded);
      
      req.userID = decoded.id
      req.eventID = decoded.id

      let userCheck = await USER.findById(decoded.id)
      if(!userCheck){
        throw new Error("User not found")
      }
      next()
    } catch (error) {
      res.status(404).json({
          status : "Fali",
          message: error.message,
      })
    }
  }


exports.registerParticipant = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let Participantcreate = await USER.create(req.body)
        res.status(201).json({
            status : 'success',
            message : "Register Participant create Successfull",
            Participantcreate,
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}

exports.ParticipantLogin = async function(req, res, next) {
    try {
        let userCheck = await USER.findOne({email : req.body.email})
        if(!userCheck){
            throw new Error("Participant Not Found")
        }
        let passwordVerify = await bcrypt.compare(req.body.password ,userCheck.password)
        if(!passwordVerify){
            throw new Error("Password Invaild")
        }
   
        var token = jwt.sign({ id: userCheck._id }, 'VEMS');

        res.status(201).json({
            status : 'success',
            message : "Participant Login Successfull",
            userCheck,
            token
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}
exports.AllParticipantData = async function(req, res, next) {
    try {
        let Participantfind = await USER.find()
        res.status(201).json({
            status : 'success',
            message : "All Participant Data Find Successfull",
            Participantfind
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}   
exports.ParticipantUpdata = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let ParticipantUpdata = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status : 'success',
            message : "User Updata Successfull",
            ParticipantUpdata
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}