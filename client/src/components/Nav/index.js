import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" style={{marginLeft: '10px'}} href="/">
            The Breakroom
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>

            <section className="collapse navbar-collapse"  id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                <a className="nav-link" href="/GameDashboard">
                Games
                </a>
                
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="/login">
                Log In
                </a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="/signup">
                Sign Up
                </a>
                </li>
                
                
            </ul>
            
        </section>
      </nav>
    )
}

export default Nav;
