import React, { useState } from 'react'
import '../Styles/Contact.css'
import Navbar from './Navbar'
import contactimg from '../Assets/news.jpg'
import svg1 from '../Assets/title-shape.svg'
import  Axios  from 'axios'



const Contact = () => {
  const[message,setmessage]  = useState("");


  const send = ()=>{
    Axios.post("http://localhost:4500/api/v1/addmessage",{
      message:message
    })
    .then(()=>{
      alert("Message Send Successfully Our Team Will contact you soon")
    })
  }

  return (
    <>
   <Navbar/>

   <div className='contactheadings'>
    <h1>Contact Us Now</h1>
    <br></br>
    <img src={svg1}></img>
   </div>

   <div className='contactdiv'>
    <img src={contactimg}></img>
    <h1>SubScribe Our NewsLetter</h1>
    <br></br>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <input placeholder='Enter the Email Here' onChange={(e)=>{setmessage(e.target.value)}}></input>
      <button onClick={send}>Send Now</button>
   </div>

  
    </>
  )
}

export default Contact