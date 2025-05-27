const contactModels = require("../Models/contactModels");

const addmessage = async(req,res)=>{

    const cre = await contactModels.create(req.body)
    res.status(201).json({
        success:true,
        cre
    })
}


const viewmessage = async(req,res)=>{

     await contactModels.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}

module.exports = {addmessage,viewmessage}