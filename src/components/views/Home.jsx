import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Card, ListGroup, Button } from "react-bootstrap";
import Contexto from "../contexto/Contexto";
import Banner from "../Banner";

export default function Home(props) {
  const { pizzas } = useContext(Contexto);
  const { agregar } = props;

  const navigate = useNavigate();

  const irPizza = (id) => {
    navigate(`/pizza/${id}`);
    console.log(id);
  };

  return (
    <>
      < Banner />
      <div className="home">
       
        {pizzas.map((pizza) => (
          <Card key={pizza.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
            </Card.Body>
            <div className="orden-ingredientes">
              <ListGroup.Item>
                <img
                  className="pizzita"
                  src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                  alt="pizzita"
                />{" "}
                {pizza.ingredients[0]}
              </ListGroup.Item>
              <ListGroup.Item>
                <img
                  className="pizzita"
                  src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                  alt="pizzita"
                />{" "}
                {pizza.ingredients[1]}
              </ListGroup.Item>
              <ListGroup.Item>
                <img
                  className="pizzita"
                  src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                  alt="pizzita"
                />{" "}
                {pizza.ingredients[2]}
              </ListGroup.Item>
              <ListGroup.Item>
                <img
                  className="pizzita"
                  src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                  alt="pizzita"
                />{" "}
                {pizza.ingredients[3]}
              </ListGroup.Item>
            </div>

            <h3>Precio: ${pizza.price}</h3>
            <div className="botones">
              <Button
                variant="info"
                size="sm"
                onClick={() => irPizza(pizza.id)}
              >
                Ver m??s{" "}
                <img
                  className="ojos"
                  src="https://i.postimg.cc/qMz5V1jv/eyes-1.png"
                  alt="eyes"
                />
              </Button>
              <Button
                variant="danger"
                size="sm"
                className="add"
                onClick={() => agregar(pizza)}
              >
                A??adir{" "}
                <img
                  className="carrito"
                  src="https://i.postimg.cc/90jZ8F89/shopping-cart.png"
                  alt="shopping-cart"
                />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
