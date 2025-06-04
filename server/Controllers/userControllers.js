const userModels = require("../Models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRETE = process.env.JWT_SECRETE;


const register = async(req,res)=>{
    
    const{name,email,password,phone,address} = req.body;

    let user = await userModels.findOne({email})

    if(user) return res.status(404).json("failed");

    const hashpassword = await bcrypt.hash(password,10);

    user = await userModels.create({name,email,password:hashpassword,phone,address});

    res.status(201).json("success");


}

const login = async(req,res)=>{
    
    const{email,password} = req.body;

    let user = await userModels.findOne({email})

    if(!user) return res.status(404).json("failed")

    const ismatch = await bcrypt.compare(password,user.password)

    if(!ismatch) return res.status(404).json("failed");

    const token = await jwt.sign({_id:user._id},JWT_SECRETE);

    res.status(201).cookie("token",token,{
        httpOnly:false,
        secure: false, // Set to true in production with HTTPS
        sameSite: "lax",
        maxAge:60*60*1000
    }).json("success")
}


const viewusers = async(req,res)=>{
   
    await userModels.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}

const usersbyid = async(req,res)=>
{
    const id = req.params.id
    await userModels.findById(id)
   .then(user=>res.json(user))
   .catch(err=>res.json(err))
}

const deleteuser = async(req,res)=>{
    const id = req.params.id
    let del = await userModels.findByIdAndDelete(id);
    res.status(201).json(del);
}


const verify = async(req,res)=>{
    res.status(201).json("success")
}


const getcurrentuser = async(req,res)=>{

    const token = req.cookies.token; // cookie-parser middleware needed
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRETE);
    const userId = decoded._id;
    // Fetch user data with userId, then return
    res.json({ userId });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
  
}



module.exports = {register,login,viewusers,usersbyid,deleteuser,verify,getcurrentuser}
