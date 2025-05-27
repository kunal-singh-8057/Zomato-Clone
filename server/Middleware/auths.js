const jwt = require("jsonwebtoken");
const JWT_SECRETE = process.env.JWT_SECRETE;

const verifyusers = (req,res,next)=>{

    const token = req.cookies.token;

    if(!token)
    {
        res.status(404).json("failed")
    }



    const decode =  jwt.verify(token,JWT_SECRETE)
    next();
}

module.exports = verifyusers;