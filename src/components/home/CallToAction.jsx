import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Sign Up to Get Full Access!
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Register today to access all available tuition opportunities and become part of our community!
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/register">
            <Button variant="primary">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;