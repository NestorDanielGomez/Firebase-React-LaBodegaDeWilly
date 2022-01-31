import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useContexto } from "../miContexto";
import ItemCount from "../itemcount/ItemCount";
import "../itemdetail/ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContexto();

  const onAdd = (cantidadProducto) => {
    <Alert>Producto agregado al carro</Alert>;

    agregarAlCarrito(cantidadProducto, producto);
  };
  return (
    <>
      <Container className="bg-white mt-4 itemDetail">
        <Row>
          <Col className="text-end">
            <img src={producto.img} alt={producto.marca} />
          </Col>
          <Col className="mt-4">
            <p className="ps-2">
              Bebida: <strong> {producto.name}</strong>
              <br />
              Marca: <strong> {producto.marca}</strong>
              <br />
              Tipo: <strong> {producto.tipo}</strong>
              <br />
              Varietal: <strong> {producto.varietal}</strong>
              <br />
              Envase: <strong> {producto.envase}</strong>
            </p>

            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
