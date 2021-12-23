import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavMenu = ({ links }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              alt=""
              src="./logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            La bodega de Willy
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-4">
            {links.map((link, indice) => {
              return (
                <NavLink key={link.id} to={link.href} className="p-4">
                  {link.name}
                </NavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        <NavLink to="/Cart">
          <CartWidget />
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
