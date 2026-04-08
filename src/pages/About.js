import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Eventify</h1>

      <p className="intro">
        Eventify is a modern event management platform where users can discover,
        explore, and book tickets for events and movies easily.
      </p>

      {/* FEATURES */}
      <div className="features">
        <div className="feature-card">
          <h3>🎟️ Easy Booking</h3>
          <p>Book tickets for events and movies in just a few clicks.</p>
        </div>

        <div className="feature-card">
          <h3>🎬 Movie Tickets</h3>
          <p>Get tickets for PVR & INOX cinemas with latest shows.</p>
        </div>

        <div className="feature-card">
          <h3>📍 Discover Events</h3>
          <p>Find concerts, tech meetups, college fests and more.</p>
        </div>
      </div>

      {/* MISSION */}
      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          Our goal is to make event discovery and booking simple, fast, and
          enjoyable for everyone. We aim to connect people with experiences that
          matter.
        </p>
      </div>

      {/* FOOTER */}
      <div className="about-footer">
        <p>© 2026 Eventify | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default About;