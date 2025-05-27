const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    p_name:{
        type:String,
        required:true
    },


    p_price:{
        type:String,
        required:true
    },

    p_calories:{
        type:String,
        required:true
    },

    categories:{
        type:Array,
        required:true
    },
})


const productModel = mongoose.model("productdata",productSchema);
module.exports = productModel;
