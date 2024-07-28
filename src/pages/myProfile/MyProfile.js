import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components";

const MyProfile = () => {
  return (
    <Container>
      <PageTitle className="mb-3" title="My Profile" />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" />
        </Form.Group>
        <Button className="mb-2" type="submit">
          Save
        </Button>
        <Link to="/change-password">
          <Button variant="secondary">Change Password</Button>
        </Link>
      </Form>
    </Container>
  );
};

export default MyProfile;
