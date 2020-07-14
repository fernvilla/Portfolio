import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="col-sm-6 col-lg-4 project-col">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div className="project" style={{ backgroundImage: `url(${project.img})` }} title={project.name}>
          <div className="description">
            <p>
              <strong>{project.name}</strong>
            </p>
            <p>
              <em>{project.details}</em>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
