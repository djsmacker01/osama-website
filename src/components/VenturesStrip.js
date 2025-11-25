import React from 'react';

const VenturesStrip = () => {
  const ventures = [
    {
      title: "OTID Entertainment / OTID.Agency",
      description: "Global marketing, events, media and festival company working with brands, platforms and institutions."
    },
    {
      title: "Afrowales",
      description: "Social impact platform amplifying underrepresented voices through inclusive events, festivals and youth engagement."
    },
    {
      title: "Black Welsh Music Awards",
      description: "Head of Marketing and PR for a new national platform championing Black Welsh talent."
    },
    {
      title: "MyPhlexIT",
      description: "Regional Director of Sales and Marketing for a next-generation ticketing and event discovery platform."
    },
    {
      title: "Cymru Unleashed",
      description: "Curator and creative lead for UEFA-backed youth and sport projects."
    },
    {
      title: "Speaking and Advisory",
      description: "Keynotes, boards and advisory roles on culture, community and growth."
    }
  ];

  return (
    <section className="ventures-strip">
      <div className="ventures-grid">
        {ventures.map((venture, index) => (
          <div key={index} className="venture-card">
            <h3>{venture.title}</h3>
            <p>{venture.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VenturesStrip;