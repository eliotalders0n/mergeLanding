import React from "react";
import Head from "./template/head";
import Footer from "./template/footer";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";

function Advertise(props) {
  return (
    <div>
      <Head />

      <Container className="d-flex justify-content-center my-5">
        <Row>
          <Col>
            <h1>Advertise Your Hospital on Our Website</h1>
            <h3 className="text-muted">
              Thank you for your interest in advertising your hospital on our
              website.
              <br /> Please fill out the form below and we will get back to you
              as soon as possible.
            </h3>
            <br />
            <br />
            <br />
          </Col>
          <Form>
            <h3 className="text-muted">Hospital Information</h3>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="hospital name" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control placeholder="+XX XXX XXX XX XXXX" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Website</Form.Label>
                <Form.Control placeholder="https://www.our-hospital.com" />
              </Form.Group>
            </Row>

            <br />
            <br />
            <h3 className="text-muted">Advertising Preferences</h3>
            <p>
              Which advertising option are you interested in? (Check all that
              apply)
            </p>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Banner ads" />
              <Form.Check type="checkbox" label="Featured listings" />
              <Form.Check type="checkbox" label="Sponsored content" />
            </Form.Group>

            <p>What is your advertising budget? (Select one)</p>
            <Form.Group className="mb-3" id="formGridRadio">
              <Form.Check type="radio" label="Less than $500/month" />
              <Form.Check type="radio" label="$500-$1000/month" />
              <Form.Check type="radio" label="$1000-$5000/month" />
              <Form.Check type="radio" label="More than $5000/month" />
            </Form.Group>
            <br />
            <br />
            <h3 className="text-muted">Contact Information</h3>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Contact Name</Form.Label>
                <Form.Control placeholder="Our-hospital" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Contact Email</Form.Label>
                <Form.Control placeholder="https://www.our-hospital.com " />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Contact Phone Number</Form.Label>
                <Form.Control placeholder="+XX XXX XXX XX XXXX" />
              </Form.Group>
            </Row>
            <br />
            <br />
            <h3 className="text-muted">Additional Comments</h3>
            <p>
              Is there anything else you would like us to know about your
              hospital or your advertising needs? Please let us know in the
              space below.
            </p>
            <InputGroup>
              <InputGroup.Text>Comments</InputGroup.Text>
              <Form.Control as="textarea" aria-label="Comments" />
            </InputGroup>
            <br />
            <br />
            <h3 className="text-muted">
              How to Get in Touch with Our Advertising Team
            </h3>
            <p>
              If you have any questions about advertising on our website or if
              you would like to follow up on your submission, please contact our
              advertising team at advertising@hospitalfinder.com. We will
              respond to your inquiry as soon as possible. Thank you for
              considering advertising with us!
            </p>
            <br />
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
          </Form>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Advertise;
