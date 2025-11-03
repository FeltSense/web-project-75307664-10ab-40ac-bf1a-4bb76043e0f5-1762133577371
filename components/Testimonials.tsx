'use client';
export default function Testimonials() {
  const testimonials = [
    { name: 'John Doe', role: 'CEO', text: 'Excellent service and support!' },
    { name: 'Jane Smith', role: 'Manager', text: 'Highly recommended for anyone!' },
  ];
  return (
    <section className="py-16 px-4 bg-gray-50 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">"{item.text}"</p>
            <p className="font-semibold text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}