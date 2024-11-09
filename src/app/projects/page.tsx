import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import "boxicons/css/boxicons.min.css";

const Projects = () => {
  return (
    <>
      <div className="project-wrapper">
        <div className="project-section">
          <p className="project-badge">Latest Creation</p>
          <div className="project-content">
            <h1 className="project-main-heading">
              My Projects
              <span>
                <br />
                Projects
              </span>
              <i className="bx bxs-briefcase project-briefcase-icon"></i>
            </h1>
            <p className="project-des">
              Each project is a testament to my creativity and dedication to building impactful solutions.
              From initial design through to final development, my work brings together a versatile skill
              set crafted to address clients&apos; needs. Discover projects that reflect my commitment to quality,
              innovation, and excellence.
            </p>
            <div className="project-quote-wrapper">
              <p className="project-quote">
                Projects aren&apos;t merely built; they&apos;re crafted with creativity, dedication, and a clear sense of purpose.
              </p>
            </div>
          </div>
        </div>
        <ProjectsCard
          tech1="React"
          tech2="Next"
          tech3="Tailwind"
          tech4="Typescript"
          title="Portfolio Website"
          description="Portfolio website using NextJs and Tailwind CSS"
          image="/project1.png"
          sourceCode="https://github.com/areeba-12/syeda-areeba-portfolio.git"
          livePreview="https://syeda-areeba-portfolio.vercel.app/"
        />
        <ProjectsCard
          title="Panaverse Clone"
          description="Create a clone of Panaverse."
          tech1="React"
          tech2="Next"
          tech3="Tailwind"
          tech4="Typescript"
          image="/project2.png"
          sourceCode="https://github.com/areeba-12/panaverse.git"
          livePreview=""
        />
        <ProjectsCard
          title="Dynamic Resume Builder"
          description="Created Resume Builder using Typescript, HTML, CSS"
          tech1="HTML"
          tech2="CSS"
          tech3="Javascript"
          tech4="Typescript"
          image="/project3.png"
          sourceCode="https://github.com/areeba-12/Dynamic_resume.git"
          livePreview="https://dynamic-resume-three.vercel.app/"
        />
        <ProjectsCard
          title="Static Resume"
          description="Created Static Resume using HTML, CSS, and Typescript"
          tech1="HTML"
          tech2="CSS"
          tech3="Javascript"
          tech4="Typescript"
          image="/project4.jpg"
          sourceCode="https://github.com/areeba-12/resume_builder.git"
          livePreview="https://resume-builder-five-snowy.vercel.app/"
        />
      </div>
    </>
  );
};

export default Projects;
