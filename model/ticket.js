const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  TicketNumber : {
    type : String,
    required: true
  },
  TicketDate : {
    type : String,
    required: true
  },
  TicketType : {
    type : String,
    required: true
  },
  TicketPrice : {
    type : String,
    required: true
  },
  eventID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user' 
},
});
let TICKET = mongoose.model('ticket',ticketSchema)
module.exports = TICKET