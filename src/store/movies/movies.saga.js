import axios from 'axios';
import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  LOAD_MOVIES,
  loadMoviesSuccess,
  loadMoviesFailed,
  MOVIE_DETAIL,
  loadMovieDetailSuccess,
} from './movies.reducer';

function* loadMovies(action) {
  const { term, type } = action.payload;

  const response = yield all([
    call(axios.get, `https://api.themoviedb.org/3/search/${type}`, {
      params: {
        api_key: '20a84d44425a1770674ac45f99ccc0f4',
        query: `${term}`,
      },
    }),
    call(axios.get, 'https://api.themoviedb.org/3/movie/top_rated', {
      params: {
        api_key: '20a84d44425a1770674ac45f99ccc0f4',
      },
    }),
    call(axios.get, 'https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: '20a84d44425a1770674ac45f99ccc0f4',
      },
    }),
    call(axios.get, 'https://api.themoviedb.org/3/trending/movie/week', {
      params: {
        api_key: '20a84d44425a1770674ac45f99ccc0f4',
      },
    }),
    call(axios.get, 'https://api.themoviedb.org/3/trending/tv/week', {
      params: {
        api_key: '20a84d44425a1770674ac45f99ccc0f4',
      },
    }),
    call(axios.get, 'https://api.themoviedb.org/3/tv/top_rated', {
      params: {
        api_key: '20a84d44425a1770674ac45f99ccc0f4',
      },
    }),
    call(axios.get, 'https://api.themoviedb.org/3/tv/popular', {
      params: {
        api_key: '20a84d44425a1770674ac45f99ccc0f4',
      },
    }),
  ]);

  if (
    response[0].status === 200 &&
    response[1].status === 200 &&
    response[2].status === 200 &&
    response[3].status === 200 &&
    response[4].status === 200 &&
    response[5].status === 200 &&
    response[6].status === 200
  ) {
    yield put(
      loadMoviesSuccess(
        response[0].data.results,
        response[1].data.results,
        response[2].data.results,
        response[3].data.results,
        response[4].data.results,
        response[5].data.results,
        response[6].data.results,
      ),
    );
    return;
  }
  yield put(loadMoviesFailed());
}

function* loadDetail(action) {
  const { id, type } = action.payload;

  const response = yield call(
    axios.get,
    `https://api.themoviedb.org/3/${type}/${id === 668203 ? 80167 : id}`,
    {
      params: {
        api_key: '20a84d44425a1770674ac45f99ccc0f4',
      },
    },
  );

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
