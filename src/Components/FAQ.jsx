// src/components/FAQ.jsx
import React, { useState } from 'react';
import AccordionItem from './ui/AccordionItem';
import './FAQ.css';

const faqs = [
  {
    question: 'How long does a design project take?',
    answer:
      'Project timelines vary depending on scope and complexity. Most logo and branding projects are completed within a few weeks, while larger design projects may take longer.',
  },
  {
    question: 'Can you create custom designs based on my ideas?',
    answer:
      'Yes. We work closely with clients to understand their vision and transform their ideas into unique, professional designs.',
  },
  {
    question: 'Do you offer revisions?',
    answer:
      'Absolutely. We include revision rounds to ensure the final design aligns with your expectations and project goals.',
  },
  {
    question: 'What design services do you offer?',
    answer:
      'We specialize in graphic design, illustration, logo design, branding, and architectural design services.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply contact us with your project details. We will discuss your requirements, provide guidance, and prepare a tailored proposal.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before starting your project.</p>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;