import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./item.css";

const Item = ({ item }) => {
  return (
    <Col index={item.id}>
      <div className="cardproduct">
        <img src={item.img} alt={item.marca} className="imgcard" />
        <div className="textscard">
          <p className="agrupo">{item.name}</p>
          <p className="agrupo"> {item.varietal}</p>
          <p className="agrupo">{item.precio}</p>
          <NavLink to={`/producto/${item.id}`}>ver detalle</NavLink>
        </div>
      </div>
    </Col>
  );
};

export default Item;
