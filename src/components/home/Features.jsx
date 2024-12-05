import React from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaCalendarCheck, FaStar } from 'react-icons/fa';

const features = [
  {
    icon: <FaChalkboardTeacher className="text-5xl text-blue-600" />,
    title: 'Expert Tutors',
    description: 'All our tutors are thoroughly vetted and have proven teaching experience.'
  },
  {
    icon: <FaUserGraduate className="text-5xl text-blue-600" />,
    title: 'Personalized Learning',
    description: 'Get customized learning plans tailored to your specific needs and goals.'
  },
  {
    icon: <FaCalendarCheck className="text-5xl text-blue-600" />,
    title: 'Flexible Scheduling',
    description: 'Choose from a wide range of available time slots that suit your schedule.'
  },
  {
    icon: <FaStar className="text-5xl text-blue-600" />,
    title: 'Guaranteed Results',
    description: 'See improvement in your grades or get your money back.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Platform</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the best tutoring experience with qualified teachers and proven methods.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;