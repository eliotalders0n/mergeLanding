import React from "react";
import Head from "./template/head";
import Footer from "./template/footer";
import { Col, Container, Row } from "react-bootstrap";

function Help(props) {
  return (
    <div>
      <Head />

      <Container className=" my-5">
        <Row>
          <Col>
            <h2 className="text-muted">Help</h2>
            <p>
              Welcome to Hospital<span style={{ color: "purple" }}>Finder</span>
              ! Here's some information to help you get started:
            </p>
            <br />
            <h2 className="text-muted">Overview of the website</h2>
            <p>
              Our website allows you to search for hospitals in your area based
              on a variety of criteria, including location, specialty, and
              distance. You can view detailed information about each hospital,
              including its address, phone number, and services provided. You
              can also use our map feature to search for hospitals by location.
            </p>
            <br />
            <h2 className="text-muted">How to search for hospitals</h2>
            <p>
              To search for hospitals, simply enter your search criteria in the
              search bar on the home page. You can search by location,
              specialty, or distance. Once you've entered your search criteria,
              click the search button to see a list of matching hospitals.
            </p>
            <br />
            <h2 className="text-muted">How to view hospital information</h2>
            <p>
              To view detailed information about a hospital, click on its name
              in the search results. This will take you to the hospital's
              profile page, where you can see its address, phone number, and
              services provided. You can also view ratings and reviews from
              other users.
            </p>
            <br />
            <h2 className="text-muted">How to use the map</h2>
            <p>
              If you prefer to search for hospitals using a map, click the "Map
              View" button on the search results page. This will display a map
              with markers indicating the location of each hospital. You can
              zoom in and out, pan the map, and view different layers by
              clicking the buttons on the map.
            </p>
            <br />
            <h2 className="text-muted">How to filter search results</h2>
            <p>
              To filter search results, click the "Filter" button on the search
              results page. This will allow you to filter by criteria such as
              rating, accreditation, and patient feedback. Once you've selected
              your filters, click the "Apply" button to update the search
              results.
            </p>
            <br />
            <h2 className="text-muted">
              How to save and share hospital information
            </h2>
            <p>
              To save information about a hospital, click the "Bookmark" button
              on its profile page. This will add the hospital to your list of
              bookmarks, which you can access by clicking the "Bookmarks" link
              in the navigation menu. To share information about a hospital,
              click the "Share" button on its profile page. This will allow you
              to share the hospital's profile on social media.
            </p>
            <br />
            <h2 className="text-muted">Contact information</h2>
            <p>
              If you have any questions or concerns, please don't hesitate to
              contact our support team at support@hospitalfinder.com. You can
              also follow us on social media for updates and news.
            </p>
            <br />
            <h2 className="text-muted">Legal disclaimers</h2>
            <p>
              Please read our terms of service and privacy policy for
              information on using our website.
            </p>
            <br />
            <h2 className="text-muted">Frequently asked questions</h2>
            <p>
              Q: How do I create an account?
              <br />
              A: To create an account, click the "Sign Up" link in the
              navigation menu. You will be prompted to enter your email address
              and create a password.
              <br />
              <br />
              Q: How do I update my search preferences?
              <br />
              A: To update your search preferences, click the "Settings" link in
              the navigation menu. You can update your location, specialty, and
              distance preferences from there.
              <br />
              <br />
              Q: How do I report errors?
              <br />
              A: If you encounter any errors while using the website, please
              contact our support team at support@hospitalfinder.com.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Help;
