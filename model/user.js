const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : {
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
  age : {
    type : String,
    required: true,
  },
});
let USER = mongoose.model('user',userSchema)
module.exports = USER