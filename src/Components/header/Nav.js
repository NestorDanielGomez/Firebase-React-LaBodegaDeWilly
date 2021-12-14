import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBootstrap = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          La bodega de Willy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Vinos</Nav.Link>
            <Nav.Link href="#link">Espumantes</Nav.Link>
            <Nav.Link href="#link">Destilados</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <CartWidget />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBootstrap;
