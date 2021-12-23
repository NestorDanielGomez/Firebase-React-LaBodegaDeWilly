import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import productos from "../data/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const traigoDataDeJson = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    traigoDataDeJson().then((data) => {
      setProducto(data);
    });
  }, [id]);
  return (
    <>
      {producto.length === 0 ? (
        <h1>Cargando Su Producto</h1>
      ) : (
        <Container>
          <Row>
            <Col>
              <ItemDetail producto={producto} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ItemDetailContainer;
