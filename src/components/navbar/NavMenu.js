import React from "react";
import { NavLink } from "react-router-dom";
import { useContexto } from "../miContexto";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import "./NavMenu.css";

const NavMenu = ({ links }) => {
  const { totalproductos } = useContexto();
  return (
    <>
      <Navbar expand="lg" className="navbarStyles">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/assets/images/logowilly.svg"
              width="40"
              height="34"
              className="d-inline-block align-top"
            />
            <span>La bodega de Willy</span>
          </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {links.map((link, indice) => {
                return (
                  <NavLink key={link.id} to={link.href} className="p-4 navlink">
                    {link.name}
                  </NavLink>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          <NavLink to="/Cart" className="widgetnumber">
            <CartWidget />
            {totalproductos > 0 ? (
              <span>{totalproductos}</span>
            ) : (
              <span className="d-none"></span>
            )}
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMenu;
