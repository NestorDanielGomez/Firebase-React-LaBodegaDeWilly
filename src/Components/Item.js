import React from "react";
import { Col } from "react-bootstrap";
import ItemCount from "./ItemCount";

const Item = ({ item }) => {
  const onAdd = () => {
    alert("onadd");
  };
  return (
    <Col xs={3}>
      <div className="card">
        <img src={item.img} alt={item.marca} />
        <p>{item.name}</p>
        <p>{item.varietal}</p>
        <p>{item.precio}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />;
      </div>
    </Col>
  );
};

export default Item;
