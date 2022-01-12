import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navbar/Header";
import NavMenu from "./components/navbar/NavMenu";
import ItemListContainer from "./components/itemlist/ItemListContainer";
import ItemDetailContainer from "./components/itemdetail/ItemDetailContainer";
import Cart from "../src/pages/Cart";
import Home from "../src/pages/Home";
import CustomProvider from "./components/miContexto";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/App.css";

import { links } from "./data/LinksNav";

function App() {
  return (
    <CustomProvider>
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
    </CustomProvider>
  );
}
export default App;
