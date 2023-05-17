import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(props) {
  return (
    <Container id="contact" fluid className="text-center" style={{ bottom: "0" }}>
      <hr />
      <p className="text-muted" style={{ fontSize: "1rem" }}>
        God cares about you and desires that you experience Him as He guides and
        directs your life. We pray that He will minister to you in a wonderful
        way as you browse through this site and we hope to see you in church
        soon.
        <br /> As a church, we believe that to show value for people is to
        perform and serve with excellence.
        <br />
        Therefore, we will serve with punctuality, quality, sharpness, and
        accuracy.
      </p>
      <p>
        <b>Contact</b>+260 979 888555 | +260 964 888555 Emergency Line for
        members only: +260 (967 or 977) 521929 <b>Email</b> info@mlfc.org
        <br/>
        <b>Address</b> Plot 256 Foxdale, Zambezi Road Chamba Valley, PO Box 32275
        Lusaka, Zambia
      </p>
      <br />
      <p className="text-muted" style={{ fontSize: "12px" }}>
        We believe that your relationship with Jesus is personal, and that God
        holds each one of us responsible for the part we play in our families,
        lives, jobs, and ministry.
        <br /> We also believe that mature Christians bear the fruit of service.
        We are to serve as Jesus modeled service to us.
      </p>
      <br />
      <br />
      <Row className="d-flex justify-content-center">
        <Col md={4}>
          <h3>
            <span style={{ color: "purple" }}>MERGE</span>
          </h3>
        </Col>
        <Col md={4}>
        <a href="https://web.facebook.com/mergeyamlfc">
          <img
            style={{ width: "6vh", padding: "1vh" }}
            src="https://img.freepik.com/free-icon/facebook-logo-with-rounded-corners_318-9850.jpg?w=826&t=st=1681268797~exp=1681269397~hmac=3c756bbbbcdbd0de36a0e666615a6fb4215e4de097d898ad8da97fd3b897eaa9"
            alt="facebook"
          />
          </a>
          <a href="https://twitter.com/MergeMLFC">
          <img
            style={{ width: "6vh", padding: "1vh" }}
            src="https://cdn-icons-png.flaticon.com/512/889/889147.png?w=826&t=st=1681268841~exp=1681269441~hmac=3746d862ece9c96b51c0f6f7b73ffa89c83b2e9da5bfa0067cfc2c714107bda7"
            alt="twitter"
          />
          </a>
          <a href="https://www.instagram.com/mergeyoungadults/">
          <img
            style={{ width: "6vh", padding: "1vh" }}
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png?w=826&t=st=1681268955~exp=1681269555~hmac=833e99cc58daa02f209b82028831954dceabd58f0e2671aeb49ea0157720f531"
            alt="instagram"
          />
          </a>
        </Col>
        <Col md={4}>
          <p className="text-muted">
            © 2023 <span style={{ color: "purple" }}>MERGE</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <img
            src="https://img.freepik.com/free-vector/group-young-people-illustrated_52683-34504.jpg?w=1380&t=st=1683550270~exp=1683550870~hmac=3d2fc14519b31ebbfa0617186a53b6ee9bfe70c564e06e0c80c6fc27bc4e36b6"
            alt="group-young-people-illustrated"
            style={{ width: "30vh" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
