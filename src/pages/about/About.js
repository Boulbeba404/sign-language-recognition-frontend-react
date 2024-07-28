import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import logo from "../../assets/logo.png";
import signLanguageImage from "../../assets/sign-reco.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container style={{ height: "100vh" }} className="my-5">
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={6} className="text-center">
          <Image src={logo} alt="App Logo" width={200} />
          <h1>Welcome to Sign Language Recognition</h1>
          <p style={{ fontWeight: 500 }} className="text-center">
            This application utilizes advanced AI technology to recognize and
            interpret sign language, making communication more accessible for
            the deaf and hard-of-hearing community. With real-time recognition
            capabilities, our app seeks to bridge communication gaps and foster
            inclusivity.
          </p>
          <Link to={"/start-recognition"}>
            <Button
              variant="primary"
              size="lg"
              style={{ width: "200px" }}
              onClick={() => {}}
            >
              Start Recognition
            </Button>
          </Link>
        </Col>

        <Col xs={12} md={6} className="text-center py-5 px-4">
          <Image
            src={signLanguageImage}
            alt="Sign Language Interpretation"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
