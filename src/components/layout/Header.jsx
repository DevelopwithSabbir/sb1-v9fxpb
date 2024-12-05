import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TutorConnect
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/tutors" className="text-gray-600 hover:text-blue-600">Find Tutors</Link>
            <Link to="/subjects" className="text-gray-600 hover:text-blue-600">Subjects</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</Link>
            <Link to="/login" className="text-blue-600 hover:text-blue-700">Login</Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/tutors" className="text-gray-600 hover:text-blue-600">Find Tutors</Link>
              <Link to="/subjects" className="text-gray-600 hover:text-blue-600">Subjects</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</Link>
              <Link to="/login" className="text-blue-600 hover:text-blue-700">Login</Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center">
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;