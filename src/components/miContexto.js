import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import Swal from "sweetalert2";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

const micontexto = createContext();

export const { Provider } = micontexto;
export const useContexto = () => useContext(micontexto);

const CustomProvider = ({ children }) => {
  const [usuarioLogueado, setusuarioLogueado] = useState({});
  const [preciototal, setPrecioTotal] = useState(0);
  const [totalproductos, setTotalProductos] = useState(0);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (
      (localStorage.getItem("Cart") !== null) &
      (localStorage.getItem("PrecioTotal") !== 0) &
      (localStorage.getItem("TotalProductos") !== 0)
    ) {
      setCarrito(JSON.parse(localStorage.getItem("Cart")));
      setPrecioTotal(JSON.parse(localStorage.getItem("PrecioTotal")));
      setTotalProductos(JSON.parse(localStorage.getItem("TotalProductos")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(carrito));
    localStorage.setItem("PrecioTotal", JSON.stringify(preciototal));
    localStorage.setItem("TotalProductos", JSON.stringify(totalproductos));
  }, [carrito, preciototal, totalproductos]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (usuarioLogueado) => {
      setusuarioLogueado(usuarioLogueado);
    });
    return () => {
      unsub();
    };
  }, []);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  function facebookSignIn() {
    const facebookAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookAuthProvider);
  }

  const agregarAlCarrito = (cantidad, producto) => {
    const idAChequear = producto.id;
    if (isInCarrito(idAChequear)) {
      const copidadcarrito = [...carrito];
      let match = copidadcarrito.find((p) => p.id === producto.id);
      match.cantidad = match.cantidad + cantidad;
      setCarrito(copidadcarrito);
    } else {
      const productoConSuCantidad = { ...producto };
      productoConSuCantidad.cantidad = cantidad;
      setCarrito([...carrito, productoConSuCantidad]);
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: `<strong>Producto Agregado</strong>`,
      html:
        `<strong>${producto.tipo} - ${producto.marca} - ${producto.varietal}</strong>` +
        " Agregado con exito",
      showConfirmButton: true,
      timer: 5000,
    });
    setTotalProductos(totalproductos + cantidad);
    setPrecioTotal(preciototal + producto.precio * cantidad);
  };

  const borrarDelCarrito = (
    idproductoaborrar,
    cantidadproducto,
    preciototalproducto
  ) => {
    const copycarritofiltrado = carrito.filter(
      (prod) => prod.id !== idproductoaborrar
    );
    setCarrito(copycarritofiltrado);
    setTotalProductos(totalproductos - cantidadproducto);
    setPrecioTotal(preciototal - preciototalproducto);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
    setTotalProductos(0);
    setPrecioTotal(0);
  };

  const isInCarrito = (id) => {
    return carrito.some((p) => p.id === id);
  };

  const valorDelContexto = {
    preciototal,
    totalproductos,
    carrito,
    agregarAlCarrito,
    borrarDelCarrito,
    limpiarCarrito,
    usuarioLogueado,
    login,
    logout,
    signup,
    googleSignIn,
    facebookSignIn,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
