import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navbarra() {
  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              className="logo"
              src="https://i.postimg.cc/pT5HdPBp/pizza.png"
              alt="pizza"
            />
            Pizza Mama Mia!
          </NavLink>
        </Navbar.Brand>

        <Nav>
          {" - "}
          <NavLink to="/carrito">carrito</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
