import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useContexto } from "../components/miContexto";
import Swal from "sweetalert2";

const Login = () => {
  const { login, googleSignIn, facebookSignIn } = useContexto();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/cart");
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `<strong>Parece que hubo un error...</strong>`,
        html: `<b>${err.message}</b>`,
        showConfirmButton: true,
        timer: 5000,
      });
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/cart");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `<strong>Parece que hubo un error...</strong>`,
        html: `<b>${error.message}</b>`,
        showConfirmButton: true,
        timer: 5000,
      });
    }
  };

  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/cart");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `<strong>Parece que hubo un error...</strong>`,
        html: `<b>${error.message}</b>`,
        showConfirmButton: true,
        timer: 5000,
      });
    }
  };

  return (
    <Container className="text-white fuente pt-4 pb-4">
      <Row className="justify-content-center ps-2 pe-2">
        <Col xs={12} sm={4}>
          <h5 className="text-white text-center pb-3">
            PARA VER EL CARRO <b /> DEBES INICIAR SESION
          </h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingrese su Correo</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Ingrese Correo..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ingrese su contraseña</Form.Label>
              <Form.Control
                required
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
            </Button>{" "}
            <Button
              variant="outline-danger"
              type="submit"
              onClick={handleGoogleSignIn}
              className="w-100 mb-3 align-content-center"
            >
              INICIAR CON GOOGLE
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

          <p>
            No tenes cuenta? <Link to="/signup">Crear Cuenta</Link>{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
