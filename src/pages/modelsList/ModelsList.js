import React, { useState } from "react";
import { Table, Button, Container, Pagination } from "react-bootstrap";
import { FileEarmarkCode, PencilSquare, Trash } from "react-bootstrap-icons";

const ModelsList = () => {
  const [pagenNumber, setPageNumber] = useState(1);
  const [paginationLength, setPaginationLength] = useState(10);
  const [models, setModels] = useState([
    { id: 1, architecture: "Arch 1", name: "Model 1" },
    { id: 2, architecture: "Arch 2", name: "Model 2" },
    { id: 3, architecture: "Arch 2", name: "Model 3" },
  ]);

  const handleCreateModel = () => {};

  const handleDelete = (id) => {
    setModels(models.filter((model) => model.id !== id));
  };

  return (
    <Container>
      <div className="d-flex justify-content-end">
        <Button
          onClick={handleCreateModel}
          style={{ float: "right", marginBottom: 20, width: "150px" }}
        >
          Create Model
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Architecture</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.id}>
              <td>{model.name}</td>
              <td>
                {model.architecture}
              </td>
              <td>
                <PencilSquare
                  className="me-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => alert(`Edit ${model.id}`)}
                />
                <Trash
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(model.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        {Array.from({ length: paginationLength }).map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === pagenNumber}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default ModelsList;
