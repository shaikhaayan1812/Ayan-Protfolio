export function getProjectCategory(project) {
  const technologies = project.tech.join(' ').toLowerCase();

  if (/three|webgl|game dev|3d physics|pbr/.test(technologies)) return 'Immersive';
  if (/media|audio|video bg|gallery|youtube|vimeo/.test(technologies)) return 'Media';
  if (/forms|tables|comparison|filters|pricing/.test(technologies)) return 'Product';
  return 'Web';
}

export function getProjectPath(project) {
  return `../../${project.folder}`;
}
