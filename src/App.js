import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/views/Home";
import Pizza from "./components/views/Pizza";
import Carrito from "./components/views/Carrito";
import Contexto from "./components/contexto/Contexto";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [carritoPizzas, setCarritoPizzas] = useState([]);
  //const endpoint = "/pizzas.json";

  const agregar = (pizza) => {
    const exist = carritoPizzas.find((carritoPizza) => carritoPizza.id === pizza.id);
    if (exist) {
      setCarritoPizzas(
        carritoPizzas.map((carritoPizza) =>
        carritoPizza.id === pizza.id ? { ...exist, qty: exist.qty + 1 } : carritoPizza
        )
      );
    } else {
      setCarritoPizzas([...carritoPizzas, { ...pizza, qty: 1 }]);
    }
  };

  const remover = (pizza) => {
    const exist = carritoPizzas.find((carritoPizza) => carritoPizza.id === pizza.id);
    if (exist.qty === 1) {
      setCarritoPizzas(carritoPizzas.filter((carritoPizza) => carritoPizza.id !== pizza.id));
    } else {
      setCarritoPizzas(
        carritoPizzas.map((carritoPizza) =>
        carritoPizza.id === pizza.id ? { ...exist, qty: exist.qty - 1 } : carritoPizza
        )
      );
    }
  };



  const mostrarData = async () => {
    const response = await fetch("https://api.npoint.io/6804b8e8925fcb2e68d5");
    const data = await response.json();

    setPizzas(data);
    // console.log(data);
  };
  useEffect(() => {
    mostrarData();
  }, []);

  return (
    <>
      <Contexto.Provider value={{ pizzas, setPizzas, carritoPizzas, setCarritoPizzas }}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/pizza/">
              <Route path=":id" element={<Pizza agregar={agregar} />} />
            </Route>
            <Route path="/" element={<Home agregar={agregar} />} />
            <Route
              path="/carrito"
              element={<Carrito agregar={agregar} remover={remover} />}
            />
          </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </> 
  );
}

export default App;
