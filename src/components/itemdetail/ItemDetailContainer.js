import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import productosDb from "../../data/productosDb.json";
import ItemDetail from "../itemdetail/ItemDetail";

const traigoDataDeJson = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productosDb);
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    traigoDataDeJson().then((data) => {
      setProducto(data[id - 1]);
    });
  }, [id]);
  return (
    <>
      {producto.length === 0 ? (
        <h1 className="text-white">Cargando Su Producto</h1>
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
