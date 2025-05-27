import React from 'react'
import '../Styles/Blog.css'
import Navbar from './Navbar'
import svg from '../Assets/title-shape.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import blogsetimg from '../Assets/blog/blog1.jpg'
import { Link } from 'react-router-dom'

const Blog = () => {

  const[users,setusers] = useState([]);



  useEffect(()=>{
    Axios.get("http://localhost:4500/api/v1/viewblogs")
    .then((response)=>{
      setusers(response.data)
    })
  },[])
  

  return (
    <>
   <Navbar/>

   <div className='blogcontainer'>
    <button>Blogs</button>
    <h1>Latest Publication</h1>
    <img src={svg}></img>
   </div>


<div className='blogdivs'>
  {
      users.map((user)=>{
        return(
          <div className='blogsets'>
            <img src={blogsetimg} className='blogsetimg'></img>
            <h1>{user.bname}</h1>
            <Link className='blogbtn' to={`/blogdetails/${user._id}`}>Reda More</Link>
          </div>
        )
      })
  }
</div>

    </>
  )
}

export default Blog