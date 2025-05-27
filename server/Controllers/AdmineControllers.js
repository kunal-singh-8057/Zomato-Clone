const admineModels = require('../Models/admineModels');

const addAdmine = async(req,res)=>{

    const cre = await admineModels.create(req.body)
    res.status(201).json({
        success:true,
        cre
    })
}

const loginAdmine = async(req,res)=>{
    
    const{email,password} = req.body;

    if(email==="ks9836185@gmail.com"&&password==="987654321")
    {
        res.status(201).json("success")
    }

    else
    {
         res.status(404).json("failed")
    }
}


module.exports = {addAdmine,loginAdmine}



