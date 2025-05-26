import React from 'react';
import { Users, Building2, GraduationCap, Globe } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import { LinkButton } from '../components/common/Button';

const Collaborations: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Collaborations"
        subtitle="Partner with us to drive innovation and create impact through AI research."
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Why Collaborate */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Collaborate with ARISE"
            subtitle="Join us in shaping the future of artificial intelligence"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Expert Team</h3>
              <p className="text-neutral-600">
                Work with world-class researchers and innovators in AI.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">State-of-the-Art Facilities</h3>
              <p className="text-neutral-600">
                Access cutting-edge research infrastructure and resources.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Knowledge Exchange</h3>
              <p className="text-neutral-600">
                Benefit from mutual learning and expertise sharing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Global Network</h3>
              <p className="text-neutral-600">
                Connect with international partners and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Types of Collaboration"
            subtitle="Explore different ways to partner with ARISE"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Research Partnerships</h3>
              <ul className="space-y-3 text-neutral-600 mb-6">
                <li>• Joint research projects</li>
                <li>• Data sharing initiatives</li>
                <li>• Co-authored publications</li>
                <li>• Research staff exchange</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Industry Collaboration</h3>
              <ul className="space-y-3 text-neutral-600 mb-6">
                <li>• Technology transfer</li>
                <li>• Sponsored research</li>
                <li>• Consulting services</li>
                <li>• Industry workshops</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Academic Partnerships</h3>
              <ul className="space-y-3 text-neutral-600 mb-6">
                <li>• Student exchange programs</li>
                <li>• Joint supervision</li>
                <li>• Collaborative grants</li>
                <li>• Shared facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Partners"
            subtitle="Organizations we're proud to work with"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {/* Partner logos would go here */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-neutral-50 h-32 rounded-lg flex items-center justify-center">
                <span className="text-neutral-400">Partner Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Partnering with Us?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how we can work together to advance AI research and create meaningful impact.
          </p>
          <LinkButton to="/contact" variant="primary" size="lg">
            Get in Touch
          </LinkButton>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;