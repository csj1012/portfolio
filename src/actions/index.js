export const SELECT_PROJECT = 'select_project';

export function selectProject(project) {

  return {
    type: SELECT_PROJECT,
    payload: project
  }
}
