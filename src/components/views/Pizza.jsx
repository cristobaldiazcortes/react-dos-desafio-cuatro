import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card} from "react-bootstrap";
import Contexto from "../contexto/Contexto";

export default function Pizza(props) {
  const [pizzaDetalle, setPizzaDetalle] = useState([]);
  const [PizzaIngredientes, setPizzaIngredientes] = useState([]);
  const { pizzas } = useContext(Contexto);
  const { agregar} = props

  const { id } = useParams();

  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id);
    if (datosPizza !== undefined) {
      setPizzaDetalle(datosPizza || []);
      setPizzaIngredientes(datosPizza.ingredients || []);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, [pizzas]);

  console.log(PizzaIngredientes[0]);

  return (
    <div className="detalle-container">
      <div className="orden-horizontal">
        <img className="pizza-detalle" alt="pizza-detalle" src={pizzaDetalle.img} />
        <div className="orden-vertical">
          <div>
            <h2>{pizzaDetalle.name}</h2>
            <Card.Text>{pizzaDetalle.desc}</Card.Text>
            <p><b>ingredientes:</b></p>

            {PizzaIngredientes.map((ingrediente) => (
              
              <p key={ingrediente}>
                <img
                  // className="pizzita"
                  src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                  alt="pizzita"
                />{" "}
                {ingrediente}
              </p>
            ))}
          </div>
          <div className="precio-detalle">
            <h3>Precio: ${pizzaDetalle.price}</h3>
            <Button onClick={()=>agregar(pizzaDetalle)} variant="danger" size="sm" className="add">
              Añadir{" "}
              <img
                className="carrito"
                src="https://i.postimg.cc/90jZ8F89/shopping-cart.png"
                alt="shopping-cart"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
