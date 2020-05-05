import { combineReducers } from 'redux';
import booksReducer from './books';
import natReducer from './NATitems';
import moviesReducer from './movies';

const reducers = {
  booksReducer,
  natReducer,
  moviesReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
