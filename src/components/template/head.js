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
          {/* <h1>
            <span style={{ color: "black", fontSize: "7vh" }}>Merge</span>
          </h1> */}
          <img src="images/merge.jpg" style={{ width: "10vh", borderRadius: "10px"}} alt="merge thing"/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Col md={2}>
            <Nav.Link
              href="https://mergesocial.web.app/"
              style={{ fontSize: "3vh" }}
            >
              Login
            </Nav.Link>
          </Col>
          <Col md={2}>
            <Nav.Link
              href="#location"
              style={{ fontSize: " 3vh"  }}
            >
              Location
            </Nav.Link>
          </Col>
          <Col md={2}>
            <Nav.Link
              href="#contact"
              style={{ fontSize: " 3vh"  }}
            >
              Contact
            </Nav.Link>
          </Col>
          <Col md={2}>
            <Nav.Link
              href="#about"
              style={{ fontSize: " 3vh" }}
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
