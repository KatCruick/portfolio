import { getCollection } from 'astro:content';

/**
 * https://cassidysmith.dev/posts/modify-astro-slot-children
 */
export const getProjectCollection = async () => {
  const projects = await getCollection('projects');

  /**
   * Sort projects that start with underscore last, else sort alphabetically
   */
  projects.sort((a, b) => {
    const aStartsWithUnderscore = a.id.startsWith('_');
    const bStartsWithUnderscore = b.id.startsWith('_');

    if (aStartsWithUnderscore && !bStartsWithUnderscore) {
      return 1;
    }

    if (!aStartsWithUnderscore && bStartsWithUnderscore) {
      return -1;
    }

    return a.id.localeCompare(b.id);
  });

  return projects;
};
