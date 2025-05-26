export interface TeamMember {
  id: string;
  name: string;
  title: string;
  email: string;
  phone?: string;
  bio: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    year: number;
  }[];
  experience: {
    position: string;
    company: string;
    duration: string;
    description: string;
  }[];
  researchInterests: string[];
  skills: string[];
  publications: string[];
  projects: string[];
  awards: {
    title: string;
    year: number;
    organization: string;
  }[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    googleScholar?: string;
    github?: string;
    website?: string;
  };
  image: string;
  type: 'director' | 'deputy-director' | 'senior-researcher' | 'researcher' | 'advisor' | 'international-advisor' | 'phd-student' | 'masters-student' | 'undergraduate' | 'alumni';
}

export const teamMembers: TeamMember[] = [
  {
    id: 'director',
    name: 'Dr. Eleanor Matthews',
    title: 'Director',
    email: 'eleanor.matthews@arise-research.org',
    phone: '+1 (555) 123-4567',
    bio: 'Dr. Eleanor Matthews is the founding Director of ARISE Research Center. With over 20 years of experience in artificial intelligence research, she leads our strategic vision and research initiatives. Her groundbreaking work on neural architectures and ethical AI has been recognized internationally.',
    education: [
      {
        degree: 'Ph.D.',
        field: 'Computer Science (AI Focus)',
        institution: 'Stanford University',
        year: 2003
      },
      {
        degree: 'M.S.',
        field: 'Computer Science',
        institution: 'MIT',
        year: 1999
      }
    ],
    experience: [
      {
        position: 'Director',
        company: 'ARISE Research Center',
        duration: '2020 - Present',
        description: 'Leading research initiatives and strategic direction'
      }
    ],
    researchInterests: ['Neural Architectures', 'Ethical AI', 'AI Policy'],
    skills: ['Leadership', 'AI Research', 'Strategic Planning'],
    publications: ['pub-001', 'pub-002'],
    projects: ['project-001', 'project-002'],
    awards: [
      {
        title: 'AI Leadership Award',
        year: 2022,
        organization: 'International AI Society'
      }
    ],
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'director'
  },
  {
    id: 'deputy-director',
    name: 'Dr. Marcus Chen',
    title: 'Deputy Director',
    email: 'marcus.chen@arise-research.org',
    bio: 'Dr. Marcus Chen serves as Deputy Director, overseeing research operations and leading our NLP initiatives. His expertise spans both academia and industry.',
    education: [
      {
        degree: 'Ph.D.',
        field: 'Natural Language Processing',
        institution: 'University of Washington',
        year: 2006
      }
    ],
    experience: [
      {
        position: 'Deputy Director',
        company: 'ARISE Research Center',
        duration: '2020 - Present',
        description: 'Overseeing research operations and NLP initiatives'
      }
    ],
    researchInterests: ['NLP', 'Machine Learning'],
    skills: ['Research Management', 'NLP', 'Team Leadership'],
    publications: ['pub-003', 'pub-004'],
    projects: ['project-003'],
    awards: [],
    image: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'deputy-director'
  },
  {
    id: 'senior-researcher-001',
    name: 'Dr. Sarah Johnson',
    title: 'Senior Research Scientist',
    email: 'sarah.johnson@arise-research.org',
    bio: 'Dr. Sarah Johnson leads our Explainable AI research group, developing transparent and interpretable AI systems.',
    education: [
      {
        degree: 'Ph.D.',
        field: 'Machine Learning',
        institution: 'UCLA',
        year: 2012
      }
    ],
    experience: [
      {
        position: 'Senior Research Scientist',
        company: 'ARISE Research Center',
        duration: '2020 - Present',
        description: 'Leading Explainable AI research initiatives'
      }
    ],
    researchInterests: ['Explainable AI', 'Machine Learning'],
    skills: ['Deep Learning', 'Model Interpretation'],
    publications: ['pub-005'],
    projects: ['project-004'],
    awards: [],
    image: 'https://images.pexels.com/photos/3808008/pexels-photo-3808008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'senior-researcher'
  },
  {
    id: 'researcher-001',
    name: 'Dr. Michael Rodriguez',
    title: 'Research Scientist',
    email: 'michael.rodriguez@arise-research.org',
    bio: 'Dr. Rodriguez focuses on computer vision and deep learning applications in healthcare.',
    education: [
      {
        degree: 'Ph.D.',
        field: 'Computer Vision',
        institution: 'Georgia Tech',
        year: 2018
      }
    ],
    experience: [
      {
        position: 'Research Scientist',
        company: 'ARISE Research Center',
        duration: '2020 - Present',
        description: 'Computer vision research'
      }
    ],
    researchInterests: ['Computer Vision', 'Healthcare AI'],
    skills: ['PyTorch', 'Computer Vision'],
    publications: ['pub-006'],
    projects: ['project-005'],
    awards: [],
    image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'researcher'
  },
  {
    id: 'phd-student-001',
    name: 'Alex Thompson',
    title: 'PhD Candidate',
    email: 'alex.thompson@arise-research.org',
    bio: 'Researching reinforcement learning for robotic control systems.',
    education: [
      {
        degree: 'M.S.',
        field: 'Robotics',
        institution: 'MIT',
        year: 2021
      }
    ],
    experience: [
      {
        position: 'PhD Candidate',
        company: 'ARISE Research Center',
        duration: '2021 - Present',
        description: 'Reinforcement learning research'
      }
    ],
    researchInterests: ['Reinforcement Learning', 'Robotics'],
    skills: ['Python', 'ROS', 'PyTorch'],
    publications: ['pub-007'],
    projects: ['project-006'],
    awards: [],
    image: 'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'phd-student'
  },
  {
    id: 'masters-001',
    name: 'Emily Chen',
    title: "Master's Student",
    email: 'emily.chen@arise-research.org',
    bio: 'Working on natural language processing for low-resource languages.',
    education: [
      {
        degree: 'B.S.',
        field: 'Computer Science',
        institution: 'UC Berkeley',
        year: 2023
      }
    ],
    experience: [
      {
        position: "Master's Student",
        company: 'ARISE Research Center',
        duration: '2023 - Present',
        description: 'NLP research'
      }
    ],
    researchInterests: ['NLP', 'Low-resource Languages'],
    skills: ['Python', 'HuggingFace', 'PyTorch'],
    publications: [],
    projects: ['project-007'],
    awards: [],
    image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'masters-student'
  },
  {
    id: 'undergrad-001',
    name: 'James Wilson',
    title: 'Undergraduate Researcher',
    email: 'james.wilson@arise-research.org',
    bio: 'Contributing to computer vision projects while completing undergraduate studies.',
    education: [
      {
        degree: 'B.S.',
        field: 'Computer Science',
        institution: 'Stanford University',
        year: 2024
      }
    ],
    experience: [
      {
        position: 'Undergraduate Researcher',
        company: 'ARISE Research Center',
        duration: '2023 - Present',
        description: 'Computer vision research'
      }
    ],
    researchInterests: ['Computer Vision', 'Deep Learning'],
    skills: ['Python', 'PyTorch', 'OpenCV'],
    publications: [],
    projects: ['project-008'],
    awards: [],
    image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'undergraduate'
  },
  {
    id: 'alumni-001',
    name: 'Dr. Rachel Green',
    title: 'Former Senior Researcher',
    email: 'rachel.green@company.com',
    bio: 'Previously led our NLP team, now leading AI initiatives at a major tech company.',
    education: [
      {
        degree: 'Ph.D.',
        field: 'Computer Science',
        institution: 'Carnegie Mellon University',
        year: 2015
      }
    ],
    experience: [
      {
        position: 'Senior Researcher',
        company: 'ARISE Research Center',
        duration: '2020 - 2023',
        description: 'Led NLP research initiatives'
      }
    ],
    researchInterests: ['NLP', 'Machine Learning'],
    skills: ['Deep Learning', 'NLP', 'Leadership'],
    publications: ['pub-008', 'pub-009'],
    projects: ['project-009'],
    awards: [],
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'alumni'
  }
];