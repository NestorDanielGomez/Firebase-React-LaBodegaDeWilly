import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
import ItemList from "../itemlist/ItemList";
import Swal from "sweetalert2";
import { db } from "../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

const ItemListContainer = ({ saludo }) => {
  const [list, setList] = useState([]);
  const { nombre } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    if (nombre) {
      const consulta = query(
        productosCollection,
        where("categoria", "==", nombre)
      );
      getDocs(consulta)
        .then(({ docs }) => {
          setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `<strong>Parece que hubo un error...</strong>`,
            html: `<b>${error}</b>`,
            showConfirmButton: true,
            timer: 5000,
          });
        });
    } else {
      getDocs(productosCollection)
        .then(({ docs }) => {
          setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `<strong>Parece que hubo un error...</strong>`,
            html: `<b>${error}</b>`,
            showConfirmButton: true,
            timer: 5000,
          });
        });
    }
  }, [nombre]);

  return (
    <>
      {list.length === 0 ? (
        <>
          <Alert variant="primary text-center fs-4">
            Cargando los Productos
          </Alert>
        </>
      ) : (
        <Container className="text-center pb-3 pt-3" fluid>
          <ItemList list={list} />
        </Container>
      )}
    </>
  );
};

export default ItemListContainer;
