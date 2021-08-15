import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-row">
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <div>Images/media</div>
    </div>
  );
}

export default ProjectCard;
