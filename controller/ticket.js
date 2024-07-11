let TICKET = require('../model/ticket');

exports.createTicket = async function(req, res, next) {
    try {
        req.body.eventID = req.eventID
        let createTicket = await TICKET.create(req.body)
        res.status(201).json({
            status : 'success',
            message : "Create Ticket Successfull",
            createTicket,
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
exports.viewTicket = async function(req, res, next) {
    try {
        let Ticketfind = await TICKET.find({eventID : req.eventID}).populate('eventID')
        res.status(201).json({
            status : 'success',
            message : "All View Ticket Find Successfull",
            Ticketfind
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
exports.UpdataTicket = async function(req, res, next) {
    try {
        let TicketUpdata = await TICKET.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status : 'success',
            message : "Ticket Updata Successfull",
            TicketUpdata
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}

exports.DeleteTicket = async function(req, res, next) {
    try {
        await TICKET.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : 'success',
            message : "Ticket Delete Successfull",
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
