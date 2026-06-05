// src/components/ui/PortfolioCard.jsx
import React from 'react';
import './PortfolioCard.css';

const PortfolioCard = ({ title, category, image, onClick }) => {
  return (
    <div className="portfolio-card" onClick={onClick} data-aos="fade-up">
      <div className="portfolio-image" style={{ backgroundColor: image }}>
        <div className="overlay">
          <span>View Project →</span>
        </div>
      </div>
      <div className="portfolio-info">
        <h4>{title}</h4>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;