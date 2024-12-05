import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import TutorSearch from '../components/home/TutorSearch';
import Testimonials from '../components/home/Testimonials';
import PricingPlans from '../components/home/PricingPlans';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <TutorSearch />
      <Testimonials />
      <PricingPlans />
      <CallToAction />
    </div>
  );
};

export default Home;