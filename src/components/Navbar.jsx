import React from "react";
import { Nav, NavItem, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
    return <>
        <Navbar className="customNav" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">ArtGallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">FAQS</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Contacts
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Featured arts</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Future Projects
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    </>;
}
 
export default CustomNavbar;