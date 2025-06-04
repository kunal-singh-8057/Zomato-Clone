import React, { useEffect, useState } from 'react'
import '../Styles/Menu.css'
import Navbar from './Navbar'
import menuimg1 from '../Assets/dish/4.png'
import menuimg2 from '../Assets/dish/2.png'
import menuimg3 from '../Assets/dish/3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faV } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux'

import {add} from '../Redux/CartSlice'
import Axios from 'axios'

const Menu = () => {

  const[users,setusers] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    Axios.get("http://localhost:4500/api/v1/viewproducts")
    .then((response)=>{
      setusers(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])


  const nonveg = ()=>{
    Axios.get("http://localhost:4500/api/v1/productbycategory?categories=Non Veg")
    .then((response)=>{
      setusers(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  const veg = ()=>{
    Axios.get("http://localhost:4500/api/v1/productbycategory?categories=Veg")
    .then((response)=>{
      setusers(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }


  const vegan = ()=>{
    Axios.get("http://localhost:4500/api/v1/productbycategory?categories=Vegan")
    .then((response)=>{
      setusers(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }


  const fun = (user)=>{
    alert("Add To Cart Successfully")
    dispatch(add(user))
  }

  return (
    <>
   <Navbar/>

   <div className='filters'>
    
    <button className='filter1' onClick={veg}>Veg</button>
    <button className='filter2' onClick={nonveg}>Non-Veg</button>
    <button className='filter3' onClick={vegan}>Vegan</button>


   </div>

   <div className='menusets'>

{


users.map((user)=>{
  
return(

   

      <div className='m1' key={user._id}>
        <img src={menuimg1}></img>
        <br></br>
        <h1 className='pheadings'>{user.p_name}</h1>
        <br></br>
        <h5>Calories:{user.p_calories}</h5>
        <br></br>
        <h3>Type:{user.categories}</h3>
        <br></br>
        <div className='cardsicons'>
        <h1 className='pprice'>Rs:{user.p_price}</h1>
        <FontAwesomeIcon icon={faPlus} className='plus' onClick={()=>fun(user)}/>
        </div>
      </div>
  
)


})

}

</div>

    </>
  )
}

export default Menu