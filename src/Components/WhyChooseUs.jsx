// src/components/WhyChooseUs.jsx
import React from 'react';
import {
  FaPalette,
  FaSearch,
  FaUsers,
  FaClock
} from 'react-icons/fa';
import './WhyChooseUs.css';

const features = [
  {
    icon: <FaPalette />,
    title: 'Creative Excellence',
    desc: 'Unique and innovative designs tailored to your brand.',
  },
  {
    icon: <FaSearch />,
    title: 'Attention to Detail',
    desc: 'Every element is carefully crafted for maximum impact.',
  },
  {
    icon: <FaUsers />,
    title: 'Client-Centered Approach',
    desc: 'We collaborate closely to bring your vision to life.',
  },
  {
    icon: <FaClock />,
    title: 'On-Time Delivery',
    desc: 'Professional project management and reliable turnaround.',
  },
];
const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>Why clients trust us with their creative projects</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" data-aos="fade-right">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;