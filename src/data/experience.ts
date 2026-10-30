export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  focusAreas: string[];
  iconName: 'Scale' | 'Cpu' | 'Code2' | 'ShieldCheck' | 'Rocket';
}

export interface TimelineItem {
  id: string;
  organization: string;
  role: string;
  category: 'Venture & Leadership' | 'Academic Education' | 'Campus Leadership';
  period: string;
  location: string;
  description: string;
  highlights: string[];
  link?: {
    label: string;
    url: string;
  };
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface InsightPost {
  id: string;
  title: string;
  category: string;
  source: 'LinkedIn';
  summary: string;
  url: string;
  tags: string[];
}

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'legal-tech',
    number: '01',
    title: 'Legal Technology',
    description:
      'Building technology that improves access to legal knowledge, legal research, and professional legal workflows.',
    focusAreas: ['Legal Information Systems', 'Cassation Research', 'Bilingual Legal Workflows'],
    iconName: 'Scale',
  },
  {
    id: 'artificial-intelligence',
    number: '02',
    title: 'Artificial Intelligence',
    description:
      'Exploring AI-powered products, intelligent systems, AI agents, automation, and practical applications of generative AI.',
    focusAreas: ['Semantic Search', 'AI Agents & Workflows', 'Applied Generative AI'],
    iconName: 'Cpu',
  },
  {
    id: 'web-development',
    number: '03',
    title: 'Web Development',
    description:
      'Building modern web applications and digital products using contemporary development technologies.',
    focusAreas: ['Modern Frontend Interfaces', 'Responsive Web Apps', 'Digital Product Engineering'],
    iconName: 'Code2',
  },
  {
    id: 'cybersecurity',
    number: '04',
    title: 'Cybersecurity',
    description:
      'Learning and exploring ethical hacking, cybersecurity, digital protection, and the relationship between technology and digital rights.',
    focusAreas: ['Ethical Hacking Concepts', 'Digital Protection', 'Technology & Digital Rights'],
    iconName: 'ShieldCheck',
  },
  {
    id: 'entrepreneurship',
    number: '05',
    title: 'Entrepreneurship & Product Building',
    description:
      'Turning real-world problems into digital products, learning startup execution, product strategy, and sustainable technology businesses.',
    focusAreas: ['Problem-First Product Design', 'Founder Execution', 'Venture Building in Ethiopia'],
    iconName: 'Rocket',
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: 'yzlex-founder',
    organization: 'YZlex',
    role: 'Founder & CEO',
    category: 'Venture & Leadership',
    period: 'Present',
    location: 'Ethiopia',
    description:
      'Building an AI-powered Ethiopian LegalTech platform bringing legal information, intelligent research, and practical legal workflows into a unified digital experience.',
    highlights: [
      'Leading product vision, architecture, and development of YZlex (yzlex.com).',
      'Designing bilingual (Amharic and English) legal research and document analysis workflows.',
      'Focusing on Federal Supreme Court cassation research accessibility and AI-assisted legal tools.',
    ],
    link: {
      label: 'Visit yzlex.com',
      url: 'https://yzlex.com/',
    },
  },
  {
    id: 'wolaita-sodo-university',
    organization: 'Wolaita Sodo University',
    role: 'Bachelor of Laws (LLB) Student',
    category: 'Academic Education',
    period: '2023–Present',
    location: 'Wolaita Sodo, Ethiopia',
    description:
      'Studying Ethiopian law and jurisprudence while connecting legal education with technological innovation to address practical challenges in the legal ecosystem.',
    highlights: [
      'Studying substantive and procedural Ethiopian law, constitutional principles, and legal research methodology.',
      'Combining direct observation of legal research challenges with software product building.',
    ],
  },
  {
    id: 'falas-ethiopia',
    organization: 'FALAS Ethiopia',
    role: 'Campus Ambassador',
    category: 'Campus Leadership',
    period: 'Active',
    location: 'Ethiopia',
    description:
      'Representing and participating in student-oriented legal and professional activities.',
    highlights: [
      'Engaging with law students on professional development, legal awareness, and collaborative initiatives.',
      'Bridging student communities with broader legal and leadership opportunities.',
    ],
  },
];

export const journeySteps: JourneyStep[] = [
  {
    number: '01',
    title: 'Understand the Problem',
    description:
      'Studying law and observing the practical difficulties of accessing and working with legal information.',
    keywords: ['Legal Education', 'Ethiopian Law', 'Firsthand Observation'],
  },
  {
    number: '02',
    title: 'Learn the Technology',
    description:
      'Exploring artificial intelligence, cybersecurity, web development, and digital systems.',
    keywords: ['Artificial Intelligence', 'Web Development', 'Cybersecurity'],
  },
  {
    number: '03',
    title: 'Build the Solution',
    description: 'Turning ideas into practical products, including YZlex.',
    keywords: ['Product Execution', 'YZlex Platform', 'Real-World Impact'],
  },
];

export const insightTopics: string[] = [
  'All',
  'Ethiopian LegalTech',
  'Artificial Intelligence',
  'Building YZlex',
  'Law & Technology',
];

export const verifiedInsights: InsightPost[] = [
  {
    id: 'linkedin-introducing-yzlex',
    title: 'Introducing YZlex: AI-Powered Legal Technology for Ethiopia',
    category: 'Building YZlex',
    source: 'LinkedIn',
    summary:
      'Sharing the vision and motivation behind building YZlex—an AI-powered platform designed to make Ethiopian legal materials, research, and workflows more accessible.',
    url: 'https://www.linkedin.com/posts/natinael-yimer-121b81320_legaltech-artificialintelligence-ethiopia-activity-7496186308349050881-xH88',
    tags: ['Ethiopian LegalTech', 'Building YZlex', 'Artificial Intelligence'],
  },
  {
    id: 'linkedin-semantic-legal-search',
    title: 'YZlex and Semantic Legal Search in Ethiopian Law',
    category: 'Ethiopian LegalTech',
    source: 'LinkedIn',
    summary:
      'Exploring how semantic search and AI-assisted retrieval can improve how legal researchers and practitioners discover relevant Ethiopian laws and legal concepts.',
    url: 'https://www.linkedin.com/posts/natinael-yimer-121b81320_legaltech-ethiopianlaw-yzlex-activity-7497527000362893312-pya7',
    tags: ['Ethiopian LegalTech', 'Law & Technology', 'Artificial Intelligence'],
  },
];
