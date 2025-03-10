import React from 'react'
import {Button, Container,Nav,Navbar} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar1 = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav style={{gap:20}}>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/recipes">Receipes</Nav.Link>
            <Button variant="secondary">sign in</Button>
            <Button variant="secondary">login</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1
