// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Xprix Design</h3>
            <p>Transforming businesses through digital innovation.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <a href="mailto:admin@xprixdesign.com">admin@xprixdesign.com</a> <br />
            <a href="tel:+2349056012206">+234 905 601 2206</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 XprixDesign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;