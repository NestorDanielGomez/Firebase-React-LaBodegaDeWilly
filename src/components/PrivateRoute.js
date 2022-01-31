import React from "react";
import { Navigate } from "react-router-dom";
import { useContexto } from "../components/miContexto";

const PrivateRoute = ({ children }) => {
  const { usuarioLogueado } = useContexto();
  console.log("Check user in Private: ", usuarioLogueado);
  if (!usuarioLogueado) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
