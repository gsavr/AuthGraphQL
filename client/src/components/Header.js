import React from "react";
import CurrentUserQuery from "../queries/CurrentUser";
import LogoutMutation from "../mutations/Logout";
import { useQuery, useMutation } from "@apollo/client";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../css/nav.css";

const Header = () => {
  const { data, loading } = useQuery(CurrentUserQuery);
  const [logoutMutation] = useMutation(LogoutMutation);
  const navigate = useNavigate();

  const onLogout = () => {
    logoutMutation({
      refetchQueries: [{ query: CurrentUserQuery }],
    }).then(() => {
      navigate("/");
    });
  };

  const renderLinks = () => {
    if (loading) {
      return null;
    }
    const { user } = data;
    if (user) {
      return (
        <Nav.Link as={Link} to="/dashboard">
          Dashboard
        </Nav.Link>
      );
    }
  };

  const renderAuth = () => {
    if (loading) {
      return <Navbar.Text></Navbar.Text>;
    }
    const { user } = data;
    if (user) {
      return (
        <Navbar.Text>
          Hello, {user.name}
          <Link to="#" onClick={onLogout}>
            <p className="row justify-content-end" style={{ margin: "0px" }}>
              Logout
            </p>
          </Link>
        </Navbar.Text>
      );
    } else
      return (
        <NavDropdown title="Login" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/signup">
            Sign Up
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/signin">
            Sign In
          </NavDropdown.Item>
        </NavDropdown>
      );
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Auth-GraphQL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {renderLinks()}
            </Nav>
            <Nav>{renderAuth()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
