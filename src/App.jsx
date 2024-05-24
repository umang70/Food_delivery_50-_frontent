import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Cart from './Components/Pages/Cart/Cart'
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder'


function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='cart' element={<Cart/>} /> 
        <Route path='/' element={<PlaceOrder/>} /> 




      </Routes>
     

    </div>
  )
}

export default App
