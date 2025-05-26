import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular background with radial gradient */}
      <circle cx="50" cy="50" r="50" fill="url(#logoGradient)" />
      
      {/* Brain outline */}
      <path
        d="M50 25C37.4 25 27 35.4 27 48C27 60.6 37.4 71 50 71C62.6 71 73 60.6 73 48C73 35.4 62.6 25 50 25Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Brain details */}
      <path
        d="M38 40C38 40 42 45 50 45C58 45 62 40 62 40"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <path
        d="M33 48C33 48 40 55 50 55C60 55 67 48 67 48"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Neural network nodes */}
      <circle cx="50" cy="45" r="3" fill="#60D9E1" />
      <circle cx="40" cy="40" r="2" fill="#60D9E1" />
      <circle cx="60" cy="40" r="2" fill="#60D9E1" />
      <circle cx="50" cy="55" r="3" fill="#60D9E1" />
      <circle cx="35" cy="48" r="2" fill="#60D9E1" />
      <circle cx="65" cy="48" r="2" fill="#60D9E1" />
      
      {/* Neural network connections */}
      <line x1="40" y1="40" x2="50" y2="45" stroke="#60D9E1" strokeWidth="1" />
      <line x1="60" y1="40" x2="50" y2="45" stroke="#60D9E1" strokeWidth="1" />
      <line x1="35" y1="48" x2="50" y2="55" stroke="#60D9E1" strokeWidth="1" />
      <line x1="65" y1="48" x2="50" y2="55" stroke="#60D9E1" strokeWidth="1" />
      <line x1="50" y1="45" x2="50" y2="55" stroke="#60D9E1" strokeWidth="1" />
      
      {/* Stars */}
      <path
        d="M25 30L27 34L31 36L27 38L25 42L23 38L19 36L23 34L25 30Z"
        fill="#2E58A6"
      />
      <path
        d="M75 65L77 69L81 71L77 73L75 77L73 73L69 71L73 69L75 65Z"
        fill="#2E58A6"
      />
      
      {/* Gradient definition */}
      <defs>
        <radialGradient
          id="logoGradient"
          cx="50"
          cy="50"
          r="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.2" stopColor="#3A488A" />
          <stop offset="1" stopColor="#8A88B7" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Logo;