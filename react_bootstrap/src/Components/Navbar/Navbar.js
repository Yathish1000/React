import React from 'react'
import { Container, Nav, Navbar, Button } from "react-bootstrap"

const Goutham = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" expand="md">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Button>login</Button>
                            <Button>sinup</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Goutham
