import React, { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
import navlogo from '../Assets/brands/b4.png'
import {Link, useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import  Axios  from 'axios';
import { useSelector } from 'react-redux'


const Navbar = () => {

  const navigate = useNavigate();
  const items = useSelector((state)=>state.cart);


  
  const  cart = ()=>{
    navigate("/cart")
  }

  
  const  profile = ()=>{
    navigate("/profile")
  }


   const[userid,setuserid] = useState("");
  const[userdetails,setuserdetails] = useState("");

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

  return (
    <>

    <div className='nav'>

      <img src={navlogo} className='navlogo'></img>

      <div className='navlinks'>
        <Link to='/home' className='navlink'>Home</Link>
        <Link to='/about' className='navlink'>About</Link>
        <Link to='/menu' className='navlink'>Menu</Link>
        <Link to='/gallery' className='navlink'>Gallery</Link>
        <Link to='/blog' className='navlink'>Blogs</Link>
        <Link to='/contact' className='navlink'>Contact</Link>
        <span className='count'>{items.length}</span>
      </div>

      <div className='sideitems'>

        <input type='text' className='searchbar' placeholder='Search Here...'></input>

        <FontAwesomeIcon icon={faMagnifyingGlass}  className='searchicon'/>

  
      <Link to={`/profile/${userid}`}>
          <FontAwesomeIcon icon={faUser} className='profile' onClick={profile}/> 
      </Link>

      
        <FontAwesomeIcon icon={faCartShopping}  className='cart' onClick={cart}/>

      </div>

    </div>

    </>
  )
}

export default Navbar