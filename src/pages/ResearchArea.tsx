import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import { LinkButton } from '../components/common/Button';
import ProjectCard from '../components/home/ProjectCard';
import PublicationCard from '../components/home/PublicationCard';
import TeamMemberCard from '../components/home/TeamMemberCard';
import { researchAreas, ResearchArea as ResearchAreaType } from '../data/researchAreas';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import { teamMembers } from '../data/team';

const ResearchArea: React.FC = () => {
  const { area } = useParams<{ area: string }>();
  const researchArea = researchAreas.find(a => a.id === area);
  
  if (!researchArea) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-800 mb-4">Research Area Not Found</h1>
          <p className="text-neutral-600 mb-6">The research area you're looking for doesn't exist or has been moved.</p>
          <LinkButton to="/" variant="primary">
            Return to Home
          </LinkButton>
        </div>
      </div>
    );
  }
  
  // Get related projects
  const relatedProjects = projects.filter(project => 
    project.researchAreas.includes(researchArea.id)
  ).slice(0, 3);
  
  // Get related publications
  const relatedPublications = publications.filter(pub => 
    pub.categories.includes(researchArea.id)
  ).slice(0, 3);
  
  // Get researchers involved
  const involvedResearchers = teamMembers.filter(member => 
    researchArea.keyResearchers.includes(member.id)
  ).slice(0, 3);

  return (
    <div>
      <PageHero
        title={`${researchArea.title} at ARISE`}
        subtitle={researchArea.shortDescription}
        backgroundImage={researchArea.image}
      />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-primary-800 hover:text-primary-600 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Research Areas
        </Link>
        
        {/* Overview Section */}
        <section className="mb-16">
          <SectionTitle 
            title={`Understanding ${researchArea.title}`} 
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-neutral-700 mb-6">{researchArea.fullDescription}</p>
          </div>
        </section>
        
        {/* Challenges & Approaches Section */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary-800 mb-6">Key Challenges</h3>
            <ul className="space-y-3">
              {researchArea.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 text-accent-300">•</span>
                  <span className="text-neutral-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary-800 mb-6">Our Approach</h3>
            <ul className="space-y-3">
              {researchArea.approaches.map((approach, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 text-accent-300">•</span>
                  <span className="text-neutral-700">{approach}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        {/* Applications Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-primary-800 mb-6">Applications</h3>
          <div className="bg-primary-50 rounded-lg p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchArea.applications.map((application, index) => (
                <li key={index} className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <span className="mr-2 mt-1 text-accent-300">•</span>
                  <span className="text-neutral-700">{application}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        {/* Related Projects Section */}
        <section className="mb-16">
          <SectionTitle 
            title={`Projects in ${researchArea.title}`} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map(project => (
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
          
          {relatedProjects.length > 0 && (
            <div className="text-center mt-8">
              <LinkButton to="/projects" variant="outline">
                View All Projects
              </LinkButton>
            </div>
          )}
        </section>
        
        {/* Related Publications Section */}
        <section className="mb-16">
          <SectionTitle 
            title={`Publications in ${researchArea.title}`} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPublications.map(publication => (
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
          
          {relatedPublications.length > 0 && (
            <div className="text-center mt-8">
              <LinkButton to="/publications" variant="outline">
                View All Publications
              </LinkButton>
            </div>
          )}
        </section>
        
        {/* Researchers Involved Section */}
        <section className="mb-16">
          <SectionTitle 
            title={`Researchers in ${researchArea.title}`} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {involvedResearchers.map(member => (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
              />
            ))}
          </div>
          
          {involvedResearchers.length > 0 && (
            <div className="text-center mt-8">
              <LinkButton to="/people" variant="outline">
                View All Researchers
              </LinkButton>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ResearchArea;