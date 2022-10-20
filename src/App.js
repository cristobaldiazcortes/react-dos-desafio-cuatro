import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/views/Home";
import Pizza from "./components/views/Pizza";
import Carrito from "./components/views/Carrito";
import {Provider} from "./components/contexto/Contexto"


function App() {
  // const [pizzas, setPizzas] = useState([]);
  // const endpoint = "/pizzas.json";

  // const mostrarData = async () => {
  //   const response = await fetch("http://localhost:3000/" + endpoint);
  //   const data = await response.json();

  //   setPizzas(data);
  //   // console.log(data);
  // };
  // useEffect(() => {
  //   mostrarData();
  // }, []);

  return (
    <>
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/pizza/">
              <Route path=":id" element={<Pizza />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
