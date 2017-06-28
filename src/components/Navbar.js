import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-toggleable-md">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="FVDevResume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
