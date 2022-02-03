import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemdetail/ItemDetail";
import Swal from "sweetalert2";
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
  }, [id]);

  return (
    <>
      {producto.length === 0 ? (
        <Alert variant="primary text-center fs-4">Cargando Producto</Alert>
      ) : (
        <Container fluid>
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
