export interface Event {
  id: string;
  title: string;
  type: 'conference' | 'workshop' | 'seminar' | 'webinar';
  startDate: string;
  endDate?: string;
  time: string;
  location: string;
  description: string;
  speakers?: {
    name: string;
    role: string;
    image: string;
  }[];
  schedule?: {
    time: string;
    title: string;
    description: string;
  }[];
  registrationLink?: string;
  image: string;
}

export const eventItems: Event[] = [
  {
    id: 'event-001',
    title: 'AI Ethics and Society Workshop 2025',
    type: 'workshop',
    startDate: '2025-06-15',
    endDate: '2025-06-16',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Conference Center',
    description: 'A two-day workshop exploring the ethical implications of AI in society, featuring expert speakers and interactive sessions.',
    speakers: [
      {
        name: 'Dr. Sarah Chen',
        role: 'AI Ethics Researcher',
        image: 'https://images.pexels.com/photos/3799324/pexels-photo-3799324.jpeg'
      },
      {
        name: 'Prof. Michael Thomson',
        role: 'Technology Policy Expert',
        image: 'https://images.pexels.com/photos/3799324/pexels-photo-3799324.jpeg'
      }
    ],
    schedule: [
      {
        time: '9:00 AM',
        title: 'Opening Keynote',
        description: 'The Future of AI Ethics'
      },
      {
        time: '10:30 AM',
        title: 'Panel Discussion',
        description: 'Balancing Innovation and Responsibility'
      }
    ],
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg'
  },
  {
    id: 'event-002',
    title: 'Natural Language Processing Seminar Series',
    type: 'seminar',
    startDate: '2025-07-01',
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual',
    description: 'Weekly seminar series discussing the latest advances in NLP research and applications.',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg'
  }
];
