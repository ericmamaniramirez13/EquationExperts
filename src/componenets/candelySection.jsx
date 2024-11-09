import React from "react";
import Booking from "./booking";
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
export default CalendlySection;