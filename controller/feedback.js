let FEEDBACK = require('../model/feedback')

exports.AddFeedback = async function(req, res, next) {
    try {
        let createFeedbcak = await FEEDBACK.create(req.body)
        res.status(201).json({
            status : 'success',
            message : "Add Feedback Successfull",
            createFeedbcak,
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
exports.ViewFeedback = async function(req, res, next) {
    try {
        let findFeedbcak = await FEEDBACK.find()
        res.status(201).json({
            status : 'success',
            message : "View Feedback Successfull",
            findFeedbcak,
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}