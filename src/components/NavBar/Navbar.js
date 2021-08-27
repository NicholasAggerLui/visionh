import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './Navbar.css'
import {Button} from 'rsuite'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function MenuBar() {
return(
    <Navbar collapseOnSelect expand="lg" bg={"light"} variant="light" sticky={"top"} id ={"nav"}>
        <Container>
            <Navbar.Brand id={"nav-logo"} href="#home">Logo</Navbar.Brand>
            <Button href={"#home"}> </Button>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                    {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                    {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                    {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                    {/*    <NavDropdown.Divider />*/}
                    {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                    {/*</NavDropdown>*/}
                </Nav>
                <Nav>
                    <Nav.Link href="#features">Jobs</Nav.Link>
                    <Nav.Link href="#pricing">Teams</Nav.Link>
                    <Nav.Link href="#deets">Contact Us</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Join Us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)};
export default MenuBar;
