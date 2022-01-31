import React from "react";
import { useContexto } from "../miContexto";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import EnviarWhatsapp from "../EnviarWhatsapp";

const Item = ({ item }) => {
  const { productoAgregado } = useContexto();

  return (
    <Card className="text-dark text-center ms-sm-3 me-sm-3">
      <Card.Img
        variant="top"
        src={item.img}
        alt={item.marca}
        className="text-center"
      />
      <Card.ImgOverlay>
        <Card.Title>{productoAgregado ? "Agregado" : "dfgdg"}</Card.Title>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{item.marca}</Card.Title>
        <Card.Text>
          {item.name} - {item.tipo} - {item.varietal} - {item.envase}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className=""> ${item.precio}</ListGroupItem>
      </ListGroup>
      <Card.Footer>
        <NavLink to={`/producto/${item.id}`}>
          <Button variant="outline-primary">
            {productoAgregado ? "Agregar" : "Agregado"}
          </Button>
        </NavLink>

        <Button onClick={() => EnviarWhatsapp(item)} variant="outline-success">
          <FaWhatsapp className="lead" />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Item;
