import React from 'react';
import './Header.css';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../resources/images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link className='navbar-brand' to="/">
                    <img src={logo} alt="logo" style={{ width: "70px" }} />
                    <span className='fw-semibold brand'>Shoolocity</span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className=" links" to="/classes">Classes</NavLink>
                        <NavLink className=" links" to="/faq">FAQ</NavLink>
                        <NavLink className="links" to="/blog">Blog</NavLink>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;