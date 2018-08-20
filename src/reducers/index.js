import { combineReducers } from 'redux';
import projectsReducer from './reducer_projects';
import selectedProject from './reducer_projects';


const rootReducer = combineReducers({
  projects: projectsReducer,
  selected: selectedProject
});

export default rootReducer;
