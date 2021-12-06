//1-Necesitamos la variables react en el scope
import React from "react";
//2- necesitamos la variable reactDOM en scope
import ReactDOM from "react-dom";
//3- necesitamos una aplicacion en react

import App from "./App";
import "./Components/GlobalStyles.css";
//4- necesitamos dibujar la aplicacion en el dom
ReactDOM.render(<App />, document.getElementById("root"));
//
