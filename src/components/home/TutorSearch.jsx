import React from 'react';
import { FaSearch, FaStar } from 'react-icons/fa';
import Button from '../common/Button';

const filters = [
  { name: 'subject', label: 'Subject' },
  { name: 'grade', label: 'Grade/Class' },
  { name: 'location', label: 'Location' },
  { name: 'availability', label: 'Availability' }
];

const TutorSearch = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Tutors</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover tutors who specialize in your subjects and are available in your location.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filters.map((filter) => (
                <div key={filter.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {filter.label}
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select {filter.label}</option>
                  </select>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="primary" className="w-full">
                <FaSearch className="inline mr-2" />
                Search Tutors
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://randomuser.me/api/portraits/${index % 2 ? 'men' : 'women'}/${index}.jpg`}
                    alt="Tutor"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-sm" />
                      ))}
                      <span className="text-gray-600 ml-2">(4.8)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <strong>Subjects:</strong> Mathematics, Physics
                  </p>
                  <p className="text-gray-600">
                    <strong>Location:</strong> New York, NY
                  </p>
                </div>
                <Button variant="primary" className="w-full mt-4">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorSearch;