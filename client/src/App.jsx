import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Menu from './Components/Menu'
import Admine from './Components/Admine'
import Dashboard from './Components/Dashboard'
import ProtectedRoutes from './Components/ProtectedRoutes'
import Profile from './Components/Profile'
import Cart from './Components/Cart'
import BlogDetails from './Components/BlogDetails'
import BillinhPage from './Components/BillinhPage'
import OrderDetails from './Components/OrderDetails'
import Success from './Components/Success'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/admine' element={<Admine/>}></Route>

      <Route element={<ProtectedRoutes/>}>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/profile/:id' element={<Profile/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/blogdetails/:id' element={<BlogDetails/>}></Route>
      <Route path='/billing/:userid/:productid' element={<BillinhPage/>}></Route>
      <Route path='/order/:id' element={<OrderDetails/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      </Route>



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
