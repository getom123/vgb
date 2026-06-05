// src/components/Portfolio.jsx
import React from 'react';
import PortfolioCard from './ui/PortfolioCard';
import './Portfolio.css';

const projects = [
  {
    id: 'modern-brand-identity',
    title: 'Modern Brand Identity',
    category: 'Branding',
    image: '#2563eb',
  },
  {
    id: 'corporate-logo-collection',
    title: 'Corporate Logo Collection',
    category: 'Logo Design',
    image: '#f97316',
  },
  {
    id: 'editorial-illustration-series',
    title: 'Editorial Illustration Series',
    category: 'Illustration',
    image: '#3b82f6',
  },
  {
    id: 'residential-building-concept',
    title: 'Residential Building Concept',
    category: 'Architectural Design',
    image: '#fb923c',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Featured Work</h2>
          <p>Showcasing creativity, innovation, and design excellence.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
              <PortfolioCard
                key={project.id}
                {...project}
              />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;