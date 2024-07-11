let EVENT = require('../model/event');

exports.createEvent = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let createEvent = await EVENT.create(req.body)
        res.status(201).json({
            status : 'success',
            message : "Create Event Successfull",
            createEvent,
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
exports.viewEvent = async function(req, res, next) {
    try {
        let Eventfind = await EVENT.find({userID : req.userID}).populate('userID')
        res.status(201).json({
            status : 'success',
            message : "All View Event Find Successfull",
            Eventfind
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
exports.UpdataEvent = async function(req, res, next) {
    try {
        let EventUpdata = await EVENT.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status : 'success',
            message : "Event Updata Successfull",
            EventUpdata
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}

exports.DeleteEvent = async function(req, res, next) {
    try {
        await EVENT.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : 'success',
            message : "Event Delete Successfull",
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
