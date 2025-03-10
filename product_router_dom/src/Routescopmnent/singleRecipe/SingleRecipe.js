import React from 'react'
import {useParams} from "react-router-dom"

const SingleRecipe = ({data}) => {
    // console.log(useParams());
    // console.log(data);
    

    const {name} = useParams()

    const item = data.find(x=>x.name === name)
    // console.log(item);
    

  return (
    <div>
        <img src={item.image} width={200}/>
      
    </div>
  )
}

export default SingleRecipe
