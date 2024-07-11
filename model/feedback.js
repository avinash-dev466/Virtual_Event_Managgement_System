const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  email : {
    type : String,
    required: true
  },    
  Message : {
    type : String,
    required: true
  },
  Reviews :{
    type : String,
    required: true,
  },
  
});
let FEEDBACK = mongoose.model('feedback',feedbackSchema)
module.exports = FEEDBACK