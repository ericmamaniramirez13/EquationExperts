// src/App.js
import './App.css';
import Booking from './componenets/booking';
import React from "react";

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

// Header Component
function Header() {
  return (
    <header className="w-full bg-blue-500 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Equation Experts</h1>
        <nav>
          <a href="#about" className="mr-6 hover:text-gray-200">About</a>
          <a href="#services" className="mr-6 hover:text-gray-200">Services</a>
          <a href="#testimonials" className="hover:text-gray-200">Testimonials</a>
        </nav>
      </div>
    </header>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-12 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          Welcome to Equation Experts! I'm a dedicated math tutor specializing in algebra, calculus, geometry, and more. I have years of experience helping students improve their math skills and achieve academic success.
        </p>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  return (
    <section id="services" className="py-12 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Tutoring Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Algebra"
            description="Master algebraic concepts with personalized tutoring sessions."
          />
          <ServiceCard
            title="Calculus"
            description="Understand calculus and apply it to real-world problems."
          />
          <ServiceCard
            title="Geometry"
            description="Improve your understanding of shapes, sizes, and the properties of space."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">What My Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            student="John Doe"
            feedback="Equation Experts helped me excel in calculus. Highly recommend!"
          />
          <TestimonialCard
            student="Jane Smith"
            feedback="Algebra was always hard for me, but now I actually enjoy it!"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ student, feedback }) {
  return (
    <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
      <p className="text-gray-700 mb-4">"{feedback}"</p>
      <h4 className="font-bold">- {student}</h4>
    </div>
  );
}

// Calendly Integration Section
function CalendlySection() {
  return (
    <section id="schedule" className="py-12 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Schedule a Tutoring Session</h2>
        <p className="text-lg text-gray-700 mb-8">
          Use the link below to schedule a session at your convenience.
        </p>
        <a
          href="https://calendly.com/ericmamaniramirez13"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600"
        >
          Schedule with Calendly
        </a>
        <Booking/>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="w-full bg-blue-500 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; 2024 Equation Experts. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default App;
