// src/components/CTA.jsx

import React from 'react';
import Button from './ui/Button';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container cta-container" data-aos="fade-up">
        <h2>Ready to Bring Your Vision to Life?</h2>

        <p>
          From branding and logo design to illustrations and architectural concepts,
          let's create something exceptional together.
        </p>

       <a href="#contact"> <Button variant="primary" size="large">
          Request a Quote
        </Button></a>
      </div>
    </section>
  );
};

export default CTA;