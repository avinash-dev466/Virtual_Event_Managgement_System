const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizerSchema = new Schema({
  OrganizerName : {
    type : String,
    required: true
  },
  email : {
    type : String,
    required: true
  },    
  password : {
    type : String,
    required: true
  },
  contactNumber :{
    type : Number,
    required: true,
  },
  
});
let ORGANIZER = mongoose.model('organizer',organizerSchema)
module.exports = ORGANIZER