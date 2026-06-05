// src/App.jsx
// import React from 'react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import HowItWorks from './Components/HowItWorks';
import Portfolio from './Components/Portfolio';
import WhyChooseUs from './Components/WhyChooseUs';
import Testimonials from './Components/Testimonials';
import FAQ from './Components/FAQ';
import CTA from './Components/CTA';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;