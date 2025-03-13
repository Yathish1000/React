import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'



const Cart = () => {

        const [data, setdata] = useState([])
        const [del,setDel] = useState([])
    

    useEffect(() => {
        axios.get('http://localhost:4000/cart')
            .then((res) => {
                console.log(res);
                setdata(res.data)
            })
            .catch((res) => {
                console.log(res);

            })
    }, [del])

    const carddelete = (z)=>{
        axios.delete(`http://localhost:4000/cart/${z.id}`)
        alert("deledted cart")
        setDel(z)
    }

    return (
        <div>
            {
                data.map((x) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={x.image} />
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                    {x.rating}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>{carddelete(x)}}>delete</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default Cart
