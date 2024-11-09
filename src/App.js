// src/App.js
import './App.css';
import React from "react";

import Header from './componenets/header';
import AboutSection from './componenets/aboutSection';
import ServicesSection from './componenets/servicesSection';
import TestimonialsSection from './componenets/testimonalsSection';
import CalendlySection from './componenets/candelySection';
import Footer from './componenets/footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <Header />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CalendlySection />
      <Footer />
    </div>
  );
}

export default App;