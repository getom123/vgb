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
          <div className="about-content" data-aos="fade-right">
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
              <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" data-aos="fade-left">

              <rect width="500" height="350" rx="24" fill="#f8fafc"/>

              {/* Background accents */}
              <circle cx="90" cy="80" r="50" fill="#eff6ff"/>
              <circle cx="420" cy="260" r="60" fill="#fff7ed"/>

              {/* Team members */}
              <circle cx="180" cy="130" r="35" fill="#2563eb"/>
              <rect x="145" y="170" width="70" height="90" rx="20" fill="#2563eb"/>

              <circle cx="250" cy="100" r="40" fill="#f97316"/>
              <rect x="210" y="145" width="80" height="110" rx="20" fill="#f97316"/>

              <circle cx="330" cy="130" r="35" fill="#2563eb"/>
              <rect x="295" y="170" width="70" height="90" rx="20" fill="#2563eb"/>

              {/* Floating creative icons */}
              <rect x="90" y="120" width="40" height="40" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
              <path d="M100 140 L120 120 L120 160 Z" fill="#f97316"/>

              <circle cx="390" cy="100" r="20" fill="#ffffff" stroke="#e2e8f0"/>
              <circle cx="390" cy="100" r="8" fill="#2563eb"/>

              {/* Collaboration line */}
              <path
                d="M180 90 C220 40, 280 40, 330 90"
                stroke="#cbd5e1"
                strokeWidth="4"
                fill="none"
              />

            </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;