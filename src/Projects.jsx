import React from "react";
import { useFetchProjects } from "./FetchProject";
const Projects = () => {
  const { projects, loading } = useFetchProjects();
  console.log(projects);

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, url, title } = project;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
