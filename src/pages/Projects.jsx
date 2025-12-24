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
          description: "Annapoori is a full-featured web application that connects food donors with communities in need...",
          github: "https://annapoori.vercel.app/",
          image: "https://github.com/user-attachments/assets/9ebbcbf6-2cf8-48f5-9971-00314c1e5323", 
        },
        {
          id: 2,
          name: "Netflix Clone",
          status: "in-progress",
          freelancer: "Shivani Yadav",
          deadline: "2025-08-10",
          description: "This project recreates the Netflix homepage UI using HTML, CSS, and JavaScript...",
          github: "https://ishivaniyadav.github.io/Netflix_Clone/",
          image: "https://github.com/user-attachments/assets/333cc79a-603f-47c6-af58-ee2916af17fc",
        },
        {
          id: 3,
          name: "Mud & Muse - Ceramic Website",
          status: "completed",
          freelancer: "Shivani Yadav",
          deadline: "2025-06-01",
          description: "A thoughtfully crafted e-commerce front-end for Mud & Muse...",
          github: "https://ishivaniyadav.github.io/Mud-and-Muse/",
          image: "https://github.com/user-attachments/assets/b8ea4749-4fd7-49cc-b651-548f78eb1d8b",
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
            <img src={project.image} alt={project.name} className="project-image" />

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
