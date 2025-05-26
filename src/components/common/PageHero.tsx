import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  overlay = true,
  children,
}) => {
  const gradientOverlay = overlay
    ? 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-800/90 before:to-primary-700/80 before:z-10'
    : '';

  return (
    <div
      className={`relative w-full pt-40 pb-20 md:pt-48 md:pb-28 ${gradientOverlay} overflow-hidden`}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-700 z-0"></div>
      )}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-6 animate-slide-up">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default PageHero;