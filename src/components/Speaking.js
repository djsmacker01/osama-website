import React from 'react';

const Speaking = () => {
  const topics = [
    "Culture-led growth and community-driven marketing",
    "Designing live experiences and festivals that convert",
    "Ticketing strategy and audience development",
    "Diversity, equity and representation in creative industries",
    "The immigrant founder journey and leadership"
  ];

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="speaking" id="speaking">
      <div className="speaking-container">
        <div className="speaking-image">
          <img src="/images/speaking-image.jpg" alt="Osama speaking at conference" />
        </div>
        <div className="speaking-content">
          <h2>SPEAKING & ADVISORY</h2>
          <p>
            Osama speaks to rooms where culture, marketing and growth meet. He has delivered 
            talks and sat on panels for conferences, universities, public bodies and industry events.
          </p>
          <ul className="topics-list">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <button className="btn-primary" onClick={scrollToContact}>
            SPEAKER ENQUIRIES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speaking;