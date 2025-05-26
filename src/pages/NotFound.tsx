import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-6xl font-bold text-primary-800 mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          The page you are looking for doesn't exist or has been moved. Please check the URL or navigate using the links below.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/" 
            className="px-4 py-2 bg-accent-300 text-primary-800 font-medium rounded hover:bg-accent-400 transition-colors"
          >
            Go Home
          </Link>
          <Link 
            to="/contact" 
            className="px-4 py-2 bg-transparent border border-primary-800 text-primary-800 font-medium rounded hover:bg-primary-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;