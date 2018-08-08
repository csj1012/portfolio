import { combineReducers } from 'redux';
import projectsReducer from './reducer_projects';

const rootReducer = combineReducers({
  projects: projectsReducer
});

export default rootReducer;
