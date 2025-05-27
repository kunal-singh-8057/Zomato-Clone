import React, { useState } from 'react'
import '../Styles/Signup.css'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import formbackgrounds from '../Assets/table-leaves-shape.png'
import leave from '../Assets/leaf.png'
import menu1 from '../Assets/menu-1.png'
import menu2 from '../Assets/menu-2.png'
import menu3 from '../Assets/menu-3.png'
import menu4 from '../Assets/menu-4.png'
import dish1 from '../Assets/dish/4.png'

const Signup = () => {

  const[name,setname] = useState("");
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");
  const[phone,setphone] = useState("");
  const[address,setaddress] = useState("");

  const navigation = useNavigate();

  const signup = ()=>{
    Axios.post("http://localhost:4500/api/v1/register",{
      name:name,
      email:email,
      password:password,
      phone:phone,
      address:address
    }).then((response)=>{
      if(response.data === "success")
      {
        alert("Registeration Successfully Proceed To Login")
        navigation("/login")
      }

      else
      {
          alert("User Already Existed Try To Login")
      }
    })
  }

  return (
    <>

   <div className='form1'>
    <img src={formbackgrounds} className='formbackground'></img>
     <img src={leave} className='leave'></img>
      <img src={menu1} className='menu1'></img>
       <img src={menu2} className='menu2'></img>
        <img src={menu3} className='menu3'></img>
         <img src={menu4} className='menu4'></img>
   </div>

<div className='platform1'>
<img src={dish1} className='dish1'></img>
<br></br>
<br></br>
<br></br>
<br></br>
<h1>Signup</h1>
<input placeholder='Enter the name here' onChange={(e)=>{setname(e.target.value)}}></input>
<br></br>
<input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
<br></br>
<input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
<br></br>
<input placeholder='Enter the phoneno here' onChange={(e)=>{setphone(e.target.value)}}></input>
<br></br>
<input placeholder='Enter the address here' onChange={(e)=>{setaddress(e.target.value)}}></input>
<br></br>
<button onClick={signup}>Submit</button>
<br></br>
<br></br>
<label className='label1'>Already Have An Account : <Link to='/login' className='logbtn'>Logins</Link> </label>
<br></br>
<br></br>
<label  className='label2'>Login As An Admine : <Link to='/admine' className='logbtn'>Admine</Link> </label>
</div>

    </>
  )
}

export default Signup