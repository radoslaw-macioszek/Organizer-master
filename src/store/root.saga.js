import { fork } from 'redux-saga/effects';
import booksSaga from './books/books.saga';
import moviesSaga from './movies/movies.saga';
import articlesSaga from './articles/articles.saga';

export default function* rootSaga() {
  yield fork(booksSaga);
  yield fork(moviesSaga);
  yield fork(articlesSaga);
}
