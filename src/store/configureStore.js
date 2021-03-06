import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import usersReducer from './reducers/usersReducer';
import reportsReducer from './reducers/reportsReducer';
import staffReducer from './reducers/staffReducer';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  reports: reportsReducer,
  staff: staffReducer,
  router: connectRouter(history),
});

const middleware = [thunkMiddleware, routerMiddleware(history)];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveToLocalStorage({
    users: {
      user: store.getState().users.user,
    },
  });
});

export default store;
