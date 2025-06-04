const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

    uname:{
        type:String,
        required:true
    },

    uemail:{
        type:String,
        required:true
    },

    uphone:{
        type:String,
        required:true
    },


    uaddress:{
        type:String,
        required:true
    },


    pname:{
        type:String,
        required:true
    },


    pprice:{
        type:String,
        required:true
    },
});

const orderModels = mongoose.model("orderdata",orderSchema);
module.exports = orderModels;