import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContexto } from "../miContexto";

const Header = () => {
  const { usuarioLogueado } = useContexto();

  return (
    <Container className="pt-2 pb-2" fluid>
      <Row>
        <Col className="text-center">
          {usuarioLogueado === null ? (
            <span className="text-white fs-6 ">
              <Link to="/login" className="link-header">
                "¿todavia no te Logueaste? Crea tu cuenta o accede desde tu
                Gmail o Facebook"
              </Link>
            </span>
          ) : (
            <span className="text-white fs-6 ">
              Hola: {usuarioLogueado.email}
            </span>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
