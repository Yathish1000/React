import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Form, Modal } from 'react-bootstrap'

const Recipies = () => {

    const [data, setdata] = useState([])
    const [delItems, seDelItems] = useState()
    const [show, setShow] = useState(false)
    const [editrecipe, setEditRecipe] = useState([])
    const [ediUpdate,setEditUpdate] = useState()

    const HideModel = () => {
        setShow(false)
    }


    const EditRecipessss = (x) => {
        setEditRecipe({ ...editrecipe, [x.target.name]: x.target.value })
    }



    useEffect(() => {
        axios.get('http://localhost:4000/recipes')
            .then((res) => {
                console.log(res);
                setdata(res.data)
            })
            .catch((res) => {
                console.log(res);

            })
    }, [delItems,ediUpdate])

    console.log(data);

    const cartItem = (z) => {
        axios.post("http://localhost:4000/cart", z)
        alert("added to cart")
    }

    const Delete = async (del) => {
        try {
            axios.delete(`http://localhost:4000/recipes/${del.id}`)
            alert("deleted")
            seDelItems(del)
        } catch (err) {
            console.log(err);
        }
    }

    const SaveChanges = ()=>{
        axios.put(`http://localhost:4000/recipes/${editrecipe.id}`,editrecipe)
        setShow(false)
        setEditUpdate(editrecipe)
    }


    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
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
                                    <Button variant="primary" onClick={() => { cartItem(x) }}>Addtocart</Button>
                                    <Button style={{ margin: "20px" }} onClick={() => { Delete(x) }}>delete</Button>
                                    <Button onClick={()=>{
                                        setShow(true)
                                        setEditRecipe(x)}}>Edit</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>


            <Modal show={show} onHide={HideModel}>
                <Modal.Header closeButton>
                    <Modal.Title>add recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>recipe Name</Form.Label>
                            <Form.Control type="text" name='name' value={editrecipe.name} autoFocus onChange={EditRecipessss} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>recipe image</Form.Label>
                            <Form.Control type="text" name='image' value={editrecipe.image} autoFocus onChange={EditRecipessss} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>recipe cuisine</Form.Label>
                            <Form.Control type="text" name='cuisine' value={editrecipe.cuisine} autoFocus onChange={EditRecipessss} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>recipe rating</Form.Label>
                            <Form.Control type="text" name='rating' value={editrecipe.rating} autoFocus onChange={EditRecipessss} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>instructions</Form.Label>
                            <Form.Control as="textarea" name='instructions' value={editrecipe.instructions} rows={3} onChange={EditRecipessss} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>ingredients</Form.Label>
                            <Form.Control as="textarea" name='ingredients' value={editrecipe.ingredients} rows={3} onChange={EditRecipessss} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{setShow(false)}}>Close</Button>
                    <Button variant="primary" onClick={SaveChanges}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Recipies