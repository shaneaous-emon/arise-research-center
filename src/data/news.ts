export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;  // Short description for cards
  content: string;  // Full content for detail page
  category: 'research' | 'awards' | 'announcements' | 'press';
  date: string;
  author: string;
  image: string;
  tags: string[];
  relatedProjects?: string[];
  relatedPublications?: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-001',
    title: 'Breakthrough in Neural Text Generation Research',
    excerpt: 'Our team has achieved significant improvements in controllable text generation.',
    content: `Our research team has made a breakthrough in neural text generation technology, 
    achieving unprecedented levels of control and coherence. The new model, developed as part of 
    our NeuroGen project, shows a 47% reduction in hallucinations while maintaining creative flexibility.
    
    This advancement represents a significant step forward in making AI-generated content more reliable 
    and practical for real-world applications. The team's findings have been accepted for publication 
    in a leading AI conference.`,
    category: 'research',
    date: '2025-05-20',
    author: 'Dr. Sarah Chen',
    image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg',
    tags: ['Natural Language Processing', 'Neural Networks', 'AI Research'],
    relatedProjects: ['project-001'],
    relatedPublications: ['pub-001']
  },
  {
    id: 'news-002',
    title: 'ARISE Receives Major Grant for Climate Change AI Research',
    excerpt: 'A $2.5M grant awarded for advancing AI applications in climate science.',
    content: `The ARISE Research Center has been awarded a major grant of $2.5 million to 
    further develop AI solutions for climate change monitoring and prediction. This funding will 
    support our ongoing work in satellite imagery analysis and climate model enhancement.
    
    The grant will enable us to expand our team and accelerate the development of crucial tools 
    for environmental protection and climate action.`,
    category: 'announcements',
    date: '2025-05-15',
    author: 'Prof. Michael Thomson',
    image: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg',
    tags: ['Climate Change', 'Funding', 'Environmental AI'],
    relatedProjects: ['project-006']
  }
];

export interface EventItem {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  location: string;
  type: 'conference' | 'workshop' | 'seminar' | 'webinar' | 'hackathon';
  description: string;
  speakers?: {
    name: string;
    affiliation: string;
    topic?: string;
  }[];
  registration?: {
    required: boolean;
    deadline?: string;
    link?: string;
  };
  image: string;
  tags: string[];
}

export const eventItems: EventItem[] = [
  {
    id: 'event-001',
    title: 'International Workshop on AI for Climate Action',
    startDate: '2024-01-18',
    endDate: '2024-01-20',
    location: 'ARISE Headquarters & Virtual',
    type: 'workshop',
    description: `
      <p>Join us for the first International Workshop on AI for Climate Action, bringing together researchers, practitioners, policymakers, and industry representatives to explore the potential of artificial intelligence in addressing the climate crisis.</p>
      
      <p>This three-day event will feature keynote speeches, panel discussions, technical presentations, and interactive sessions focusing on various applications of AI in climate change mitigation, adaptation, and monitoring.</p>
      
      <h4>Key Topics:</h4>
      <ul>
        <li>AI for renewable energy optimization and grid management</li>
        <li>Climate modeling and prediction using machine learning</li>
        <li>Remote sensing and Earth observation for environmental monitoring</li>
        <li>Sustainable agriculture and food systems</li>
        <li>AI-powered solutions for reducing carbon footprints</li>
        <li>Ethical considerations and equity in climate AI applications</li>
      </ul>
      
      <p>The workshop will be available both in-person at our headquarters and virtually for remote participants. Registration is required, with early bird rates available until December 15, 2023.</p>
    `,
    speakers: [
      {
        name: 'Dr. Maya Patel',
        affiliation: 'World Meteorological Organization',
        topic: 'AI-Powered Climate Predictions: Opportunities and Challenges'
      },
      {
        name: 'Professor Carlos Nobre',
        affiliation: 'Amazon Research Institute',
        topic: 'Monitoring and Protecting Rainforests with AI'
      },
      {
        name: 'Dr. Emma Richardson',
        affiliation: 'GreenTech Solutions',
        topic: 'Industry Applications of Climate AI'
      },
      {
        name: 'Professor Kwame Osei',
        affiliation: 'African AI Initiative',
        topic: 'Climate AI for Developing Regions'
      }
    ],
    registration: {
      required: true,
      deadline: '2024-01-10',
      link: 'https://arise-research.org/climate-workshop/register'
    },
    image: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['climate change', 'workshop', 'sustainability', 'environmental monitoring']
  },
  {
    id: 'event-002',
    title: 'Accessible AI Framework Workshop for Developers',
    startDate: '2024-01-15',
    location: 'Virtual',
    type: 'webinar',
    description: `
      <p>Learn how to create AI interfaces that are accessible to people with diverse abilities and needs using ARISE's new AccessibleAI framework. This hands-on virtual workshop will guide developers through the key components and best practices for building inclusive AI systems.</p>
      
      <p>The workshop will cover:</p>
      <ul>
        <li>Introduction to accessibility challenges in AI interfaces</li>
        <li>Overview of the AccessibleAI framework</li>
        <li>Implementing accessible UI components for AI interactions</li>
        <li>Creating effective multimodal interfaces (text, speech, visual)</li>
        <li>Testing and evaluating AI accessibility</li>
        <li>Real-world case studies and examples</li>
      </ul>
      
      <p>Participants will gain hands-on experience working with the framework and will leave with the knowledge and tools to integrate accessibility into their own AI projects. The workshop is suitable for developers, designers, and product managers with basic familiarity with AI systems and interface development.</p>
      
      <p>All participants will receive a certificate of completion and ongoing access to workshop materials and code examples.</p>
    `,
    speakers: [
      {
        name: 'Dr. Michael Rodriguez',
        affiliation: 'ARISE Research Center',
        topic: 'Accessible AI Framework Overview'
      },
      {
        name: 'Dr. Emily Davis',
        affiliation: 'ARISE Research Center',
        topic: 'Multimodal Interaction Design'
      },
      {
        name: 'Alex Chen',
        affiliation: 'Accessibility Consultant',
        topic: 'Testing and User Feedback'
      }
    ],
    registration: {
      required: true,
      deadline: '2024-01-10',
      link: 'https://arise-research.org/events/accessible-ai-workshop'
    },
    image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['accessibility', 'developers', 'workshop', 'inclusive design']
  },
  {
    id: 'event-003',
    title: 'Explainable AI in Healthcare: Research Seminar',
    startDate: '2024-02-08',
    location: 'ARISE Auditorium & Virtual',
    type: 'seminar',
    description: `
      <p>Join us for a research seminar on the latest advances in explainable AI for healthcare applications. This seminar will showcase recent work from ARISE's Explainable AI for Healthcare project and feature discussions on the challenges and opportunities in making medical AI systems more transparent and trustworthy.</p>
      
      <p>The seminar will include presentations on:</p>
      <ul>
        <li>Novel visualization techniques for medical image analysis</li>
        <li>Concept-based explanations that bridge machine learning and clinical understanding</li>
        <li>Interactive systems for exploring AI reasoning in diagnosis</li>
        <li>Results from user studies with healthcare professionals</li>
        <li>Ethical considerations in medical AI explanations</li>
      </ul>
      
      <p>This event is designed for researchers, healthcare professionals, and industry partners interested in the intersection of explainable AI and healthcare. The seminar will include time for questions and discussions, offering attendees the opportunity to engage directly with researchers leading this important work.</p>
    `,
    speakers: [
      {
        name: 'Dr. James Wilson',
        affiliation: 'ARISE Research Center',
        topic: 'Concept-Based Explanations for Medical AI'
      },
      {
        name: 'Dr. Jennifer Garcia',
        affiliation: 'ARISE Research Center',
        topic: 'Visual Explanations for Medical Imaging AI'
      },
      {
        name: 'Dr. Sarah Chen',
        affiliation: 'University of California, San Francisco',
        topic: 'Clinical Perspectives on AI Explanations'
      }
    ],
    registration: {
      required: true,
      deadline: '2024-02-05',
      link: 'https://arise-research.org/events/xai-healthcare-seminar'
    },
    image: 'https://images.pexels.com/photos/8376263/pexels-photo-8376263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['healthcare', 'explainable ai', 'medical imaging', 'research']
  },
  {
    id: 'event-004',
    title: 'AI for Creative Collaboration Hackathon',
    startDate: '2024-03-15',
    endDate: '2024-03-17',
    location: 'ARISE Innovation Lab',
    type: 'hackathon',
    description: `
      <p>Calling all developers, designers, artists, and creative thinkers! Join us for a weekend-long hackathon exploring the frontier of human-AI creative collaboration. This hands-on event will challenge participants to build innovative tools that leverage AI to enhance human creativity while maintaining user agency and control.</p>
      
      <p>Participants will form interdisciplinary teams to develop prototypes addressing one of several creative challenges:</p>
      <ul>
        <li>Collaborative writing tools that suggest and refine ideas</li>
        <li>Visual art creation systems that complement human aesthetic judgment</li>
        <li>Music composition assistants that inspire without overwhelming</li>
        <li>Design tools that expand creative possibilities while preserving authorial intent</li>
        <li>Accessibility-focused creative tools for diverse users</li>
      </ul>
      
      <p>ARISE researchers will provide mentorship throughout the event, and teams will have access to state-of-the-art AI models and tools. The hackathon will conclude with project presentations and awards for most innovative concept, best technical implementation, and greatest potential impact.</p>
      
      <p>No prior AI experience is required, but basic programming knowledge is recommended. We particularly encourage participation from creative professionals interested in exploring AI as a collaborative tool.</p>
    `,
    speakers: [
      {
        name: 'Dr. Olivia Taylor',
        affiliation: 'ARISE Research Center',
        topic: 'Human-AI Co-Creation: Principles and Possibilities'
      },
      {
        name: 'Dr. Emily Davis',
        affiliation: 'ARISE Research Center',
        topic: 'Tools and Techniques for Creative AI'
      },
      {
        name: 'Marcus Chen',
        affiliation: 'ARISE Research Center',
        topic: 'Natural Language Models for Creative Applications'
      }
    ],
    registration: {
      required: true,
      deadline: '2024-03-01',
      link: 'https://arise-research.org/hackathon'
    },
    image: 'https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['hackathon', 'creativity', 'collaboration', 'design']
  },
  {
    id: 'event-005',
    title: 'Natural Language Processing Research Symposium',
    startDate: '2024-04-22',
    endDate: '2024-04-23',
    location: 'ARISE Conference Center & Virtual',
    type: 'conference',
    description: `
      <p>ARISE Research Center is hosting a two-day symposium showcasing cutting-edge research in Natural Language Processing. This event will bring together researchers, industry practitioners, and students to explore recent advances and future directions in NLP.</p>
      
      <p>The symposium will feature:</p>
      <ul>
        <li>Keynote presentations from leading NLP researchers</li>
        <li>Technical paper presentations highlighting recent breakthroughs</li>
        <li>Panel discussions on important challenges and opportunities</li>
        <li>Poster sessions for students and early-career researchers</li>
        <li>Demonstrations of novel NLP applications</li>
      </ul>
      
      <p>Key topics will include multilingual NLP, large language models, conversational AI, NLP for educational applications, and responsible development practices. The symposium will highlight work from ARISE's Natural Language Processing and MultiLingual Understanding Framework projects, as well as contributions from the broader research community.</p>
      
      <p>The event is designed to foster collaboration and knowledge exchange across academia, industry, and public sector organizations working with language technologies. Graduate students and early-career researchers are particularly encouraged to attend and present their work.</p>
    `,
    speakers: [
      {
        name: 'Dr. Marcus Chen',
        affiliation: 'ARISE Research Center',
        topic: 'Opening Keynote: The Future of Multilingual NLP'
      },
      {
        name: 'Dr. Sophia Martinez',
        affiliation: 'ARISE Research Center',
        topic: 'Advances in Controllable Text Generation'
      },
      {
        name: 'Dr. David Kim',
        affiliation: 'ARISE Research Center',
        topic: 'Cross-Lingual Transfer Learning'
      },
      {
        name: 'Dr. Emily Bender',
        affiliation: 'University of Washington',
        topic: 'Guest Keynote: Language Models and Linguistic Understanding'
      }
    ],
    registration: {
      required: true,
      deadline: '2024-04-15',
      link: 'https://arise-research.org/nlp-symposium'
    },
    image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['nlp', 'conference', 'research', 'language models']
  },
  {
    id: 'event-006',
    title: 'AI Ethics and Governance Workshop',
    startDate: '2024-05-10',
    location: 'Virtual',
    type: 'workshop',
    description: `
      <p>Join us for a virtual workshop exploring the critical issues of AI ethics and governance. This interactive event will bring together experts from technology, policy, law, and social science to discuss frameworks for responsible AI development and deployment.</p>
      
      <p>The workshop will address key questions including:</p>
      <ul>
        <li>How can we ensure AI systems are fair, transparent, and accountable?</li>
        <li>What governance structures are needed at organizational, national, and international levels?</li>
        <li>How should we approach the ethical challenges of advanced AI systems?</li>
        <li>What role should different stakeholders play in AI governance?</li>
        <li>How can technical safeguards complement policy approaches?</li>
      </ul>
      
      <p>Through a combination of presentations, panel discussions, and breakout sessions, participants will explore both theoretical frameworks and practical approaches to responsible AI. The workshop will emphasize actionable insights that can be applied in research, development, and policy contexts.</p>
      
      <p>This event is suitable for researchers, industry practitioners, policymakers, and students interested in the ethical and governance dimensions of artificial intelligence. Participants will have opportunities to contribute to discussions and network with others working on these important challenges.</p>
    `,
    speakers: [
      {
        name: 'Dr. Eleanor Matthews',
        affiliation: 'ARISE Research Center',
        topic: 'Opening Remarks: The Importance of Responsible AI'
      },
      {
        name: 'Professor James Wilson',
        affiliation: 'Georgetown University & ARISE Advisor',
        topic: 'Ethical Frameworks for AI Development'
      },
      {
        name: 'Professor Maria Schmidt',
        affiliation: 'EU AI Ethics Committee & ARISE International Advisor',
        topic: 'International Governance Approaches'
      },
      {
        name: 'Dr. Michael Rodriguez',
        affiliation: 'ARISE Research Center',
        topic: 'Inclusive AI Design as an Ethical Imperative'
      }
    ],
    registration: {
      required: true,
      deadline: '2024-05-05',
      link: 'https://arise-research.org/events/ai-ethics-workshop'
    },
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['ethics', 'governance', 'policy', 'responsible ai']
  }
];