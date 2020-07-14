import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid main">
          <div className="row  height-100">
            <div className="col-md-7">
              <div className="site-left-offset">
                <h1 className="site-title">
                  Sr. Frontend Engineer
                  <span className="blinking-cursor">|</span>
                </h1>

                <div className="row">
                  <div className="col-10">
                    <h2 className="intro">
                      Hi, my name is Fernando Villasenor. I'm a senior frontend engineer based in Los Angeles CA, w/6+
                      years experience and specializing on front end development.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <h2 className="text-center mb-4">
                <strong>Skills</strong>
              </h2>

              <div className="row">
                <div className="col-md-12 text-center skills-box">
                  <i className="fa fa-laptop fa-4x" />
                  <h4>Front-End</h4>

                  <div className="row">
                    <div className="col-md-6">
                      <ul className="text-left">
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>React/Redux</li>
                      </ul>
                    </div>

                    <div className="col-md-6">
                      <ul className="text-left">
                        <li>Bootstrap, Semantic UI</li>
                        <li>SCSS/LESS</li>
                        <li>CSS Modules</li>
                        <li>Styled Components</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-file-code-o fa-4x" />
                  <h4>Back-End</h4>

                  <ul className="text-left">
                    <li>Node/Express</li>
                    <li>.Net</li>
                    <li>Ruby on Rails</li>
                  </ul>
                </div>

                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-github fa-4x" />
                  <h4>Tools</h4>

                  <ul className="text-left">
                    <li>Git/Github</li>
                    <li>Webpack/NPM/Yarn/GUlp</li>
                    <li>Heroku</li>
                    <li>Jira</li>
                  </ul>
                </div>

                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-picture-o fa-4x" />
                  <h4>Design</h4>

                  <ul className="text-left">
                    <li>Adobe Photoshop</li>
                    <li>Responsive Design</li>
                    <li>PSD to HTML/CSS</li>
                  </ul>
                </div>

                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-database fa-4x" />
                  <h4>Databases</h4>

                  <ul className="text-left">
                    <li>PostgreSQL</li>
                    <li>Microsoft SQL Server</li>
                  </ul>
                </div>

                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-check-square-o fa-4x" />
                  <h4>Testing</h4>

                  <ul className="text-left">
                    <li>Mocha</li>
                    <li>Enzyme</li>
                    <li>Chai</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
