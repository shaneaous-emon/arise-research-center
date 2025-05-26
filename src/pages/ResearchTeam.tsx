import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import TeamMemberCard from '../components/home/TeamMemberCard';
import { teamMembers } from '../data/team';
import { Users, Brain, FileCode, GraduationCap, Book, Award } from 'lucide-react';
import { LinkButton } from '../components/common/Button';

const ResearchTeam: React.FC = () => {
  const [showAlumni, setShowAlumni] = useState(false);

  // Filter team members by type
  const director = teamMembers.find(m => m.type === 'director');
  const deputyDirector = teamMembers.find(m => m.type === 'deputy-director');
  const seniorResearchers = teamMembers.filter(m => m.type === 'senior-researcher');
  const researchers = teamMembers.filter(m => m.type === 'researcher');
  const phdStudents = teamMembers.filter(m => m.type === 'phd-student');
  const mastersStudents = teamMembers.filter(m => m.type === 'masters-student');
  const undergrads = teamMembers.filter(m => m.type === 'undergraduate');
  const alumni = teamMembers.filter(m => m.type === 'alumni');

  const currentStudents = [...phdStudents, ...mastersStudents, ...undergrads];
  const activeMembers = [
    ...(director ? [director] : []),
    ...(deputyDirector ? [deputyDirector] : []),
    ...seniorResearchers,
    ...researchers,
    ...currentStudents
  ];

  return (
    <div>
      <PageHero
        title="Our Research Team"
        subtitle="Meet the innovative minds driving AI research at ARISE"
        backgroundImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white">
            <Brain size={20} />
            <span>{activeMembers.length} Active Members</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white">
            <Users size={20} />
            <span>{seniorResearchers.length} Senior Researchers</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white">
            <FileCode size={20} />
            <span>{researchers.length} Researchers</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white">
            <GraduationCap size={20} />
            <span>{currentStudents.length} Current Students</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white">
            <Award size={20} />
            <span>{alumni.length} Alumni</span>
          </div>
        </div>
      </PageHero>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Leadership"
            subtitle="Guiding our research vision and strategy"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {director && (
              <TeamMemberCard
                key={director.id}
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
                key={deputyDirector.id}
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

      {/* Senior Research Team */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Senior Research Team"
            subtitle="Leading our key research initiatives"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {seniorResearchers.map(member => (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                bio={member.bio}
                isDetailed
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
            subtitle="Driving innovation through cutting-edge research"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {researchers.map(member => (
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

      {/* Current Students */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Current Students"
            subtitle="The next generation of AI researchers"
            centered
          />
          
          {phdStudents.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold text-primary-800 mt-12 mb-6">PhD Candidates</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {phdStudents.map(member => (
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
            </>
          )}
          
          {mastersStudents.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold text-primary-800 mt-12 mb-6">Master's Students</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mastersStudents.map(member => (
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
            </>
          )}
          
          {undergrads.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold text-primary-800 mt-12 mb-6">Undergraduate Researchers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {undergrads.map(member => (
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
            </>
          )}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Alumni"
            subtitle="Former team members who have contributed to our success"
            centered
          />
          
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAlumni(!showAlumni)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              {showAlumni ? 'Hide Alumni' : 'Show Alumni'}
              <Book size={20} />
            </button>
          </div>
          
          {showAlumni && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {alumni.map(member => (
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
          )}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Research Team</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            We're always looking for talented researchers and students who are passionate about advancing AI technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton to="/careers" variant="primary" size="lg">
              View Open Positions
            </LinkButton>
            <LinkButton to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Us
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchTeam;
