import React from "react";
import { createContext, useContext, useState } from "react";

const micontexto = createContext();

export const { Provider } = micontexto;

export const useContexto = () => {
  return useContext(micontexto);
};

const CustomProvider = ({ children }) => {
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
    console.log(`id del producto a borrar ${idproductoaborrar}`);
    console.log(idproductoaborrar, cantidadproducto, preciototalproducto);
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
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
