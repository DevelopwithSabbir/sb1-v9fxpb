import React from 'react';
import { FaSearch, FaUserCheck, FaGraduationCap } from 'react-icons/fa';

const steps = [
  {
    number: 1,
    icon: <FaSearch className="text-3xl text-blue-600 mb-4" />,
    title: 'Browse Tuition Opportunities',
    description: 'Search available tuition opportunities and apply directly.'
  },
  {
    number: 2,
    icon: <FaUserCheck className="text-3xl text-blue-600 mb-4" />,
    title: 'Find the Perfect Tutor',
    description: 'Review verified tutor profiles, read guardian reviews, and apply for jobs.'
  },
  {
    number: 3,
    icon: <FaGraduationCap className="text-3xl text-blue-600 mb-4" />,
    title: 'Confirm Tuition and Start Learning',
    description: 'Once a tutor is selected, start your lessons with personalized schedules!'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">How EduPro Tuition Works</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Get started with our simple three-step process
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center">
                {step.icon}
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;