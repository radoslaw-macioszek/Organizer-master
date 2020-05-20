import { combineReducers } from 'redux';
import booksReducer from './books';
import natReducer from './NATitems';
import moviesReducer from './movies';
import articlesReducer from './articles';

const reducers = {
  booksReducer,
  natReducer,
  moviesReducer,
  articlesReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
