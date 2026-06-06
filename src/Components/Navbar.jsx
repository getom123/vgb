// src/components/Navbar.jsx
import React, { useState } from 'react';
import Button from './ui/Button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Services', 'Portfolio'];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <span className="logo-orange">Xprix </span>
          <span className="logo-blue">Design</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
          <a href="#contact"><Button variant="primary" size="small">Let's Talk</Button></a>
        </div>
        
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;