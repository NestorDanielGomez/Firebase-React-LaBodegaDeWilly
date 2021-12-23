import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Col xs={3} index={item.id}>
      <div className="card">
        <img src={item.img} alt={item.marca} />
        <p>{item.name}</p>
        <p>{item.varietal}</p>
        <p>{item.precio}</p>
        <NavLink to={`/producto/${item.id}`}>ver detalle</NavLink>
      </div>
    </Col>
  );
};

export default Item;
