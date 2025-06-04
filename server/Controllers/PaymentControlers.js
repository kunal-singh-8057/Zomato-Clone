const paymentModels = require("../Models/PaymentModels");
const razorpay = require("razorpay");
const KEY = process.env.KEY;
const SECRETE = process.env.SECRETE
const crypto = require("crypto");

const instance = new razorpay({
    key_id: KEY,
    key_secret: SECRETE,
  });


const checkout = async(req,res)=>{



const options = {
  amount: Number(req.body.amount * 100),  
  currency: "INR",
};

try {
const order = await instance.orders.create(options)
console.log(order)

res.status(201).json({
    success:true,
    order,
    amount:options.amount
})
} catch (error) {
   console.log(error) 
}


}


const verifypayment = async(req,res)=>{
    const{razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedsignature = crypto.createHmac("sha256",process.env.SECRETE).update(body.toString()).digest("hex");
    const isAuths = razorpay_signature === expectedsignature;

    if(isAuths) 
    {
        await paymentModels.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        })
       
        res.redirect(`http://localhost:5173/Success?reference=${razorpay_payment_id}`)
      
    }

    else
    {
        res.status(404).json("failed")
    }
}


const getkey = async(req,res)=>{
    return res.status(200).json({key:process.env.KEY})
}

module.exports = {checkout,verifypayment,getkey}