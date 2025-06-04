import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../Styles/Profile.css'
import profileimg from '../Assets/testimonials/t2.jpg'
import Axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Profile = () => {

   const[userid,setuserid] = useState("");
  const[userdetails,setuserdetails] = useState("");
  const[orderid,setorderid] = useState("");

  useEffect(()=>{
    Axios.get("http://localhost:4500/api/v1/currentuser")
    .then((response)=>{

      const id = response.data.userId;
      setuserid(response.data.userId);

      return Axios.get("http://localhost:4500/api/v1/viewuserbyid/"+id)
      .then((userresponse)=>{
        setuserdetails(userresponse.data)
      })


    }).catch((error)=>{
      console.log(error)
    })
  },[])

  const navigate = useNavigate();


  const logout = ()=>{
    navigate("/")
    alert("Logout Successfully")
  }


  const id = useParams();

  useEffect(()=>{
    Axios.get("http://localhost:4500/api/v1//vieworderbyid/"+id)
    .then((response)=>{
      setorderid(response.data._id)
      console.log(response.data._id)
    })
  },[])

  
  
  return (
 <>
    <Navbar/>
    <br></br>

    <div className='profileform'>

      <img src={profileimg}></img>

      <div className='inputblocks'>
        
      <input defaultValue={userdetails.name}></input>
  
        <input defaultValue={userdetails.email}></input>
       
          <input defaultValue={userdetails.address}></input>
         
            <input defaultValue={userdetails.phone}></input>
      </div>
      <button onClick={logout}>Logout</button>
      <Link to={`/order/${orderid}`} className='orderbtns'>View Orders</Link>
    </div>

 </>
  )
}

export default Profile