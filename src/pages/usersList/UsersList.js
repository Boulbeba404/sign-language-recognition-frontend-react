import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MaterialReactTable } from "material-react-table";
import { PageTitle } from "../../components";
import { Edit, Delete } from "@mui/icons-material";
import { LanguageModal } from "../../components";

const UsersList = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "boulbebaellouze@gmail.com",fullname:"Boulbeba Ellouze" },
    { id: 1, email: "ilyessellaami04@gmail.com",fullname:"Ilyess Sellami" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("Add");

  const handleOpenModal = (type = "Add") => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const columns = [
    { accessorKey: "email", header: "Email" },
    { accessorKey: "fullname", header: "Full Name" },
    {
      accessorKey: "actions",
      header: "Actions",
      Cell: ({ row }) => (
        <div>
          <Edit
            style={{ cursor: "pointer", marginRight: 8 }}
            onClick={() => handleOpenModal("Edit")}
          />
          <Delete style={{ cursor: "pointer" }} onClick={() => {}} />
        </div>
      ),
    },
  ];

  return (
    <>
      <PageTitle className="mb-3" title="Users List" />
      <div className="d-flex justify-content-end mb-2">
        <Button style={{ width: 150 }} onClick={() => handleOpenModal()}>
          Add User
        </Button>
      </div>
      <MaterialReactTable columns={columns} data={users} />
      <LanguageModal
        show={showModal}
        handleClose={handleCloseModal}
        modalType={modalType}
      />
    </>
  );
};

export default UsersList;
