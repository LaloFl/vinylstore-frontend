import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const FitContent = styled.div`
    width: fit-content;
`;

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <FitContent>
            <Nav.Link href="#features">Features</Nav.Link>
            </FitContent>
            <FitContent>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </FitContent>
            <FitContent>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </FitContent>
            </Nav>
            <Nav>
            <FitContent>
            <Nav.Link href="#deets">More deets</Nav.Link>
            </FitContent>
            <FitContent>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </FitContent>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}