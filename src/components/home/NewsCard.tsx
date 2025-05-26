import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  tags?: string[];
  showExcerpt?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  excerpt,
  date,
  image,
  category,
  tags = [],
  showExcerpt = true
}) => {
  return (
    <Link to={`/news/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span className="capitalize">{category}</span>
          </div>
          <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
          {showExcerpt && (
            <p className="text-gray-600 line-clamp-3">{excerpt}</p>
          )}
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="inline-block px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;