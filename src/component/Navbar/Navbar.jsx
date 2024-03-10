import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css'

function CollapsibleNavbar() {
    const [checkLogin, setCheckLogin] = useState(true);

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
            <Container>
                <Navbar.Brand  className='fw-bolder fs-4'><Link to="/" className='text-white text-decoration-none'>Busy Buy</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fw-bold fs-6">
                        <Nav.Link className='me-3 remove'>

                            <NavLink to="/" className='  link'   >
                                <span className='bi bi-house me-1 fs-5 '></span>
                                Home</NavLink>
                        </Nav.Link>
                        {checkLogin ? (
                            <>
                                <Nav.Link className='me-3'>
                                    <Link to="/order" className='  link'>
                                        <span className='bi bi-handbag me-1 fs-5'></span>
                                        My order</Link>
                                </Nav.Link>
                                <Nav.Link className='me-3'>
                                    <Link to="/cart" className='  link'>
                                        <span className='bi bi-cart-dash me-1 fs-5'></span>
                                        Cart</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <span className='bi bi-box-arrow-right me-1 fs-5'></span>
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link  >
                                    <span className='bi bi-box-arrow-in-left me-1 fs-5'></span>
                                    <Link to="login"> Login</Link>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleNavbar;




