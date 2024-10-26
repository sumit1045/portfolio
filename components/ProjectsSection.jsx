// components/ProjectsSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "B2B MarketPlace Website",
    description: "A personal portfolio website built with React.",
    image: "/voltbridge.png",
    techIcons: ["/next.svg", "/dock.svg", "/html.svg"],
    gitUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourusername.github.io/portfolio",
  },
  {
    id: 2,
    title: "Photography Portfolio",
    description: "Showcasing stunning photography.",
    image: "/test1.png",
    techIcons: ["/images/icons/react.svg", "/images/icons/css.svg"],
    gitUrl: "https://github.com/yourusername/photography-portfolio",
    liveUrl: "https://yourusername.github.io/photography-portfolio",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "A full-stack e-commerce application.",
    image: "/test2.png",
    techIcons: ["/html.svg", "/images/icons/node.svg", "/images/icons/mongodb.svg"],
    gitUrl: "https://github.com/yourusername/e-commerce",
    liveUrl: "https://yourusername.github.io/e-commerce",
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-[#121212]"> {/* Section background */}
      <h2 className="text-center text-4xl font-bold text-white mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 bg-[#121212]"> {/* Adds padding */}
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            techIcons={project.techIcons}
            gitUrl={project.gitUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
