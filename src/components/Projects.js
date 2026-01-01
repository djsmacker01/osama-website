import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';

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
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
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
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
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




