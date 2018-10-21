import { combineReducers } from 'redux';
import projectsReducer from './reducer_projects';
import selectedProject from './reducer_project-detail';


const rootReducer = combineReducers({
  projects: projectsReducer,
  selected: selectedProject
});

export default rootReducer;
