import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_ARTICLES, loadArticlesSuccess, loadArticlesFailed } from './articles.reducer';

function* loadArticles(action) {
  const searchResult = action.payload;
  const response = yield call(axios.get, 'https://newsapi.org/v2/everything', {
    params: {
      q: `${searchResult}`,
      apiKey: '831ca311c2d945ea8219a6a7abc67f18',
    },
  });

  console.log(response);
  if (response.status === 200) {
    yield put(loadArticlesSuccess(response.data.articles));
    return;
  }
  yield put(loadArticlesFailed());
}

export default function* articlesSaga() {
  yield takeLatest(LOAD_ARTICLES, loadArticles);
}
