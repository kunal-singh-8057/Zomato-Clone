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


const Navbar = () => {

  const navigate = useNavigate();

  
  const  cart = ()=>{
    navigate("/cart")
  }

  
  const  profile = ()=>{
    navigate("/profile")
  }

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
      </div>

      <div className='sideitems'>

        <input type='text' className='searchbar' placeholder='Search Here...'></input>

        <FontAwesomeIcon icon={faMagnifyingGlass}  className='searchicon'/>

  
        <FontAwesomeIcon icon={faUser} className='profile' onClick={profile}/> 

      
        <FontAwesomeIcon icon={faCartShopping}  className='cart' onClick={cart}/>

      </div>

    </div>

    </>
  )
}

export default Navbar