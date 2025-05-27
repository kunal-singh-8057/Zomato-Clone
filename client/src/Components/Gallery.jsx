import React from 'react'
import '../Styles/Gallery.css'
import Navbar from './Navbar'
import svg from '../Assets/title-shape.svg'
import testmo from '../Assets/testimonial-img.png'
import testimonialimg1 from '../Assets/testimonials/t1.jpg'
import testimonialimg2 from '../Assets/testimonials/t3.jpg'

const Gallery = () => {
  return (
    <>
    <Navbar/>

    <div className='galleryheading'>
      <button>Customer Say's</button>
      <br></br>
      <h1>What Our Customer Says</h1>
      <br></br>
      <img src={svg}></img>
    </div>

    <img src={testmo} className='testmo'></img>


    <div className='testimonialsets'>

      <div className='testimonial1'>
      <img src={testimonialimg1}></img>
      <br></br>
      <h4>Divyam Choudhary</h4>
      <br></br>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</p>
      </div>


       <div className='testimonial2'>
       <img src={testimonialimg2}></img>
       <br></br>
      <h4>Nilay Hirpara</h4>
      <br></br>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</p>
      </div>


    </div>

    </>
  )
}

export default Gallery