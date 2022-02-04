import React from "react";
import { NavLink } from "react-router-dom";
import { useContexto } from "../miContexto";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaUserAlt, FaCartPlus, FaBars } from "react-icons/fa";

const NavMenu = ({ links }) => {
  const { totalproductos } = useContexto();
  return (
    <Navbar expand="lg" className="navbarStyles">
      <Container className="text-center " fluid>
        <Navbar.Brand className=" ">
          <NavLink to="/" className="ps-sm-4">
            <img
              alt=""
              src="/assets/images/logowilly.svg"
              width="40"
              height="34"
              className="d-inline-block align-top"
            />
            <span className="subrayado">La bodega de Willy</span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Brand className="pe-sm-4 order-lg-last order-first ">
          <NavLink to="/Login" className="d-inline-block pe-md-2">
            <FaUserAlt />
          </NavLink>
          <NavLink to="/Cart" className="widgetnumber d-inline-block ps-1">
            <FaCartPlus className="lead " />
            {totalproductos > 0 ? (
              <p className="numero d-inline-block">{totalproductos}</p>
            ) : (
              <p className="d-none"></p>
            )}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className="">
          <FaBars />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav justify-content-center ">
          <Nav className="text-center ">
            {links.map((link, indice) => {
              return (
                <NavLink key={link.id} to={link.href} className="pe-4 navlink">
                  {link.name}
                </NavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
