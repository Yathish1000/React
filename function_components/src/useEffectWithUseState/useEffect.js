import React, { useEffect, useState } from 'react'

const Goutham = () => {
    const [width,setWidth] = useState("100%")
    const [randomBgColor,SetRandomBgColor] = useState()

    useEffect(()=>{
        // alert("welcome")
        let a = "abcdef1234567890"
        let color = "#"

        for(let i=1; i<=6; i++){
            let value = Math.floor(Math.random() * a.length)
            // console.log(value);

            color += a[value] 
            // console.log(color);
              
        }

        SetRandomBgColor(color)

    },[width])

    const a =(divwidth,divbg)=>{
        // SetRandomBgColor(divbg)
        setWidth(divwidth)
    }

  return (
    <div style={{width:width,backgroundColor:randomBgColor}}>
      <button onClick={()=>{a("80%")}}>80%</button>
      <button onClick={()=>{a("60%")}}>60%</button>
      <button onClick={()=>{a("40%")}}>40%</button>
      <button onClick={()=>{a("20%")}}>20%</button>
    </div>
  )
}

export default Goutham
