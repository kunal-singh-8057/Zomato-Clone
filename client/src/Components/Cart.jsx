import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Cart.css'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import cartpageimg from '../Assets/dish/4.png'
import {remove} from '../Redux/CartSlice'
import { Link} from 'react-router-dom'
import { useState } from 'react'
import  Axios  from 'axios'



const Cart = () => {

  const item = useSelector((state)=>state.cart);
  const dispatch = useDispatch();


  const[userid,setuserid] = useState("");


    useEffect(()=>{
   
      Axios.get("http://localhost:4500/api/v1/currentuser",{withCredentials:true})
     .then((response)=>{
       const  id = response.data.userId
       setuserid(id)
      console.log(response.data.userId)

      return Axios.get("http://localhost:4500/api/v1/viewuserbyid/"+id)


     }).catch((error)=>{
      console.log(error)
     })


  },[])




  const removeitem = (id)=>{
    dispatch(remove(id))
  }

 
  return (
<>
   <Navbar/>
   <br></br>

   <div className='cartpagedesign'>

    {

      item.map((cartproducts)=>{
        return(
          <div className='cartpagesets' key={cartproducts._id}>

            <img src={cartpageimg}></img>
            <br></br>
            <h1>{cartproducts.p_name}</h1>

              <h2>Rs:{cartproducts.p_price}</h2>
            <br></br>
            <br></br>
            <button onClick={()=>removeitem(cartproducts._id)}>Remove</button>
            <Link className='buybtns' to={`/billing/${userid}/${cartproducts._id}`}>Buy Now</Link>
          
            <br></br>
            <br></br>

          </div>
        )
      })


      
    }



    

   </div>

</>
  )
}

export default Cart