import React from 'react';

const stats = [
  {
    value: '1000+',
    label: 'Expert Tutors'
  },
  {
    value: '50+',
    label: 'Subjects'
  },
  {
    value: '10,000+',
    label: 'Happy Students'
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;