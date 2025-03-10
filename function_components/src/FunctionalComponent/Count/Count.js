// import React, {useState} from 'react'

// const Count = () => {
//     // console.log(useState());

//     const [count,setCount] = useState(0)
//     const [color,setColor] = useState("red")
//     const [width,setWidth] =useState("100%")

//     const inc = ()=>{
//         setCount(count+1)
//     }

//     const col = (x,z)=>{
//         setColor(x)
//         setWidth(z)
//     }
    
//   return (
//     <div style={{textAlign:"center",backgroundColor:color,width:width}}>
//         <button onClick={()=>{col("violet","80%")}}>violet</button>
//         <button onClick={()=>{col("pink","60%")}}>pink</button>
//         <button onClick={()=>{col("lightblue","40%")}}>lightblue</button>
//         <button onClick={()=>{col("green")}}>green</button>


//         <button onClick={inc}>+</button>
//       {count}
//       <button onClick={()=>{setCount(count-1)}} disabled={count === 0}>-</button>

//     </div>
//   )
// }

// export default Count


import React,{useState} from 'react'

const Count = () => {
  

  // console.log(useState());
  const [count,setcount]=useState(0)
  const inc=()=>{
    setcount(count+1)
  }
  // console.log(count);
  return (
   
    <div>
      <button onClick={inc}>+</button>
      {count}
      <button onClick={()=>{setcount(count-1)}} disabled={count<=0}>-</button>
    </div>
  )
}

export default Count

// import React from 'react'

const Color = () => {

  const[color,setcolor]=useState('')
  return (
    <div style={{backgroundColor:color, width:500,height:500 ,display:'flex',marginLeft:'30%'}}>
     <div>
     <button onClick={()=>{setcolor('pink')}} style={{backgroundColor:'pink'}}>pink</button>
     <button onClick={()=>{setcolor('blue')}} style={{backgroundColor:'blue'}}>blue</button>
     <button onClick={()=>{setcolor('yellow')}}style={{backgroundColor:'yellow'}}>yellow</button>
     </div>
      
    </div>
  )
}

export { Color}
