import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <>
        <Container className="bg-white">
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  Stock: {stock}
                  Botellas a comprar:{contador}
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
                <Link
                  to="/Cart"
                  onClick={ejecutoOnAdd}
                  className="m-1 btn btn-info "
                >
                  Agregar al Carro
                </Link>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
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
