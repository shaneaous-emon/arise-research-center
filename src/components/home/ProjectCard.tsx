import React from 'react';
import { LinkButton } from '../common/Button';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  categories,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all h-full flex flex-col overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((category, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2 py-1 rounded-full bg-primary-50 text-primary-800"
            >
              {category}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-primary-800 mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4 flex-grow">{description}</p>
        <div className="mt-auto pt-2">
          <LinkButton to={`/projects/${id}`} variant="primary" size="md">
            View Details
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;