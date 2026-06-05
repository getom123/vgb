// src/components/ui/StepCard.jsx
import React from 'react';
import './StepCard.css';

const StepCard = ({ number, title, description }) => {
  return (
    <div className="step-card" data-aos="fade-right">
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StepCard;