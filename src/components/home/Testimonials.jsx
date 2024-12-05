import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Parent',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    text: 'Finding a tutor for my daughter was so easy with this platform. Her grades have improved significantly!'
  },
  {
    name: 'Michael Chen',
    role: 'Student',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'The personalized attention I received helped me ace my SATs. Highly recommended!'
  },
  {
    name: 'Emily Davis',
    role: 'Parent',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: "Excellent platform with professional tutors. My son has grown tremendously in math confidence."
  }
];

const TestimonialCard = ({ name, role, image, text }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <div className="flex justify-center mb-6">
      <img 
        src={image} 
        alt={name}
        className="w-20 h-20 rounded-full"
      />
    </div>
    <div className="flex justify-center mb-6">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-xl" />
      ))}
    </div>
    <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
    <p className="text-gray-600 mb-6">{text}</p>
    <div className="text-center">
      <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of students and parents who have used our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;