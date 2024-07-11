const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  sessionNumber : {
    type : String,
    required: true
  },
  sessionDate : {
    type : String,
    required: true
  },
  sessionTime : {
    type : String,
    required: true
  },
  sessionSepker : {
    type : String,
  },
  eventID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user' 
},
});
let SESSION = mongoose.model('session',sessionSchema)
module.exports = SESSION