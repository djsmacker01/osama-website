import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';
import { ExternalLink, Github } from '../utils/Icons';

const Projects = () => {
  // Projects data - Easy to update with your actual projects
  // Add your projects here with: name, description, image, techStack, liveLink, githubLink (optional)
  const projects = [
    {
      name: "Project Name",
      description: "A brief description of your project and what problem it solves.",
      image: "/images/placeholder-project.jpg", // Add your project screenshot here
      techStack: ["React", "Node.js", "MongoDB"], // Add technologies used
      liveLink: "https://example.com", // Add live site URL
      githubLink: "https://github.com/username/project" // Optional: Add GitHub URL
    },
    {
      name: "Project Name 2",
      description: "Another project description highlighting key features and impact.",
      image: "/images/placeholder-project.jpg",
      techStack: ["Python", "AI/ML", "FastAPI"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project2"
    }
    // Add more projects as needed
  ];

  return (
    <motion.section 
      className="projects" 
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="projects-container">
        <motion.h2 
          className="section-title"
          {...scrollReveal}
        >
          PROJECTS & APPLICATIONS
        </motion.h2>
        <motion.p 
          className="projects-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of applications and websites I've built, showcasing my skills in software development, 
          AI integration, and creating digital solutions that solve real-world problems.
        </motion.p>
        
        <motion.div 
          className="projects-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
                }
              }}
              {...cardHover}
              style={{ "--card-index": index }}
            >
              <div className="project-image-wrapper">
                <motion.img 
                  src={project.image} 
                  alt={project.name}
                  className="project-image"
                  {...scrollReveal}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveLink && (
                      <motion.a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Visit Site</span>
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Code</span>
                        <Github size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;




