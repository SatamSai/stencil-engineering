import fs from 'fs';
import path from 'path';
import rawProjects from '@/data/projects.json';

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

export type Project = {
  id: string;
  title: string;
  natureOfWork: string;
  size: string;
  location: string;
  type: string;
  featured?: boolean;
  folder: string;
  images: string[];
};

export function getProjectsWithImages(): Project[] {
  const baseDir = path.join(process.cwd(), 'public', 'All-Site-Pics');

  return rawProjects.map((project) => {
    const folderPath = path.join(baseDir, project.folder);
    let images: string[] = [];

    try {
      images = fs
        .readdirSync(folderPath)
        .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
        .sort()
        .map((f) => `/All-Site-Pics/${project.folder}/${f}`);
    } catch {
      // folder missing — gracefully fall back to empty
    }

    return { ...project, images };
  });
}
