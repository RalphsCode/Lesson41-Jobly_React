import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

/** Function to display a Navbar at top of page.
 * Changes depending on whether or not the user is logged in.
 * Styled with ReactStrap.
 */
const NavBar = () => {
  const navigate = useNavigate();

  // Get the username from localstorage (if there is one)
  const username = localStorage.getItem("username");

  // Function to log a user out
  const handleLogout = () => {
    localStorage.removeItem("username");
    // Send the user to the homepage
    navigate("/");
  }; // END handleLogout()

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
        {/* Changes depending on whether or not the user is logged in */}
        {username ? (
          <>
          {/* Logged in */}
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
          {/* Not logged in */}
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
};  // END NavBar()

export default NavBar;
