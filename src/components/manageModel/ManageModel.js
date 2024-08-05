import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FileEarmarkCode, Trash } from 'react-bootstrap-icons';
import ReactQuill from "react-quill";
import { PageTitle } from "../../components";
import { ModelAPI } from "../../apis/modelApi/ModelApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ManageModel = ({ id }) => {
  const modelApi = new ModelAPI();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [architecture, setArchitecture] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (id) {
      handleFetch();
    }
  }, [id]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      setFile(file);
    } else {
      alert("Please upload a JSON file.");
    }
  };

  const handleFetch = async () => {
    try {
      const response = await modelApi.getModelById(id);
      const { recognition } = response.data;
      setName(recognition?.name);
      setArchitecture(recognition?.architecture);
      const fileUrl = recognition?.file;
      const res = await fetch(fileUrl);
      const blob = await res.blob();
      const fileName = fileUrl.split("/").pop();
      const fileType = blob.type;
      const newFile = new File([blob], fileName, { type: fileType });
      setFile(newFile);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        await modelApi.updateModel(id, name, architecture, file);
        toast.success("Model updated successfully!");
      } else {
        await modelApi.createModel(name, architecture, file);
        toast.success("Model created successfully!");
      }
      navigate("/models-list");
    } catch (err) {
      console.error(err);
      toast.error("Internal server error!");
    }
  };

  return (
    <>
      <PageTitle className="mb-3" title={id ? "Edit Model" : "Create Model"} />
      <Form onSubmit={handleSubmit} style={{ color: "#404040" }}>
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
          <Form.Label className="ds-label">Architecture</Form.Label>
          <Form.Control
            type="text"
            value={architecture}
            onChange={(e) => setArchitecture(e.target.value)}
            placeholder="Enter architecture"
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
        {file ? (
          <InputGroup.Text className="w-100" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>{file.name}</span>
            <Button variant="outline-danger" size="sm" onClick={()=>setFile(undefined)}>
              <Trash />
            </Button>
          </InputGroup.Text>
        ) : (
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
        )}
 </InputGroup>
 </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ManageModel;
