import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    // Send the user to the homepage
    navigate("/");
  };

  return (
    <Navbar color="dark" dark expand="md" className="mb-4">
      <NavbarBrand tag={Link} to="/">
        RalphsCode <i>JOBLY</i>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/companies">
            Companies
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/jobs">
            Jobs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/profile">
            Profile
          </NavLink>
        </NavItem>
        {username ? (
          <>
            <NavItem className="d-flex align-items-center">
              <span className="navbar-text text-white mr-3">
                Hi, {username}
              </span>
            </NavItem>
            $nbsp;
            <NavItem>
              <Button color="danger" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink tag={Link} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register">
                Register
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
