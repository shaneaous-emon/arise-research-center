export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  researchAreas: string[];
  status: 'ongoing' | 'completed' | 'upcoming';
  startDate: string;
  endDate?: string;
  teamMembers: string[];
  partners?: string[];
  fundingSource?: string;
  keyFindings?: string[];
  publications?: string[];
  image: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 'project-001',
    title: 'NeuroGen: Advanced Neural Text Generation',
    shortDescription: 'Developing state-of-the-art neural models for controllable and creative text generation across multiple domains.',
    fullDescription: 'The NeuroGen project focuses on developing next-generation neural text generation models that can produce high-quality, creative, and controllable content across various domains. Our research integrates recent advances in transformer architectures, reinforcement learning, and human feedback mechanisms to create systems that are both powerful and aligned with human preferences.\n\nOur models are designed to handle a wide range of generation tasks, from creative writing assistance and dialogue systems to technical content creation and summarization. We place particular emphasis on providing fine-grained control over generation parameters, allowing users to guide the output according to their specific needs while maintaining coherence and factual accuracy.',
    researchAreas: ['generative-ai', 'natural-language-processing'],
    status: 'ongoing',
    startDate: '2023-01-15',
    teamMembers: ['researcher-001', 'researcher-004', 'researcher-007', 'researcher-010'],
    partners: ['Stanford NLP Group', 'OpenAI'],
    fundingSource: 'National Science Foundation (NSF)',
    keyFindings: [
      'Developed architecture that reduces hallucinations by 47% compared to baseline models',
      'Implemented novel attention mechanism that improves long-form coherence',
      'Created evaluation framework that better correlates with human judgments of quality'
    ],
    publications: ['pub-001', 'pub-004'],
    image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project-002',
    title: 'Explainable AI for Healthcare',
    shortDescription: 'Creating transparent AI systems for medical diagnostics that provide understandable explanations for healthcare professionals.',
    fullDescription: 'The Explainable AI for Healthcare project addresses the critical need for transparency and interpretability in AI-powered medical diagnostic systems. We develop novel methods that not only make accurate predictions but also provide clear, clinically relevant explanations for those predictions, helping healthcare professionals make informed decisions.\n\nOur research integrates state-of-the-art deep learning techniques with innovative explainability methods specifically tailored for medical data. We focus on various medical imaging modalities, including X-rays, MRIs, and pathology slides, designing systems that highlight relevant features and explain their reasoning in terms that align with medical knowledge and practice.',
    researchAreas: ['explainable-ai', 'computer-vision'],
    status: 'ongoing',
    startDate: '2022-09-01',
    teamMembers: ['researcher-002', 'researcher-005', 'researcher-008'],
    partners: ['University Medical Center', 'Healthcare AI Initiative'],
    fundingSource: 'National Institutes of Health (NIH)',
    keyFindings: [
      "Developed attention-based visualization techniques that align with radiologists' focus areas",
      'Created concept-based explanation framework that maps model features to clinical concepts',
      'Conducted user studies showing 86% of doctors found explanations helpful for decision-making'
    ],
    publications: ['pub-002', 'pub-006'],
    image: 'https://images.pexels.com/photos/8376263/pexels-photo-8376263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project-003',
    title: 'MultiLingual Understanding Framework',
    shortDescription: 'Building cross-lingual NLP systems that transfer knowledge across languages to support low-resource settings.',
    fullDescription: 'The MultiLingual Understanding Framework project aims to break language barriers in artificial intelligence by developing cross-lingual natural language processing systems that can effectively transfer knowledge across languages. Our research particularly focuses on supporting low-resource languages that often lack sufficient training data for developing high-quality NLP models.\n\nOur approach combines multilingual pre-training techniques, cross-lingual transfer learning, and language-agnostic representations to create models that can understand and generate text in multiple languages. We evaluate our methods across a diverse set of languages and NLP tasks, including machine translation, named entity recognition, sentiment analysis, and question answering.',
    researchAreas: ['natural-language-processing'],
    status: 'ongoing',
    startDate: '2023-03-10',
    teamMembers: ['researcher-001', 'researcher-004', 'researcher-009'],
    partners: ['Global Language Technology Alliance', 'University of Helsinki NLP Group'],
    fundingSource: 'International Development Research Centre',
    keyFindings: [
      'Developed embeddings that improve performance on low-resource languages by 35%',
      'Created architecture that effectively transfers knowledge from high-resource to low-resource languages',
      'Built multilingual dataset covering 100+ languages for benchmarking'
    ],
    publications: ['pub-004', 'pub-008'],
    image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project-004',
    title: 'Neural Image Synthesis and Manipulation',
    shortDescription: 'Pushing the boundaries of AI-generated visual content with advanced diffusion and transformer-based models.',
    fullDescription: 'The Neural Image Synthesis and Manipulation project explores cutting-edge techniques for generating, editing, and enhancing visual content using artificial intelligence. Our research focuses on developing models that can create highly realistic images, perform sophisticated editing operations, and understand the semantic structure of visual scenes.\n\nOur work spans diffusion models, transformer-based architectures, and generative adversarial networks, with applications ranging from creative tools for artists and designers to practical solutions for content creation and editing. We particularly emphasize controllability, allowing users to guide the generation process with natural language instructions, reference images, or direct manipulation.',
    researchAreas: ['generative-ai', 'computer-vision'],
    status: 'ongoing',
    startDate: '2023-05-20',
    teamMembers: ['researcher-003', 'researcher-007', 'researcher-010'],
    partners: ['Creative AI Lab', 'Media Technology Institute'],
    fundingSource: 'Advanced Research Projects Agency',
    keyFindings: [
      'Developed novel diffusion architecture that improves image quality and generation speed',
      'Created controllable editing system that preserves identity while modifying specific attributes',
      'Implemented zero-shot domain adaptation for specialized visual domains'
    ],
    publications: ['pub-003', 'pub-007'],
    image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project-005',
    title: 'Co-Creative Design with AI',
    shortDescription: 'Developing intelligent systems that collaborate with human designers, enhancing creativity while maintaining user agency.',
    fullDescription: 'The Co-Creative Design with AI project investigates how artificial intelligence can serve as a collaborative partner in creative design processes. Our research focuses on developing systems that augment human creativity rather than replace it, providing intelligent suggestions, automating routine tasks, and exploring design possibilities in collaboration with human designers.\n\nWe employ a user-centered approach, working closely with professional designers across multiple domains to understand their workflows, needs, and creative processes. Our systems are designed to maintain user agency and control while offering meaningful assistance that enhances rather than constrains creative expression.',
    researchAreas: ['human-ai-interaction', 'generative-ai'],
    status: 'ongoing',
    startDate: '2022-11-15',
    teamMembers: ['researcher-003', 'researcher-006', 'researcher-010'],
    partners: ['Design Innovation Lab', 'Creative Industries Federation'],
    fundingSource: 'Arts and Humanities Research Council',
    keyFindings: [
      'Developed interaction framework that balances automation with user control in creative workflows',
      'Created adaptive suggestion system that learns individual designer preferences and styles',
      'Conducted longitudinal studies showing 42% increase in designer productivity and satisfaction'
    ],
    publications: ['pub-005', 'pub-009'],
    image: 'https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project-006',
    title: 'AI for Climate Change Monitoring',
    shortDescription: 'Applying machine learning to environmental data to better understand, predict, and mitigate climate change impacts.',
    fullDescription: 'The AI for Climate Change Monitoring project harnesses the power of artificial intelligence to address one of the most pressing challenges of our time. Our research integrates machine learning with climate science to develop models that can analyze complex environmental data, detect patterns, and generate insights that help us understand, predict, and mitigate the impacts of climate change.\n\nOur work spans multiple domains, including satellite imagery analysis, sensor data integration, climate model enhancement, and extreme weather prediction. We collaborate closely with climate scientists, environmental engineers, and policy experts to ensure our technical innovations translate into practical tools and actionable insights.',
    researchAreas: ['ai-for-social-good', 'computer-vision'],
    status: 'ongoing',
    startDate: '2022-06-01',
    teamMembers: ['researcher-005', 'researcher-008', 'researcher-009'],
    partners: ['Climate Research Institute', 'Environmental Monitoring Agency'],
    fundingSource: 'Global Climate Action Fund',
    keyFindings: [
      'Developed satellite imagery analysis system that tracks deforestation with 94% accuracy',
      'Created early warning system for extreme weather events with 72-hour prediction window',
      'Built integrated data platform that combines heterogeneous environmental sensors'
    ],
    publications: ['pub-010', 'pub-015'],
    image: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project-007',
    title: 'Conversational AI for Education',
    shortDescription: 'Building intelligent tutoring systems that provide personalized learning experiences through natural dialogue.',
    fullDescription: `The Conversational AI for Education project focuses on developing advanced dialogue systems that can serve as effective tutors and learning companions. Our research aims to create AI systems that can engage students in meaningful conversations, adapt to individual learning styles and needs, and provide personalized guidance across various subjects and skill levels.

We combine state-of-the-art natural language processing with educational theory and cognitive science to build systems that not only understand student questions but can also assess knowledge gaps, provide explanations tailored to the student's level of understanding, and guide learning through Socratic dialogue and scaffolded instruction.`,
    researchAreas: ['natural-language-processing', 'human-ai-interaction'],
    status: 'ongoing',
    startDate: '2023-02-10',
    teamMembers: ['researcher-001', 'researcher-006', 'researcher-009'],
    partners: ['EdTech Innovation Center', 'National Education Association'],
    fundingSource: 'Department of Education',
    keyFindings: [
      'Developed dialogue management system that maintains coherent educational conversations',
      'Created adaptive knowledge tracing algorithm that personalizes instruction based on student responses',
      'Implemented multimodal interaction incorporating text, speech, and visual explanations'
    ],
    publications: ['pub-008', 'pub-013'],
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project-008',
    title: '3D Scene Understanding and Reconstruction',
    shortDescription: 'Developing AI systems that can interpret and reconstruct 3D environments from 2D images or partial observations.',
    fullDescription: 'The 3D Scene Understanding and Reconstruction project explores how artificial intelligence can interpret and reconstruct complete three-dimensional environments from limited observations. Our research aims to develop systems that can infer spatial layout, object placement, and scene geometry from single or multiple images, point clouds, or partial scans.\n\nOur work combines deep learning with geometric principles and physical constraints to create models that understand not just what objects are present in a scene, but also how they are arranged in 3D space, what properties they have, and how they relate to each other. This research has wide-ranging applications from augmented reality and robotics to architectural design and autonomous driving.',
    researchAreas: ['computer-vision', 'generative-ai'],
    status: 'ongoing',
    startDate: '2023-04-05',
    teamMembers: ['researcher-002', 'researcher-007', 'researcher-008'],
    partners: ['Virtual Reality Research Lab', 'Autonomous Systems Institute'],
    fundingSource: 'Defense Advanced Research Projects Agency',
    keyFindings: [
      'Developed neural radiance field (NeRF) model that reconstructs 3D scenes from sparse views',
      'Created object-centric scene representation that enables semantic editing and manipulation',
      'Implemented real-time reconstruction pipeline for mobile devices'
    ],
    publications: ['pub-011', 'pub-012'],
    image: 'https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project-009',
    title: 'Accessible Technology through AI',
    shortDescription: 'Creating inclusive AI solutions that enhance technology access for people with disabilities.',
    fullDescription: 'The Accessible Technology through AI project is dedicated to making technology more inclusive and accessible for everyone, with a particular focus on people with disabilities. Our research develops artificial intelligence solutions that can adapt interfaces, translate between modalities, and provide assistance tailored to diverse needs and abilities.\n\nOur work spans various domains, including screen readers enhanced with computer vision, sign language recognition and translation, adaptive user interfaces, speech-to-text systems optimized for diverse speech patterns, and predictive assistance tools. We employ participatory design approaches, working directly with people with disabilities throughout our research and development process.',
    researchAreas: ['ai-for-social-good', 'human-ai-interaction'],
    status: 'ongoing',
    startDate: '2022-08-15',
    teamMembers: ['researcher-003', 'researcher-005', 'researcher-010'],
    partners: ['Accessibility Innovation Lab', 'Disability Rights Organization'],
    fundingSource: 'Foundation for Inclusive Technology',
    keyFindings: [
      'Developed computer vision-enhanced screen reader that provides contextual image descriptions',
      'Created sign language translation system with 89% accuracy across multiple sign languages',
      'Built adaptive interface system that personalizes interaction based on user abilities and preferences'
    ],
    publications: ['pub-009', 'pub-014'],
    image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];