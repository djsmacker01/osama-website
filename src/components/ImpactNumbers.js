import React from 'react';

const ImpactNumbers = () => {
  const stats = [
    { number: "20+", label: "sold-out shows and live experiences delivered" },
    { number: "2,000+", label: "attendees at a single flagship youth music festival" },
    { number: "£120k+", label: "social enterprise and project revenue generated" },
    { number: "£80k+", label: "secured through successful bids and grants" },
    { number: "5+", label: "universities and colleges in an active creative network" }
  ];

  return (
    <section className="impact">
      <div className="impact-container">
        <h2 className="section-title" style={{ color: 'var(--dark-bg)' }}>IMPACT IN NUMBERS</h2>
        <div className="impact-grid">
          {stats.map((stat, index) => (
            <div key={index} className="impact-card">
              <div className="impact-number">{stat.number}</div>
              <div className="impact-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="impact-description">
          The result of combining marketing strategy, ticketing science, community insight and bold creative direction.
        </p>
      </div>
    </section>
  );
};

export default ImpactNumbers;