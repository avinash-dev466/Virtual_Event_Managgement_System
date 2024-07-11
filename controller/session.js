let SESSION = require('../model/session')


exports.AddSession = async function(req, res, next) {
    try {
        req.body.eventID = req.eventID
        let createSession = await SESSION.create(req.body)
        res.status(201).json({
            status : 'success',
            message : "Create Session Successfull",
            createSession,
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
exports.ViewSession = async function(req, res, next) {
    try {
        let Sessionfind = await SESSION.find({eventID : req.eventID}).populate('eventID')
        res.status(201).json({
            status : 'success',
            message : "All View Session Find Successfull",
            Sessionfind
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
exports.UpdataSession = async function(req, res, next) {
    try {
        let SessionUpdata = await SESSION.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status : 'success',
            message : "Session Updata Successfull",
            SessionUpdata
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}

exports.DeleteSession = async function(req, res, next) {
    try {
        await SESSION.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : 'success',
            message : "Session Delete Successfull",
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
