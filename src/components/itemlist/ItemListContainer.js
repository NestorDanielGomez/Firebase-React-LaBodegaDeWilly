import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import ItemList from "../itemlist/ItemList";

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
          console.log(error);
        });
    } else {
      getDocs(productosCollection)
        .then(({ docs }) => {
          setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [nombre]);

  return (
    <>
      {list.length === 0 ? (
        <>
          <h4 className="text-white text-center">Cargando Productos</h4>s
        </>
      ) : (
        <Container className="text-center   pb-3" fluid>
          <h3 className="text-black-50">Tenemos:{list.length} productos</h3>

          <ItemList list={list} />
        </Container>
      )}
    </>
  );
};

export default ItemListContainer;
