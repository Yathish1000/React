import React from 'react'
import {Routes,Route} from 'react-router-dom'
import NavBar1 from './Forms/NavBar/NavBar'
import SignUp from './Forms/SignUp/SignUp'


const App = () => {
  return (
    <div>
      <NavBar1 />
      <Routes>
        <Route path='/Signup' element={<SignUp/>}/>
      </Routes>
      
    </div>
  )
}

export default App
