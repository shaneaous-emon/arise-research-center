import React from 'react';
import { Brain, FlaskConical, Sparkles, Users, Target, Lightbulb } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import { LinkButton } from '../components/common/Button';
import StatCard from '../components/home/StatCard';

const About: React.FC = () => {
  return (
    <div>
      <PageHero
        title="About ARISE"
        subtitle="Pioneering the future of AI through cutting-edge research, collaboration, and innovation."
        backgroundImage="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Mission & Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-600 mb-6">
                ARISE is dedicated to advancing the frontiers of Artificial Intelligence through rigorous research, 
                interdisciplinary collaboration, and the development of ethical and impactful AI solutions for 
                global challenges.
              </p>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Vision</h2>
              <p className="text-lg text-neutral-600">
                To be a globally recognized leader in AI research, shaping a future where intelligent systems 
                empower humanity and drive positive societal transformation.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ARISE Research Lab"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-800/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Driven by AI and Human */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Driven by AI and Human Ingenuity"
            subtitle="We combine cutting-edge artificial intelligence with human expertise to solve complex challenges."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Advanced AI Research</h3>
              <p className="text-neutral-600">
                Developing state-of-the-art AI systems that push the boundaries of what's possible in machine learning 
                and artificial intelligence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Human-Centered Design</h3>
              <p className="text-neutral-600">
                Creating AI solutions that enhance human capabilities while maintaining user agency and ethical 
                considerations at the forefront.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Innovation Impact</h3>
              <p className="text-neutral-600">
                Translating research into real-world applications that drive meaningful change and societal progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our research and innovation."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Excellence</h3>
              <p className="text-neutral-600">
                Pursuing the highest standards in research and innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="w-10 h-10 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Innovation</h3>
              <p className="text-neutral-600">
                Breaking new ground in AI research and applications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Impact</h3>
              <p className="text-neutral-600">
                Creating solutions that make a real difference in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Journey"
            subtitle="Key milestones in our pursuit of AI excellence."
            centered
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative pl-8 pb-12 border-l-2 border-primary-200">
              <div className="absolute w-4 h-4 bg-primary-800 rounded-full -left-[9px]"></div>
              <div className="mb-8">
                <span className="text-sm text-neutral-500">2023</span>
                <h3 className="text-xl font-semibold text-primary-800 mt-1 mb-2">ARISE Research Center Founded</h3>
                <p className="text-neutral-600">
                  Established with a mission to advance AI research and innovation.
                </p>
              </div>
            </div>

            <div className="relative pl-8 pb-12 border-l-2 border-primary-200">
              <div className="absolute w-4 h-4 bg-primary-800 rounded-full -left-[9px]"></div>
              <div className="mb-8">
                <span className="text-sm text-neutral-500">2023</span>
                <h3 className="text-xl font-semibold text-primary-800 mt-1 mb-2">First Major Research Grant</h3>
                <p className="text-neutral-600">
                  Secured significant funding for explainable AI research in healthcare.
                </p>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-primary-800 rounded-full -left-[9px]"></div>
              <div>
                <span className="text-sm text-neutral-500">2024</span>
                <h3 className="text-xl font-semibold text-primary-800 mt-1 mb-2">International Partnerships</h3>
                <p className="text-neutral-600">
                  Established collaborations with leading research institutions worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Join Our Mission</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            Be part of groundbreaking research and innovation in artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton to="/careers" variant="primary" size="lg">
              View Opportunities
            </LinkButton>
            <LinkButton to="/contact" variant="outline" size="lg">
              Get in Touch
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;