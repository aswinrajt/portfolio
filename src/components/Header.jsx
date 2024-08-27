import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'; 

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="navbar-brand">
        <h1 id='lo1' className='ps-5'>ART</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto"> 
          <Nav.Link href="#intro" className="nav-link-custom">Introduction</Nav.Link>
          <Nav.Link href="#works" className="nav-link-custom">Works</Nav.Link>
          <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
          <Nav.Link href="#education" className="nav-link-custom">Education</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
