import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import { FaPlus, FaMinus, FaRedo } from "react-icons/fa";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const [visible, setVisible] = useState(true);

  const sumar = () => {
    contador >= stock ? setContador(stock) : setContador(contador + 1);
  };
  const restar = () => {
    contador <= 0 ? setContador(0) : setContador(contador - 1);
  };
  const resetear = () => {
    setContador(0);
  };

  const ejecutoOnAdd = () => {
    contador ? setVisible(false) : setVisible(true);
    contador <= stock && contador > 0
      ? onAdd(contador)
      : alert("Agregue algun producto al carro");
  };
  if (visible) {
    return (
      <Container className="bg-white">
        <Row>
          <Col>
            <h5>
              Botellas a comprar: <strong>{contador}</strong>
            </h5>
            <Button onClick={sumar} className="m-1 btn btn-primary ">
              <FaPlus />
            </Button>
            <Button onClick={restar} className="m-1 btn btn-danger ">
              <FaMinus />
            </Button>
            <Button onClick={resetear} className="m-1 btn btn-success ">
              <FaRedo />
            </Button>
            <Link to="/Productos">
              <Button
                onClick={ejecutoOnAdd}
                className="m-1 w-100"
                variant="outline-primary"
              >
                AGREGAR AL CARRO
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="bg-white">
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <button>Producto Agregado</button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
};
export default ItemCount;
