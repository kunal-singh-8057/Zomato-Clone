const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({

    bname:{
        type:String,
        required:true
    },

    bemail:{
        type:String,
        required:true
    },


    bdescription:{
        type:String,
        required:true
    },

    bcontent:{
        type:String,
        required:true
    },

    baurthor:{
        type:String,
        required:true
    },
})


const blogModels = mongoose.model("blogdata",blogSchema);

module.exports = blogModels;