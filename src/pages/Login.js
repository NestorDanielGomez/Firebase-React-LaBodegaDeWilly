import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Stack, Form, Button } from "react-bootstrap";
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
    <Container className="text-white fuente">
      {error && <p className="error">{error}</p>}

      <h2 className="text-white">
        Login
        {/* {noTieneRegistro ? "Registrate" : "Iniciar Sesión"} */}
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ width: "350px" }}>
          login {/* {noTieneRegistro ? "Registrate" : "Iniciar Sesión"} */}
        </Button>{" "}
        <Button variant="primary" type="submit" onClick={handleGoogleSignIn}>
          Google
        </Button>{" "}
        <Button variant="primary" type="submit" onClick={handleFacebookSignIn}>
          facebook
        </Button>{" "}
      </Form>
      {loading && <img src={Spinner} alt="Loading" />}
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
      </p>
    </Container>
  );
};

export default Login;
