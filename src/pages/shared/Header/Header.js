import React, { useContext, useState } from 'react';
import './Header.css';
import { Button, Image, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../resources/images/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

const Header = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();


    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate("/login");
            })
            .catch(error => console.error(error));
    }

    const handleToggle = () => {
        setToggle(!toggle);     // toggling current value of toggle
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link className='navbar-brand' to="/">
                    <img src={logo} alt="logo" style={{ width: "70px" }} />
                    <span className='fw-semibold brand'>Schoolocity</span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className=" links" to="/classes">Classes</NavLink>
                        <NavLink className=" links" to="/faq">FAQ</NavLink>
                        <NavLink className="links" to="/blog">Blog</NavLink>

                    </Nav>
                    <Nav className='align-items-center'>
                        {
                            !!loading ?
                                <div className="d-flex justify-content-center loader">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                :
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <Button onClick={handleSignOut} variant="light">Log out</Button>
                                                <div className='image-container' title={user?.displayName || "Name Not Found"}>
                                                    {
                                                        user?.photoURL ?
                                                            <Image style={{ width: "40px", height: "40px" }} src={user.photoURL} alt="profile-pic" roundedCircle />
                                                            :
                                                            <FaUserAlt />
                                                    }
                                                </div>
                                            </>
                                            :
                                            <>
                                                <NavLink className=" links" to="/login">Login</NavLink>
                                                <NavLink className="links" to="/register">Register</NavLink>
                                            </>
                                    }
                                </>

                        }



                        <div className='toggle-container ms-3' onClick={handleToggle}>
                            {
                                toggle ?
                                    <>
                                        <BsToggleOn className='toggle' />
                                        <p className="m-0"><small>Dark</small></p>
                                    </>
                                    :
                                    <>
                                        <BsToggleOff className='toggle' />
                                        <p className="m-0"><small>Light</small></p>
                                    </>
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;