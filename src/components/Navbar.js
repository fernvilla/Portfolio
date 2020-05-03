import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Fernando Villasenor
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <AnchorLink href="#portfolio" className="nav-link">
              Portfolio
            </AnchorLink>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="Fernando_Villasenor_Resume.pdf">
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
              title="linkedin"
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
              title="twitter"
            >
              <i className="fa fa-twitter-square" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="http://github.com/fernvilla"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              title="github"
            >
              <i className="fa fa-github-alt" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="mailto:fvilla18@gmail.com"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              title="email"
            >
              <i className="fa fa-envelope-square" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
