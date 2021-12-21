import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import productos from "../data/productos.json";
import ItemDetail from "./ItemDetail";

const traigoDataDeJson = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
};

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    traigoDataDeJson().then((data) => {
      setProducto(data);
    });
  }, []);
  return (
    <>
      {producto.length === 0 ? (
        <h1>Cargando Su Producto</h1>
      ) : (
        <Container>
          <Row>
            <Col>
              <ItemDetail producto={producto[3]} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ItemDetailContainer;
