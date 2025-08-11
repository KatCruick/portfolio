import { getCollection, type CollectionEntry } from 'astro:content';

type ProjectMap = Record<string, CollectionEntry<'projects'>[]>;

export async function getProjects(): Promise<ProjectMap> {
  const projects = await getCollection('projects');

  const res = projects[0]?.filePath?.split('projects');

  console.log('Res:', res);

  const projectData = projects.reduce((acc, project) => {
    const fileParts = project?.filePath?.split('projects/');

    if (!fileParts || fileParts.length !== 2) {
      console.log('Invalid file path:', project.filePath);
      return acc;
    }

    const projectParts = fileParts[1].split('/');

    if (!projectParts || projectParts.length !== 2) {
      console.log('Invalid file path:', project.filePath);
      return acc;
    }

    const [projectName, section] = projectParts;

    if (!(projectName in acc)) {
      return {
        ...acc,
        [projectName]: [{ ...project, section }],
      };
    }

    return {
      ...acc,
      [projectName]: [...acc[projectName], { ...project, section }],
    };
  }, {} as ProjectMap);

  return projectData;
}
