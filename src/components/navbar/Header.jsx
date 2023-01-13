import React from 'react'
import {SiYourtraveldottv} from 'react-icons/si'
import {Container,Nav,Navbar,NavDropdown} from  'react-bootstrap'
import './header.css'


function Header() {
  return (
    <div className='header'>
      <Navbar sticky="top" >
        <SiYourtraveldottv size={32} style={{marginLeft:"40px"}}/>
        <Container style={{marginLeft:"20px"}}>
          <Navbar.Brand href="#home">Nomadia</Navbar.Brand>
          <Nav className="me-auto" style={{marginLeft:"5px",paddingLeft:"10rem"}}>
            <Nav.Link href="#home" style={{marginRight:"5rem"}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{marginRight:"5rem"}}>Aboutus</Nav.Link>
            <NavDropdown title="Packages" id="collasible-nav-dropdown" style={{marginRight:"5rem"}}></NavDropdown>
            <NavDropdown title="Destination" id="collasible-nav-dropdown" style={{marginRight:"5rem"}}></NavDropdown>
            <Nav.Link href="#pricing" style={{marginRight:"5rem"}}>Blog</Nav.Link>
            <Nav.Link href="#pricing" style={{marginRight:"5rem"}}>Contactus</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header