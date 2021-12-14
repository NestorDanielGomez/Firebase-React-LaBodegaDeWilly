import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ListadoProductos } from "../data/ListadoDeProductos";
import ItemCount from "../components/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const onAdd = () => {
    alert("onadd");
  };

  return (
    <Container className="listadeproductos">
      <h3 className="text-black-50">{saludo}</h3>
      <Row>
        {ListadoProductos.map((item, index) => {
          return (
            <Col xs={2}>
              <div className="card">
                <img src={item.img} alt={item.marca} />
                <p>{item.name}</p>
                <p>{item.varietal}</p>
                <p>{item.precio}</p>
              </div>
            </Col>
          );
        })}
      </Row>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />;
    </Container>
  );
};

export default ItemListContainer;
