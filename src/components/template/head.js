import React from "react";
import { Container, Col, Navbar, Nav } from "react-bootstrap";

function Head(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container
        className="text-center"
        style={{ backgroundColor: "white" }}
      >
        <Navbar.Brand href="/" className="mx-auto">
          <h1>
            <span style={{ color: "black", fontSize: "7vh" }}>Merge</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Col md={2}>
            <Nav.Link
              href="https://mergesocial.web.app/"
              style={{ fontSize: "4vh", textDecoration: "underline", textDecorationColor: "cyan" }}
            >
              Login
            </Nav.Link>
          </Col>
          <Col md={2}>
            <Nav.Link
              href="#location"
              style={{ fontSize: "4vh", textDecoration: "underline", textDecorationColor: "cyan" }}
            >
              Location
            </Nav.Link>
          </Col>
          <Col md={2}>
            <Nav.Link
              href="#contact"
              style={{ fontSize: "4vh", textDecoration: "underline", textDecorationColor: "cyan" }}
            >
              Contact
            </Nav.Link>
          </Col>
          <Col md={2}>
            <Nav.Link
              href="#about"
              style={{ fontSize: "4vh", textDecoration: "underline", textDecorationColor: "cyan"}}
            >
              About
            </Nav.Link>
          </Col>
        </Navbar.Collapse>
      </Container>
      <hr />
    </Navbar>
  );
}

export default Head;
