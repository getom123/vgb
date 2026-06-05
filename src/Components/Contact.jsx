// src/components/Contact.jsx
import React, { useState } from 'react';
import Button from './ui/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Replace with actual WhatsApp number
    const whatsappNumber = '2348000000000';

    const text = `
*NEW PROJECT INQUIRY*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Service Needed:
${formData.service}

Project Details:
${formData.message}
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank'
    );

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });

    setErrors({});
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Start Your Project</h2>
          <p>
            Tell us about your idea and we'll help bring it to life.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-note">
            <strong>Free Consultation</strong>
            <p>
              Tell us about your project and we'll reach out with ideas,
              recommendations, and a tailored solution.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form" data-aos="zoom-in">

            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <span className="error">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && (
                <span className="error">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              >
                <option value="" selected disabled>Select a Service</option>
                <option>Graphic Design</option>
                <option>Logo Design</option>
                <option>Branding</option>
                <option>Illustration</option>
                <option>Architectural Design</option>
              </select>

              {errors.service && (
                <span className="error">{errors.service}</span>
              )}
            </div>

            <div className="form-group">
              <textarea
                rows="6"
                placeholder="Tell us about your project, goals, and expectations..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <div className="btn-center">
              <Button type="submit" variant="primary">
                Send via WhatsApp
              </Button>
            </div>

          </form>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;