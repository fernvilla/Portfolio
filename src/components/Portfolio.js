import React, { Component } from "react";

import { Project } from "./../components";
import { projects } from "./../globals/projects";

export default class Portfolio extends Component {
  renderProject(project, i) {
    return <Project project={project} key={i} />;
  }

  render() {
    return (
      <div className="container-fluid portfolio" id="portfolio">
        <div className="row">
          <div className="col text-center">
            <h2>Portfolio</h2>
          </div>
        </div>

        <div className="row">{projects.map((project, i) => this.renderProject(project, i))}</div>
      </div>
    );
  }
}
