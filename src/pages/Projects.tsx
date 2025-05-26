import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/home/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredProjects = projects.filter(project => {
    const matchesArea = selectedArea === 'all' || project.researchAreas.includes(selectedArea);
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    return matchesArea && matchesStatus;
  });

  const featuredProjects = projects.filter(project => project.status === 'ongoing').slice(0, 3);

  return (
    <div>
      <PageHero
        title="Our Projects"
        subtitle="Exploring the frontiers of AI through innovative research initiatives."
        backgroundImage="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Projects"
            subtitle="Highlighting our most impactful research initiatives"
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
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Research Areas</option>
              <option value="generative-ai">Generative AI</option>
              <option value="explainable-ai">Explainable AI</option>
              <option value="natural-language-processing">Natural Language Processing</option>
              <option value="computer-vision">Computer Vision</option>
              <option value="human-ai-interaction">Human-AI Interaction</option>
              <option value="ai-for-social-good">AI for Social Good</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Status</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;