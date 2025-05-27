const mongoose = require("mongoose");

const admineSchema = mongoose.Schema({

 email:{
    type:String,
    required:true
 },

  password:{
    type:String,
    required:true
 }


});



const admineModel = mongoose.model("adminedata",admineSchema)

module.exports = admineModel;
