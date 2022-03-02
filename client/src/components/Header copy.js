import React from "react";
import { graphql } from "react-apollo";
import CurrentUserQuery from "../queries/CurrentUser";
import LogoutMutation from "../mutations/Logout";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ data: { user, loading }, mutate }) => {
  console.log(user);

  const onLogout = () => {
    mutate({
      refetchQueries: [{ query: CurrentUserQuery }],
    });
  };

  const renderButtons = () => {
    if (loading) {
      return <Navbar.Text>...</Navbar.Text>;
    }
    if (user) {
      return (
        <Navbar.Text>
          Signed in as:{" "}
          <Link to="#" onClick={onLogout}>
            {user.name}
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
      <Navbar bg="dark" variant="dark" /* expand="lg" */>
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
              <Nav.Link as={Link} to="/">
                Link
              </Nav.Link>
            </Nav>
            <Nav>{renderButtons()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default graphql(LogoutMutation)(graphql(CurrentUserQuery)(Header));
