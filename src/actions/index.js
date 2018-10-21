export const SELECT_PROJECT = 'select_project';
export const SET_SECTION_TO_DETAIL = 'set_section_to_detail';


export function selectProject(project) {
  return {
    type: SELECT_PROJECT,
    payload: project
  }
}

export function setSectionToDetail(section) {
  return {
    type: SET_SECTION_TO_DETAIL,
    payload: section
  }
}
