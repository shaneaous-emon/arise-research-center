import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Github } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold">ARISE</span>
            </div>
            <p className="text-neutral-100 mb-6">
              Advancing Research in Intelligent Systems & Engineering. Pioneering the future of AI through cutting-edge research, collaboration, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-100 hover:text-accent-300 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-100 hover:text-accent-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-neutral-100 hover:text-accent-300 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-100 hover:text-accent-300 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-100 hover:text-accent-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-100 hover:text-accent-300 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/publications" className="text-neutral-100 hover:text-accent-300 transition-colors">Publications</Link>
              </li>
              <li>
                <Link to="/people" className="text-neutral-100 hover:text-accent-300 transition-colors">People</Link>
              </li>
              <li>
                <Link to="/news" className="text-neutral-100 hover:text-accent-300 transition-colors">News</Link>
              </li>
              <li>
                <Link to="/events" className="text-neutral-100 hover:text-accent-300 transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-100 hover:text-accent-300 transition-colors">Join Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Research Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Research Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/research/generative-ai" className="text-neutral-100 hover:text-accent-300 transition-colors">Generative AI</Link>
              </li>
              <li>
                <Link to="/research/explainable-ai" className="text-neutral-100 hover:text-accent-300 transition-colors">Explainable AI (XAI)</Link>
              </li>
              <li>
                <Link to="/research/natural-language-processing" className="text-neutral-100 hover:text-accent-300 transition-colors">Natural Language Processing</Link>
              </li>
              <li>
                <Link to="/research/human-ai-interaction" className="text-neutral-100 hover:text-accent-300 transition-colors">Human-AI Interaction</Link>
              </li>
              <li>
                <Link to="/research/computer-vision" className="text-neutral-100 hover:text-accent-300 transition-colors">Computer Vision</Link>
              </li>
              <li>
                <Link to="/research/ai-for-social-good" className="text-neutral-100 hover:text-accent-300 transition-colors">AI for Social Good</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-2 flex-shrink-0 text-accent-300" />
                <span className="text-neutral-100">123 AI Innovation Boulevard, Tech City, TC 12345</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-2 flex-shrink-0 text-accent-300" />
                <span className="text-neutral-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-2 flex-shrink-0 text-accent-300" />
                <a href="mailto:info@arise-research.org" className="text-neutral-100 hover:text-accent-300 transition-colors">info@arise-research.org</a>
              </li>
            </ul>
            <Link to="/contact" className="inline-block mt-4 px-4 py-2 bg-accent-300 text-primary-800 font-medium rounded hover:bg-accent-400 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-100 text-sm mb-4 md:mb-0">
              &copy; {currentYear} ARISE Research Center. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-neutral-100 hover:text-accent-300 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-neutral-100 hover:text-accent-300 transition-colors text-sm">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;