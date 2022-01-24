import React from "react";
import { Navigate } from "react-router-dom";
import { useContexto } from "../components/miContexto";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContexto();
  console.log("Check user in Private: ", currentUser);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
