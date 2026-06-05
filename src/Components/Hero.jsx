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
            <svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">

  {/* Background shapes */}
  <circle cx="120" cy="120" r="70" fill="#eff6ff" />
  <circle cx="480" cy="320" r="90" fill="#fff7ed" />

  {/* Main design board */}
  <rect
    x="120"
    y="70"
    width="320"
    height="250"
    rx="24"
    fill="#ffffff"
    stroke="#e2e8f0"
    strokeWidth="2"
  />

  {/* Top bar */}
  <rect
    x="120"
    y="70"
    width="320"
    height="40"
    rx="24"
    fill="#2563eb"
  />

  <circle cx="145" cy="90" r="6" fill="#ffffff" />
  <circle cx="165" cy="90" r="6" fill="#ffffff" />
  <circle cx="185" cy="90" r="6" fill="#ffffff" />

  {/* Branding mockup */}
  <rect
    x="150"
    y="140"
    width="90"
    height="90"
    rx="16"
    fill="#eff6ff"
  />

  <circle cx="195" cy="185" r="25" fill="#2563eb" />
  <path
    d="M182 185 L193 196 L212 175"
    stroke="white"
    strokeWidth="4"
    fill="none"
    strokeLinecap="round"
  />

  {/* Content lines */}
  <rect x="270" y="150" width="120" height="12" rx="6" fill="#cbd5e1" />
  <rect x="270" y="180" width="90" height="12" rx="6" fill="#cbd5e1" />
  <rect x="270" y="210" width="140" height="12" rx="6" fill="#cbd5e1" />

  {/* Architectural blueprint */}
  <rect
    x="170"
    y="260"
    width="220"
    height="40"
    rx="10"
    fill="#fff7ed"
  />

  <line x1="190" y1="280" x2="370" y2="280" stroke="#f97316" strokeWidth="2" />
  <line x1="220" y1="270" x2="220" y2="290" stroke="#f97316" strokeWidth="2" />
  <line x1="280" y1="270" x2="280" y2="290" stroke="#f97316" strokeWidth="2" />
  <line x1="340" y1="270" x2="340" y2="290" stroke="#f97316" strokeWidth="2" />

  {/* Floating design tool */}
  <g transform="rotate(-20 470 120)">
    <rect
      x="450"
      y="90"
      width="20"
      height="90"
      rx="10"
      fill="#f97316"
    />
    <polygon
      points="460,75 470,95 450,95"
      fill="#2563eb"
    />
  </g>

  {/* Floating color palette */}
  <g>
    <circle cx="470" cy="180" r="40" fill="#ffffff" stroke="#e2e8f0" />
    <circle cx="455" cy="165" r="6" fill="#2563eb" />
    <circle cx="485" cy="165" r="6" fill="#f97316" />
    <circle cx="455" cy="195" r="6" fill="#60a5fa" />
    <circle cx="485" cy="195" r="6" fill="#fb923c" />
  </g>

</svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;