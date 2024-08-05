import React, { useEffect, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { PageTitle } from "../../components";
import { ModelAPI } from "../../apis";

const ModelsList = () => {
  const modelApi = new ModelAPI();
  const navigate = useNavigate();
  const [models, setModels] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const response = await modelApi.getList();
      const { recognitions } = response.data;
      setModels(
        recognitions?.map((recognition) => ({
          id: recognition?._id,
          architecture: recognition?.architecture,
          name: recognition?.name,
        }))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await modelApi.deleteModel(id);
      handleFetch();
    } catch (err) {
      console.error(err);
    }
  };

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
            onClick={() => navigate(`/update-model/${row.original.id}`)}
          />
          <Delete
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(row.original.id)}
          />
        </div>
      ),
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data: models,
  });

  return (
    <>
      <PageTitle className="mb-3" title={"Models List"} />
      <div className="d-flex justify-content-end mb-2">
        <Button
          style={{ width: 150 }}
          onClick={() => navigate("/create-model")}
        >
          Create Model
        </Button>
      </div>
      <MaterialReactTable table={table} />
    </>
  );
};

export default ModelsList;
