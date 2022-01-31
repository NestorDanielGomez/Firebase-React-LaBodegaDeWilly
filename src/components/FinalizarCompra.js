import React, { useState } from "react";

import { useContexto } from "../components/miContexto";
import { db } from "../components/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const Cart = () => {
  const {
    carrito,
      usuarioLogueado,
   
  } = useContexto();

const FinalizarCompra = (data) => {
  console.log(data);
  console.log(
    ` usuario compra ${usuarioLogueado.displayName}, ${usuarioLogueado.email}`
  );
  const ventasCollection = collection(db, "ventas");
  addDoc(ventasCollection, {
    buyer: {
      name: `${usuarioLogueado.displayName}`,
      phone: "",
      mail: `${usuarioLogueado.email}`,
    },
    items: carrito.map((prod) => {
      return {
        name: prod.name,
        precio: prod.precio,
        cantidad: prod.cantidad,
      };
    }),
    date: serverTimestamp(),
    total: preciototal,
  })
    .then((res) => {
      alert(`tu compra tiene el numero de seguimiento ${res.id}`);
      limpiarCarrito();
    })
    .catch((err) => console.log(err));
};
