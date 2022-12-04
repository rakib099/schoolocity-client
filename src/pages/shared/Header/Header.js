import React, { useContext } from 'react';
import './Header.css';
import { Button, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../resources/images/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
        .then(() => {
            navigate("/login");
        })
        .catch(error => console.error(error));
    }

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
                        {
                            user?.uid ?
                                <Link>
                                    <Button onClick={handleSignOut} variant="light">Log out</Button>
                                </Link>
                                :
                                <>
                                    <NavLink className=" links" to="/login">Login</NavLink>
                                    <NavLink className="links" to="/register">Register</NavLink>
                                </>
                        }
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.displayName}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;