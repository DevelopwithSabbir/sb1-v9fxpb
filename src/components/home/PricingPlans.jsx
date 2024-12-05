import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Button from '../common/Button';

const plans = [
  {
    name: 'Free',
    price: '0',
    features: [
      'Browse tuition opportunities',
      'Basic tutor search',
      'Limited profile visibility',
      'Email support'
    ]
  },
  {
    name: 'Premium',
    price: '29',
    features: [
      'Unlimited job applications',
      'Priority support',
      'Enhanced profile visibility',
      'Advanced search filters',
      'Direct messaging',
      'Verified badge'
    ]
  }
];

const PricingPlans = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our affordable plans and choose what fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.name === 'Premium' ? 'primary' : 'secondary'}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;