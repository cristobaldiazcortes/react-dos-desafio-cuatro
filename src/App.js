import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/views/Home";
import Pizza from "./components/views/Pizza";
import Carrito from "./components/views/Carrito";
import Contexto from "./components/contexto/Contexto";
import { useState } from "react";

function App() {
  const [compras, setCompras] = useState([]);
  const sharedState = { compras, setCompras };
  return (
    <>
      <Contexto.Provider value={sharedState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/ :id" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </>
  );
}

export default App;
