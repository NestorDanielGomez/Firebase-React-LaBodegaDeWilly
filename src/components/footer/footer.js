import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className="text-white text-center footer pt-5 pb-5">
      <Row className="text-center justify-content-center">
        <Col xs={12} sm={3} className="order-md-first pt-5 pt-md-0">
          <h4 className="pb-3">
            <span className="titulosubrayado">Categorias</span>{" "}
          </h4>
          <NavLink to="/categoria/vinos">Vinos</NavLink>
          <br />
          <NavLink to="/categoria/espumantes">Espumantes</NavLink>
          <br />
          <NavLink to="/categoria/destilados">Destilados</NavLink>
        </Col>
        <Col xs={12} sm={3} className="order-first">
          <img
            src="/assets/images/logo2.svg"
            alt="logo sitio"
            className="logo"
          />
          <h3 className="pt-2">
            <span>La bodega de WIlly</span>
          </h3>
        </Col>
        <Col xs={12} sm={3} className="pt-5 pt-md-0">
          <h4 className="pb-3">
            <span className="titulosubrayado">Comunicate</span>{" "}
          </h4>
          <a
            href="https://instagram.com/labodegadewilly"
            target="_blank"
            rel="noopener noreferrer"
            className="lead ms-1 me-1"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/labodegadewilly"
            target="_blank"
            rel="noopener noreferrer"
            className="lead ms-1 me-1"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/5493482318980/?text=La%20Bodega%20de%20Willy%20-%20Disponible"
            target="_blank"
            rel="noopener noreferrer"
            className="lead ms-1 me-1"
          >
            <FaWhatsapp />
          </a>
        </Col>
      </Row>
      <Row className="text-center text-secondary pt-4 pb-4 ps-2 pe-2">
        <Col>
          Beber con moderación - Prohibida su venta a menores de 18 años
        </Col>
      </Row>
      <Row className="text-center text-white pt-2  pb-1 ps-2 pe-2">
        <Col>Desarrollo: Néstor Gómez - React Developer by CODERHOUSE</Col>
      </Row>
    </Container>
  );
};

export default Footer;
