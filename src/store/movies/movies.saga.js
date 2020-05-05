import axios from 'axios';
import { takeLatest, put, call, select, all } from 'redux-saga/effects';
import {
  LOAD_MOVIES,
  loadMoviesSuccess,
  loadMoviesFailed,
  MOVIE_DETAIL,
  loadMovieDetailSuccess,
} from './movies.reducer';

function* loadMovies(action) {
  const searchMoviesResult = action.payload;
  const response = yield all([
    call(axios.get, 'https://api.themoviedb.org/3/movie/top_rated', {
      params: {
        api_key: '20a84d44425a1770674ac45f99ccc0f4',
        //   q: `${searchResult}`,
        // printType: all,
        // pagination
      },
    }),
    call(axios.get, 'https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: '20a84d44425a1770674ac45f99ccc0f4',
        //   q: `${searchResult}`,
        // printType: all,
        // pagination
      },
    }),
  ]);

  if (response[0].status === 200 && response[1].status === 200) {
    yield put(loadMoviesSuccess(response[0].data.results, response[1].data.results));
    return;
  }
  yield put(loadMoviesFailed());
}

function* loadDetail(action) {
  const id = action.payload;
  const response = yield call(axios.get, `https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: '20a84d44425a1770674ac45f99ccc0f4',
    },
  });

  if (response.status === 200) {
    yield put(loadMovieDetailSuccess(response.data));
    return;
  }
  yield put(loadMoviesFailed());
}

export default function* moviesSaga() {
  yield takeLatest(LOAD_MOVIES, loadMovies);
  yield takeLatest(MOVIE_DETAIL, loadDetail);
}
