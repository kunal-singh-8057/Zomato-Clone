const productmodels = require("../Models/productModels");


const addproducts = async(req,res)=>{
    const cre = await productmodels.create(req.body)
    res.status(201).json({
        succes:true,
        cre
    })
}


const viewproducts = async(req,res)=>{
    await productmodels.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}


const viewbyid = async(req,res)=>{
    const id = req.params.id
    const view = await productmodels.findById(id)
    res.status(201).json({
        success:true,
        view
    })
}


const viewbycategory = async(req,res)=>{
    const qcategory = req.query.categories;

    let products;

    if(qcategory)
    {
       products =  await productmodels.find({categories:{
            $in:[qcategory]
       }})

       .then(user=>res.json(user))
       .catch(err=>res.json(err))
    }
}

const deleteproduct = async(req,res)=>{

    const id = req.params.id
    const del = await productmodels.findByIdAndDelete(id)
    res.status(201).json({
        succes:true,
        del
    })
}

module.exports = {addproducts,viewproducts,viewbyid,viewbycategory,deleteproduct}