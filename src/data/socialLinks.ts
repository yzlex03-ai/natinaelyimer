export interface SocialLinkItem {
  id: string;
  label: string;
  handle: string;
  url: string;
  description: string;
  enabled: boolean;
  primary: boolean;
}

/**
 * Verified online profiles and links.
 * Additional social accounts remain disabled (`enabled: false`) until genuine URLs are provided.
 */
export const socialLinks: SocialLinkItem[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'Natinael Yimer',
    url: 'https://www.linkedin.com/in/natinael-yimer-121b81320/',
    description: 'Professional updates, LegalTech thoughts, and network.',
    enabled: true,
    primary: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: '@yzlex03-ai',
    url: 'https://github.com/yzlex03-ai',
    description: 'Code repositories, technical experiments, and builds.',
    enabled: true,
    primary: true,
  },
  {
    id: 'yzlex',
    label: 'YZlex Platform',
    handle: 'yzlex.com',
    url: 'https://yzlex.com/',
    description: 'AI-powered Ethiopian LegalTech platform.',
    enabled: true,
    primary: true,
  },
  {
    id: 'yzlex-about',
    label: 'About YZlex',
    handle: 'yzlex.com/about',
    url: 'https://yzlex.com/about',
    description: 'Mission, background, and vision behind YZlex.',
    enabled: true,
    primary: false,
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'admin@yzlex.com',
    url: 'mailto:admin@yzlex.com',
    description: 'Direct professional inquiries and collaborations.',
    enabled: true,
    primary: true,
  },
  // Configurable future social profiles — automatically hidden while `enabled: false` or `url: ''`
  {
    id: 'x',
    label: 'X (Twitter)',
    handle: '',
    url: '',
    description: 'Short-form thoughts and tech commentary.',
    enabled: false,
    primary: false,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    handle: '',
    url: '',
    description: 'Community channel.',
    enabled: false,
    primary: false,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '',
    url: '',
    description: 'Product demos and educational videos.',
    enabled: false,
    primary: false,
  },
];

export const getEnabledSocialLinks = (items: SocialLinkItem[] = socialLinks): SocialLinkItem[] =>
  items.filter((item) => item.enabled && item.url.trim().length > 0);
