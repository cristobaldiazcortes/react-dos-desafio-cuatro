import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Card, ListGroup, Button } from "react-bootstrap";
import Contexto from "../contexto/Contexto";


export default function Home() {
  const {pizzas} = useContext(Contexto)
  // const [id, setId] = useState("")
 // const endpoint = "/pizzas.json";


  const navigate = useNavigate();

  const irPizza = (id) => {
    navigate(`/pizza/${id}`);
    console.log(id)
  }
  
  // useEffect(() => {
  //   const mostrarData = new Promise(resolve => {
  //     setTimeout(()=>{
  //       resolve("http://localhost:3000/" + endpoint)

  //     },500)
       
  //   })
  //   mostrarData.then(res => setPizzas(res))

  // }, [])




  return (
    <div className="home">
      {pizzas.map((pizza) => (
        <Card key={pizza.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
          </Card.Body>
          <div className="orden-ingredientes">
            <ListGroup.Item><img className="pizzita" src='https://i.postimg.cc/NfQrK0Ky/pizza-1.png' alt='pizzita'/> {pizza.ingredients[0]}</ListGroup.Item>
            <ListGroup.Item><img className="pizzita" src='https://i.postimg.cc/NfQrK0Ky/pizza-1.png' alt='pizzita'/> {pizza.ingredients[1]}</ListGroup.Item>
            <ListGroup.Item><img className="pizzita" src='https://i.postimg.cc/NfQrK0Ky/pizza-1.png' alt='pizzita'/> {pizza.ingredients[2]}</ListGroup.Item>
            <ListGroup.Item><img className="pizzita" src='https://i.postimg.cc/NfQrK0Ky/pizza-1.png' alt='pizzita'/> {pizza.ingredients[3]}</ListGroup.Item>
          </div>
          
            <h3>Precio: ${pizza.price}</h3>
            <div className="botones"> 
            <Button variant="info" size="sm" onClick={()=> (irPizza(pizza.id))}>Ver más <img className="ojos" src='https://i.postimg.cc/qMz5V1jv/eyes-1.png' alt='eyes'/></Button>
            <Button variant="danger" size="sm" className="add">Añadir <img className="carrito" src='https://i.postimg.cc/90jZ8F89/shopping-cart.png' alt='shopping-cart'/></Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
