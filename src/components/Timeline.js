import React from 'react';

const Timeline = () => {
  const milestones = [
    {
      year: "2019",
      location: "ARRIVES IN CARDIFF",
      description: "Moves from Abuja Nigeria to Cardiff after finishing school, eager to explore new opportunities."
    },
    {
      year: "2021",
      location: "FOUNDS AFROWALES",
      description: "A collective amplifying underrepresented voices through inclusive events and festivals."
    },
    {
      year: "2023",
      location: "OTID ENTERTAINMENT",
      description: "Launches OTID Entertainment / OTID.Agency, a global marketing, events, media and festival company."
    }
  ];

  return (
    <section className="timeline">
      <div className="timeline-container">
        <h2 className="section-title" style={{ color: 'var(--dark-bg)' }}>JOURNEY</h2>
        <div className="timeline-grid">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-card">
              <div className="timeline-year">{milestone.year}</div>
              <div className="timeline-location">{milestone.location}</div>
              <p className="timeline-description">{milestone.description}</p>
            </div>
          ))}
        </div>
        <div className="timeline-cta">
          <button className="btn-primary">VIEW FULL TIMELINE</button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;