import React from "react";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";

export default function Carrito(props) {
  const { agregar, remover } = props;
  const { carritoPizzas } = useContext(Contexto);
  const itemsPrecio = carritoPizzas.reduce ((a, c) => a + c.price * c.qty, 0)

  // console.log(cartItems + "wassup")

  return (
    <div>
      
      <h3 className="detalle-pedido">Detalles del pedido:</h3>
      <h4 className="carrito-vacio">{carritoPizzas.length === 0 && <p>El carrito esta vacio</p>}</h4>

      {carritoPizzas.map((pizzaEnCarrito) => (
        <div key={pizzaEnCarrito.id} className="carrito-container">
          <div className="nombre-pizza"> 
            <img src={pizzaEnCarrito.img} className="pizza-carrito" alt="´pizza-carrito"></img>
            <div>{pizzaEnCarrito.name}</div>
          </div>
          <div className="apartado-carrito">
            <b className="color-precio"> ${pizzaEnCarrito.price.toFixed(0)}</b>
            <Button onClick={() => agregar(pizzaEnCarrito)}>+</Button>
            <b className="cantidad">{pizzaEnCarrito.qty}</b>
            <Button onClick={() => remover(pizzaEnCarrito)} variant="danger">-</Button>
          </div>
        </div>
        
      ))}
      <div className="precio-final">
        <br />
        <h4>Total: ${itemsPrecio.toFixed(0)}</h4>
        <Button variant="success">ir a pagar</Button>
        </div>
    </div>
  );
}
