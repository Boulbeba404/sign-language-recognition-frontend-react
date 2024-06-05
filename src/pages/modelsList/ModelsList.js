import React, { useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Container } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ModelsList = () => {
  const navigate = useNavigate();
  const [models, setModels] = useState([
    { id: 1, architecture: "Arch 1", name: "Model 1" },
    { id: 2, architecture: "Arch 2", name: "Model 2" },
    { id: 3, architecture: "Arch 2", name: "Model 3" },
  ]);

  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "architecture", header: "Architecture" },
    {
      accessorKey: "actions",
      header: "Actions",
      Cell: ({ row }) => (
        <div>
          <Edit
            style={{ cursor: "pointer", marginRight: 8 }}
            onClick={() => {}}
          />
          <Delete style={{ cursor: "pointer" }} onClick={() => {}} />
        </div>
      ),
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data: models,
  });

  return (
    <Container sx={{ marginTop: 4 }}>
      <div className="d-flex justify-content-end mb-2">
        <Button style={{width:250}} onClick={() => navigate("/manage-model")}>Create Model</Button>
      </div>
      <MaterialReactTable table={table} />
    </Container>
  );
};

export default ModelsList;
