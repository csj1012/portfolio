// import ProjectsReducer from '../reducers/reducer_projects';


export const GET_PROJECT = 'get_project';


export default function getPost(id) {
  // Go to the reducer and get the right data from the object.
  console.log(id);
  // console.log(ProjectsReducer);

  // const project = ProjectsReducer.find(e => e.id === id);

  // console.log(project);


  // Return a type and a payload (latter containing the data we fetched).
  return {
    type: GET_PROJECT,
    payload: id
  }
}
