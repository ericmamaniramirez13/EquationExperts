// Header Component
import React from "react";

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
export default Header;