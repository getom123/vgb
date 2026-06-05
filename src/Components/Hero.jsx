// src/components/Hero.jsx
import React from 'react';
import Button from './ui/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Bringing Your Ideas To Life Through{' '}
            <span className="highlight">Creative Design</span>
          </h1>

          <p className="hero-subtext">
            Transforming ideas into memorable brands and stunning visual experiences.
          </p>

          <div className="hero-buttons">
            <a href="#contact"><Button variant="primary">Start Your Project</Button></a>
            <a href="#portfolio"><Button variant="outline">View Our Work</Button></a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-illustration">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="150" width="120" height="200" fill="#1e3a8a" rx="8" />
              <rect x="190" y="100" width="120" height="250" fill="#2563eb" rx="8" />
              <rect x="330" y="50" width="120" height="300" fill="#ea580c" rx="8" />
              <circle cx="280" cy="350" r="40" fill="#dbeafe" />
              <path d="M250 380 L310 380 L280 420 Z" fill="#fed7aa" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;