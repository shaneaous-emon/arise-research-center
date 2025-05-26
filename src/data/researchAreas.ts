export interface ResearchArea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  challenges: string[];
  approaches: string[];
  applications: string[];
  keyResearchers: string[];
  relatedProjects: string[];
  relatedPublications: string[];
  image: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'generative-ai',
    title: 'Generative AI',
    shortDescription: 'Developing AI systems that can create new content, from text and images to music and code, pushing the boundaries of machine creativity.',
    fullDescription: 'Generative AI represents a revolutionary shift in artificial intelligence capabilities, enabling machines to create original content across multiple domains. Our research explores foundation models, diffusion techniques, and novel architectures that enhance the creative capabilities of AI systems while ensuring ethical use and mitigating biases.',
    challenges: [
      'Improving coherence and relevance in long-form generation',
      'Mitigating biases and ensuring ethical content generation',
      'Reducing computational resources required for training and inference',
      'Enhancing controllability and alignment with human intent',
      'Developing robust evaluation metrics for generated content'
    ],
    approaches: [
      'Advanced large language models and multimodal foundation models',
      'Reinforcement learning from human feedback (RLHF)',
      'Diffusion models for high-quality image and video generation',
      'Structured and controllable generation techniques',
      'Efficient architectures for resource-constrained environments'
    ],
    applications: [
      'Creative content generation for arts and media',
      'Scientific discovery and hypothesis generation',
      'Personalized education and content creation',
      'Synthetic data generation for training robust models',
      'Human-AI co-creation tools for various domains'
    ],
    keyResearchers: ['researcher-001', 'researcher-003', 'researcher-007', 'researcher-010'],
    relatedProjects: ['project-001', 'project-004', 'project-008'],
    relatedPublications: ['pub-001', 'pub-003', 'pub-007', 'pub-012'],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'explainable-ai',
    title: 'Explainable AI (XAI)',
    shortDescription: 'Creating transparent AI systems that can explain their decisions, enabling trust and verification in critical applications.',
    fullDescription: 'Explainable AI (XAI) focuses on developing methods that enable humans to understand, appropriately trust, and effectively manage artificial intelligence systems. Our research aims to demystify complex AI decision-making processes through innovative techniques that balance predictive power with interpretability.',
    challenges: [
      'Balancing model complexity with interpretability',
      'Developing human-understandable explanations for deep learning models',
      'Creating domain-specific explanation methods',
      'Measuring and evaluating explanation quality',
      'Addressing the trade-off between accuracy and explainability'
    ],
    approaches: [
      'Local and global interpretation techniques',
      'Post-hoc explanation methods for black-box models',
      'Inherently interpretable model architectures',
      'Causal inference for explanations',
      'Visual analytics for model inspection'
    ],
    applications: [
      'Healthcare diagnostics and treatment recommendations',
      'Financial services decision support',
      'Legal and regulatory compliance',
      'Autonomous vehicles and safety-critical systems',
      'Scientific research and discovery'
    ],
    keyResearchers: ['researcher-002', 'researcher-005', 'researcher-008'],
    relatedProjects: ['project-002', 'project-006'],
    relatedPublications: ['pub-002', 'pub-006', 'pub-010'],
    image: 'https://images.pexels.com/photos/10467433/pexels-photo-10467433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'natural-language-processing',
    title: 'Natural Language Processing',
    shortDescription: 'Advancing how computers understand, generate, and interact with human language, making technology more accessible and useful.',
    fullDescription: 'Natural Language Processing (NLP) is transforming how humans interact with technology by enabling machines to understand, generate, and manipulate human language. Our research spans the full spectrum of language technologies, from fundamental understanding to application-specific solutions that address real-world challenges.',
    challenges: [
      'Understanding contextual nuances and ambiguity in language',
      'Developing models that work across diverse languages and dialects',
      'Handling low-resource languages and specialized domains',
      'Creating systems that can reason with linguistic knowledge',
      'Building conversational agents with human-like understanding'
    ],
    approaches: [
      'Large-scale pre-trained language models',
      'Cross-lingual transfer learning',
      'Neural-symbolic approaches for reasoning',
      'Multimodal language understanding',
      'Efficient NLP for resource-constrained environments'
    ],
    applications: [
      'Intelligent virtual assistants and chatbots',
      'Automated content summarization and analysis',
      'Machine translation and cross-lingual communication',
      'Information extraction from unstructured text',
      'Educational technologies and language learning'
    ],
    keyResearchers: ['researcher-001', 'researcher-004', 'researcher-009'],
    relatedProjects: ['project-003', 'project-007'],
    relatedPublications: ['pub-004', 'pub-008', 'pub-013'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'human-ai-interaction',
    title: 'Human-AI Interaction (HAX)',
    shortDescription: 'Designing intuitive interfaces and experiences that enhance how humans collaborate with AI systems in everyday contexts.',
    fullDescription: 'Human-AI Interaction (HAX) research explores the design, development, and evaluation of systems that enable effective collaboration between humans and artificial intelligence. Our work focuses on creating intuitive interfaces, understanding user needs, and developing frameworks that allow people to harness AI capabilities while maintaining appropriate control.',
    challenges: [
      'Designing intuitive interfaces for complex AI capabilities',
      'Balancing automation with meaningful human control',
      'Managing user expectations and mental models of AI',
      'Supporting effective collaboration between humans and AI',
      'Addressing ethical concerns in human-AI relationships'
    ],
    approaches: [
      'User-centered design for AI systems',
      'Mixed-initiative interaction frameworks',
      'Explainable interfaces for complex models',
      'Adaptive and personalized interaction',
      'Ethical guidelines for human-AI system design'
    ],
    applications: [
      'Creative tools for artists and designers',
      'Productivity enhancements for knowledge workers',
      'Accessible technology for diverse users',
      'Educational AI assistants and tutoring systems',
      'Collaborative decision-making in complex domains'
    ],
    keyResearchers: ['researcher-003', 'researcher-006', 'researcher-010'],
    relatedProjects: ['project-005', 'project-009'],
    relatedPublications: ['pub-005', 'pub-009', 'pub-014'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    shortDescription: 'Enabling machines to interpret and understand visual information from the world, mimicking and extending human visual capabilities.',
    fullDescription: 'Computer Vision research at ARISE focuses on developing algorithms and systems that can extract meaningful information from images and videos. Our work spans fundamental perception tasks to complex scene understanding, with applications ranging from healthcare and autonomous systems to augmented reality and robotics.',
    challenges: [
      'Robust perception under varying conditions and environments',
      'Complex scene understanding and reasoning',
      'Efficient visual processing for real-time applications',
      'Generalization to novel objects and scenarios',
      'Integrating visual perception with other modalities'
    ],
    approaches: [
      'Deep learning architectures for visual recognition',
      'Self-supervised and few-shot learning for efficiency',
      'Neural rendering and 3D reconstruction',
      'Video understanding and predictive modeling',
      'Vision-language models for multimodal understanding'
    ],
    applications: [
      'Medical imaging and diagnostics',
      'Autonomous vehicles and robotics',
      'Augmented and virtual reality',
      'Industrial inspection and quality control',
      'Smart cities and surveillance for safety'
    ],
    keyResearchers: ['researcher-002', 'researcher-007', 'researcher-008'],
    relatedProjects: ['project-004', 'project-008'],
    relatedPublications: ['pub-002', 'pub-007', 'pub-011'],
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ai-for-social-good',
    title: 'AI for Social Good',
    shortDescription: 'Leveraging artificial intelligence to address critical societal challenges and improve quality of life for communities worldwide.',
    fullDescription: 'AI for Social Good research at ARISE is dedicated to developing and applying artificial intelligence technologies to address pressing societal challenges. Our interdisciplinary approach combines technical innovation with domain expertise to create sustainable solutions that positively impact communities worldwide.',
    challenges: [
      'Ensuring equitable access to AI benefits across diverse populations',
      'Adapting solutions to resource-constrained environments',
      'Measuring and evaluating social impact effectively',
      'Addressing data limitations in underserved domains',
      'Building sustainable deployment models for long-term impact'
    ],
    approaches: [
      'Participatory design with stakeholder communities',
      'Frugal innovation for resource-constrained settings',
      'Transfer learning and domain adaptation for limited data',
      'Explainable AI for transparent decision-making',
      'Ethical frameworks for responsible deployment'
    ],
    applications: [
      'Healthcare access and delivery in underserved areas',
      'Environmental monitoring and conservation',
      'Disaster response and humanitarian assistance',
      'Educational technology for equitable learning',
      'Sustainable agriculture and food security'
    ],
    keyResearchers: ['researcher-005', 'researcher-006', 'researcher-009'],
    relatedProjects: ['project-006', 'project-009'],
    relatedPublications: ['pub-006', 'pub-009', 'pub-015'],
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];