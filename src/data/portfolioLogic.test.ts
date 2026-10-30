import test from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveInitialTheme,
  getNextTheme,
  filterInsightsByTopic,
  selectWorkspacePreviewTab,
  getActiveSocialDirectory,
} from './portfolioLogic';
import { profileData } from './profile';
import { featuredProjects } from './projects';

test('theme resolution defaults to dark and toggles between dark and light', () => {
  assert.equal(resolveInitialTheme(null), 'dark');
  assert.equal(resolveInitialTheme('invalid'), 'dark');
  assert.equal(resolveInitialTheme('light'), 'light');
  assert.equal(getNextTheme('dark'), 'light');
  assert.equal(getNextTheme('light'), 'dark');
});

test('insights filter returns all or matching verified LinkedIn posts', () => {
  const all = filterInsightsByTopic('All');
  assert.equal(all.length, 2);

  const yzlexPosts = filterInsightsByTopic('Building YZlex');
  assert.equal(yzlexPosts.length, 1);
  assert.equal(yzlexPosts[0].id, 'linkedin-introducing-yzlex');

  const semanticPosts = filterInsightsByTopic('Law & Technology');
  assert.equal(semanticPosts.length, 1);
  assert.equal(semanticPosts[0].id, 'linkedin-semantic-legal-search');
});

test('workspace preview tab selector finds requested tab or falls back to first tab', () => {
  const assistantTab = selectWorkspacePreviewTab('assistant');
  assert.equal(assistantTab.id, 'assistant');
  assert.equal(assistantTab.modeDescriptor, 'Intelligent Workflow');

  const fallbackTab = selectWorkspacePreviewTab('non-existent');
  assert.equal(fallbackTab.id, 'cassation');
});

test('social directory only exposes verified enabled links and hides unconfigured accounts', () => {
  const active = getActiveSocialDirectory();
  assert.equal(active.length, 5);
  assert.ok(active.every((item) => item.enabled && item.url.length > 0));
  assert.ok(!active.some((item) => item.id === 'x' || item.id === 'youtube'));
});

test('central profile and flagship project data match verified requirements', () => {
  assert.equal(profileData.name, 'Natinael Yimer');
  assert.equal(profileData.email, 'admin@yzlex.com');
  assert.equal(profileData.avatarUrl, null);
  assert.equal(featuredProjects[0].name, 'YZlex');
  assert.equal(featuredProjects[0].capabilities.length, 8);
  assert.equal(featuredProjects[0].caseStudy.length, 5);
});
