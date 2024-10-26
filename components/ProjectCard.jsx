// components/ProjectCard.jsx
import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, techIcons, gitUrl, liveUrl }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-5 m-4"> {/* Add padding and margin */}
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-5 bg-[#2A2A2A] rounded-b-lg"> {/* Background for card content */}
        <h5 className="text-xl font-semibold mb-3 text-white">{title}</h5>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-2 mb-5">
          {techIcons.map((icon, index) => (
            <img key={index} src={icon} alt="tech icon" className="w-6 h-6" />
          ))}
        </div>
        <div className="flex space-x-4">
          <Link href={liveUrl} legacyBehavior>
            <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          </Link>
          <Link href={gitUrl} legacyBehavior>
            <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
