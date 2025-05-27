import React from 'react'
import '../Styles/About.css'
import Navbar from './Navbar'
import c1 from '../Assets/brands/b1.png'
import c2 from '../Assets/brands/b2.png'
import c3 from '../Assets/brands/b3.png'
import c4 from '../Assets/brands/b4.png'
import c5 from '../Assets/brands/b5.png'
import aboutimg2 from '../Assets/blog/blog3.jpg'
import aboutimg1 from '../Assets/blog/blog1.jpg'
import aboutimg3 from '../Assets/blog/blog2.jpg'
import { useNavigate } from 'react-router-dom'
const About = () => {

  const navigate = useNavigate();


  const redirect = ()=>{
    navigate("/blog")
  }


  return (
    <>
    <Navbar/>
    
    <div className='trustedsection'>
      <p>Trusted By 70+ Companies</p>

      <div className='companiesset'>
        <img src={c1}></img>
          <img src={c2}></img>
            <img src={c3}></img>
              <img src={c4}></img>
                <img src={c5}></img>
      </div>

      <div className='aboutext'>
        <h1>Discover Our</h1>
        <h2>Restuarant Story</h2>
      </div>

    <img src={aboutimg1} className='aboutimg' onClick={redirect}></img>
        <img src={aboutimg2} className='aboutimg' onClick={redirect}></img>
            <img src={aboutimg3} className='aboutimg' onClick={redirect}></img>
    </div>

    </>
  )
}

export default About