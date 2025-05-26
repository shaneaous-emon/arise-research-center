import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import TeamMemberCard from '../components/home/TeamMemberCard';
import { teamMembers } from '../data/team';

const People: React.FC = () => {
  // Filter team members by role
  const director = teamMembers.find(member => member.id === 'director');
  const deputyDirector = teamMembers.find(member => member.id === 'deputy-director');
  const seniorResearchers = teamMembers.filter(member => member.role === 'senior-researcher');
  const researchers = teamMembers.filter(member => member.role === 'researcher');
  const currentStudents = teamMembers.filter(member => member.role === 'student' && !member.isAlumni);
  const alumni = teamMembers.filter(member => member.isAlumni);

  return (
    <div>
      <PageHero
        title="Our Team"
        subtitle="Meet the innovative minds driving AI research and development at ARISE."
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Leadership"
            subtitle="Guiding ARISE's vision and research direction"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {director && (
              <TeamMemberCard
                id={director.id}
                name={director.name}
                title={director.title}
                image={director.image}
                bio={director.bio}
                isDetailed
              />
            )}
            {deputyDirector && (
              <TeamMemberCard
                id={deputyDirector.id}
                name={deputyDirector.name}
                title={deputyDirector.title}
                image={deputyDirector.image}
                bio={deputyDirector.bio}
                isDetailed
              />
            )}
          </div>
        </div>
      </section>

      {/* Senior Researchers */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Senior Research Team"
            subtitle="Leading our core research initiatives"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seniorResearchers.map(member => (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Research Team"
            subtitle="Driving innovation through collaborative research"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {researchers.map(member => (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Current Students */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Current Students"
            subtitle="The next generation of AI researchers"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentStudents.map(member => (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Alumni"
            subtitle="Former team members who have contributed to our success"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {alumni.map(member => (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            We're always looking for talented researchers and students to join our mission of advancing AI research.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/careers"
              className="px-8 py-3 bg-accent-300 text-primary-800 font-medium rounded-lg hover:bg-accent-400 transition-colors"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;