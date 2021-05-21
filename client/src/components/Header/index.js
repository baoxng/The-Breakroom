import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
    return (
        <div className="sticky-top">
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" expand="lg">
            <a className="navbar-brand" style={{marginLeft: '10px'}} href="/">
            The Breakroom
            </a>
            <Navbar.Toggle />

            {/* <section className="collapse navbar-collapse"  id="navbarSupportedContent"> */}
            <Navbar.Collapse>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Nav.Link as={Link} to="GameDashboard">Games</Nav.Link>
                    </li>
                    <li className="nav-item active">
                    {/* <a className="nav-link" href="/Login">
                    Log In
                    </a> */}
                        <Nav.Link as={Link} to="Login">Log In</Nav.Link>
                    </li>
                    <li className="nav-item active">
                    {/* <a className="nav-link" href="/signup">
                    Sign Up
                    </a> */}
                        <Nav.Link as={Link} to="Signup">Sign Up</Nav.Link>
                    </li>
                    
                    
                </ul>
            </Navbar.Collapse>
            
        {/* </section> */}
      </Navbar>
      </div>
    )
}

export default Header;
