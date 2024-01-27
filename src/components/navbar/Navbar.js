import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <Link className="navbar-brand" to="/">
          My App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact_us">
                Contact Us
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="bi bi-person"></i> Login
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                <i className="bi bi-person-plus"></i> Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table">
                <i className=""></i> Table
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
