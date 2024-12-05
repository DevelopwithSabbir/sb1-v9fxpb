import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Find Your Perfect Tutor Today
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Connect with expert tutors in your area. Whether you need help with Math, Science, 
              English, or any other subject, we've got you covered.
            </p>
            <div className="space-x-4">
              <Link to="/find-tutor">
                <Button variant="primary">Find a Tutor</Button>
              </Link>
              <Link to="/become-tutor">
                <Button variant="secondary">Become a Tutor</Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-gray-800 font-semibold text-xl mb-4">Quick Search</h3>
              <form className="space-y-4">
                <div>
                  <select className="w-full p-3 border rounded-md text-gray-700">
                    <option>Select Subject</option>
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>English</option>
                  </select>
                </div>
                <div>
                  <select className="w-full p-3 border rounded-md text-gray-700">
                    <option>Select Grade Level</option>
                    <option>Elementary</option>
                    <option>Middle School</option>
                    <option>High School</option>
                    <option>College</option>
                  </select>
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Location" 
                    className="w-full p-3 border rounded-md text-gray-700"
                  />
                </div>
                <Button variant="primary" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Search Tutors
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;