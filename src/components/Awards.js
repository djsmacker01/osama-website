import React from 'react';

const Awards = () => {
  const awards = [
    { 
      icon: "🏆", 
      title: "Entrepreneur of the Year", 
      description: "Black History Wales Youth Awards" 
    },
    { 
      icon: "⚡", 
      title: "Power Up Industry Professional", 
      description: "PRS Foundation" 
    },
    { 
      icon: "🎵", 
      title: "PPL Momentum Accelerator", 
      description: "PRS Foundation Industry Professional" 
    },
    { 
      icon: "🏛️", 
      title: "Honoured in Welsh Senedd", 
      description: "For cultural leadership and Black History Wales programmes" 
    },
    { 
      icon: "🎉", 
      title: "Cardiff Life Awards Finalist", 
      description: "Best Event Company" 
    },
    { 
      icon: "🌟", 
      title: "Mastering Diversity Awards", 
      description: "Multiple wins for inclusion and impact" 
    }
  ];

  return (
    <section className="awards">
      <div className="awards-container">
        <h2 className="section-title" style={{ color: 'var(--dark-bg)' }}>
          AWARDS & RECOGNITION
        </h2>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-card">
              <div className="award-icon">{award.icon}</div>
              <div className="award-title">{award.title}</div>
              <p className="award-description">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;