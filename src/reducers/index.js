import { combineReducers } from 'redux';
import projectsReducer from './reducer_projects';
import projectDetailReducer from './reducer_projects';


const rootReducer = combineReducers({
  projects: projectsReducer,
  selected: projectDetailReducer
});

export default rootReducer;
