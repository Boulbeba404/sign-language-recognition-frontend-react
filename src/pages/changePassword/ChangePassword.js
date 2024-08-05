import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { PageTitle } from "../../components";
import { toast } from "react-toastify";
import { AuthAPI } from "../../apis";

const ChangePassword = () => {
  const authApi = new AuthAPI();
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPasswords((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }
    try {
      await authApi.changepassword(passwords.newPassword);
      toast.success("Password successfully changed!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <PageTitle className="mb-3" title="Change password" />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formOldPassword">
          <Form.Label className="ds-label">Old Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter old password"
            name="oldPassword"
            value={passwords.oldPassword}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNewPassword">
          <Form.Label className="ds-label">New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label className="ds-label">Confirm New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm new password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ChangePassword;
