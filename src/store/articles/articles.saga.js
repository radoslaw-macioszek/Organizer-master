import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_ARTICLES, loadArticlesSuccess, loadArticlesFailed } from './articles.reducer';

function* loadArticles(action) {
  const searchResult = action.payload;
  const response = yield call(axios.get, 'https://newsapi.org/v2/everything', {
    params: {
      apiKey: 'eabc157f46174c408b3a72c93381d0c1',
      q: `${searchResult}`,
    },
  });

  if (response.status === 200) {
    yield put(loadArticlesSuccess(response.data.articles));
    return;
  }
  yield put(loadArticlesFailed());
}

export default function* articlesSaga() {
  yield takeLatest(LOAD_ARTICLES, loadArticles);
}
