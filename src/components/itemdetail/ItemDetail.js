import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemCount from "../itemcount/ItemCount";
import "../itemdetail/ItemDetail.css";

const ItemDetail = ({ producto }) => {
  console.log(producto);
  const onAdd = () => {
    alert("onadd");
  };
  return (
    <>
      <Container className="bg-light mt-4 ">
        <Row>
          <Col>
            <img src={producto.img} alt={producto.marca} />
          </Col>
          <Col>
            <h2>{producto.name}</h2>
            <h2>{producto.marca}</h2>
            <h2>{producto.tipo}</h2>
            <h2>{producto.varietal}</h2>
            <h2>{producto.stock}</h2>
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />;
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
