import React, { Component } from "react";
import { projects } from "./../globals/projects";

export default class Portfolio extends Component {
  renderProject(project, i) {
    return (
      <div className="col-md-4 project-col" key={i}>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <div
            className="project"
            style={{ backgroundImage: `url(${project.img})` }}
            title={project.name}
          />
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid portfolio" id="portfolio">
        <div className="row">
          <div className="col text-center">
            <h2>Portfolio</h2>
          </div>
        </div>

        <div className="row">
          {projects.map((project, i) => this.renderProject(project, i))}
        </div>
      </div>
    );
  }
}
