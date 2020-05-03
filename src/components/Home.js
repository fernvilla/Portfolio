import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid main">
          <div className="row align-items-center height-100">
            <div className="col-md-7">
              <div className="site-left-offset">
                <h1 className="site-title">
                  Front End Web Developer
                  <span className="blinking-cursor">|</span>
                </h1>

                <div className="row">
                  <div className="col-10">
                    <div className="intro">
                      <p>
                        Hi, my name is Fernando Villasenor. I'm a web developer based in Los Angeles CA, w/6+ years
                        experience and specializing on front end development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <h2 className="text-center">
                <strong>Skills</strong>
              </h2>

              <div className="row">
                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-laptop fa-4x" />
                  <h4>Front-End</h4>

                  <ul className="text-left">
                    <li>HTML</li>
                    <li>CSS/SCSS/LESS/CSS Modules</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>React/Redux</li>
                    <li>Angular</li>
                    <li>Bootstrap, Semantic UI, TailwindCSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>

                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-file-code-o fa-4x" />
                  <h4>Back-End</h4>

                  <ul className="text-left">
                    <li>Node/Express</li>
                    <li>.Net</li>
                    <li>Ruby on Rails</li>
                    <li>Django/Python</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-github fa-4x" />
                  <h4>Tools</h4>

                  <ul className="text-left">
                    <li>Git/Github</li>
                    <li>Webpack</li>
                    <li>NPM/Yarn</li>
                    <li>Heroku</li>
                    <li>Pivotal Tracker</li>
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
              </div>

              <div className="row">
                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-database fa-4x" />
                  <h4>Databases</h4>

                  <ul className="text-left">
                    <li>MongoDB/Mongoose</li>
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
