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

export default TestimonialsSection;