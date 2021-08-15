import React, { useEffect, Suspense } from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-row">
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <div>Image</div>
    </div>
  );
}
