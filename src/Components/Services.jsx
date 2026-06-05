// src/components/Services.jsx
import React from 'react';
import {
  FaPaintBrush,
  FaPencilRuler,
  FaSignature,
  FaBullhorn,
  FaBuilding,
} from 'react-icons/fa';

import ServiceCard from './ui/ServiceCard';
import './Services.css';

const services = [
  {
    icon: <FaPaintBrush />,
    title: 'Graphic Design',
    description:
      'Creative visual designs that communicate your message effectively.',
  },
  {
    icon: <FaPencilRuler />,
    title: 'Illustration',
    description:
      'Custom illustrations crafted to bring your ideas to life.',
  },
  {
    icon: <FaSignature />,
    title: 'Logo Design',
    description:
      'Distinctive logos that capture the essence of your brand.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Branding',
    description:
      'Build a strong and memorable identity that stands out.',
  },
  {
    icon: <FaBuilding />,
    title: 'Architectural Design',
    description:
      'Innovative architectural concepts tailored to your vision.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Creative solutions tailored to your vision</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;