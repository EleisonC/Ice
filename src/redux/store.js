import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducers';

const configureStore = () => {
  const middleware = [logger, thunk];
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
  return store;
};

export default configureStore;
