import React, { useState } from 'react'
import axios from "axios"
import {Card,Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"

const Receipes = ({data}) => {

    const navigate = useNavigate()

    return (
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:10,margin:"10px 0"}}>
            {data.map((x) => {
                return (
                    <Card style={{ width: '18rem' }} onClick={()=>{navigate(`/recipes/${x.name}`)}}>
                        <img src={x.image}/>
                        <Card.Body>
                            <Card.Title>{x.name}</Card.Title>
                            <Card.Text>
                                {x.ingredients}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            })}


        </div>
    )
}

export default Receipes
