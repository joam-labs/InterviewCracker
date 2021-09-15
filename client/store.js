 import { createStore } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import reducers from './reducers/reducerIndex';
 
 // we are adding composeWithDevTools here to get easy access to the Redux dev tools
 const store = createStore(
   reducers,
   composeWithDevTools()
 );
 
 export default store;