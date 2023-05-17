import React from "react";
import Head from "./template/head";
import Footer from "./template/footer";
import { Col, Container, Row } from "react-bootstrap";

function about(props) {
  return (
    <div>
      <Head />

      <Container className="d-flex justify-content-center my-5">
        <Row>
          <Col>
            <h1>
              Hospital<span style={{ color: "purple" }}>Finder</span>
            </h1>
            <h3 className="text-muted">About</h3>
            <p>
              Welcome to Hospital Finder, the website that helps you locate
              hospitals around the world. Our mission is to provide a
              comprehensive, up-to-date directory of hospitals to help people
              find the care they need, no matter where they are. We understand
              that finding a hospital in an unfamiliar location can be a
              daunting task.
              <br /> <br /> That's why we've created a user-friendly platform
              that allows you to easily search for hospitals based on your
              current location or any location of your choice. Our database
              includes thousands of hospitals across the globe, with information
              on their services, facilities, and contact details. Whether you're
              travelling abroad or looking for a hospital in your local area,
              Hospital Finder is here to help.
              <br /> <br />
              We believe that everyone should have access to quality healthcare,
              and we're committed to making that a reality by providing a free
              and reliable service to our users. Our team is dedicated to
              ensuring that our database is always up-to-date and accurate, so
              you can be confident in the information you find on our website.
              <br /> We welcome feedback from our users, and we're always
              looking for ways to improve our service and make it even more
              useful. Thank you for choosing Hospital Finder. We hope that our
              website helps you find the care you need, whenever and wherever
              you need it.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default about;
