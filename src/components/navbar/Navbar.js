import React, { useState } from 'react';
import LoginForm from '../forms/Login';



const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 ">
      <a className="navbar-brand" href="/">My App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact_us">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Add Login and Signup links with icons */}
      <div className="navbar-nav ml-auto">
      <a className="nav-link" href="#" onClick={toggleLoginForm}>
            <i className="bi bi-person"></i> Login
          </a>
        <a className="nav-link" href="/signup">
          <i className="bi bi-person-plus"></i> Signup
        </a>
      </div>
    </nav>
      {showLoginForm && <LoginForm />}
      </>
    );
  };
     

export default Navbar;