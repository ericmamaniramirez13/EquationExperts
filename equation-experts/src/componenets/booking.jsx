// Import required modules
import React from 'react';
import { InlineWidget } from 'react-calendly';

const Booking = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6">Book a Tutoring Session</h2>

      <div className="w-full max-w-xl">
        {/* Embed Calendly inline widget */}
        <InlineWidget url="https://calendly.com/ericmamaniramirez13/30min" styles={{ height: '800px' }} />
      </div>
    </div>
  );
};

export default Booking;
