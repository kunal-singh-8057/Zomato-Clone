const userModels = require("../Models/userModels");

const userwithoutjwt = async(req,res)=>{
    
    const id = req.params.id
    await userModels.findById(id)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}

module.exports = {userwithoutjwt}
