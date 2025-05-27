import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Styles/Login.css'
import {Link} from 'react-router-dom'
import formbackgrounds from '../Assets/table-leaves-shape.png'
import leave from '../Assets/leaf.png'
import menu1 from '../Assets/menu-1.png'
import menu2 from '../Assets/menu-2.png'
import menu3 from '../Assets/menu-3.png'
import menu4 from '../Assets/menu-4.png'
import dish1 from '../Assets/dish/4.png'
import berry from '../Assets/berry.png'


const Login = () => {

    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");

    Axios.defaults.withCredentials = true;

    const navigate = useNavigate();


    const login = ()=>{
      Axios.post("http://localhost:4500/api/v1/login",{
        email:email,
        password:password,
      }).then((response)=>{
        

        if(response.data === "success")
        {
          alert("Welcome Back Users")
          navigate("/home")
        }

        else
        {
          alert("User Not Existed Proceed To Register")
          navigate("/")
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
<h1>Login</h1>
<br></br>
<input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
<br></br>
<input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
<br></br>
<br></br>
<button onClick={login}>Login</button>
<br></br>
<br></br>
<label className='label1'>Don't Have An Account Yet : <Link to='/' className='logbtn'>Signup</Link> </label>
<br></br>
<br></br>
<label  className='label2'>Login As An Admine : <Link to='/admine' className='logbtn'>Admine</Link> </label>
<br></br>
<img src={berry} className='berry'></img>
<img src={berry} className='berry1'></img>
</div>


  </>
  )
}

export default Login