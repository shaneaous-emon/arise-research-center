import React from 'react';
import { LinkButton } from '../common/Button';

interface TeamMemberCardProps {
  id: string;
  name: string;
  title: string;
  image: string;
  bio?: string;
  isDetailed?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  id,
  name,
  title,
  image,
  bio,
  isDetailed = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-center"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-primary-800 mb-1">{name}</h3>
        <p className="text-accent-600 mb-3">{title}</p>
        {isDetailed && bio && (
          <p className="text-neutral-600 mb-4 line-clamp-3">{bio}</p>
        )}
        <div className="mt-auto pt-2">
          <LinkButton to={`/team/${id}`} variant="outline" size="sm">
            View Profile
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;