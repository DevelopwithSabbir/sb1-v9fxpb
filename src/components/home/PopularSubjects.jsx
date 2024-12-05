import React from 'react';
import { Link } from 'react-router-dom';

const subjects = [
  {
    title: 'Mathematics',
    icon: '📐',
    description: 'Algebra, Calculus, Geometry',
    color: 'bg-blue-100'
  },
  {
    title: 'Science',
    icon: '🔬',
    description: 'Physics, Chemistry, Biology',
    color: 'bg-green-100'
  },
  {
    title: 'English',
    icon: '📚',
    description: 'Literature, Writing, Grammar',
    color: 'bg-yellow-100'
  },
  {
    title: 'Languages',
    icon: '🌎',
    description: 'Spanish, French, Mandarin',
    color: 'bg-purple-100'
  },
  {
    title: 'Test Prep',
    icon: '✏️',
    description: 'SAT, ACT, GRE',
    color: 'bg-red-100'
  },
  {
    title: 'Music',
    icon: '🎵',
    description: 'Piano, Guitar, Voice',
    color: 'bg-pink-100'
  }
];

const PopularSubjects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Subjects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our most sought-after subjects and find the perfect tutor for your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Link 
              key={index}
              to={`/subjects/${subject.title.toLowerCase()}`}
              className={`${subject.color} p-6 rounded-xl hover:shadow-lg transition duration-300`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{subject.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{subject.title}</h3>
                  <p className="text-gray-600">{subject.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSubjects;