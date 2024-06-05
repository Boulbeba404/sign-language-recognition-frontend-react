import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import { GearFill, List } from "react-bootstrap-icons";
import logo from "../../assets/logo.png";

const PrivateInterfaceLayout = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Navbar.Brand className="ps-2" href="#home">
            <img src={logo} alt="App Logo" style={{ height: "45px" }} />
          </Navbar.Brand>
          <NavDropdown title="User" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">View Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

      <div style={{ display: "flex", height: "84vh" }}>
        <Sidebar>
          <Menu iconShape="square">
            <MenuItem icon={<GearFill />}>Manage Model</MenuItem>
            <MenuItem icon={<List />}>Models List</MenuItem>
          </Menu>
        </Sidebar>

        <main style={{ flex: 1, padding: "10px" }}>{children}</main>
      </div>

      <footer className="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Sign Language Recognition
        </div>
      </footer>
    </div>
  );
};

export default PrivateInterfaceLayout;
