import React from "react";
import { Col } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <Col xs={3} index={item.id}>
      <div className="card">
        <img src={item.img} alt={item.marca} />
        <p>{item.name}</p>
        <p>{item.varietal}</p>
        <p>{item.precio}</p>
      </div>
    </Col>
  );
};

export default Item;
