import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FileEarmarkCode } from "react-bootstrap-icons";
import ReactQuill from "react-quill";

const ManageModel = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      setFile(file);
    } else {
      alert("Please upload a JSON file.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form className="px-5" onSubmit={handleSubmit} style={{ color: "#404040" }}>
      <Form.Group className="mb-3">
        <Form.Label className="ds-label">Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="ds-label">Description</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
      </Form.Group>

      <Form.Group className="mb-3">
        <InputGroup>
          <Form.Control
            type="file"
            onChange={handleFileChange}
            accept=".json"
            style={{ display: "none" }}
            id="file-upload"
          />
          <InputGroup.Text
            className="w-100"
            as="label"
            htmlFor="file-upload"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              justifyContent: "center",
            }}
          >
            <FileEarmarkCode className="me-2" /> Click to upload JSON file
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ManageModel;
