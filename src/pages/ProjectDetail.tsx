import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Award, FileText } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import { LinkButton } from '../components/common/Button';
import PublicationCard from '../components/home/PublicationCard';
import TeamMemberCard from '../components/home/TeamMemberCard';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import { teamMembers } from '../data/team';
import { researchAreas } from '../data/researchAreas';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-800 mb-4">Project Not Found</h1>
          <p className="text-neutral-600 mb-6">The project you're looking for doesn't exist or has been moved.</p>
          <LinkButton to="/projects" variant="primary">
            View All Projects
          </LinkButton>
        </div>
      </div>
    );
  }
  
  // Get project area names
  const projectAreas = project.researchAreas.map(areaId => {
    const area = researchAreas.find(a => a.id === areaId);
    return area ? area.title : areaId;
  });
  
  // Get team members involved
  const projectTeam = teamMembers.filter(member => 
    project.teamMembers.includes(member.id)
  );
  
  // Get related publications
  const projectPublications = project.publications 
    ? publications.filter(pub => project.publications?.includes(pub.id))
    : [];

  return (
    <div>
      <PageHero
        title={project.title}
        subtitle={project.shortDescription}
        backgroundImage={project.image}
      >
        <div className="flex flex-wrap gap-2 mt-2">
          {projectAreas.map((area, index) => (
            <span
              key={index}
              className="text-sm font-medium px-3 py-1 rounded-full bg-white/20 text-white"
            >
              {area}
            </span>
          ))}
        </div>
      </PageHero>
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/projects" className="inline-flex items-center text-primary-800 hover:text-primary-600 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
        
        {/* Project Overview */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionTitle title="Overview" />
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>{project.fullDescription}</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary-800 mb-4">Project Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar size={20} className="mr-3 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">Timeline</p>
                  <p className="text-neutral-600">
                    {project.startDate} - {project.endDate || 'Present'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award size={20} className="mr-3 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">Status</p>
                  <p className="text-neutral-600 capitalize">{project.status}</p>
                </div>
              </div>
              
              {project.partners && project.partners.length > 0 && (
                <div className="flex items-start">
                  <Users size={20} className="mr-3 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-800">Partners</p>
                    <ul className="text-neutral-600">
                      {project.partners.map((partner, index) => (
                        <li key={index}>{partner}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {project.fundingSource && (
                <div className="flex items-start">
                  <FileText size={20} className="mr-3 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-800">Funding</p>
                    <p className="text-neutral-600">{project.fundingSource}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Key Findings Section (if applicable) */}
        {project.keyFindings && project.keyFindings.length > 0 && (
          <section className="mb-16">
            <SectionTitle title="Key Findings" />
            
            <div className="bg-primary-50 rounded-lg p-8">
              <ul className="space-y-4">
                {project.keyFindings.map((finding, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-400 font-bold mr-3">{index + 1}.</span>
                    <p className="text-neutral-700">{finding}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
        
        {/* Team Members Section */}
        <section className="mb-16">
          <SectionTitle title="Research Team" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTeam.map(member => (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
              />
            ))}
          </div>
        </section>
        
        {/* Related Publications Section */}
        {projectPublications.length > 0 && (
          <section className="mb-16">
            <SectionTitle title="Related Publications" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectPublications.map(publication => (
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
          </section>
        )}
        
        {/* Image Gallery (if applicable) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-16">
            <SectionTitle title="Project Gallery" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${project.title} - image ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;