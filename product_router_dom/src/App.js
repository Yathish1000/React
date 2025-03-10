import React, { useState } from 'react'
import Navbar1 from './Routescopmnent/Navbar/Navbar'
import {Route, Routes} from "react-router-dom"
import Home from './Routescopmnent/Home/Home'
import About from './Routescopmnent/About/About'
import Receipes from './Routescopmnent/Receipes/Receipes'
import SingleRecipe from './Routescopmnent/singleRecipe/SingleRecipe'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])


  axios.get("https://dummyjson.com/recipes")
    .then(res => {
      // console.log(res.data.recipes)
      setData(res.data.recipes)
      // console.log(data);   
    })
    .catch(err => console.log(err))

  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipes' element={<Receipes data={data}/>}/>
        <Route path='/recipes/:name' element={<SingleRecipe data={data}/>}/>
      </Routes>
    </div>
  )
}

export default App
