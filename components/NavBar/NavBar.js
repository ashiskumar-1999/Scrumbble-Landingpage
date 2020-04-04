import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavbarContainer from "../NavBarContainer/NavbarContainer";

function NavBar(props) {
  return (
    <Router>
      <NavbarContainer
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                  <img
                    className="image"
                    src="https://res.cloudinary.com/emishalabs/image/upload/v1585241447/Scrumbble_Logo_tooxa9.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              <Link className="navbar-item" to="/landingpage">
                How it Works
              </Link>
              <Link className="navbar-item">About</Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button is-light">LogIn</Link>
                  <Link className="button is-primary">
                    <strong>Get Started</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavbarContainer>
    </Router>
  );
}
export default NavBar;
