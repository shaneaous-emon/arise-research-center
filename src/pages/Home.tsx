import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, FlaskConical, Sparkles, ArrowRight, Brain, Eye, MessageSquare, Users, Cpu, Heart } from 'lucide-react';
import Hero from '../components/home/Hero';
import SectionTitle from '../components/common/SectionTitle';
import ResearchAreaCard from '../components/home/ResearchAreaCard';
import ProjectCard from '../components/home/ProjectCard';
import PublicationCard from '../components/home/PublicationCard';
import TeamMemberCard from '../components/home/TeamMemberCard';
import NewsCard from '../components/home/NewsCard';
import StatCard from '../components/home/StatCard';
import { LinkButton } from '../components/common/Button';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import { teamMembers } from '../data/team';
import { newsItems, eventItems } from '../data/news';

const Home: React.FC = () => {
  // Get featured projects
  const featuredProjects = projects.slice(0, 3);
  
  // Get recent publications
  const recentPublications = publications.slice(0, 3);
  
  // Get featured team members (director, deputy director, and a senior researcher)
  const featuredTeamMembers = [
    teamMembers.find(member => member.id === 'director'),
    teamMembers.find(member => member.id === 'deputy-director'),
    teamMembers.find(member => member.id === 'researcher-001')
  ].filter(Boolean);
  
  // Get latest news and events
  const latestNews = newsItems.slice(0, 2);
  const latestEvent = eventItems[0];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About / What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Shaping the Future with Intelligent Solutions" 
            subtitle="At ARISE, we drive innovation at the frontier of artificial intelligence research. Our interdisciplinary approach combines cutting-edge technology with human-centered design to address complex challenges."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                <Brain size={32} className="text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Conduct Research</h3>
              <p className="text-neutral-600">We dive deep into foundational and applied AI research to solve complex challenges and advance the field.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                <FlaskConical size={32} className="text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Foster Learning</h3>
              <p className="text-neutral-600">We educate the next generation of AI innovators and researchers through mentorship and knowledge sharing.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                <Sparkles size={32} className="text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Guide Innovation</h3>
              <p className="text-neutral-600">We collaborate with industry and academia to translate research into real-world impact and ethical solutions.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <LinkButton to="/about" variant="outline" size="lg">
              Discover Our Mission
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Core Research Focus" 
            subtitle="ARISE conducts cutting-edge research across key areas of artificial intelligence, developing innovative approaches to both fundamental and applied challenges."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ResearchAreaCard
              title="Generative AI"
              description="Developing AI systems that can create new content, from text and images to music and code, pushing the boundaries of machine creativity."
              icon={<Sparkles size={24} />}
              link="/research/generative-ai"
            />
            
            <ResearchAreaCard
              title="Explainable AI (XAI)"
              description="Creating transparent AI systems that can explain their decisions, enabling trust and verification in critical applications."
              icon={<Eye size={24} />}
              link="/research/explainable-ai"
            />
            
            <ResearchAreaCard
              title="Natural Language Processing"
              description="Advancing how computers understand, generate, and interact with human language, making technology more accessible and useful."
              icon={<MessageSquare size={24} />}
              link="/research/natural-language-processing"
            />
            
            <ResearchAreaCard
              title="Human-AI Interaction (HAX)"
              description="Designing intuitive interfaces and experiences that enhance how humans collaborate with AI systems in everyday contexts."
              icon={<Users size={24} />}
              link="/research/human-ai-interaction"
            />
            
            <ResearchAreaCard
              title="Computer Vision"
              description="Enabling machines to interpret and understand visual information from the world, mimicking and extending human visual capabilities."
              icon={<Cpu size={24} />}
              link="/research/computer-vision"
            />
            
            <ResearchAreaCard
              title="AI for Social Good"
              description="Leveraging artificial intelligence to address critical societal challenges and improve quality of life for communities worldwide."
              icon={<Heart size={24} />}
              link="/research/ai-for-social-good"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Explore our innovative research projects that address real-world challenges through artificial intelligence."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {featuredProjects.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.shortDescription}
                image={project.image}
                categories={project.researchAreas}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <LinkButton to="/projects" variant="primary" size="lg">
              View All Projects
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Recent Publications Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Latest Publications" 
            subtitle="Our researchers regularly contribute to the advancement of AI through peer-reviewed publications in top conferences and journals."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {recentPublications.map(publication => (
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
          
          <div className="text-center mt-12">
            <LinkButton to="/publications" variant="outline" size="lg">
              View All Publications
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Meet Our Innovators" 
            subtitle="ARISE brings together world-class researchers with diverse expertise and backgrounds to advance the frontier of AI research."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {featuredTeamMembers.map(member => member && (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                bio={member.bio.substring(0, 120) + '...'}
                isDetailed
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <LinkButton to="/people" variant="outline" size="lg">
              Meet The Full Team
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard count={35} label="Researchers" icon={<Users size={32} />} />
            <StatCard count={24} label="Active Projects" icon={<FlaskConical size={32} />} />
            <StatCard count={120} label="Publications" icon={<Lightbulb size={32} />} />
            <StatCard count={18} label="Global Partners" icon={<Sparkles size={32} />} />
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Latest News & Events" 
            subtitle="Stay updated with the latest developments, announcements, and upcoming events from ARISE."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* News Items */}
            {latestNews.map(news => (
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

            {/* Latest Event */}
            <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={latestEvent.image}
                  alt={latestEvent.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent-50 text-accent-700">
                    {latestEvent.type}
                  </span>
                  <div className="flex items-center text-neutral-500 text-sm">
                    {latestEvent.startDate}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{latestEvent.title}</h3>
                <p className="text-neutral-600 mb-4 line-clamp-3 flex-grow">
                  {latestEvent.location}
                </p>
                <div className="mt-auto pt-2">
                  <LinkButton to={`/events/${latestEvent.id}`} variant="outline" size="sm">
                    View Event
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <LinkButton to="/news" variant="outline" size="lg">
              View All News
            </LinkButton>
            <LinkButton to="/events" variant="outline" size="lg">
              View All Events
            </LinkButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey of Discovery</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Collaborate with us on groundbreaking research or support our mission to advance AI for a better future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton to="/collaborations" variant="primary" size="lg">
              Partner With Us
            </LinkButton>
            <LinkButton to="/careers" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Explore Careers
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;