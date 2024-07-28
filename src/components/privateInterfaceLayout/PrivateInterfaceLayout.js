import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { GearFill, List, Translate, PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useAuth } from "../../hooks";

const PrivateInterfaceLayout = ({ children }) => {
  const {logout} = useAuth()
  return (
    <div style={{ height: "100vh" }}>
      <Navbar className="bg-white" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"} className="ps-2">
            <img src={logo} alt="App Logo" style={{ height: "45px" }} />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Dropdown align={"end"}>
              <Dropdown.Toggle variant="link" id="profile-dropdown">
                <PersonCircle size={30} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">Manage Profile</Dropdown.Item>
                <Dropdown.Item as="button" onClick={logout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      <div style={{ display: "flex", height: "80vh" }}>
        <Sidebar className="bg-white">
          <Menu className="bg-white" iconShape="square">
            <MenuItem
              component={<Link to="/manage-model" />}
              icon={<GearFill />}
            >
              Manage Model
            </MenuItem>
            <MenuItem component={<Link to="/models-list" />} icon={<List />}>
              Models List
            </MenuItem>
            <MenuItem
              component={<Link to="/languages-list" />}
              icon={<Translate />}
            >
              Languages List
            </MenuItem>
          </Menu>
        </Sidebar>
        <main style={{ flex: 1, padding: "10px" }}>{children}</main>
      </div>
      <footer className="text-center text-lg-start">
        <div className="text-center p-3">© 2024 Sign Language Recognition</div>
      </footer>
    </div>
  );
};

export default PrivateInterfaceLayout;
