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
        <Modal.Title>{modalType} Language</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="languageName">
            <Form.Label>Language Name</Form.Label>
            <Form.Control
              type="text"
              value={language.name}
              onChange={handleChange}
              placeholder="Enter language name"
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
