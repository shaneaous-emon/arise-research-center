import React from 'react';
import { Briefcase, GraduationCap, Users, Heart } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import { LinkButton } from '../components/common/Button';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior Research Scientist - Natural Language Processing',
      type: 'Full-time',
      location: 'On-site',
      description: 'Lead research initiatives in advanced NLP applications...'
    },
    {
      title: 'Research Engineer - Computer Vision',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'Develop and implement state-of-the-art computer vision algorithms...'
    },
    {
      title: 'PhD Researcher - Explainable AI',
      type: 'Full-time',
      location: 'On-site',
      description: 'Conduct research in making AI systems more interpretable...'
    },
    {
      title: 'Research Assistant - AI Ethics',
      type: 'Part-time',
      location: 'Remote',
      description: 'Support research projects focused on ethical AI development...'
    }
  ];

  return (
    <div>
      <PageHero
        title="Join Our Team"
        subtitle="Shape the future of AI with groundbreaking research and innovation."
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Join ARISE"
            subtitle="Be part of a team that's shaping the future of AI"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Cutting-edge Research</h3>
              <p className="text-neutral-600">
                Work on groundbreaking AI projects that push the boundaries of innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Learning & Growth</h3>
              <p className="text-neutral-600">
                Continuous learning opportunities and professional development support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Collaborative Culture</h3>
              <p className="text-neutral-600">
                Work with diverse, talented teams in an inclusive environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Great Benefits</h3>
              <p className="text-neutral-600">
                Competitive compensation and comprehensive benefits package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Open Positions"
            subtitle="Current opportunities to join our team"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{position.title}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="text-sm px-3 py-1 bg-primary-50 text-primary-800 rounded-full">
                    {position.type}
                  </span>
                  <span className="text-sm px-3 py-1 bg-accent-50 text-accent-700 rounded-full">
                    {position.location}
                  </span>
                </div>
                <p className="text-neutral-600 mb-6">{position.description}</p>
                <LinkButton to="/contact" variant="outline" size="sm">
                  Apply Now
                </LinkButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Student Opportunities"
            subtitle="Launch your research career with ARISE"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">PhD Programs</h3>
              <ul className="space-y-3 text-neutral-600 mb-6">
                <li>• Fully funded positions</li>
                <li>• Expert supervision</li>
                <li>• State-of-the-art facilities</li>
                <li>• Conference funding</li>
              </ul>
              <LinkButton to="/contact" variant="outline" size="sm">
                Learn More
              </LinkButton>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Masters Research</h3>
              <ul className="space-y-3 text-neutral-600 mb-6">
                <li>• Research assistantships</li>
                <li>• Project collaboration</li>
                <li>• Industry exposure</li>
                <li>• Publication opportunities</li>
              </ul>
              <LinkButton to="/contact" variant="outline" size="sm">
                Learn More
              </LinkButton>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Internships</h3>
              <ul className="space-y-3 text-neutral-600 mb-6">
                <li>• Summer programs</li>
                <li>• Research experience</li>
                <li>• Mentorship</li>
                <li>• Networking opportunities</li>
              </ul>
              <LinkButton to="/contact" variant="outline" size="sm">
                Learn More
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Application Process"
            subtitle="Your journey to joining ARISE"
            centered
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative pl-8 pb-12 border-l-2 border-primary-200">
              <div className="absolute w-4 h-4 bg-primary-800 rounded-full -left-[9px]"></div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">1. Application Submission</h3>
                <p className="text-neutral-600">
                  Submit your CV, research statement, and relevant documents through our online portal.
                </p>
              </div>
            </div>

            <div className="relative pl-8 pb-12 border-l-2 border-primary-200">
              <div className="absolute w-4 h-4 bg-primary-800 rounded-full -left-[9px]"></div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">2. Initial Review</h3>
                <p className="text-neutral-600">
                  Our team reviews applications and shortlists candidates based on qualifications and experience.
                </p>
              </div>
            </div>

            <div className="relative pl-8 pb-12  border-l-2 border-primary-200">
              <div className="absolute w-4 h-4 bg-primary-800 rounded-full -left-[9px]"></div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">3. Interviews</h3>
                <p className="text-neutral-600">
                  Selected candidates participate in technical interviews and research presentations.
                </p>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-primary-800 rounded-full -left-[9px]"></div>
              <div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">4. Final Decision</h3>
                <p className="text-neutral-600">
                  Successful candidates receive offer letters and onboarding information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join our team and help shape the future of artificial intelligence.
          </p>
          <LinkButton to="/contact" variant="primary" size="lg">
            Apply Now
          </LinkButton>
        </div>
      </section>
    </div>
  );
};

export default Careers;