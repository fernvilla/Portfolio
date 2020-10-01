import React from 'react';
import { Project } from './../components';
import { projects } from './../globals/projects';

const Portfolio = () => {
  const renderProject = (project, i) => {
    return <Project project={project} key={i} />;
  };

  return (
    <div className="container-fluid portfolio" id="portfolio">
      <div className="row">
        <div className="col text-center">
          <h2>Portfolio</h2>
        </div>
      </div>

      <div className="row">{projects.map((project, i) => renderProject(project, i))}</div>
    </div>
  );
};

export default Portfolio;
