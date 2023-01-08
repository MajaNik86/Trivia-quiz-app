import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";


export default function MainNavigation(){

    return(
        <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Trivia Quiz</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Settings</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
}