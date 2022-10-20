import React from "react";
import { useState, useEffect, createContext } from "react";

export const Contexto = createContext({});

export const Provider = ({ children }) => {
  const mostrarData = async () => {
    const response = await fetch("http://localhost:3000/" + endpoint);
    const data = await response.json();

    setPizzas(data);
    // console.log(data);
  };
  useEffect(() => {
    mostrarData();
  }, []);
  const [pizzas, setPizzas] = useState([]);
  const sharedState = { pizzas, setPizzas };
  const endpoint = "/pizzas.json";

  return <Contexto.Provider value={sharedState}>{children}</Contexto.Provider>;
};
