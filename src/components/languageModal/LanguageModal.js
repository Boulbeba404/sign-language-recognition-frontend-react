import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const LanguageModal = ({ show, handleClose, modalType }) => {
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    setLanguage({ ...language, name: event.target.value });
  };

  const handleSave = () => {};

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalType} User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="languageName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              value={language.name}
              onChange={handleChange}
              placeholder="Enter fullname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="languageName">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              value={language.name}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="languageName">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={language.name}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => handleSave(language)}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LanguageModal;
