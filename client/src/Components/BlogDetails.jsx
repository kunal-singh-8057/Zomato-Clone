import  Axios  from 'axios';
import React from 'react'
import '../Styles/BlogDetails.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import detailblogimg from '../Assets/blog/blog2.jpg'

const BlogDetails = () => {

  const[user,setusers] = useState([]);

    const{id} = useParams();

    useEffect(()=>{
      Axios.get(`http://localhost:4500/api/v1/viewblogsbyid/${id}`)
      .then((response)=>{
        setusers(response.data)
      })
    },[])

  return (
   <>

   <div className='blogdetailcontainer'>
    <img src={detailblogimg}></img>
    <br></br>
    <h1>{user.bname}</h1>
    <h2>by:{user.baurthor}</h2>
    <br></br>
    <p>{user.bcontent}</p>
    <Link to='/blog' className='blogbackbtn'>Find More New Blogs</Link>
   </div>

   </>

  )
}

export default BlogDetails