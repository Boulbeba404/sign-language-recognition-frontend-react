import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components";

const MyProfile = () => {
  return (
    <Container>
      <PageTitle className="mb-3" title="My Profile" />
      <Form>
      <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter fullname" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
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
