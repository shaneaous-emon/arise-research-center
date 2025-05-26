import React from 'react';
import { LinkButton } from '../common/Button';
import { ExternalLink } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  type: string;
  url: string;
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  title,
  authors,
  journal,
  year,
  type,
  url,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow p-6 flex flex-col h-full">
      <div className="mb-3">
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent-50 text-accent-700">
          {type}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-primary-800 mb-2">{title}</h3>
      <p className="text-neutral-600 mb-1">
        {authors.join(', ')}
      </p>
      <p className="text-neutral-500 text-sm mb-4">
        {journal}, {year}
      </p>
      <div className="mt-auto pt-2">
        <LinkButton to={url} external variant="outline" size="sm" icon={<ExternalLink size={16} />}>
          Read Publication
        </LinkButton>
      </div>
    </div>
  );
};

export default PublicationCard;