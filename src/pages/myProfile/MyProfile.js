import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components";
import { AuthAPI } from "../../apis";
import { toast } from "react-toastify";
const MyProfile = () => {
  const authApi = new AuthAPI();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const response = await authApi.getMyInfo();
      console.log(response.data);
      const { user } = response.data;
      setFullname(user.fullName || user.fullname);
      setEmail(user.email);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authApi.updateMyInfo(fullname, email);
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <PageTitle className="mb-3" title="My Profile" />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter fullname"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Button className="mb-2" type="submit">
          Save
        </Button>
        <Link to="/change-password">
          <Button variant="secondary">Change Password</Button>
        </Link>
      </Form>
    </>
  );
};

export default MyProfile;
