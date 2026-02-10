import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';
import { ExternalLink, Github } from '../utils/Icons';

const Projects = () => {
  // Projects data - Easy to update with your actual projects
  // Add your projects here with: name, description, image, techStack, liveLink, githubLink (optional)
  const projects = [
    {
      name: "Fare Tracker",
      description: "AI-powered transportation cost monitor. Track real-time fares for Uber, Bolt, and taxis, set smart price alerts, and get AI-driven predictions and optimal booking times. Built with n8n workflows for price simulation and forecasting.",
      image: "https://placehold.co/600x400/1a1a2e/eee?text=Fare+Tracker",
      techStack: ["React", "n8n", "AI/ML", "Webhooks"],
      liveLink: "https://faretracker.netlify.app/",
      githubLink: "https://github.com/djsmacker01/Fare_Tracker"
    },
    {
      name: "Cymru Unleashed",
      description: "Empowering Welsh communities through sports and culture. Grassroots initiative celebrating UEFA Women's Euro 2025 with sport workshops, art installations, and a bilingual digital campaign. Sponsored by the Welsh Government.",
      image: "https://placehold.co/600x400/1a1a2e/eee?text=Cymru+Unleashed",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://cymruunleashed.com/",
      githubLink: "https://github.com/djsmacker01/Cymru-Unleashed"
    },
    {
      name: "TrackGoal",
      description: "Achieve your goals with smart tracking. A productivity app for setting, monitoring, and reaching personal goals, with user accounts and a modern dashboard. Built with Angular and Supabase.",
      image: "https://placehold.co/600x400/1a1a2e/eee?text=TrackGoal",
      techStack: ["Angular", "TypeScript", "SCSS", "Supabase"],
      liveLink: "https://trackgoal.online/",
      githubLink: "https://github.com/djsmacker01/TrackGoal"
    },
    {
      name: "RescueAlert",
      description: "Private project — access requires a signed NDA. WhatsApp me to request access: +447459253102. Demo available at rescuealert.vercel.app after approval.",
      image: "https://placehold.co/600x400/1a1a2e/eee?text=RescueAlert",
      techStack: ["React", "Vercel"],
      liveLink: "https://rescuealert.vercel.app/",
      githubLink: "https://github.com/djsmacker01/rescuealert",
      requestAccessLink: "https://wa.me/447459253102",
      isPrivate: true
    }
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
                    {project.requestAccessLink && (
                      <motion.a 
                        href={project.requestAccessLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live-link request-access-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Request access via WhatsApp"
                      >
                        <span>Request Access (WhatsApp)</span>
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                    {!project.requestAccessLink && project.liveLink && (
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

        <motion.div
          className="projects-more-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="https://github.com/djsmacker01"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-more-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={22} />
            <span>Get to know more about my portfolio projects</span>
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;




