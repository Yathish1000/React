import React, {useState} from "react";
const Login=()=>{

  const [login,setlogin]=  useState(false)
  const showlogin=()=>{
    setyathish(!yathish)
  }

    return(
    <div>
        <button onClick={showlogin}>ShowLogin</button>
       {login && 
         <form>
         <input type="name" placeholder="name here"/>
         <button>Login</button>
     </form>
       }
    </div>
    )
}
export default Login