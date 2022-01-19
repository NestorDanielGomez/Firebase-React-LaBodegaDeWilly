import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemdetail/ItemDetail";
import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const refDoc = doc(productosCollection, id);
    getDoc(refDoc)
      .then((producto) => {
        const productoConId = { ...producto.data(), id };
        setProducto(productoConId);
      })
      .catch((error) => {});
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
