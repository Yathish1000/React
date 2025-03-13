import React, { useState } from 'react'
import Navbar1 from './components/navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './components/home/Home'
import About from './components/About/About'
import Recipies from './components/Recipes/Recipies'
import Cart from './components/Cart/Cart'

const App = () => {



  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/recipes' element={<Recipies/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </div>
  )
}

export default App
