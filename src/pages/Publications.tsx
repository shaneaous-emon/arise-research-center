import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import PublicationCard from '../components/home/PublicationCard';
import { publications } from '../data/publications';

type PublicationType = 'all' | 'journal' | 'conference' | 'book' | 'preprint';
type PublicationStatus = 'all' | 'published' | 'accepted' | 'submitted';

const Publications: React.FC = () => {
  const [activeType, setActiveType] = useState<PublicationType>('all');
  const [activeStatus, setActiveStatus] = useState<PublicationStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [tab, setTab] = useState<'papers' | 'articles' | 'journals'>('papers');
  const [category, setCategory] = useState<'ongoing' | 'published' | 'upcoming'>('published');

  const totalCitations = publications.reduce((sum, pub) => sum + (pub.citations || 0), 0);

  const filteredPublications = publications.filter(pub => {
    const matchesType = activeType === 'all' || pub.type === activeType;
    const matchesStatus = activeStatus === 'all' || pub.status === activeStatus;
    const matchesSearch = searchQuery === '' || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesStatus && matchesSearch;
  });

  const featuredPublications = publications
    .filter(pub => pub.citations && pub.citations > 10)
    .sort((a, b) => (b.citations || 0) - (a.citations || 0))
    .slice(0, 3);

  return (
    <div>
      <PageHero
        title="Publications"
        subtitle="Our contributions to advancing the field of artificial intelligence through peer-reviewed research."
        backgroundImage="https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Statistics Bar */}
      <section className="py-8 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{publications.length}</div>
              <div className="text-sm text-white/80">Total Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{totalCitations}</div>
              <div className="text-sm text-white/80">Total Citations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {publications.filter(p => p.type === 'journal').length}
              </div>
              <div className="text-sm text-white/80">Journal Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {publications.filter(p => p.type === 'conference').length}
              </div>
              <div className="text-sm text-white/80">Conference Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Publications"
            subtitle="Our most impactful research contributions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {featuredPublications.map(publication => (
              <PublicationCard
                key={publication.id}
                title={publication.title}
                authors={publication.authors}
                journal={publication.journal}
                year={publication.year}
                type={publication.type}
                url={publication.url}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search className="absolute left-3 top-2.5 text-neutral-400" size={20} />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={activeType}
                onChange={(e) => setActiveType(e.target.value as PublicationType)}
                className="px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Types</option>
                <option value="journal">Journal Articles</option>
                <option value="conference">Conference Papers</option>
                <option value="book">Books & Chapters</option>
                <option value="preprint">Preprints</option>
              </select>

              <select
                value={activeStatus}
                onChange={(e) => setActiveStatus(e.target.value as PublicationStatus)}
                className="px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="accepted">Accepted</option>
                <option value="submitted">Submitted</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Interface and Category Filtering */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 mb-4">
            <button onClick={() => setTab('papers')} className={tab === 'papers' ? 'font-bold underline' : ''}>Papers</button>
            <button onClick={() => setTab('articles')} className={tab === 'articles' ? 'font-bold underline' : ''}>Articles</button>
            <button onClick={() => setTab('journals')} className={tab === 'journals' ? 'font-bold underline' : ''}>Journals</button>
          </div>
          <div className="flex space-x-4 mb-6">
            <button onClick={() => setCategory('ongoing')} className={category === 'ongoing' ? 'font-bold underline' : ''}>Ongoing</button>
            <button onClick={() => setCategory('published')} className={category === 'published' ? 'font-bold underline' : ''}>Published</button>
            <button onClick={() => setCategory('upcoming')} className={category === 'upcoming' ? 'font-bold underline' : ''}>Upcoming</button>
          </div>
          <div className="mb-6">
            <input type="text" placeholder="Search publications..." className="border px-2 py-1 rounded w-full max-w-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TODO: Map and display filtered publications here */}
            <div className="bg-gray-100 p-4 rounded shadow">Sample Publication Card</div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Citation Statistics</h2>
            <p>[Citation stats here]</p>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map(publication => (
              <PublicationCard
                key={publication.id}
                title={publication.title}
                authors={publication.authors}
                journal={publication.journal}
                year={publication.year}
                type={publication.type}
                url={publication.url}
              />
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Publications;