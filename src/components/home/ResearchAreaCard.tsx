import React from 'react';
import { LinkButton } from '../common/Button';

interface ResearchAreaCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ResearchAreaCard: React.FC<ResearchAreaCardProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow p-6 flex flex-col h-full">
      <div className="text-primary-800 mb-4 p-3 bg-primary-50 rounded-lg w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary-800 mb-3">{title}</h3>
      <p className="text-neutral-600 mb-5 flex-grow">{description}</p>
      <div className="mt-auto">
        <LinkButton to={link} variant="outline" size="md">
          Discover More
        </LinkButton>
      </div>
    </div>
  );
};

export default ResearchAreaCard;