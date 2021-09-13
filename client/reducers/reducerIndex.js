 import { combineReducers } from 'redux';

 // import all reducers here
 import interviewReducer from './interviewReducer';
 
 
 // combine reducers
 const reducers = combineReducers({
   // if we had other reducers, they would go here
   interviews: interviewReducer,
 });
 
 // make the combined reducers available for import
 export default reducers;
 
 