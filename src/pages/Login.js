import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useContexto } from "../components/miContexto";

import Spinner from "../spinner.svg";

const Login = () => {
  const { login, googleSignIn, facebookSignIn } = useContexto();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/cart");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className="text-white fuente ">
      <Row className="justify-content-center">
        <Col xs={12} sm={4}>
          {error && <p className="error">{error}</p>}

          <h2 className="text-white">
            Iniciar Sesión
            {/* {noTieneRegistro ? "Registrate" : "Iniciar Sesión"} */}
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingrese su Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese Correo..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ingrese su contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text className="text-muted">
                Nunca comparta su contraseña con nadie.
              </Form.Text>
            </Form.Group>
            <Button
              variant="outline-secondary"
              type="submit"
              className="w-100 mb-3"
            >
              INICIAR{" "}
              {/* {noTieneRegistro ? "Registrate" : "Iniciar Sesión"} */}
            </Button>{" "}
            <Button
              variant="outline-danger"
              type="submit"
              onClick={handleGoogleSignIn}
              className="w-100 mb-3 align-content-center"
            >
              INICAR CON GOOGLE
            </Button>{" "}
            <Button
              variant="outline-info"
              type="submit"
              onClick={handleFacebookSignIn}
              className="w-100 mb-3 align-content-center"
            >
              INICIAR CON FACEBOOK
            </Button>
          </Form>
          {loading && <img src={Spinner} alt="Loading" />}
          <p>
            No tenes cuenta? <Link to="/signup">Crear Cuenta</Link>{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
