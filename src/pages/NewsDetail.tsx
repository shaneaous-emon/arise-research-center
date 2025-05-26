import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { newsItems } from '../data/news';
import { projects } from '../data/projects';
import { publications } from '../data/publications';

const NewsDetail: React.FC = () => {
  const { id } = useParams();
  const news = newsItems.find(item => item.id === id);

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">News article not found</h1>
          <Link to="/news" className="text-blue-600 hover:underline">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = news.relatedProjects 
    ? projects.filter(p => news.relatedProjects?.includes(p.id))
    : [];

  const relatedPublications = news.relatedPublications
    ? publications.filter(p => news.relatedPublications?.includes(p.id))
    : [];

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/news" className="inline-flex items-center text-blue-600 hover:underline mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to News
      </Link>

      <article className="max-w-4xl mx-auto">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(news.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              <span className="capitalize">{news.category}</span>
            </div>
          </div>
        </div>

        <div className="prose max-w-none mb-12">
          {news.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {news.tags.map(tag => (
            <span 
              key={tag}
              className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {(relatedProjects.length > 0 || relatedPublications.length > 0) && (
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">Related Content</h2>
            
            {relatedProjects.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedProjects.map(project => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}`}
                      className="block p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <h4 className="font-semibold mb-2">{project.title}</h4>
                      <p className="text-gray-600 text-sm">{project.shortDescription}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedPublications.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Related Publications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPublications.map(publication => (
                    <Link
                      key={publication.id}
                      to={`/publications/${publication.id}`}
                      className="block p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <h4 className="font-semibold mb-2">{publication.title}</h4>
                      <p className="text-gray-600 text-sm">{publication.authors.join(', ')}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </article>
    </div>
  );
};

export default NewsDetail;
