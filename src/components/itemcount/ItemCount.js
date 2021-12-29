import React, { useState } from "react";
import { Container, Row, Button, Card } from "react-bootstrap";
import "../itemcount/ItemCount.css";

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
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>ItemCount</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                <p>Stock: {stock}</p>
                <p>Botellas a comprar:{contador}</p>
              </Card.Text>

              <Button onClick={sumar} className="m-1 btn btn-primary ">
                Sumar
              </Button>
              <Button onClick={restar} className="m-1 btn btn-danger ">
                Restar
              </Button>
              <Button onClick={resetear} className="m-1 btn btn-success ">
                Resetear
              </Button>

              <button onClick={ejecutoOnAdd} className="m-1 btn btn-info ">
                Agregar al Carro
              </button>
            </Card.Body>
          </Card>
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
