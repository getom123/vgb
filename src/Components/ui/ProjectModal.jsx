// src/components/ui/ProjectModal.jsx

import React, { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ×
        </button>

        {/* Project Preview */}
        <div className="modal-header">
          <div
            className="modal-image"
            style={{ backgroundColor: project.image }}
          >
            <div className="modal-image-placeholder">
              <svg
                viewBox="0 0 600 350"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="600"
                  height="350"
                  fill={project.image}
                  opacity="0.2"
                />

                <circle
                  cx="150"
                  cy="120"
                  r="70"
                  fill="white"
                  opacity="0.15"
                />

                <circle
                  cx="480"
                  cy="250"
                  r="90"
                  fill="white"
                  opacity="0.1"
                />

                <text
                  x="300"
                  y="180"
                  textAnchor="middle"
                  fill="white"
                  fontSize="22"
                  fontWeight="600"
                >
                  Project Preview
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="modal-body">
          {/* Badge */}
          <div className="project-badge">
            Featured Project
          </div>

          {/* Title */}
          <h2 className="modal-title">
            {project.title}
          </h2>

          <span className="modal-category">
            {project.category}
          </span>

          {/* Quick Stats */}
          <div className="modal-stats">
            <div className="stat-box">
              <span className="stat-value">
                {project.duration}
              </span>
              <span className="stat-label">
                Timeline
              </span>
            </div>

            <div className="stat-box">
              <span className="stat-value">
                {project.deliverables?.length || 0}
              </span>
              <span className="stat-label">
                Deliverables
              </span>
            </div>

            <div className="stat-box">
              <span className="stat-value">
                100%
              </span>
              <span className="stat-label">
                Custom Design
              </span>
            </div>
          </div>

          {/* Client */}
          <div className="modal-client">
            <strong>Client:</strong> {project.client}
          </div>

          {/* Overview */}
          <div className="modal-section">
            <h3>Project Snapshot</h3>
            <p>{project.description}</p>
          </div>

          {/* Challenge */}
          <div className="modal-section">
            <h3>The Objective</h3>
            <p>{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="modal-section">
            <h3>Our Creative Approach</h3>
            <p>{project.solution}</p>
          </div>

          {/* Deliverables */}
          <div className="modal-section">
            <h3>What We Delivered</h3>

            <ul className="deliverables-list">
              {project.deliverables?.map(
                (item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Closing Message */}
          <div className="modal-highlight">
            <h4>
              Looking for similar results?
            </h4>

            <p>
              We help brands and businesses
              stand out through strategic
              branding, graphic design,
              illustration, logo design, and
              architectural concepts.
            </p>
          </div>

          {/* CTA */}
            <div className="modal-actions">
            <button
                className="modal-secondary-btn"
                onClick={onClose}
            >
                Close
            </button>

            <button
                className="modal-cta"
                onClick={() => {
                onClose();

                setTimeout(() => {
                    const contactSection = document.getElementById('contact');

                    if (contactSection) {
                    contactSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                    }
                }, 100);
                }}
            >
                Start a Similar Project
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;