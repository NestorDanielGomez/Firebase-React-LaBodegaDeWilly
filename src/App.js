import React from "react";
import Header from "./Components/header/Header";
import NavMenu from "./Components/header/NavMenu";
import ItemListContainer from "./Components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/App.scss";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "../src/pages/Cart";
import Home from "../src/pages/Home";

import { links } from "./data/LinksNav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavMenu links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productos"
          element={<ItemListContainer saludo={"Nestor!"} />}
        />

        <Route
          path="/categoria/:id"
          element={<ItemListContainer saludo="Bienvenido Nestor" />}
        />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
