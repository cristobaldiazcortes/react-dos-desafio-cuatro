import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Card, ListGroup, Button } from "react-bootstrap";


export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const endpoint = "/pizzas.json";

  const {id} = useParams();
  const navigate = useNavigate();

  const irPizza = () => {
    navigate(`/pizza/${id}`);
  }
  
  // useEffect(() => {
  //   const mostrarData = new Promise(resolve => {
  //     setTimeout(()=>{
  //       resolve("http://localhost:3000/" + endpoint)

  //     },500)
       
  //   })
  //   mostrarData.then(res => setPizzas(res))

  // }, [])


  const mostrarData = async () => {
    const response = await fetch("http://localhost:3000/" + endpoint);
    const data = await response.json();

    setPizzas(data);
    console.log(data);

    if (id) {
      
    }
  };
  useEffect(() => {
    mostrarData();
  }, []);

  return (
    <div className="home">
      {pizzas.map((pizza) => (
        <Card key={pizza.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>{pizza.desc}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><img className="pizzita" src='https://i.postimg.cc/NfQrK0Ky/pizza-1.png' alt='pizzita'/> {pizza.ingredients[0]}</ListGroup.Item>
            <ListGroup.Item><img className="pizzita" src='https://i.postimg.cc/NfQrK0Ky/pizza-1.png' alt='pizzita'/> {pizza.ingredients[1]}</ListGroup.Item>
            <ListGroup.Item><img className="pizzita" src='https://i.postimg.cc/NfQrK0Ky/pizza-1.png' alt='pizzita'/> {pizza.ingredients[2]}</ListGroup.Item>
            <ListGroup.Item><img className="pizzita" src='https://i.postimg.cc/NfQrK0Ky/pizza-1.png' alt='pizzita'/> {pizza.ingredients[3]}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <h3>${pizza.price}</h3>
            <Button variant="info" onClick={irPizza}>Ver más <img className="ojos" src='https://i.postimg.cc/qMz5V1jv/eyes-1.png' alt='eyes'/></Button>
            <Button variant="danger">Añadir <img className="carrito" src='https://i.postimg.cc/90jZ8F89/shopping-cart.png' alt='shopping-cart'/></Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
