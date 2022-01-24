import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
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
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setCurrentUser(currentuser);
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

  const [preciototal, setPrecioTotal] = useState(0);
  const [totalproductos, setTotalProductos] = useState(0);
  const [carrito, setCarrito] = useState([]);

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
      //ahora le paso el abjeto a set carrito
      setCarrito([...carrito, productoConSuCantidad]);
    }
    setTotalProductos(totalproductos + cantidad);
    setPrecioTotal(preciototal + producto.precio * cantidad);
  };

  const borrarDelCarrito = (
    idproductoaborrar,
    cantidadproducto,
    preciototalproducto
  ) => {
    // console.log(`id del producto a borrar ${idproductoaborrar}`);
    // console.log(idproductoaborrar, cantidadproducto, preciototalproducto);
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
    currentUser,
    login,
    logout,
    signup,
    googleSignIn,
    facebookSignIn,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
