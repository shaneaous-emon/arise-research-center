import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import NewsCard from '../components/home/NewsCard';
import { newsItems } from '../data/news';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All News' },
    { id: 'research', label: 'Research Updates' },
    { id: 'awards', label: 'Awards & Recognition' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'press', label: 'Press Coverage' }
  ];

  const filteredNews = newsItems.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <PageHero
        title="News & Updates"
        subtitle="Stay up to date with the latest research breakthroughs, awards, and announcements from ARISE Research Center."
        backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-64">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-primary-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-50 text-primary-800'
                        : 'hover:bg-neutral-50'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border rounded-lg"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map(news => (
                  <NewsCard
                    key={news.id}
                    id={news.id}
                    title={news.title}
                    excerpt={news.excerpt}
                    date={news.date}
                    image={news.image}
                    category={news.category}
                    tags={news.tags}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No news items found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;