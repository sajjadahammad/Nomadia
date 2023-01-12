import React from 'react'
import {SiYourtraveldottv} from 'react-icons/si'
import {Container,Nav,Navbar} from  'react-bootstrap'


function Header() {
  return (
    <div>
        <Navbar sticky="top">
        <SiYourtraveldottv size={32} style={{marginLeft:"40px"}}/>
        <Container style={{marginLeft:"10px"}}>
          <Navbar.Brand href="#home">Nomadia</Navbar.Brand>
          <Nav className="me-auto" style={{marginLeft:"10%"}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header