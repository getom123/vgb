// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Creating meaningful designs that inspire, communicate, and elevate brands.</p>
        </div>

        <div className="about-container">
          <div className="about-content">
            <h3>Your Creative Design Partner</h3>

            <p>
              We are a team of passionate creatives dedicated to transforming ideas
              into powerful visual experiences. From graphic design and illustration
              to logo creation, branding, and architectural design, we help businesses
              and individuals bring their visions to life through innovative and
              impactful design solutions.
            </p>

            <div className="stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>

              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Satisfied Clients</span>
              </div>

              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Creative Services</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="#dbeafe" rx="16" />
                <circle cx="200" cy="120" r="50" fill="#1e3a8a" />
                <circle cx="160" cy="200" r="30" fill="#ea580c" />
                <circle cx="240" cy="200" r="30" fill="#2563eb" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;