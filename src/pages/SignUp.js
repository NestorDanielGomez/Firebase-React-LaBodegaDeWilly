import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContexto } from "../components/miContexto";

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
    <div className="card fuente">
      <div className="card-header">
        {error && <p className="error">{error}</p>}
        <h1>Sign Up</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            type="password"
            placeholder="Confirm Password"
            ref={passwordRed}
            onChange={handleConfirmPassword}
          /> */}
          <input type="submit" value="Sign Up" />
        </form>
        {/* {loading && <img src={Spinner} alt="Loading" />} */}
        <p>
          Do you already have an account? <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};
export default SignUp;
