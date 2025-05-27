const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({


  message:{
    type:String,
    required:true
 }


});



const contacteModel = mongoose.model("contactdata",contactSchema)

module.exports = contacteModel;
