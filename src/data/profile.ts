export interface ProfileConfig {
  name: string;
  monogram: string;
  domain: string;
  canonicalUrl: string;
  location: string;
  email: string;
  /**
   * Set `avatarUrl` to a genuine photograph path (e.g., "/images/natinael-yimer.jpg")
   * when available. While `null`, the site renders a bespoke architectural NY monogram
   * portrait rather than using any fictional or AI-generated human face.
   */
  avatarUrl: string | null;
  avatarAlt: string;
  academic: {
    degree: string;
    institution: string;
    currentStatusLabel: string; // Easily editable without hardcoding a specific year of study
    period: string;
    location: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    headline: string;
    description: string;
    identityLine: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
  about: {
    sectionLabel: string;
    heading: string;
    paragraphs: string[];
    corePillars: {
      label: string;
      detail: string;
    }[];
  };
  philosophy: {
    sectionLabel: string;
    heading: string;
    quote: string;
  };
  currentFocus: {
    sectionLabel: string;
    heading: string;
    subtitle: string;
    items: {
      id: string;
      tag: string;
      title: string;
      description: string;
      status: string;
    }[];
  };
  contact: {
    sectionLabel: string;
    heading: string;
    description: string;
    email: string;
    phone: string | null; // Hidden unless explicitly configured
  };
}

export const profileData: ProfileConfig = {
  name: 'Natinael Yimer',
  monogram: 'NY',
  domain: 'natinaelyimer.com',
  canonicalUrl: 'https://natinaelyimer.com',
  location: 'Ethiopia',
  email: 'admin@yzlex.com',
  avatarUrl: null,
  avatarAlt: 'Natinael Yimer — Founder & CEO of YZlex',

  academic: {
    degree: 'Bachelor of Laws (LLB)',
    institution: 'Wolaita Sodo University',
    currentStatusLabel: 'LLB Student',
    period: '2023–Present',
    location: 'Wolaita Sodo, Ethiopia',
  },

  hero: {
    eyebrow: 'ETHIOPIA | LAW × TECHNOLOGY × AI',
    title: 'Natinael Yimer',
    headline: 'Building at the intersection of law, AI, and technology.',
    description:
      "I'm an Ethiopian law student, entrepreneur, and technology builder interested in transforming complex real-world challenges into practical digital solutions. As the founder of YZlex, I am working to make Ethiopian legal knowledge more accessible through artificial intelligence and technology.",
    identityLine: 'Founder & CEO of YZlex | LLB Student | AI & LegalTech Builder',
    primaryCta: {
      label: 'Explore My Work',
      href: '#projects',
    },
    secondaryCta: {
      label: "Let's Connect",
      href: '#contact',
    },
  },

  about: {
    sectionLabel: '01. About Me',
    heading: 'More than one discipline. One direction.',
    paragraphs: [
      "I'm Natinael Yimer, an Ethiopian law student and technology entrepreneur passionate about using innovation to solve practical challenges.",
      'I study law at Wolaita Sodo University while exploring artificial intelligence, web development, cybersecurity, and digital innovation.',
      'My journey into LegalTech started with an observation: finding and understanding important legal materials can be difficult and time-consuming. Instead of simply discussing the problem, I began building a solution.',
      "That journey led to YZlex, an AI-powered legal technology platform designed around the realities of Ethiopia's legal system.",
      'I believe the future belongs to people who can connect different fields, understand real problems, and turn ideas into useful products.',
      'My interests extend beyond LegalTech into artificial intelligence, digital security, entrepreneurship, and technology that creates meaningful impact.',
    ],
    corePillars: [
      {
        label: 'Flagship Venture',
        detail: 'Founder & CEO of YZlex',
      },
      {
        label: 'Legal Education',
        detail: 'LLB Student, Wolaita Sodo University',
      },
      {
        label: 'Leadership',
        detail: 'FALAS Ethiopia Campus Ambassador',
      },
      {
        label: 'Technical Focus',
        detail: 'LegalTech · AI Systems · Web & Cybersecurity',
      },
    ],
  },

  philosophy: {
    sectionLabel: '05. Journey & Philosophy',
    heading: 'Learning the law. Exploring technology. Building solutions.',
    quote:
      'I believe technology should not simply make things faster. It should make important knowledge more accessible, systems more useful, and opportunities more achievable.',
  },

  currentFocus: {
    sectionLabel: '07. Current Focus',
    heading: "What I'm Working On",
    subtitle:
      'Active priorities across product development, technical exploration, and legal education.',
    items: [
      {
        id: 'focus-yzlex',
        tag: 'Product & LegalTech',
        title: 'Advancing YZlex as a practical AI-powered Ethiopian LegalTech platform.',
        description:
          'Refining bilingual legal research workflows, Federal Supreme Court cassation indexing, and intelligent legal assistance tailored to Ethiopian proclamations and jurisprudence.',
        status: 'Active Priority',
      },
      {
        id: 'focus-ai-products',
        tag: 'AI & Engineering',
        title: 'Developing my understanding of AI, technology, and modern digital products.',
        description:
          'Building with modern web frameworks, semantic retrieval architectures, and applied artificial intelligence to create reliable, user-centered tools.',
        status: 'Continuous Exploration',
      },
      {
        id: 'focus-intersection',
        tag: 'Law · Security · Innovation',
        title: 'Connecting legal education, digital innovation, and cybersecurity.',
        description:
          'Studying Ethiopian substantive and procedural law while exploring how digital security, ethical hacking fundamentals, and technology policy shape trustworthy systems.',
        status: 'Ongoing Study',
      },
    ],
  },

  contact: {
    sectionLabel: '08. Contact',
    heading: 'Have an idea worth building?',
    description:
      "I'm always interested in meaningful conversations, technology collaborations, innovative ideas, and opportunities that create real value.",
    email: 'admin@yzlex.com',
    phone: null,
  },
};
