import { InsightPost, verifiedInsights } from './experience';
import { WorkspacePreviewTab, featuredProjects } from './projects';
import { SocialLinkItem, getEnabledSocialLinks, socialLinks } from './socialLinks';

export type PortfolioTheme = 'dark' | 'light';

export function resolveInitialTheme(savedValue: string | null | undefined): PortfolioTheme {
  if (savedValue === 'light' || savedValue === 'dark') {
    return savedValue;
  }
  return 'dark';
}

export function getNextTheme(current: PortfolioTheme): PortfolioTheme {
  return current === 'dark' ? 'light' : 'dark';
}

export function filterInsightsByTopic(
  topic: string,
  posts: InsightPost[] = verifiedInsights
): InsightPost[] {
  if (!topic || topic === 'All') {
    return posts;
  }
  return posts.filter(
    (post) => post.category === topic || post.tags.includes(topic)
  );
}

export function selectWorkspacePreviewTab(
  tabId: string,
  tabs: WorkspacePreviewTab[] = featuredProjects[0].previewTabs
): WorkspacePreviewTab {
  return tabs.find((tab) => tab.id === tabId) ?? tabs[0];
}

export function getActiveSocialDirectory(
  items: SocialLinkItem[] = socialLinks
): SocialLinkItem[] {
  return getEnabledSocialLinks(items);
}
