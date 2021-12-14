import React, { useState } from "react";
import { Container, Row, Button, Card } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(1);

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
    contador <= stock && contador > 0
      ? onAdd()
      : alert("Agregue algun producto al carro");
  };

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
              <p>Prop recibida Stock: {stock}</p>
              <p>Prop recibida Initial:{initial}</p>
              <p>Valor a modificar:{contador}</p>
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

            <button onClick={ejecutoOnAdd} className="m-1 btn btn-info">
              Agregar al Carro
            </button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
export default ItemCount;
