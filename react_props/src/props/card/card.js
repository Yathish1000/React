import React from 'react'
import "./card.css"
const Card = (z) => {
    console.log(z);
    
  return (
    <div className='card'> 
      <h3>{z.title}</h3>
      <img src={z.image} width='200' />
      <p>{z.discription}</p>
      <span>{z.price}</span>
      <button style={{marginLeft:'10px',fontSize:'20px',padding:'5px 30px'}}>buy</button>
    </div>
  )
}

export {Card}
