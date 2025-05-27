const blogModels = require("../Models/blogModels");


const addblogs = async(req,res)=>{
    
    const cre = await blogModels.create(req.body)
    res.status(201).json({
        success:true,
        cre
    })
}


const viewblogs = async(req,res)=>{
  
    await blogModels.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))

}



const viewblogsbyid = async(req,res)=>{
    const id = req.params.id
    await blogModels.findById(id)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}



const deleteblogs = async(req,res)=>{
    const id = req.params.id
    await blogModels.findByIdAndDelete(id)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}


module.exports = {addblogs,viewblogs,viewblogsbyid,deleteblogs}


