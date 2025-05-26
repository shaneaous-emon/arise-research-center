import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [researchDropdown, setResearchDropdown] = useState(false);
  const [peopleDropdown, setPeopleDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-primary-800 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center" onClick={closeNav}>
            <Logo className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold text-white">ARISE</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={toggleNav}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
            >
              About
            </NavLink>
            
            {/* Research Areas Dropdown */}
            <div className="relative" onMouseEnter={() => setResearchDropdown(true)} onMouseLeave={() => setResearchDropdown(false)}>
              <button className="flex items-center px-3 py-2 text-sm font-medium text-neutral-100 hover:text-white transition-colors rounded">
                Research Areas <ChevronDown size={16} className="ml-1" />
              </button>
              {researchDropdown && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50 animate-fade-in">
                  <Link to="/research/generative-ai" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary-50 hover:text-primary-800" onClick={closeNav}>Generative AI</Link>
                  <Link to="/research/explainable-ai" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary-50 hover:text-primary-800" onClick={closeNav}>Explainable AI (XAI)</Link>
                  <Link to="/research/natural-language-processing" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary-50 hover:text-primary-800" onClick={closeNav}>Natural Language Processing</Link>
                  <Link to="/research/human-ai-interaction" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary-50 hover:text-primary-800" onClick={closeNav}>Human-AI Interaction</Link>
                  <Link to="/research/computer-vision" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary-50 hover:text-primary-800" onClick={closeNav}>Computer Vision</Link>
                  <Link to="/research/ai-for-social-good" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary-50 hover:text-primary-800" onClick={closeNav}>AI for Social Good</Link>
                </div>
              )}
            </div>
            
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/publications"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
            >
              Publications
            </NavLink>
            
            {/* People Dropdown */}
            <div className="relative" onMouseEnter={() => setPeopleDropdown(true)} onMouseLeave={() => setPeopleDropdown(false)}>
              <button className="flex items-center px-3 py-2 text-sm font-medium text-neutral-100 hover:text-white transition-colors rounded">
                People <ChevronDown size={16} className="ml-1" />
              </button>
              {peopleDropdown && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50 animate-fade-in">
                  <Link to="/people" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary-50 hover:text-primary-800" onClick={closeNav}>All People</Link>
                  <Link to="/people/advisory-board" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary-50 hover:text-primary-800" onClick={closeNav}>Advisory Board</Link>
                  <Link to="/people/research-team" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary-50 hover:text-primary-800" onClick={closeNav}>Research Team</Link>
                </div>
              )}
            </div>
            
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
            >
              News
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/collaborations"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
            >
              Collaborations
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
            >
              Careers
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-primary-800 shadow-lg animate-fade-in h-[calc(100vh-72px)] overflow-auto z-50">
          <div className="px-4 py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium border-b border-primary-700 ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
              onClick={closeNav}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium border-b border-primary-700 ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
              onClick={closeNav}
            >
              About
            </NavLink>
            
            {/* Research Areas Section */}
            <div className="border-b border-primary-700">
              <button 
                className="flex items-center justify-between w-full px-3 py-4 text-base font-medium text-neutral-100"
                onClick={() => setResearchDropdown(!researchDropdown)}
              >
                Research Areas
                <ChevronDown size={16} className={`transition-transform ${researchDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {researchDropdown && (
                <div className="bg-primary-700 py-2 animate-fade-in">
                  <Link to="/research/generative-ai" className="block px-6 py-3 text-sm text-neutral-100 hover:text-white" onClick={closeNav}>Generative AI</Link>
                  <Link to="/research/explainable-ai" className="block px-6 py-3 text-sm text-neutral-100 hover:text-white" onClick={closeNav}>Explainable AI (XAI)</Link>
                  <Link to="/research/natural-language-processing" className="block px-6 py-3 text-sm text-neutral-100 hover:text-white" onClick={closeNav}>Natural Language Processing</Link>
                  <Link to="/research/human-ai-interaction" className="block px-6 py-3 text-sm text-neutral-100 hover:text-white" onClick={closeNav}>Human-AI Interaction</Link>
                  <Link to="/research/computer-vision" className="block px-6 py-3 text-sm text-neutral-100 hover:text-white" onClick={closeNav}>Computer Vision</Link>
                  <Link to="/research/ai-for-social-good" className="block px-6 py-3 text-sm text-neutral-100 hover:text-white" onClick={closeNav}>AI for Social Good</Link>
                </div>
              )}
            </div>
            
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium border-b border-primary-700 ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
              onClick={closeNav}
            >
              Projects
            </NavLink>
            <NavLink
              to="/publications"
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium border-b border-primary-700 ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
              onClick={closeNav}
            >
              Publications
            </NavLink>
            
            {/* People Section */}
            <div className="border-b border-primary-700">
              <button 
                className="flex items-center justify-between w-full px-3 py-4 text-base font-medium text-neutral-100"
                onClick={() => setPeopleDropdown(!peopleDropdown)}
              >
                People
                <ChevronDown size={16} className={`transition-transform ${peopleDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {peopleDropdown && (
                <div className="bg-primary-700 py-2 animate-fade-in">
                  <Link to="/people" className="block px-6 py-3 text-sm text-neutral-100 hover:text-white" onClick={closeNav}>All People</Link>
                  <Link to="/people/advisory-board" className="block px-6 py-3 text-sm text-neutral-100 hover:text-white" onClick={closeNav}>Advisory Board</Link>
                  <Link to="/people/research-team" className="block px-6 py-3 text-sm text-neutral-100 hover:text-white" onClick={closeNav}>Research Team</Link>
                </div>
              )}
            </div>
            
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium border-b border-primary-700 ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
              onClick={closeNav}
            >
              News
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium border-b border-primary-700 ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
              onClick={closeNav}
            >
              Events
            </NavLink>
            <NavLink
              to="/collaborations"
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium border-b border-primary-700 ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
              onClick={closeNav}
            >
              Collaborations
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium border-b border-primary-700 ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
              onClick={closeNav}
            >
              Careers
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium ${
                  isActive ? 'text-white' : 'text-neutral-100'
                }`
              }
              onClick={closeNav}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;