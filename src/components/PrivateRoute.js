import React from "react";
import { Navigate } from "react-router-dom";
import { useContexto } from "../components/miContexto";

const PrivateRoute = ({ children }) => {
  const { usuarioLogueado } = useContexto();
  if (!usuarioLogueado) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
