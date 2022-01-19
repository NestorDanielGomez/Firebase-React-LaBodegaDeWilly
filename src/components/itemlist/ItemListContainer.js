import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import ItemList from "../itemlist/ItemList";
import "../itemlist/ItemListContainer.css";
import { db } from "../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

// console.log(db);

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
      /* await */ getDocs(consulta)
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
        <Container className="listadeproductos">
          <h3 className="text-black-50">Tenemos:{list.length} productos</h3>
          <Row>
            <ItemList list={list} />
          </Row>
        </Container>
      )}
    </>
  );
};

export default ItemListContainer;
