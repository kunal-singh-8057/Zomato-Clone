import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import Navbar from './Navbar'
import leave from '../Assets/leaf.png'
import heroimg from '../Assets/testimonial-img.png'
import homeberry from '../Assets/berry.png'
import { Link } from 'react-router-dom'

const Home = () => {

 

  return (
    <>
   <Navbar/>

   <div className='herosections'>

    <div className='textarea'>
      <h1>Welcome To <br></br>
      Our <span>Indian</span> <br></br>
      Resturant.
      </h1>

      <img src={leave} className='homeleave'></img>

      <p className='homeparagraphs'>
      Food delivery websites make ordering meals effortless, connecting you with restaurants for <br></br>
      quick and hassle-free service. Enjoy a variety of cuisines delivered straight to your doorstep <br></br>
      with just a few clicks!
      </p>

    <img src={heroimg} className='heroimg'></img>
    <p className='tagline'>
    <strong>Chefs!</strong>  <br></br>
    Experience culinary excellence crafted by world-class chefs. <br></br>
      Indulge in flavors that redefine fine dining!</p>
    
    <img src={homeberry} className='homeberryimg'></img>

    <Link className='menubtn' to='/menu'>Check Our Menu</Link>

    </div>

   </div>



    </>
  )
}

export default Home