// src/components/HowItWorks.jsx
import React from 'react';
import StepCard from './ui/StepCard';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We discuss your vision, goals, and project requirements.',
  },
  {
    number: '02',
    title: 'Concept Creation',
    description: 'Our team develops creative concepts and design directions.',
  },
  {
    number: '03',
    title: 'Design & Refinement',
    description: 'We craft, review, and refine every detail to perfection.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Receive your final designs ready for use and implementation.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Our creative process from concept to completion</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;