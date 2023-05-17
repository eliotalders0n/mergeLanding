import React, { useEffect, useState } from "react";
// import axios from "axios";
import useGetExtras from "../hooks/useGetExtras";
import Head from "./template/head";
import Footer from "./template/footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  Container,
  ListGroup,
  Form,
  InputGroup,
  Card,
  Row,
  Col,
  Button,
  Modal,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

// maps api foursquare = fsq3qdGNsyxCdF0IRGIOujcihodHFg0+FBmtRSXtPPmeAo0=

const Search = () => {
  const [hospitals, setHospitals] = useState([]);
  // const [Images, setImages] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "fsq3qdGNsyxCdF0IRGIOujcihodHFg0+FBmtRSXtPPmeAo0=",
      },
    };

    fetch(
      "https://api.foursquare.com/v3/places/search?query=Hospital&ll=-15.416667,28.283333&radius=50000&limit=50",
      options
    )
      .then((response) => response.json())
      // .then(data => console.log(data.results))
      .then((data) => setHospitals(data.results))
      .catch((error) => console.error(error));
  }, []);

  // console.log('================================');
  // console.log("hos" + hospitals.map((data) => data.fsq_id));

  // function GetImage(id){
  //   useEffect(() => {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization: "fsq3qdGNsyxCdF0IRGIOujcihodHFg0+FBmtRSXtPPmeAo0=",
  //       },
  //     };

  //     fetch(`https://api.foursquare.com/v3/places/${id}/photos`, options)
  //       .then((response) => response.json())
  //       .then((response) => setImages(response))
  //       .catch((err) => console.error(err));
  //   }, []);

  //   return Images;
  // }

  // const id = "4ef06f32722ece9f1727e4d1";
  // console.log("================================");
  // console.log(
  //   "Image data : " +
  //     GetImage(id.toString()).map((data) => data.suffix)
  // );
  // console.log('image ' + Images.map((data) => data.suffix));
  // Get current location
  const [position, setPosition] = useState(null);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      const options = {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      };
      navigator.geolocation.getCurrentPosition(
        (position) => setPosition(position.coords),
        (error) => console.log(error),
        options
      );
    } else {
      console.log("Geolocation not available");
    }
  }, []);

  useEffect(() => {
    if (position) {
      setLat(position.latitude);
      setLng(position.longitude);
      console.log(`Current location: ` + lat + ` - ` + lng);
    }
  }, [position, lat, lng]);

  const [visible, setVisible] = useState(4);
  const limit = hospitals.slice(0, visible);

  const handleShowMore = () => {
    setVisible(visible + 4);
  };

  // show card modal
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleCloseModal = () => {
    setModalContent(null);
    setShowModal(false);
  };
  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  // Search function
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch() {
    const response = await fetch(
      `https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=hospital](around:505000,-15.416667, 28.283333);out;`
    );
    const data = await response.json();
    setSearchResults(data.elements);
  }

  const Specialties = useGetExtras().docs;

  return (
    <>
      <Head />
      <Container fluid className="text-center d-flex justify-content-center">
        <ListGroup horizontal>
          <Row>
            <Col md={3}>
              <InputGroup className="mb-3 ">
                <Form.Control
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  aria-label="Default"
                  aria-describedby="inputGroup-search"
                />
                <OverlayTrigger
                  trigger={"focus"}
                  placement={"left"}
                  overlay={
                    <Popover style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                      <Popover.Header as="h3">result</Popover.Header>
                      <Popover.Body
                        style={{ overflowY: "auto", maxHeight: "50vh" }}
                      >
                        {searchResults
                          .filter((result) =>
                            new RegExp(searchQuery, "i").test(result.tags.name)
                          )
                          .map((result) => (
                            <Card
                              key={result.id}
                              onClick={() => handleShowModal(result)}
                            >
                              <Card.Body>
                                <Card.Title>{result.tags.name}</Card.Title>
                              </Card.Body>
                            </Card>
                          ))}
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button className="bg-dark" onClick={handleSearch}>
                    Search
                  </Button>
                </OverlayTrigger>
              </InputGroup>
            </Col>

            <Col md={3}>
              <Form.Select aria-label="Default select example">
                <option>Hospital Services</option>
                <option value="1">Primary care</option>
                <option value="2">Urgent care</option>
                <option value="3">Emergency care</option>
                <option value="4">Diagnostic services </option>
                <option value="5">Rehabilitation services</option>
                <option value="6">Mental health services</option>
                <option value="7">Specialty care</option>
                <option value="8">Preventive care</option>
                <option value="9">Hospice and palliative care</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Select aria-label="Default select example">
                <option value="">Specialties</option>
                {Specialties.map((u, index) => (
                  <option key={index} value={u}>
                    {u.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Select aria-label="Default select example">
                <option>Facility</option>
                <option value="1">Hospital</option>
                <option value="2">Clinic</option>
                <option value="3">Rehabilitation center</option>
                <option value="4">Hospice</option>
                <option value="5">Imaging center</option>
                <option value="6">Mental health facility</option>
              </Form.Select>
            </Col>
          </Row>
        </ListGroup>
        <hr />
      </Container>
      <Container fluid>
        <Row>
          <Col md={6}>
            {/* Map goes here */}
            <MapContainer
              className="my-4"
              style={{ height: "70vh" }}
              center={[-15.416667, 28.283333]} //lat, lng
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {hospitals &&
                hospitals.map((hospital) => (
                  <Marker
                    key={hospital.fsq_id}
                    position={[
                      hospital.geocodes.main.latitude,
                      hospital.geocodes.main.longitude,
                    ]}
                  >
                    <Popup>{hospital.name}</Popup>
                  </Marker>
                ))}
            </MapContainer>
          </Col>
          <Col md={6}>
            <Container
              fluid
              className="d-flex justify-content-center"
              style={{
                height: "70vh",
                overflowY: "auto",
              }}
            >
              <Row>
                {limit.map((hospital, index) => (
                  <Card
                    className="mx-3 my-3"
                    style={{ width: "40%" }}
                    key={hospital.id}
                  >
                    <Card.Img
                      variant="top"
                      src="https://img.freepik.com/free-vector/therapist-working-with-patient-rehabilitation-center-rehabilitation-center-rehabilitation-hospital-stabilization-medical-conditions-concept-bright-vibrant-violet-isolated-illustration_335657-533.jpg?w=1380&t=st=1681766543~exp=1681767143~hmac=1c67ebe47a0164cc98f54d533d2b250647d3b481a9e6b2b5535145714a5f6be3"
                    />
                    <Card.Body>
                      <Card.Title>{hospital.name}</Card.Title>
                      <Card.Text>
                        {hospital.location.formatted_address} <br />
                        Distance {hospital.distance} meters
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleShowModal(hospital)}
                      >
                        View
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
                <Modal show={showModal} size="lg" onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h1>
                        Hospital<span style={{ color: "purple" }}>Finder</span>
                      </h1>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container fluid>
                      <Row>
                        <Col style={{ overflowY: "auto", maxHeight: "70vh", backgroundColor: "rgba(200,200,200,0.3)", borderRadius: "175px" }}>
                         {/* {modalContent?.fsq_id}
                          {GetImage("4ef06f32722ece9f1727e4d1").map((image) => (
                            <img
                              key={image.id}
                              src={`https://fastly.4sqi.net/img/general/300x500${image.suffix}`}
                              alt="test 1"
                              style={{
                                maxWidth: "720",
                                maxHeight: "960",
                                marginBottom: "5vh",
                                boxShadow: "6px 6px 12px 4px rgba(0,0,0,0.2)",
                              }}
                            />
                            
                          ))} */}
                          <img
                              src={`https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?size=626&ext=jpg&uid=R66341138&ga=GA1.1.2055941900.1681266190&semt=ais`}
                              alt="test 1"
                              style={{
                                maxWidth: "35vh",
                                marginBottom: "5vh",
                                boxShadow: "4px 4px 6px 2px rgba(10,10,130,0.1)",
                              }}
                            />
                            <img
                              src={`https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8240.jpg?size=626&ext=jpg&uid=R66341138&ga=GA1.1.2055941900.1681266190&semt=ais`}
                              alt="test 2"
                              style={{
                                maxWidth: "35vh",
                                marginBottom: "5vh",
                                boxShadow: "4px 4px 6px 2px rgba(10,130,10,0.1)",
                              }}
                            />
                        </Col>
                        <Col>
                          <h2>{modalContent?.name}</h2> <hr />
                          <br />
                          <h3>Overview</h3>
                          <br />
                          <ListGroup>
                            <ListGroup.Item>
                              <i className="bi bi-book-fill"></i>{" "}
                              {modalContent?.location.address}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <i className="bi bi-envelope-at-fill"></i>{" "}
                              {modalContent?.email}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <i className="bi bi-person-gear"></i>{" "}
                              {modalContent?.operator}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <i className="bi bi-telephone"></i>{" "}
                              {modalContent?.phone}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <i className="bi bi-file-earmark-fill"></i>{" "}
                              {modalContent?.website}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <i className="bi bi-activity"></i>{" "}
                              {modalContent?.wheelchair}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <i className="bi bi-life-preserver"></i>{" "}
                              {modalContent?.emergency}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <i className="bi bi-card-text"></i>{" "}
                              {modalContent?.description}
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Row>
            </Container>
          </Col>
          <Button onClick={handleShowMore}>More</Button>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Search;
