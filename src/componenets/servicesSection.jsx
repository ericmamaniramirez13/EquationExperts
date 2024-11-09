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
export default ServicesSection;