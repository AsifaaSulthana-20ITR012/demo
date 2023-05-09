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
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Nav className="me-auto">
                            <Nav.Link id='nav-content' href="/">Home</Nav.Link>
                            <Nav.Link id='nav-content' href="product">Product</Nav.Link>
                            <Nav.Link id='nav-content' href="gifts">Gifts</Nav.Link>
                            <Nav.Link id='nav-content' href="login">Login</Nav.Link>
                            <Nav.Link id='nav-content' href="signup">SignUp</Nav.Link>
                            <Nav.Link id='nav-content' href='/#about1'>About</Nav.Link>
                            <Nav.Link id='nav-content' href='/#contact1'>Contact</Nav.Link>
                            <Nav.Link id='nav-content' href='addproduct'>AddProduct</Nav.Link>
                            
                        </Nav>
                    {/* </Navbar.Collapse> */}
                </Navbar>
            </div>
        </div>
    )
}

export default Navigation2