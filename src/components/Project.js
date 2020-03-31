import React from "react";

export default function Project({ project }) {
  return (
    <div className="col-md-4 project-col">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div
          className="project"
          style={{ backgroundImage: `url(${project.img})` }}
          title={project.name}
        >
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
}
