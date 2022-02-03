import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContexto } from "../components/miContexto";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signup } = useContexto();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/");
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
    <Container className="text-white fuente ">
      <Row className="justify-content-center ps-2 pe-2">
        <Col xs={12} sm={4}>
          <h2 className="text-white">Crear Cuenta</h2>
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
              Crear
            </Button>{" "}
          </Form>

          <p>
            Ya tenes una cuenta? <Link to="/login">Login</Link>{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default SignUp;
