import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleNavbar() {
    const [checkLogin, setCheckLogin] = useState(false);

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
            <Container>
                <Navbar.Brand href="#home" className='fw-bolder fs-4'>Busy Buy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fw-bold fs-6">
                        <Nav.Link href="#features" className='me-3'>
                            <span className='bi bi-house me-1 fs-5 '></span>
                            Home
                        </Nav.Link>
                        {checkLogin ? (
                            <>
                                <Nav.Link href="#myorder" className='me-3'>
                                    <span className='bi bi-handbag me-1 fs-5'></span>
                                    My order
                                </Nav.Link>
                                <Nav.Link href="#cart" className='me-3'>
                                    <span className='bi bi-cart-dash me-1 fs-5'></span>
                                    Cart
                                </Nav.Link>
                                <Nav.Link href="#logout">
                                    <span className='bi bi-box-arrow-right me-1 fs-5'></span>
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="#login" >
                                    <span className='bi bi-box-arrow-in-left me-1 fs-5'></span>
                                    Login
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
