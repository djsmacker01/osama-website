import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content fade-in">
        <h1>OSAMA</h1>
        <div className="subtitle">
          Osama; <span>ENTREPRENEUR, SPEAKER, ORGANIZER</span> AND AUTHORITY IN 
          TICKETING, CULTURE & BRAND
        </div>
        <p>
          Growth architect, creative director and cultural strategist building high-performance 
          live experiences for brands and platforms across the world. From Lagos to Cardiff and 
          into the wider world, his work turns underserved audiences into loyal communities and 
          live events into reliable growth engines.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>
            WORK WITH OSAMA
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection('about')}>
            ABOUT OSAMA
          </button>
        </div>
      </div>
      <div className="hero-image fade-in">
        <img src="/images/hero-portrait.jpg" alt="Osama Portrait" />
      </div>
    </section>
  );
};

export default Hero;