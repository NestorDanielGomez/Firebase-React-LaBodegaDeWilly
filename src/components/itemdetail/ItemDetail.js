import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useContexto } from "../miContexto";
import ItemCount from "../itemcount/ItemCount";

const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContexto();

  const onAdd = (cantidadProducto) => {
    agregarAlCarrito(cantidadProducto, producto);
  };
  return (
    <>
      <Container className="bg-white itemDetail  pt-4 pb-4">
        <Row>
          <Col xs={4} sm={6} className="text-end">
            <img src={producto.img} alt={producto.marca} />
          </Col>
          <Col xs={8} sm={6} className="mt-4">
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
