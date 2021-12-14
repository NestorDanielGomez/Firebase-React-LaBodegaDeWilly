import React from "react";
import Header from "./components/header/Header";
import NavBootstrap from "./components/header/Nav";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/App.scss";

function App() {
  return (
    <>
      <Header />
      <NavBootstrap />
      <ItemListContainer saludo="Bienvenido Nestor" />
    </>
  );
}
export default App;
