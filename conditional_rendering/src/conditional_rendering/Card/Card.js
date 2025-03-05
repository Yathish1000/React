import React from 'react'

const Card = (z) => {
  return (
    <div>
      <img src={z.image} alt='' width={300}/>
      <h1>{z.title}</h1>
      <p>{z.des}</p>
    </div>
  )
}

export default Card
