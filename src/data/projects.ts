export interface CaseStudyBlock {
  step: string;
  title: string;
  content: string;
}

export interface WorkspacePreviewTab {
  id: string;
  label: string;
  modeDescriptor: string;
  queryExample: string;
  amharicContext: string;
  summary: string;
  structuredOutput: {
    label: string;
    value: string;
  }[];
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  role: string;
  status: string;
  websiteUrl: string;
  aboutUrl: string;
  summary: string;
  capabilities: {
    title: string;
    description: string;
    iconName:
      | 'BookOpen'
      | 'Search'
      | 'Scale'
      | 'Sparkles'
      | 'Languages'
      | 'FileText'
      | 'Briefcase'
      | 'Users';
  }[];
  caseStudy: CaseStudyBlock[];
  previewTabs: WorkspacePreviewTab[];
  tags: string[];
}

export const featuredProjects: ProjectItem[] = [
  {
    id: 'yzlex',
    name: 'YZlex',
    subtitle: 'AI-Powered Ethiopian Legal Technology Platform',
    role: 'Founder & CEO of YZlex',
    status: 'Flagship Venture',
    websiteUrl: 'https://yzlex.com/',
    aboutUrl: 'https://yzlex.com/about',
    summary:
      'YZlex is an AI-powered legal technology platform focused on the Ethiopian legal system. It brings legal information, intelligent research, and practical legal workflows into a unified digital experience.',
    capabilities: [
      {
        title: 'Ethiopian Legal Library',
        description:
          'Structured digital access to Ethiopian proclamations, codes, regulations, and foundational legal texts.',
        iconName: 'BookOpen',
      },
      {
        title: 'Searchable Legal Materials',
        description:
          'Fast, concept-aware search across primary legal sources rather than fragmented document folders.',
        iconName: 'Search',
      },
      {
        title: 'Federal Supreme Court Cassation Research',
        description:
          'Dedicated navigation and research support for binding Federal Supreme Court Cassation Bench decisions.',
        iconName: 'Scale',
      },
      {
        title: 'AI-Powered Legal Assistance',
        description:
          'Context-grounded AI assistance designed to help synthesize legal questions and locate relevant authorities.',
        iconName: 'Sparkles',
      },
      {
        title: 'Amharic & English Workflows',
        description:
          'Bilingual legal information workflows built around how Ethiopian legal professionals and students actually work.',
        iconName: 'Languages',
      },
      {
        title: 'Legal Document Analysis',
        description:
          'Tools for reviewing, summarizing, and inspecting clauses and legal documents with greater clarity.',
        iconName: 'FileText',
      },
      {
        title: 'Legal Professional Workspace',
        description:
          'An integrated environment organizing research notes, authorities, and case preparation workflows.',
        iconName: 'Briefcase',
      },
      {
        title: 'Lawyer Discovery & Legal Services',
        description:
          'Connecting individuals and organizations with legal professionals and accessible legal service pathways.',
        iconName: 'Users',
      },
    ],
    caseStudy: [
      {
        step: '01. The Problem',
        title: 'Fragmented Legal Materials & High Research Friction',
        content:
          'Legal students, researchers, and practitioners in Ethiopia often face significant friction when trying to locate proclamations, regulations, and Federal Supreme Court Cassation decisions. Important materials are frequently scattered across unindexed documents, making thorough legal research time-consuming.',
      },
      {
        step: '02. The Idea',
        title: 'Designing Around Ethiopian Legal Realities',
        content:
          'What if legal research in Ethiopia did not depend on manual document hunting? The idea behind YZlex was to combine a structured Ethiopian legal library with modern semantic search and AI assistance that respects both Amharic and English legal contexts.',
      },
      {
        step: '03. The Solution',
        title: 'A Unified Digital Legal Experience',
        content:
          'YZlex brings searchable Ethiopian legal materials, Federal Supreme Court cassation research, AI-powered legal assistance, document analysis, a professional workspace, and lawyer discovery together into one cohesive platform.',
      },
      {
        step: '04. The Technology Direction',
        title: 'Semantic Retrieval, Bilingual Workflows & Modern Web Engineering',
        content:
          'Built with modern web architecture and AI-assisted retrieval workflows, YZlex focuses on meaning-aware search—connecting legal concepts and questions to relevant statutory provisions and cassation interpretations.',
      },
      {
        step: '05. The Mission',
        title: 'Making Ethiopian Legal Knowledge More Accessible',
        content:
          'To empower law students, legal professionals, and citizens with practical technology that lowers the barrier to understanding and working with Ethiopian law.',
      },
    ],
    previewTabs: [
      {
        id: 'cassation',
        label: 'Cassation & Semantic Search',
        modeDescriptor: 'Semantic Retrieval',
        queryExample:
          'Search legal concepts across Proclamations, Codes & Federal Supreme Court Cassation decisions...',
        amharicContext: 'የፌዴራል ጠቅላይ ፍርድ ቤት ሰበር ሰሚ ችሎት ውሳኔዎች እና አዋጆች ፍለጋ',
        summary:
          'Concept-aware legal search connecting statutory articles with relevant cassation interpretations in both Amharic and English.',
        structuredOutput: [
          {
            label: 'Primary Corpus',
            value: 'Proclamations, Codes & Cassation Volumes',
          },
          {
            label: 'Search Mode',
            value: 'Semantic Concept & Citation Lookup',
          },
          {
            label: 'Language Support',
            value: 'Amharic (አማርኛ) & English Workflows',
          },
        ],
      },
      {
        id: 'assistant',
        label: 'AI Legal Assistant & Analysis',
        modeDescriptor: 'Intelligent Workflow',
        queryExample:
          'Analyze uploaded legal text, identify referenced provisions, and organize research notes...',
        amharicContext: 'በሰው ሰራሽ አስተውሎት (AI) የታገዘ የህግ ጥናት እና የሰነድ ትንተና',
        summary:
          'Assists students and practitioners in synthesizing complex legal materials, inspecting documents, and structuring legal research.',
        structuredOutput: [
          {
            label: 'Capability',
            value: 'Document Analysis & Research Synthesis',
          },
          {
            label: 'Grounding',
            value: 'Focused on Ethiopian Legal Context',
          },
          {
            label: 'Output Format',
            value: 'Structured Summaries & Source References',
          },
        ],
      },
      {
        id: 'workspace',
        label: 'Professional Workspace & Directory',
        modeDescriptor: 'Unified Ecosystem',
        queryExample:
          'Manage legal research projects, organize saved authorities, and explore legal services...',
        amharicContext: 'የህግ ባለሙያዎች የስራ ቦታ እና የህግ አገልግሎት ማዕከል',
        summary:
          'Combines a dedicated workspace for legal professionals with lawyer discovery and legal service accessibility.',
        structuredOutput: [
          {
            label: 'Workspace',
            value: 'Saved Authorities, Case Notes & Drafting Tools',
          },
          {
            label: 'Discovery',
            value: 'Lawyer Directory & Legal Services Connect',
          },
          {
            label: 'Access',
            value: 'Web Platform (yzlex.com)',
          },
        ],
      },
    ],
    tags: [
      'Ethiopian LegalTech',
      'Artificial Intelligence',
      'Semantic Legal Search',
      'Cassation Research',
      'Amharic & English',
      'Document Analysis',
      'Web Platform',
    ],
  },
];
