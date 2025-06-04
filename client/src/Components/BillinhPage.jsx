import React, { useEffect, useState } from 'react'
import '../Styles/Billing.css'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import billingimg from '../Assets/table-leaves-shape.png'
import billingleave from '../Assets/menu-bg.png'

const BillinhPage = () => {


  const[uname,setname] = useState("");
  const[uemail,setemail] = useState("");
  const[uaddress,setaddress] = useState("");
  const[uphone,setphone] = useState("")
  const[pname,setpname] = useState("");
  const[pprice,setprice] = useState("");


  const {userid,productid} = useParams();


  useEffect(()=>{

  
    Axios.get(`http://localhost:4500/api/v1/productbyid/${productid}`)
    .then((response)=>{

       setpname(response.data.p_name)
       setprice(response.data.p_price)
    })
   
    .catch(err=>console.log(err))


    Axios.get(`http://localhost:4500/api/v1/viewuserbyid/${userid}`)
    .then((response)=>{
      setname(response.data.name)
      setaddress(response.data.address)
      setphone(response.data.phone)
      setemail(response.data.email)
    })



  },[])


  const placeorder = ()=>{
   
    Axios.post("http://localhost:4500/api/v1/addorder",{
      uname:uname,
      uemail:uemail,
      uphone:uphone,
      uaddress:uaddress,
      pname:pname,
      pprice:pprice
    }).then(()=>{
      alert("Order Place successfully")
    })
  }



  
  const checkout = async(amount)=>{
    const{data:{key}} = await Axios.get("http://localhost:4500/api/v1/getkey")
    const{data:{order}} = await Axios.post("http://localhost:4500/api/v1/checkout",{amount})
    console.log("Order Amount:", order.amount);

    const options = {
     key, // Enter the Key ID generated from the Dashboard
     amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
     currency: "INR",
     name: "kunal",
     description: "Test Transaction",
     image: "https://example.com/your_logo",
     order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
     callback_url: "http://localhost:4500/api/v1/verifypayment",
    "prefill": {
         name: "kunal",
         email: "ks9836185@gmail.com",
         contact: "8057900731"
    },
    notes: {
        address: "Razorpay Corporate Office Dehradun"
    },
    theme: {
        "color": "#3399cc"
    }

 
};

 const razor = new window.Razorpay(options)
  razor.open();

  }

const final =  ()=>{
 checkout(pprice)
 placeorder()
}

  return (
    <>
    <img src={billingimg} className='imgbilling'></img>
       <img src={billingleave} className='billingleave'></img>

    <div className='billingpages'>
  
      <br></br>
        <h1>Billing Detials</h1>
        <br></br>
        <br></br>
        <input placeholder='Enter the Name here' defaultValue={`${uname}`} readOnly></input>
        <br></br>
        <input placeholder='Enter the Email here' defaultValue={`${uemail}`} readOnly></input>
        <br></br>
        <input placeholder='Enter the Phone here' defaultValue={`${uphone}`} readOnly></input>
        <br></br>
        <input placeholder='Enter the Address here' defaultValue={`${uaddress}`} readOnly></input>
        <br></br>
        <input placeholder='Enter the Dish here'  defaultValue={`${pname}`}  readOnly></input>
        <br></br>
        <input placeholder='Enter the Price here'  defaultValue={`${pprice}`}  readOnly></input>
        <br></br>
        <button onClick={placeorder}>Pay With COD</button>
        <button onClick={final}>Pay Online Now</button>
    </div>


    </>
  )
}

export default BillinhPage