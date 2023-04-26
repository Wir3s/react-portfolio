import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Router } from "react-router-dom";

function Navigation({ currentPage, handlePageChange }) {
  return (
 
    <Navbar expand="md" className="nav-style" variant="dark">
      <Container>
        <Navbar.Brand>Andre Bessette</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
            as={Link}
              to="/"
              className="nav-link"           
            >
              About Me
            </Nav.Link>
            <Link
              to="/portfolio"
              className="nav-link"
            >
              Portfolio
            </Link>
            <Nav.Link
            as={Link}
              to="/contact"
              className="nav-link"
            >
              Contact
            </Nav.Link>
            <Nav.Link
            as={Link}
              to="/resume"
              className="nav-link"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
