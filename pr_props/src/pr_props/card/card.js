import React from 'react'

const Card = (z) => {
  return (
    <div style={{border:'2px solid black', width:'30%',padding:'10px 10px',}} >
      <img src={z.image} width="100" style={{paddingTop:'20px'}}/>
      <h3>{z.name} </h3>
      <p>{z.disc}</p>
    </div>
  )
}

export default Card
