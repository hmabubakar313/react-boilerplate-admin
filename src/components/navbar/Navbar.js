import React  from 'react';


const Navbar = () => {
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <a className="navbar-brand" href="/">
          My App
        </a>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact_us">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >
                <i className="bi bi-person"></i> Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                <i className="bi bi-person-plus"></i> Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
