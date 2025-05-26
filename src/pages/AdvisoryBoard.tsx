import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import { teamMembers } from '../data/team';

const AdvisoryBoard: React.FC = () => {
  // Filter advisors by type
  const boardChair = teamMembers.find(member => member.id === 'advisor-001');
  const industryAdvisors = teamMembers.filter(member => 
    member.type === 'advisor' && member.id !== 'advisor-001'
  );
  const internationalAdvisors = teamMembers.filter(member => 
    member.type === 'international-advisor'
  );

  const AdvisorCard: React.FC<{
    name: string;
    title: string;
    image: string;
    bio: string;
    education: { degree: string; institution: string }[];
    location?: string;
  }> = ({ name, title, image, bio, education, location }) => (
    <div className="bg-white rounded-lg shadow-card overflow-hidden">
      <div className="aspect-w-3 aspect-h-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-800 mb-1">{name}</h3>
        <p className="text-accent-600 font-medium mb-2">{title}</p>
        {location && (
          <div className="flex items-center text-neutral-600 text-sm mb-4">
            <MapPin size={16} className="mr-1" />
            <span>{location}</span>
          </div>
        )}
        <p className="text-neutral-600 mb-4 line-clamp-3">{bio}</p>
        <div className="space-y-1 mb-4">
          {education.slice(0, 2).map((edu, index) => (
            <div key={index} className="text-sm text-neutral-500">
              {edu.degree} - {edu.institution}
            </div>
          ))}
        </div>
        <Link
          to={`/team/${name.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-primary-800 font-medium hover:text-primary-600 transition-colors"
        >
          View Full Profile
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <PageHero
        title="Advisory Board"
        subtitle="Meet the distinguished experts guiding our research direction and strategic initiatives"
        backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Board Chair */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Advisory Board Chair"
            subtitle="Leading our strategic vision and research governance"
            centered
          />
          
          {boardChair && (
            <div className="max-w-4xl mx-auto mt-8">
              <div className="bg-white rounded-lg shadow-card overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-w-4 aspect-h-3 md:aspect-h-full">
                    <img
                      src={boardChair.image}
                      alt={boardChair.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-primary-800 mb-2">{boardChair.name}</h3>
                    <p className="text-accent-600 font-medium mb-4">{boardChair.title}</p>
                    <p className="text-neutral-600 mb-6">{boardChair.bio}</p>
                    <div className="space-y-2 mb-6">
                      {boardChair.education.map((edu, index) => (
                        <div key={index} className="text-sm text-neutral-500">
                          {edu.degree} - {edu.institution}, {edu.year}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {boardChair.awards.slice(0, 2).map((award, index) => (
                        <div key={index} className="text-sm">
                          <span className="text-primary-800 font-medium">{award.title}</span>
                          <span className="text-neutral-500"> - {award.organization}, {award.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Industry Advisors */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Industry Advisors"
            subtitle="Bridging research innovation with practical applications"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {industryAdvisors.map(advisor => (
              <AdvisorCard
                key={advisor.id}
                name={advisor.name}
                title={advisor.title}
                image={advisor.image}
                bio={advisor.bio}
                education={advisor.education}
              />
            ))}
          </div>
        </div>
      </section>

      {/* International Advisors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="International Advisors"
            subtitle="Providing global perspectives and fostering international collaboration"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {internationalAdvisors.map(advisor => (
              <AdvisorCard
                key={advisor.id}
                name={advisor.name}
                title={advisor.title}
                image={advisor.image}
                bio={advisor.bio}
                education={advisor.education}
                location={advisor.title.split(' - ')[1]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with ARISE</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join us in shaping the future of artificial intelligence through research collaboration and innovation.
          </p>
          <Link
            to="/collaborations"
            className="inline-block px-8 py-3 bg-accent-300 text-primary-800 font-medium rounded-lg hover:bg-accent-400 transition-colors"
          >
            Explore Partnerships
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AdvisoryBoard;
