import React, {useState} from 'react'

const Count = () => {
    // console.log(useState());

    const [count,setCount] = useState(0)
    const [color,setColor] = useState("red")
    const [width,setWidth] =useState("100%")

    const inc = ()=>{
        setCount(count+1)
    }

    const col = (x,z)=>{
        setColor(x)
        setWidth(z)
    }
    
  return (
    <div style={{textAlign:"center",backgroundColor:color,width:width}}>
        <button onClick={()=>{col("violet","80%")}}>violet</button>
        <button onClick={()=>{col("pink","60%")}}>pink</button>
        <button onClick={()=>{col("lightblue","40%")}}>lightblue</button>
        <button onClick={()=>{col("green")}}>green</button>


        <button onClick={inc}>+</button>
      {count}
      <button onClick={()=>{setCount(count-1)}} disabled={count === 0}>-</button>

    </div>
  )
}

export default Count
