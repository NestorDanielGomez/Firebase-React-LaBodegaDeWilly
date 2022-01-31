import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContexto } from "../components/miContexto";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
const SignUp = () => {
  const { signup } = useContexto();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="text-white fuente ">
      <Row className="justify-content-center">
        <Col xs={12} sm={4}>
          {error && <p className="error">{error}</p>}

          <h2 className="text-white">
            Crear Cuenta
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
              CREAR {/* {noTieneRegistro ? "Registrate" : "Iniciar Sesión"} */}
            </Button>{" "}
          </Form>
          {/* {loading && <img src={Spinner} alt="Loading" />} */}
          <p>
            Ya tenes una cuenta? <Link to="/login">Login</Link>{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default SignUp;
