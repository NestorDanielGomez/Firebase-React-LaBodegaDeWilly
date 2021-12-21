import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import productos from "../data/productos.json";
import "./ItemListContainer.css";
import ItemList from "./ItemList";

const traigoDataDeJson = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
};

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traigoDataDeJson().then((data) => {
      setProductos(data);
    });
  }, []);
  return (
    <>
      {productos.length === 0 ? (
        <h1>Cargando Productos</h1>
      ) : (
        <Container className="listadeproductos">
          <h3 className="text-black-50">
            Tenemos:{productos.length} productos
          </h3>
          <Row>
            <ItemList productos={productos} />
          </Row>
        </Container>
      )}
    </>
  );
};

export default ItemListContainer;
