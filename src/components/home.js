import React from "react";
import Head from "./template/head";
import Footer from "./template/footer";
import { Container, Col, Row, Carousel, Card, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { InstagramEmbed } from "react-social-media-embed";

function Home(props) {
  return (
    <>
      <Head />
      <Container>
        <Container fluid className="text-center">
          <Row className="my-5">
            <Col className="text-center">
              <h1
                style={{
                  fontSize: "8vh",
                  textShadow: "4px 2px 6px rgba(0, 0, 0, 0.4)",
                  marginTop: "3vh",
                }}
              >
                GROWING INTO CHRIST LIKE MATURITY{" "}
              </h1>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  marginTop: "14vh",
                }}
              >
                BUILDING STRONG{" "}
                <span
                  style={{
                    backgroundColor: "cyan",
                    borderRadius: "10px 150px",
                  }}
                >
                  AUTHENTIC RELATIONSHIPS
                </span>{" "}
                WITH{" "}
                <span
                  style={{
                    borderRadius: "10px 150px",
                    backgroundColor: "cyan",
                  }}
                >
                  LIKE MINDED BELIEVERS
                </span>{" "}
                AND PREPARING TO FACE LIFES CHALLENGES
              </p>
              <Button>Join Now</Button>{" "}
              <Button className="btn-dark">Location</Button>
            </Col>
            {/*  */}
            <Col className="my-4" style={{ position: "relative" }}>
              <img
                style={{
                  maxWidth: "100%",
                  borderRadius: "40px",
                  boxShadow: "4px 4px 8px 2px rgba(128, 0, 128, 0.2)",
                }}
                src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "1",
                  backgroundColor: "rgba(30, 30, 30, 0.5)",
                  padding: "2px",
                  color: "white",
                  borderRadius: "10px 20px 10px",
                }}
              >
                <h4>
                  Merge is all about high energy, deep relationships and great
                  exploits
                </h4>
                <br />
              </div>
              <h5
                style={{
                  backgroundColor: "rgba(0,255,255, 0.2)",
                  color: "black",
                  padding: "10px",
                  borderRadius: "40px ",
                  marginTop: "10vh",
                  marginBottom: "0",
                }}
              >
                Designed specifically for unmarried young adults age 19 to 29
              </h5>
            </Col>
          </Row>
        </Container>

        <Container>
        <Row>
            <Col className="my-5">
              <Carousel controls={false} indicators={false}>
                <Carousel.Item style={{height : "50vh"}}>
                  <img
                    className="d-block w-100"
                    src="http://mlfc.org/wp-content/uploads/2022/06/Merge-1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p
                      style={{
                        borderRadius: "10px 150px",
                        backgroundColor: "cyan",
                        color: "black",
                        fontSize: "4vh",
                      }}
                    >
                      At Merge, young adults learn to love and trust God
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height : "50vh"}}>
                  <img
                    className="d-block w-100"
                    src="http://mlfc.org/wp-content/uploads/2022/06/Merge-2.jpg"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <p
                      style={{
                        borderRadius: "10px 150px",
                        backgroundColor: "cyan",
                        color: "black",
                        fontSize: "4vh",
                      }}
                    >
                      To love themselves and how to express love to others
                      around them
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height : "50vh"}}>
                  <img
                    className="d-block w-100"
                    src="http://mlfc.org/wp-content/uploads/2022/06/Merge-3.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <p
                      style={{
                        borderRadius: "10px 150px",
                        backgroundColor: "cyan",
                        color: "black",
                        fontSize: "4vh",
                      }}
                    >
                      Merge meets weekly every Sunday from 13:00 to 14:30 hours.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>

        <Container id="about" fluid>
          <Row>
            <Col>
              <Card
                style={{ maxWidth: "35rem", border: "none", marginTop: "70px", boxShadow: "14px 14px 2px 2px rgba(0,160,160,0.2)" }}
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1514471269849-fda3a4441307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                />
                <Card.Body>
                  <Card.Title className="display-3">
                    PASSIONATE ABOUT CHRIST
                  </Card.Title>
                  <Card.Text>
                    We are set{" "}
                    <span
                      style={{
                        backgroundColor: "cyan",
                        color: "black",
                        padding: "3px",
                        fontSize: "1.5rem",
                        textShadow: "8px 2px 6px rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      ablaze
                    </span>{" "}
                    to go out and accomplish{" "}
                    <span
                      style={{
                        backgroundColor: "cyan",
                        color: "black",
                        padding: "3px",
                        fontSize: "1.5rem",
                        textShadow: "8px 2px 6px rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      great things in His name
                    </span>
                  </Card.Text>
                  <Button variant="primary">Come Join us</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                style={{ maxWidth: "40rem", border: "none", boxShadow: "14px 14px 2px 2px rgba(50,0,255,0.2)" }}
                className="my-5"
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                />
                <Card.Body>
                  <Card.Title className="display-5">
                    Express Your{" "}
                    <span
                      style={{
                        backgroundColor: "cyan",
                        color: "black",
                        padding: "3px",
                        textShadow: "6px 4px 10px rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      Uniqueness
                    </span>
                  </Card.Title>
                  <Card.Text>
                    See yourself and others the way God sees you
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row style={{ paddingTop: "100px" }}>
            <Col className="my-5">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <InstagramEmbed
                  url="https://www.instagram.com/p/Cr-1dbkIoOP/"
                  width={"40vh"}
                />
              </div>
            </Col>

            <Col className="my-5">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <InstagramEmbed
                  url="https://www.instagram.com/p/CoWgI1Do6-e/"
                  width={"40vh"}
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container id="location" className="d-flex justify-content-center">
          <Row className="my-5">
            <h1
              className="display-1"
              style={{
                fontSize: "12vh",
                textShadow: "4px 4px 1px rgb(0, 255, 255)",
              }}
            >
              COME JOIN US
            </h1>
            <MapContainer
              style={{
                height: "100vh",
                marginTop: "8vh",
                borderRadius: "10px",
              }}
              center={[-15.363402, 28.319056]} //lat, lng
              zoom={14}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={[-15.363402, 28.319056]}>
                <Popup>
                  <h4 className="text-center">
                    Miracle Life Family Church (MERGE HQ)
                  </h4>
                  <img src="http://mlfc.org/wp-content/uploads/2022/10/Home-1.jpg" />
                </Popup>
              </Marker>
            </MapContainer>
          </Row>
        </Container>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
