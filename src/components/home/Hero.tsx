import React from 'react';
import { LinkButton } from '../common/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-primary-800 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-accent-300 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-primary-400 blur-3xl bottom-0 right-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            ARISE: Advancing Research in Intelligent Systems & Engineering
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
            Pioneering the future of AI through cutting-edge research, collaboration, and innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <LinkButton to="/research/generative-ai" variant="primary" size="lg">
              Explore Our Research
            </LinkButton>
            <LinkButton to="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Learn More About Us
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;