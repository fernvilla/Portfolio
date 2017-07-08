import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
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
      <a className="navbar-brand" href="/">
        Fernando Villasenor
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>

          <li className="nav-item">
            <a
              href="FernVillaResume.pdf"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        <ul className="navbar-nav nav-right">
          <li className="nav-item">
            <a
              href="http://www.linkedin.com/in/fernandovillasenor"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin-square" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="http://twitter.com/fernvillasenor"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter-square" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="http://google.com/+fernandovillasenor18"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-google" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="http://github.com/fernvilla"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github-alt" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="http://www.facebook.com/fernando.villasenor.3532"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook-square" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="mailto:fvilla18@gmail.com"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope-square" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
