import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useContexto } from "../miContexto";
import ItemCount from "../itemcount/ItemCount";
import "../itemdetail/ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContexto();

  const onAdd = (cantidadProducto) => {
    alert(`Producto agregado al carro`);
    // console.log(cantidadProducto);
    //onAdd trae la cantidad seleccionada en el itemcount
    // le mando a agregarAlCarrito (el producto seleccionado y la cantidad del mismo)
    agregarAlCarrito(cantidadProducto, producto);
  };
  return (
    <>
      <Container className="bg-light mt-4 ">
        <Row>
          <Col>
            <img src={producto.img} alt={producto.marca} />
          </Col>
          <Col>
            <h2>{producto.name}</h2>
            <h2>{producto.marca}</h2>
            <h2>{producto.tipo}</h2>
            <h2>{producto.varietal}</h2>
            <h2>{producto.stock}</h2>
            <div>
              {<ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
