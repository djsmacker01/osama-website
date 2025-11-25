import React from 'react';

const FinalCTA = () => {
  const scrollToAbout = () => {
    const section = document.getElementById('about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="final-cta" id="contact">
      <h2>BUILD SOMETHING BOLD WITH OSAMA</h2>
      <p>
        If you are ready to treat culture as a serious part of your growth strategy, 
        Osama can help.
      </p>
      <div className="hero-buttons" style={{ justifyContent: 'center' }}>
        <button 
          className="btn-primary" 
          onClick={() => window.location.href = 'mailto:osama@example.com'}
        >
          WORK WITH OSAMA
        </button>
        <button className="btn-secondary" onClick={scrollToAbout}>
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;