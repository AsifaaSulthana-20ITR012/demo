import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
function Navigation2() {

    return (
        <div id="navbar">
            <div style={{ position: "fixed", zIndex: 2, width: "100%", height: "1px" }}>
                <Navbar expand='lg' variant='dark' id='nav-background' >
                    <Navbar.Brand id='nav-name' href="/">Sanjay's Fine Foods</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link id='nav-content' href="/">Home</Nav.Link>
                            <Nav.Link id='nav-content' href="products">Shop</Nav.Link>
                            <Nav.Link id='nav-content' href="giftVoucher">Gifts</Nav.Link>
                            <Nav.Link id='nav-content' href="cart">Cart</Nav.Link>
                            <Nav.Link id='nav-content' href="contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Navigation2