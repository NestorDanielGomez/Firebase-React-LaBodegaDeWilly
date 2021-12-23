import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import productos from "../data/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const traigoDataDeJson = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
};

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    traigoDataDeJson().then((data) => {
      setProductos(data);
      console.log(data);
    });
  }, [id]);

  console.log(productos);
  return (
    <>
      {productos.length === 0 ? (
        <>
          <h2>Bienvenido {saludo}</h2>
          <h4>Cargando Productos</h4>
        </>
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
