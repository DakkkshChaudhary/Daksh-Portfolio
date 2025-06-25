import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

function MyNavbar() {
  return (
    <Navbar expand="sm" bg="dark" variant="dark" sticky="top">
    {/* // <Navbar expand="sm" bg="dark" variant="dark" fixed="top" collapseOnSelect>  */}

      <Container>
        <Navbar.Brand href="#home">Daksh Choudhary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#qualification">Qualifications</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
