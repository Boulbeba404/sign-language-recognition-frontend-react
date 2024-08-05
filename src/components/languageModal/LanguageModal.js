import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const LanguageModal = ({ show, handleClose, modalType }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassworrd] = useState("");

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
              value={fullname}
              onChange={(event)=>setFullname(event.target.value )}
              placeholder="Enter fullname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="languageName">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              value={email}
              onChange={(event)=>setEmail(event.target.value )}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="languageName">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(event)=>setPassworrd(event.target.value )}
              placeholder="Enter password"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => handleSave()}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LanguageModal;
