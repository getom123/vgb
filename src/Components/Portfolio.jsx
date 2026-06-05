// src/components/Portfolio.jsx
import React, { useState } from 'react';
import PortfolioCard from './ui/PortfolioCard';
import ProjectModal from './ui/ProjectModal';
import './Portfolio.css';

const projects = [
  {
    id: 'modern-brand-identity',
    title: 'Modern Brand Identity',
    category: 'Branding',
    image: '#2563eb',
    description: 'A complete brand identity overhaul for a tech startup, including logo design, color palette, typography, and brand guidelines. The project resulted in a 40% increase in brand recognition.',
    client: 'TechStart Inc.',
    duration: '4 weeks',
    deliverables: ['Logo Design', 'Brand Guidelines', 'Stationery Set', 'Social Media Kit'],
    challenge: 'The client needed a modern, scalable brand identity that would appeal to both enterprise clients and young professionals.',
    solution: 'We created a dynamic brand system with flexible components that adapts across all touchpoints, from digital to print.'
  },
  {
    id: 'corporate-logo-collection',
    title: 'Corporate Logo Collection',
    category: 'Logo Design',
    image: '#f97316',
    description: 'A collection of 5 distinctive logo concepts for a major corporation, each representing different facets of their business divisions while maintaining brand cohesion.',
    client: 'Global Enterprises',
    duration: '3 weeks',
    deliverables: ['5 Logo Concepts', 'Logo Usage Guide', 'Color Specifications', 'File Formats'],
    challenge: 'Creating multiple distinct logos that work independently but still feel part of one family.',
    solution: 'We developed a modular logo system using shared geometric principles and a unified color palette.'
  },
  {
    id: 'editorial-illustration-series',
    title: 'Editorial Illustration Series',
    category: 'Illustration',
    image: '#3b82f6',
    description: 'A series of 12 custom illustrations for a leading magazine\'s monthly feature, bringing complex stories to life through vibrant, narrative-driven artwork.',
    client: 'Quarterly Magazine',
    duration: '6 weeks',
    deliverables: ['12 Full-color Illustrations', 'Black & White Versions', 'Animation Assets'],
    challenge: 'Creating illustrations that are both visually striking and accurately represent diverse article topics.',
    solution: 'We developed a versatile illustration style with flexible characters and environments that can be adapted to any theme.'
  },
  {
    id: 'residential-building-concept',
    title: 'Residential Building Concept',
    category: 'Architectural Design',
    image: '#fb923c',
    description: 'Award-winning architectural concept for a sustainable residential building featuring green roofs, solar panels, and innovative space optimization.',
    client: 'EcoLiving Developers',
    duration: '8 weeks',
    deliverables: ['3D Renderings', 'Floor Plans', 'Material Specifications', 'Sustainability Report'],
    challenge: 'Designing an eco-friendly building that maximizes space in a dense urban environment.',
    solution: 'We created a vertical garden concept with modular living spaces that adapt to resident needs.'
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Portfolio;