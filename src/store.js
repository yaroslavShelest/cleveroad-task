import {
     createStore,
     applyMiddleware,
     compose
} from 'redux';
import thunkMiddlewaer from 'redux-thunk';


import rootReducer from './reducers/main';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddlewaer)));


export default store;