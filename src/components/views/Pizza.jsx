import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import Contexto from "../contexto/Contexto";

export default function Pizza() {
  const [pizzaDetalle, setPizzaDetalle] = useState([]);
  const { pizzas} = useContext(Contexto);
  const { id } = useParams();

  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id);
    setPizzaDetalle(datosPizza || []);
  };
  
  useEffect(() => {
    obtenerDatos();
  }, [pizzaDetalle]);

  return (
    <div className="home">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pizzaDetalle.img} />
        <Card.Body>
          <Card.Title>{pizzaDetalle.name}</Card.Title>
          <Card.Text>{pizzaDetalle.desc}</Card.Text>
          <p>{pizzaDetalle.ingredients},</p>
        </Card.Body>
        {/* <Card.Body>
        {pizzaDetalle.map((e) => (
          <p>
            {e.ingredients[0]}
          </p>
        ))}
        </Card.Body> */}
        <Card.Body>
          <h3>Precio: ${pizzaDetalle.price}</h3>
        </Card.Body>
      </Card>
  </div> 
  );
}
