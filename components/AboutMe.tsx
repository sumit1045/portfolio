"use client";
import React, { useState } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5">
        <li>HTML, CSS, JavaScript</li>
        <li>PHP, MySQL, SQL</li>
        <li>Java with Data Structures and Algorithms</li>
        <li>Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5">
        <li>BE in Computer Engineering - 8.78 CGPA, AISSMS College of Engineering, Pune</li>
        <li>12th - 79.23%, Shree Balaji Junior Colloge, Ichalkaranji</li>
        <li>10th - 87.60%, Chaitanya Public School, A.Lat</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5">
        <li>Oracle Cloud Infrastructure 2023 Certified DevOps Professional</li>
        <li>Oracle Cloud Infrastructure 2023 Certified Foundations Associate</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section className="flex flex-col items-center justify-center w-full py-10 sm:py-20 px-5 rounded-lg shadow-lg">
      {/* About Me Text */}
      <div className="text-gray-300 max-w-full text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="leading-relaxed text-justify mb-4">
          I’m Sumeet Koli, a Software Developer with a CGPA of 8.78 and a strong enthusiasm for technologies like HTML, CSS, JavaScript, PHP, SQL, and Java. My technical expertise allows me to build responsive and high-performance applications that prioritize user experience and functionality.
        </p>
        <p className="leading-relaxed text-justify mb-4">
          During my academic journey, I excelled in various tech disciplines, sharpening my skills through hands-on projects and internships. These experiences provided a solid foundation in both front-end and back-end development, along with a comprehensive understanding of database management and deployment strategies.
        </p>
        <p className="leading-relaxed text-justify mb-4">
          Known for my problem-solving abilities and dedication to innovation, I’m passionate about finding efficient solutions to complex challenges. My proactive approach and strong organizational skills make me a reliable team player and leader in project execution.
        </p>

      </div>

      {/* Flex Container for Profile Image and Tabbed Qualifications */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-around w-full max-w-5xl">
        {/* Left Side: Profile Image */}
        <div className="flex-shrink-0 mb-8 sm:mb-0">
          <img
            src="/profile.jpeg" // Using the profile image from the public folder
            alt="Sumeet Koli"
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white"
          />
        </div>

        {/* Right Side: Tabbed Qualifications */}
        <div className="flex flex-col text-left text-gray-300 max-w-md w-full"> {/* Set a fixed max-w-md and full width for consistency */}
          <h3 className="text-xl font-bold text-white mb-4">Qualifications</h3>

          {/* Tab Buttons */}
          <div className="flex flex-row justify-start mb-4">
            {TAB_DATA.map((tabInfo) => (
              <button
                key={tabInfo.id}
                onClick={() => setTab(tabInfo.id)}
                className={`px-4 py-2 mr-2 rounded-md ${
                  tab === tabInfo.id
                    ? "bg-white text-black font-semibold"
                    : "bg-gray-800 text-white"
                }`}
              >
                {tabInfo.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-10">
        <a
          href="/path/to/your/resume.pdf" // Replace with the actual path to your resume
          download
          className="inline-block bg-transparent border border-white text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
