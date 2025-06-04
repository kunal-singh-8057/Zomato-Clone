const orderModels = require("../Models/OrderModels");
const jwt = require("jsonwebtoken");

const addorder = async(req,res)=>{

    const cre = await orderModels.create(req.body)
    res.status(201).json({
        success:true,
        cre
    })
}


const vieworder = async(req,res)=>{
    const view = await orderModels.find()
    res.status(201).json({
        success:true,
        view
    })
}


const vieworderbyid = async(req,res)=>{

    const id = req.params.id
     await orderModels.findById(id)
     .then(res.json({id}))
     .catch(err=>res.json(err))
   
}


module.exports = {addorder,vieworder,vieworderbyid}