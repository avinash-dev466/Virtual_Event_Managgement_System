let ORGANIZER = require('../model/organizer')
const bcrypt = require('bcrypt');

exports.registerOrganizer = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let Participantcreate = await ORGANIZER.create(req.body)
        res.status(201).json({
            status : 'success',
            message : "Register Organizer create Successfull",
            Participantcreate,
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}

exports.OrganizerLogin = async function(req, res, next) {
    try {
        let OrganizerCheck = await ORGANIZER.findOne({email : req.body.email})
        if(!OrganizerCheck){
            throw new Error("Organizer Not Found")
        }
        let passwordVerify = await bcrypt.compare(req.body.password ,OrganizerCheck.password)
        if(!passwordVerify){
            throw new Error("Password Invaild")
        }

        res.status(201).json({
            status : 'success',
            message : "Organizer Login Successfull",
            OrganizerCheck,
            
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}