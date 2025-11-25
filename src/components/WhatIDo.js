import React from 'react';

const WhatIDo = () => {
  const roles = [
    {
      title: "Growth Architect",
      description: "Osama designs end-to-end marketing and growth systems for live experiences. From the very first impression to the final checkout, he builds journeys that turn attention into ticket sales, and ticket sales into long-term loyalty."
    },
    {
      title: "Creative Director",
      description: "As a creative director, Osama builds live experiences that feel cinematic and human. He brings together artists, staging, lighting, sound, storytelling and media into nights, festivals and campaigns that audiences talk about for months."
    },
    {
      title: "Cultural Strategist",
      description: "Osama specialises in underestimated audiences and emerging scenes. He works with organisations that want to earn trust, not just buy reach, and uses culture as a strategic asset for growth rather than decoration."
    }
  ];

  return (
    <section className="what-i-do" id="about">
      <h2 className="section-title">WHAT I DO</h2>
      <div className="what-i-do-grid">
        {roles.map((role, index) => (
          <div key={index} className="what-card">
            <h3>{role.title}</h3>
            <p>{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;