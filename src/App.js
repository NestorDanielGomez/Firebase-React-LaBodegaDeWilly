import React from "react";
import Header from "./components/header/Header";
import NavBootstrap from "./components/header/Nav";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/App.scss";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBootstrap />
      <ItemListContainer saludo="Bienvenido Nestor" />
      <ItemDetailContainer />
    </BrowserRouter>
  );
}
export default App;
