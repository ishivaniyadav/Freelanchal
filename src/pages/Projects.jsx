import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = [
        {
          id: 1,
          name: "Annapoori",
          status: "active",
          freelancer: "Shivani Yadav",
          deadline: "2025-07-15",
          description: "Annapoori is a full-featured web application that connects food donors with communities in need. It facilitates food and monetary donations, tracks donation requests, filters expired food, and builds transparency to inspire more contributions.",
          github: "https://annapoori.vercel.app/",
        },
        {
          id: 2,
          name: "Netflix Clone",
          status: "in-progress",
          freelancer: "Shivani Yadav",
          deadline: "2025-08-10",
          description: "This project recreates the Netflix homepage UI using HTML, CSS, and JavaScript, enhanced with TMDB API integration to dynamically display real movie and TV show data. Though there are no clickable features, the project demonstrates live banner updates and poster rows based on genres and categories.",
          github: "https://ishivaniyadav.github.io/Netflix_Clone/",
        },
        {
          id: 3,
          name: "Mud & Muse - Ceramic Website",
          status: "completed",
          freelancer: "Shivani Yadav",
          deadline: "2025-06-01",
          description: "A thoughtfully crafted e-commerce front-end for Mud & Muse — where the timeless beauty of earth and fire meets minimal design. This platform honors the essence of handmade ceramics through a serene, elegant digital experience.",
          github: "https://ishivaniyadav.github.io/Mud-and-Muse/",
        },
      ];
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.status}`}>
            <div className="card-header">
              <h3>{project.name}</h3>
              <span className={`status-tag ${project.status}`}>{project.status}</span>
            </div>

            <p className="description">{project.description}</p>

            <div className="card-details">
              <p><strong>Freelancer:</strong> {project.freelancer}</p>
              <p><strong>Deadline:</strong> {project.deadline}</p>
            </div>

            <div className="github-link">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
