import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import  Contexto  from "../contexto/Contexto";


export default function Pizza() {
  const [pizzaDetalle, setPizzaDetalle] = useState({});
  const { pizzas} = useContext(Contexto);
  const { id } = useParams();



  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === parseInt(id));

    setPizzaDetalle(datosPizza || {});
  };

  console.log(pizzaDetalle)
  console.log(pizzas + "que hay")

  useEffect(() => {
    obtenerDatos();
  }, [pizzas]);

  // const obtenerDatos = () => {
  //   pizzas.filter = ((pizza) => pizza.id === id

  //  setPizzas(pizzas)

  //}
  return (
    <div className="home">
      {pizzas.map((detalle) => (
        <Card key={detalle.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={detalle.img} />
          <Card.Body>
            <Card.Title>{detalle.name}</Card.Title>
            <Card.Text>{detalle.desc}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <img
                className="pizzita"
                src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                alt="pizzita"
              />{" "}
              {detalle.ingredients[0]}
            </ListGroup.Item>
            <ListGroup.Item>
              <img
                className="pizzita"
                src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                alt="pizzita"
              />{" "}
              {detalle.ingredients[1]}
            </ListGroup.Item>
            <ListGroup.Item>
              <img
                className="pizzita"
                src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                alt="pizzita"
              />{" "}
              {detalle.ingredients[2]}
            </ListGroup.Item>
            <ListGroup.Item>
              <img
                className="pizzita"
                src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                alt="pizzita"
              />{" "}
              {detalle.ingredients[3]}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <h3>Precio: ${detalle.price}</h3>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
