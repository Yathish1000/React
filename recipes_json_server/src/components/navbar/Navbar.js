import React, {useState} from 'react'
import { Navbar, Container, Nav, Button,Form, Modal } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Navbar1 = () => {

    const go = useNavigate()
    const [show,setShow]=useState(false)
    const [recipeAdd,setRecipeAdd]=useState()

    const HideModel = ()=>{
        setShow(false)
    }


    const addRecipes = (x)=>{
        setRecipeAdd({...recipeAdd,[x.target.name]:x.target.value})
    }

    // console.log(recipeAdd);

    const SaveChanges = ()=>{
        axios.post("http://localhost:4000/recipes",recipeAdd)
        setShow(false)
        go("/recipes")
    }
    

    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/recipes">Recipes</Nav.Link>
                        <Button onClick={() => go("/cart")}>Cart</Button>
                        <Button onClick={()=>{setShow(true)}}>Addrecipe</Button>
                    </Nav>
                </Container>
            </Navbar>

            <Modal show={show} onHide={HideModel}>
                <Modal.Header closeButton>
                    <Modal.Title>add recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>recipe Name</Form.Label>
                            <Form.Control type="text" name='name' autoFocus onChange={addRecipes}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>recipe image</Form.Label>
                            <Form.Control type="text"  name='image' autoFocus onChange={addRecipes}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>recipe cuisine</Form.Label>
                            <Form.Control type="text" name='cuisine' autoFocus onChange={addRecipes}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>recipe rating</Form.Label>
                            <Form.Control type="text" name='rating' autoFocus onChange={addRecipes}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>instructions</Form.Label>
                            <Form.Control as="textarea" name='instructions' rows={3} onChange={addRecipes}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>ingredients</Form.Label>
                            <Form.Control as="textarea" name='ingredients' rows={3} onChange={addRecipes} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >Close</Button>
                    <Button variant="primary" onClick={SaveChanges}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Navbar1
