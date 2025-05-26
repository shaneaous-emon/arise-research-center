import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Users, School, Award, Briefcase, Brain, FileText, Github, ExternalLink } from 'lucide-react';
import { teamMembers } from '../data/team';
import { publications } from '../data/publications';
import { projects } from '../data/projects';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';

const TeamMember: React.FC = () => {
  const { id } = useParams();

  // Find the team member by their ID
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-primary-800 mb-4">Profile Not Found</h1>
        <p className="text-neutral-600 mb-8">The team member you're looking for doesn't exist or has moved.</p>
        <Link
          to="/people"
          className="inline-block px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          View All Team Members
        </Link>
      </div>
    );
  }

  // Get member's publications and projects
  const memberPublications = member.publications
    ? publications.filter(pub => member.publications.includes(pub.id))
    : [];

  const memberProjects = member.projects
    ? projects.filter(proj => member.projects.includes(proj.id))
    : [];

  const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-neutral-600 hover:text-primary-800 transition-colors"
      aria-label={label}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </a>
  );

  return (
    <div>
      <PageHero
        title={member.name}
        subtitle={member.title}
        backgroundImage="https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Profile Overview */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Image and Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-card overflow-hidden mb-8">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary-800 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary-800 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-neutral-800">Email</p>
                      <a href={`mailto:${member.email}`} className="text-neutral-600 hover:text-primary-800">
                        {member.email}
                      </a>
                    </div>
                  </div>
                  {member.phone && (
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-primary-800 mt-1 mr-3" />
                      <div>
                        <p className="font-medium text-neutral-800">Phone</p>
                        <a href={`tel:${member.phone}`} className="text-neutral-600 hover:text-primary-800">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {member.socialLinks && (
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <h2 className="text-xl font-semibold text-primary-800 mb-4">Connect</h2>
                    <div className="space-y-3">
                      {member.socialLinks.linkedin && (
                        <SocialLink
                          href={member.socialLinks.linkedin}
                          icon={<Users className="w-5 h-5" />}
                          label="LinkedIn"
                        />
                      )}
                      {member.socialLinks.twitter && (
                        <SocialLink
                          href={member.socialLinks.twitter}
                          icon={<ExternalLink className="w-5 h-5" />}
                          label="Twitter"
                        />
                      )}
                      {member.socialLinks.googleScholar && (
                        <SocialLink
                          href={member.socialLinks.googleScholar}
                          icon={<School className="w-5 h-5" />}
                          label="Google Scholar"
                        />
                      )}
                      {member.socialLinks.github && (
                        <SocialLink
                          href={member.socialLinks.github}
                          icon={<Github className="w-5 h-5" />}
                          label="GitHub"
                        />
                      )}
                      {member.socialLinks.website && (
                        <SocialLink
                          href={member.socialLinks.website}
                          icon={<ExternalLink className="w-5 h-5" />}
                          label="Personal Website"
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Bio and Details */}
          <div className="lg:col-span-2">
            {/* Biography */}
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Biography</h2>
              <p className="text-neutral-700">{member.bio}</p>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Education</h2>
              <div className="space-y-4">
                {member.education.map((edu, index) => (
                  <div key={index} className="flex items-start">
                    <School className="w-5 h-5 text-primary-800 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-neutral-800">{edu.degree} in {edu.field}</p>
                      <p className="text-neutral-600">{edu.institution}, {edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Experience</h2>
              <div className="space-y-6">
                {member.experience.map((exp, index) => (
                  <div key={index} className="flex items-start">
                    <Briefcase className="w-5 h-5 text-primary-800 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-neutral-800">{exp.position}</p>
                      <p className="text-accent-600">{exp.company}</p>
                      <p className="text-sm text-neutral-500 mb-1">{exp.duration}</p>
                      <p className="text-neutral-600">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Interests */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Research Interests</h2>
              <div className="flex flex-wrap gap-2">
                {member.researchInterests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Honors */}
        {member.awards && member.awards.length > 0 && (
          <section className="mb-16">
            <SectionTitle title="Awards & Honors" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {member.awards.map((award, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-card">
                  <Award className="w-8 h-8 text-accent-600 mb-4" />
                  <h3 className="font-semibold text-primary-800 mb-2">{award.title}</h3>
                  <p className="text-neutral-600">{award.organization}</p>
                  <p className="text-sm text-neutral-500">{award.year}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Publications */}
        {memberPublications.length > 0 && (
          <section className="mb-16">
            <SectionTitle title="Selected Publications" />
            <div className="space-y-6">
              {memberPublications.slice(0, 5).map((pub, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-card">
                  <div className="flex items-start">
                    <FileText className="w-6 h-6 text-primary-800 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary-800 mb-2">{pub.title}</h3>
                      <p className="text-neutral-600 mb-2">{pub.authors.join(', ')}</p>
                      <p className="text-sm text-neutral-500">
                        {pub.journal}, {pub.year}
                      </p>
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-primary-800 hover:text-primary-600"
                        >
                          View Publication
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Research Projects */}
        {memberProjects.length > 0 && (
          <section className="mb-16">
            <SectionTitle title="Research Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memberProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-card overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-primary-800 mb-2">{project.title}</h3>
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {project.shortDescription}
                    </p>
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-primary-800 hover:text-primary-600 font-medium"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
