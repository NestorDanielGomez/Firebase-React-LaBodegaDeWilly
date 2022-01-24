import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navbar/Header";
import NavMenu from "./components/navbar/NavMenu";
import ItemListContainer from "./components/itemlist/ItemListContainer";
import ItemDetailContainer from "./components/itemdetail/ItemDetailContainer";
import Cart from "../src/pages/Cart";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import CustomProvider from "./components/miContexto";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/App.scss";
import { links } from "./data/LinksNav";
import PrivateRoute from "./components/PrivateRoute";

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
            path="/categoria/:nombre"
            element={<ItemListContainer saludo="Bienvenido Nestor" />}
          />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          {/* {usuarioRegistrado ? (
            <Route path="/cart" element={<Cart />} />
          ) : (
            <Route path="/login" element={<ItemCount />} />
          )} */}
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CustomProvider>
  );
}
export default App;

// return (
//   <>
//     {usuarioGlobal ? <Home correoUsuario={usuarioGlobal.email} /> : <Logueo />}
//   </>
// );
