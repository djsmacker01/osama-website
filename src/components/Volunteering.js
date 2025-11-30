import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';

const Volunteering = () => {
  const volunteeringEngagements = [
    {
      organization: 'Tech for Good Initiative',
      role: 'Mentor & Technical Advisor',
      location: 'Cardiff, Wales',
      period: '2021 - Present',
      description: 'Providing technical mentorship and guidance to aspiring software developers and entrepreneurs from underrepresented communities. Helping bridge the gap between education and industry.',
      impact: 'Mentored 50+ individuals, helped launch 10+ tech projects'
    },
    {
      organization: 'Code Club Wales',
      role: 'Volunteer Instructor',
      location: 'Cardiff, Wales',
      period: '2020 - 2022',
      description: 'Teaching coding fundamentals to young people aged 9-13, introducing them to programming concepts through fun, interactive projects. Fostering early interest in technology and STEM fields.',
      impact: 'Taught 200+ students, organized 30+ coding workshops'
    },
    {
      organization: 'AI Education Outreach',
      role: 'Workshop Facilitator',
      location: 'Online & Cardiff',
      period: '2022 - Present',
      description: 'Delivering workshops and seminars on AI fundamentals, machine learning basics, and the ethical implications of AI technology. Making complex AI concepts accessible to diverse audiences.',
      impact: 'Reached 500+ participants across 20+ workshops'
    },
    {
      organization: 'Digital Skills for Refugees',
      role: 'Technical Trainer',
      location: 'Cardiff, Wales',
      period: '2021 - 2023',
      description: 'Teaching essential digital skills and software development basics to refugees and asylum seekers. Helping newcomers integrate into the UK tech community and build career pathways.',
      impact: 'Trained 100+ individuals, supported 15+ job placements'
    },
    {
      organization: 'STEM Ambassador Program',
      role: 'STEM Ambassador',
      location: 'Wales, UK',
      period: '2019 - Present',
      description: 'Inspiring young people to pursue careers in Science, Technology, Engineering, and Mathematics. Delivering talks, workshops, and career guidance sessions in schools and community centers.',
      impact: 'Engaged 1000+ students across 50+ schools'
    },
    {
      organization: 'Open Source Contributor',
      role: 'Contributor & Maintainer',
      location: 'Global (Remote)',
      period: '2020 - Present',
      description: 'Contributing to open-source projects focused on education, accessibility, and social impact. Maintaining documentation and helping onboard new contributors to open-source communities.',
      impact: 'Contributed to 20+ projects, merged 100+ pull requests'
    }
  ];

  return (
    <motion.section 
      className="volunteering" 
      id="volunteering"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="volunteering-container">
        <motion.h2 
          className="section-title"
          {...scrollReveal}
        >
          Volunteering & Community Engagement
        </motion.h2>
        <motion.p 
          className="volunteering-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Giving back to the community through education, mentorship, and technical support. 
          Committed to making technology accessible and empowering the next generation of innovators.
        </motion.p>
        
        <motion.div 
          className="volunteering-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {volunteeringEngagements.map((engagement, index) => (
            <motion.div 
              key={index} 
              className="volunteering-card"
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                }
              }}
              {...cardHover}
            >
              <div className="volunteering-header">
                <h3>{engagement.organization}</h3>
                <span className="volunteering-period">{engagement.period}</span>
              </div>
              <div className="volunteering-role">{engagement.role}</div>
              <div className="volunteering-location">
                <span className="location-pin">📍</span>
                <span>{engagement.location}</span>
              </div>
              <p className="volunteering-description">{engagement.description}</p>
              <div className="volunteering-impact">
                <strong>Impact:</strong> {engagement.impact}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Volunteering;

