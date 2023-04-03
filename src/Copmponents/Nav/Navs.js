import React from "react";
import {Navbar,Nav,Container} from 'react-bootstrap'
import './Navs.css'
import logo from '../../images/Brain Storming 64.png'
const Navs =() =>{
    return ( <Navbar className="position-fixed "  expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} title="logo" alt="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">about us</Nav.Link>
            <Nav.Link href="#link">services</Nav.Link>
            <Nav.Link href="#link">why choose us</Nav.Link>
            <Nav.Link href="#" >Apply </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}
 export default Navs;